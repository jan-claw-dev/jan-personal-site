# Jan’s Personal Portfolio Draft

This repo now hosts a brutalist-inspired academic portfolio with a left-hand sidebar, Open Library-powered cover art, and discrete sections for Bio, Research, Blog, Publications, CV, and Contact.

## Latest improvements inspired by top academic sites

1. **Sidebar navigation + underline focus** — inspired by award-winning sites that make switching between research, bio, and storytelling effortless; the selected section is underlined rather than highlighted to preserve the monochrome palette.
2. **Rich story + data sections** — the research section mirrors contest winners by calling out ongoing vs. planning work, while the blog and publications area emphasize storytelling, status, and clarity.
3. **CV timeline + contact card** — like the most memorable academic CVs, there’s a compressed timeline of milestones plus a dedicated contact card so collaborators can reach out without hunting for an email.
4. **Open Library covers** — book cards fetch real ISBN/ID covers, emulating the polished visual presentation seen on premium academic pages.

## Features

- **Reading carousel** with book-detail view, stats line, and autosaved cover art from Open Library (fallbacks provided if a cover is missing).
- **Multi-section content**: Reading, Bio, Research, Blog, Publications, CV, and Contact are toggled through the sidebar without reloading.
- **Publications grid** shows status badges and venues for each entry, echoing the transparency from contest-winning websites.
- **CV timeline + contact details** keep the career snapshot visible without cluttering the hero.
- **Minimalist brutalist styling** keeps the experience stark and modern, matching your home aesthetic.

## Running the draft

1. Open `index.html` in a browser or serve via `python -m http.server` in the repo root.
2. Use the sidebar to switch between sections; only one section is visible at a time.
3. Add new books to the carousel via the form; they appear at the top with a cover pulled from Open Library when available.
4. Update the `research`, `blog`, `publications`, and `timeline` arrays in `scripts/main.js` as you publish new work.

## Next steps

- Replace placeholder copy with real bio, research, and blog posts.
- Sync publications and CV entries with your actual CV or ORCID feed.
- Deploy to GitHub Pages or another static host when ready to share.
