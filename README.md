# Feni Live — Feni District News Portal

A responsive static frontend demo based on the supplied Feni Live logo and portal reference banner.

## Project files
- `index.html` — portal structure and sample stories
- `style.css` — branding, layout and responsive styles
- `script.js` — search, category filters, story details, ticker and reader news-tip form
- `assets/fenilive-logo.jpg` — supplied Feni Live logo
- `assets/fenilive-reference-banner.jpg` — supplied Feni Live promotional reference banner

## Run locally
Open `index.html` in a modern browser. Internet connection is used for Google Fonts and selected remote editorial images.

## Deploy to GitHub Pages
1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, `README.md` and the entire `assets` folder.
3. Go to Settings → Pages.
4. Choose Deploy from a branch → `main` → `/ (root)`, then Save.

## Verified news references
The sample headlines and summaries link to the original news publishers:
- Bangla Tribune, 12 Nov 2026 — Lalpole anti-narcotics operation
- Bangla Tribune, 11 Nov 2026 — Daganbhuiyan clash report
- Bangla Tribune, 2 Nov 2026 — Muhuri irrigation project travel feature
- Bangla Tribune, 27 Oct 2026 — Feni stop for Mohanagar Express
- Bangla Tribune, 1 Oct 2026 — Muhuri-Kahua flood-control project
- Bangla Tribune, 2 Nov 2026 — journalists' complaints during a media assignment

These are attributed sample summaries from external publishers, not claims that these are original Feni Live Facebook posts. Replace or supplement with newsroom-approved Feni Live content before production.

## Static frontend limitations
This demo does not include an admin CMS, database, journalist login, live publishing backend, or newsletter subscriber storage. The "খবর পাঠান" form opens the visitor's local email application with a prefilled message addressed to `fenilive@gmail.com`.
