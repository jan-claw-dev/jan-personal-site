# Jan’s Personal Portfolio Draft

This repo now hosts a brutalist-inspired PhD portfolio with a shelf-like reading carousel (inspired by [Adam Maj’s site](https://adammaj.com/reading/insanely-simple)), sections for bio/research/blog, and an automated cover lookup via Open Library.

## Latest improvements

- Rebuilt the vertical navigation onto a left sidebar, with the active section underlined (no highlight colors, per request) to keep the layout stark and modern.
- Added placeholder bio/research/blog sub-pages accessible via the nav, each with small panels/tags.
- Updated the carousel styling to emphasize covers, align with the brutalist aesthetic, and show a detail pane for the current book.
- `scripts/main.js` now maps titles to real Open Library cover URLs (with fallbacks) and automatically fetches them when a new entry is added.
- Documented usage + next steps in the README/TODO.

## Run the draft

1. Launch `index.html` directly or run `python -m http.server` in this directory.
2. Use the nav on the left to toggle between sections (Reading, Bio, Research, and Blog).
3. Add a new book in the "Add book" form; it will show up in the carousel with a cover image.
4. Update the `coverLookup` mapping in `scripts/main.js` with additional ISBNs if needed.

## TODO

- Continue refining copy for each section as you polish your CV/publications.
- Consider tying the carousel to your actual RSS/blog feed for the blog section.
- Deploy to GitHub Pages or a static host when you’re ready to share.
