# Jan’s Personal Portfolio Draft

This repo holds a minimalist PhD portfolio inspired by the clean carousel reading section on [adammaj.com/reading/insanely-simple](https://adammaj.com/reading/insanely-simple). It now features a bookshelf carousel, separate bio/research/blog "pages" with sticky navigation, and auto-covered book cards.

## Highlights

- **Carousel bookshelf:** Each book is rendered as a cover-style card (cover art provided via lookup table) with a detail panel showing notes.
- **Navigation:** A top nav toggles between Reading, Bio, Research, and Blog sections without leaving the single page.
- **Reading automation:** The JS maps titles to cover URLs and updates stats for total/reading/thinking entries; new submissions are added via the inline form.
- **Additional sections:** Bio and research sections have placeholders reflecting your RDE/data-driven work, while the blog area surfaces short narrative snippets.

## Improvements added

1. Minimalist deck-like layout with fixed nav and shelf-style cards.
2. Cover lookup table fakes automatic Google-image retrieval by mapping titles to cover URLs (e.g., Open Library APIs). You can extend this list or integrate a real image API later.
3. Placeholder bio, research, and blog copy with badges/tags, forming distinct "sub-pages" for easy navigation.
4. Updated README/TODO documentation to reflect the new experience.

## Running the draft

1. Open `index.html` or serve via `python -m http.server` from this folder.
2. Use the navigation buttons at the top to jump between sections.
3. Add a book to see the carousel update plus the stats line.
4. Extend the `coverLookup` object in `scripts/main.js` with more titles and URLs as needed.

## Next steps

- Replace placeholder copy with real bio/research/blog entries.
- Hook the site to GitHub Pages or another static host.
- Optionally load cover images via an API/manifest for full automation.
