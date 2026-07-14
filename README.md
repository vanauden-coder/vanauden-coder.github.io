# Karen Van Audenhaege — portfolio site

Single-page portfolio dashboard. Plain HTML/CSS/JS, no build step, no dependencies.

## Editing content

Everything shown on the page lives in **`data.js`** — roles, metrics, skills,
credentials, builds, contact links. Edit that file, refresh the browser, done.
`index.html`, `styles.css` and `app.js` only need touching for layout or style
changes.

## Previewing locally

Open `index.html` in any browser. No server needed.

## Going live (one-time setup)

1. Create a **personal** GitHub account (the username becomes the public URL:
   `https://<username>.github.io`).
2. Create a new **public** repository named exactly `<username>.github.io`.
3. Push this folder's contents to the repo's `main` branch.
4. On github.com: repo → Settings → Pages → confirm source is
   `main` branch, `/ (root)`. The site is live at `https://<username>.github.io`
   within a minute or two.

Every later `git push` updates the live site automatically.

## Before going live — checklist

- [ ] Add `images/photo.jpg` (square headshot works best)
- [ ] Add `images/whalemap.png` and `images/wordpractice.png` screenshots
- [ ] Fill in `liveUrl` / `repoUrl` for both builds in `data.js`
- [ ] Review all content one last time for anything company-internal
- [ ] Check the page on a phone
