// All site content lives here. Edit this file, refresh the page — nothing else to touch.
const DATA = {
  profile: {
    name: "Karen Van Audenhaege",
    title: "Director of Product Management",
    tagline:
      "Product leader with 10+ years in data platforms and a PhD in Biomedical Engineering. " +
      "I bring calm structure to ambiguous, high-scale problems, translating complexity into " +
      "clear priorities, measurable targets, and reliable delivery, while coaching PMs through " +
      "growth and performance.",
    location: "Cape Town, South Africa",
    availability: "EU time zone · remote · open to travel",
    status: "Open to work",
    photo: "images/photo.jpg", // TODO: add photo file; initials shown until then
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/karenvanaudenhaege/" },
    ],
    languages: ["English (expert)", "Dutch (native)", "French (elementary)"],
  },

  metrics: [
    { value: 10, suffix: "+", label: "years in product", sub: "data platforms & geospatial" },
    { value: 8, suffix: "", label: "product managers led", sub: "coached through growth & performance" },
    { value: 79, suffix: "%", label: "faster time-to-market", sub: "feature onboarding cut from 66 to 14 days" },
    { value: 34, suffix: "%", label: "cloud cost reduction per map layer", sub: "on the platform's largest cloud-cost contributor" },
    { value: 69, suffix: "%", label: "quality issues caught automatically", sub: "up from 24%, using machine learning" },
    { value: 28, suffix: "%", label: "higher editing efficiency", sub: "issue tracker, workflows & tooling" },
  ],

  filters: [
    { id: "all", label: "All" },
    { id: "platform", label: "Platform" },
    { id: "ai", label: "AI & ML" },
    { id: "delivery", label: "Delivery & Ops" },
    { id: "leadership", label: "Leadership" },
    { id: "ecosystem", label: "Ecosystem" },
  ],

  experience: [
    {
      company: "TomTom — Maps Platform & Operations",
      location: "Amsterdam (remote)",
      period: "2018 – present",
      progression: [
        "Product Owner · 2018–2020",
        "Product Manager · 2020–2021",
        "Senior Product Manager · 2021–2022",
        "Group Product Manager · 2022–2024",
        "Director of Product Management · 2024–present",
      ],
      summary:
        "Leading Product Management for TomTom's map production platform and Operations. The platform " +
        "organization is a 100+ engineer product and engineering group building core data pipelines, " +
        "developer tooling, ops tooling and release capabilities; the Operations organization is a " +
        "several-hundred-person group of operations managers, quality managers and expert editors " +
        "responsible for large-scale editing, workflow optimization and feedback resolution.",
      highlights: [
        { text: "Defined the product strategy for a new map production platform and led it from zero to production — now releasing 800 GB of map data weekly.", tags: ["platform", "delivery"] },
        { text: "Built a high-performing team of 8 Product Managers, driving engagement through a lead-by-example approach and positioning PMs as cross-org domain ambassadors.", tags: ["leadership"] },
        { text: "Designed internal AI agents to scale a distributed product team through standardized product operations: discovery, kick-offs, PRDs, OKRs, business reviews and launch go/no-go's.", tags: ["ai", "leadership"] },
        { text: "Improved developer experience with AI-assisted support and MCP (Model Context Protocol) integrations across the platform — fewer support requests and context-aware assistance in local IDEs.", tags: ["ai", "platform"] },
        { text: "Developed a scalable feedback-resolution model in partnership with local OpenStreetMap communities, enabling rapid triage and fix rates for user-reported map issues.", tags: ["ecosystem", "delivery"] },
        { text: "Cut time-to-market for onboarding new map features and attributes from 66 to 14 days by streamlining cross-team release orchestration.", tags: ["delivery", "platform"] },
        { text: "Hardened the weekly release process so licensing and compliance checks almost never block a release — from weekly blockers to fewer than one per year.", tags: ["delivery"] },
        { text: "Reduced per-layer processing cost by 34% on the platform's largest cloud-cost contributor.", tags: ["platform", "delivery"] },
        { text: "Set and delivered platform throughput and autoscaling targets aligned to company map-freshness goals.", tags: ["platform"] },
        { text: "Improved automated detection of map quality issues from 24% to 69% with machine-learning models, balancing map freshness against quality.", tags: ["ai"] },
        { text: "Delivered Bring-Your-Own-Data integration for a major automotive customer and improved platform interoperability for government and defense with an on-premises solution.", tags: ["ecosystem", "platform"] },
        { text: "Improved map-editing efficiency by 28% via an issue tracker, workflows and editing-service improvements; cut the rework rate on lane-geometry edits from over 50% to 13%.", tags: ["delivery"] },
      ],
    },
    {
      company: "Flexphon — Founder & Product Lead",
      location: "Belgium / Bulgaria (hybrid)",
      period: "2015 – 2018",
      progression: [],
      summary: "Founded and led a cloud telephony SaaS startup.",
      highlights: [
        { text: "Wrote the business plan, product specs and investor pitches.", tags: ["leadership"] },
        { text: "Coordinated 7 engineers across three vendors (web, mobile, backend) to deliver multi-platform apps and backend services.", tags: ["delivery", "leadership"] },
      ],
    },
    {
      company: "Ghent University (MEDISIP) — PhD Researcher, Medical Imaging",
      location: "Ghent, Belgium",
      period: "2010 – 2015",
      progression: [],
      summary: "Researched collimator design for brain SPECT imaging.",
      highlights: [
        { text: "Authored peer-reviewed publications and obtained patent EP 2707750 A1.", tags: ["platform"] },
        { text: "Planned and executed lab experiments (including radioactive-material logistics); developed GPU-based simulation code.", tags: ["ai"] },
      ],
    },
    {
      company: "Luciad — Software Consultant Engineer, Geo-visualization",
      location: "Leuven, Belgium",
      period: "2008 – 2010",
      progression: [],
      summary: "High-performance geospatial visualization consulting.",
      highlights: [
        { text: "Delivered on-site support and high-performance solutions for clients such as Boeing, NATO and Belgocontrol.", tags: ["ecosystem"] },
      ],
    },
  ],

  skills: [
    {
      group: "Product",
      items: ["Product discovery", "Technical product management", "OKRs", "Data-driven decision-making", "Roadmaps & long-term strategy", "Go-to-market", "KPI design", "Risk & trade-offs", "Program orchestration"],
    },
    {
      group: "Platform",
      items: ["Data pipelines", "Release management", "Feedback mechanisms", "Data quality & integrity", "Observability"],
    },
    {
      group: "Technical",
      items: ["AI/ML for quality", "GPU / parallel processing", "APIs & SDKs", "Analytics"],
    },
    {
      group: "Leadership",
      items: ["Executive stakeholder management", "Change management", "Coaching a team of 8 PMs", "Thought leadership", "Cross-functional alignment"],
    },
  ],

  credentials: [
    { name: "Ph.D., Biomedical Engineering", issuer: "Ghent University", year: "2010–2015", url: "" },
    { name: "M.Sc., Electrotechnical Engineering (Multimedia & Signal Processing), Magna Cum Laude", issuer: "KU Leuven", year: "2003–2008", url: "" },
    { name: "Accelerate Leadership Program", issuer: "Cambridge Judge Business School", year: "2025", url: "" },
    { name: "Patent EP 2707750 A1 — collimator design for brain SPECT", issuer: "European Patent Office", year: "2014", url: "https://patents.google.com/patent/EP2707750A1" },
  ],

  speaking: [
    "Keynote speaker at TomTom's company-wide 3-year strategy event (2025)",
    "Speaker, Uplift 2024 — launch of TomTom's new map, Orbis",
    "Speaker at 3 IEEE conferences (medical imaging / SPECT)",
    "Author of peer-reviewed publications in medical imaging",
  ],

  builds: [
    {
      name: "WhaleMap",
      emoji: "🐋",
      description: "Interactive Leaflet map of the last month of whale sightings worldwide, refreshed daily from open GBIF biodiversity data by a scheduled serverless function.",
      why: "My first experiment with Claude Code — nothing more, nothing less.",
      liveUrl: "https://whalemap.world/",
      repoUrl: "", // TODO: add GitHub URL once repo moved to personal account
      image: "images/whalemap.png", // TODO: add screenshot
    },
    {
      name: "Word Practice",
      emoji: "✨",
      description: "A bilingual (English & Afrikaans) spelling-practice web app for kids, with emoji hints and automatic text-to-speech via a serverless worker.",
      why: "Built with my son to make his daily spelling practice fun — and to teach him the basics of product management along the way: writing requirements, formulating them unambiguously, testing, user experience, and how to prompt.",
      liveUrl: "https://karenvanaudenhaege-tomtom.github.io/homework/",
      repoUrl: "", // TODO: add GitHub URL once repo moved to personal account
      image: "images/wordpractice.png", // TODO: add screenshot
    },
  ],
};
