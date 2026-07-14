/* Renders the page from DATA (data.js). No dependencies. */

const $ = (id) => document.getElementById(id);

/* ---------- Sidebar ---------- */

function renderSidebar() {
  const p = DATA.profile;
  $("name").textContent = p.name;
  $("title").textContent = p.title;
  $("location").textContent = p.location;
  $("availability").textContent = p.availability;

  if (p.status) {
    const badge = document.createElement("div");
    badge.className = "status-badge";
    badge.innerHTML = `<span class="dot"></span>${p.status}`;
    $("title").insertAdjacentElement("afterend", badge);
  }

  const avatar = $("avatar");
  const initials = p.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  avatar.textContent = initials;
  if (p.photo) {
    const img = new Image();
    img.onload = () => {
      avatar.style.backgroundImage = `url('${p.photo}')`;
      avatar.textContent = "";
    };
    img.src = p.photo;
  }

  $("contact-links").innerHTML = p.links
    .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
    .join("");

  $("languages").innerHTML = p.languages.map((l) => `<li>${l}</li>`).join("");
}

/* ---------- Overview ---------- */

function renderOverview() {
  $("tagline").textContent = DATA.profile.tagline;
  $("metrics").innerHTML = DATA.metrics
    .map(
      (m) => `
      <div class="metric">
        <div class="num" data-value="${m.value}" data-decimals="${m.decimals || 0}"><span class="counter">0</span><span class="suffix">${m.suffix}</span></div>
        <div class="metric-label">${m.label}</div>
        <div class="metric-sub">${m.sub}</div>
      </div>`
    )
    .join("");
  observeCounters();
}

function observeCounters() {
  const animate = (el) => {
    const target = Number(el.dataset.value);
    const decimals = Number(el.dataset.decimals);
    const counter = el.querySelector(".counter");
    const duration = 900;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      counter.textContent = (target * eased).toFixed(decimals);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const seen = new Set();
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !seen.has(e.target)) {
          seen.add(e.target);
          animate(e.target);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  document.querySelectorAll(".num").forEach((el) => io.observe(el));
}

/* ---------- Experience ---------- */

const state = {
  filter: "all",
  expanded: new Set(), // role indices the user expanded
};

const COLLAPSED_COUNT = 3;

function renderFilters() {
  $("filters").innerHTML = DATA.filters
    .map(
      (f) =>
        `<button class="chip ${f.id === state.filter ? "active" : ""}" data-filter="${f.id}">${f.label}</button>`
    )
    .join("");
  document.querySelectorAll(".chip").forEach((chip) =>
    chip.addEventListener("click", () => {
      state.filter = chip.dataset.filter;
      renderFilters();
      renderExperience();
    })
  );
}

function renderExperience() {
  const list = $("experience-list");
  list.innerHTML = DATA.experience
    .map((role, i) => {
      const matching =
        state.filter === "all"
          ? role.highlights
          : role.highlights.filter((h) => h.tags.includes(state.filter));

      if (matching.length === 0) return ""; // role has nothing under this filter

      const isFiltered = state.filter !== "all";
      const isExpanded = isFiltered || state.expanded.has(i);
      const shown = isExpanded ? matching : matching.slice(0, COLLAPSED_COUNT);
      const hiddenCount = matching.length - shown.length;

      return `
      <article class="role">
        <div class="role-head">
          <h3>${role.company}</h3>
          <div class="role-meta">${role.location} · ${role.period}</div>
        </div>
        ${role.progression.length ? `<div class="progression">${role.progression.map((s) => `<span>${s}</span>`).join("")}</div>` : ""}
        ${!isFiltered && role.summary ? `<p class="role-summary">${role.summary}</p>` : ""}
        <ul>${shown.map((h) => `<li>${h.text}</li>`).join("")}</ul>
        ${hiddenCount > 0 ? `<button class="toggle-more" data-role="${i}">Show ${hiddenCount} more</button>` : ""}
        ${!isFiltered && state.expanded.has(i) && matching.length > COLLAPSED_COUNT ? `<button class="toggle-more" data-role="${i}">Show less</button>` : ""}
      </article>`;
    })
    .join("");

  list.querySelectorAll(".toggle-more").forEach((btn) =>
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.role);
      state.expanded.has(i) ? state.expanded.delete(i) : state.expanded.add(i);
      renderExperience();
    })
  );
}

/* ---------- Skills ---------- */

function renderSkills() {
  $("skills-list").innerHTML = DATA.skills
    .map(
      (g) => `
      <div class="skill-group">
        <h3>${g.group}</h3>
        <div class="skill-tags">${g.items.map((s) => `<span>${s}</span>`).join("")}</div>
      </div>`
    )
    .join("");
}

/* ---------- Credentials ---------- */

function renderCredentials() {
  $("credentials-list").innerHTML = DATA.credentials
    .map(
      (c) => `
      <div class="credential">
        <div class="cred-name">${c.name}</div>
        <div class="cred-meta">${c.issuer} · ${c.year}${c.url ? ` · <a href="${c.url}" target="_blank" rel="noopener">view</a>` : ""}</div>
      </div>`
    )
    .join("");

  $("speaking-list").innerHTML = DATA.speaking.map((s) => `<li>${s}</li>`).join("");
}

/* ---------- Builds ---------- */

function renderBuilds() {
  $("builds-list").innerHTML = DATA.builds
    .map(
      (b, i) => `
      <div class="build ${b.liveUrl ? "clickable" : ""}" data-build="${i}">
        <div class="build-image" data-image="${b.image || ""}">${b.emoji}</div>
        <div class="build-body">
          <h3>${b.name}</h3>
          <p class="build-desc">${b.description}</p>
          <p class="build-why">${b.why}</p>
          <div class="build-links">
            ${b.liveUrl ? `<a class="launch-btn" href="${b.liveUrl}" target="_blank" rel="noopener">Launch app →</a>` : `<span class="launch-pending">Live link coming soon</span>`}
            ${b.repoUrl ? `<a href="${b.repoUrl}" target="_blank" rel="noopener">Source</a>` : ""}
          </div>
        </div>
      </div>`
    )
    .join("");

  // The whole card opens the live app; inner links keep their own behavior
  document.querySelectorAll(".build.clickable").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      window.open(DATA.builds[Number(card.dataset.build)].liveUrl, "_blank", "noopener");
    });
  });

  // Swap emoji placeholder for a screenshot when the image file exists
  document.querySelectorAll(".build-image").forEach((el) => {
    const src = el.dataset.image;
    if (!src) return;
    const img = new Image();
    img.onload = () => {
      el.style.backgroundImage = `url('${src}')`;
      el.textContent = "";
    };
    img.src = src;
  });
}

/* ---------- Footer & nav highlight ---------- */

function renderFooter() {
  $("footer").innerHTML =
    `© ${new Date().getFullYear()} ${DATA.profile.name} · hand-built with plain HTML, CSS and JavaScript — no frameworks, no trackers.`;
}

function observeNav() {
  const links = document.querySelectorAll(".nav a");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`)
        );
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  document.querySelectorAll(".section").forEach((s) => io.observe(s));
}

/* ---------- Init ---------- */

renderSidebar();
renderOverview();
renderFilters();
renderExperience();
renderSkills();
renderCredentials();
renderBuilds();
renderFooter();
observeNav();
