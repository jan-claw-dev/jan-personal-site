# Personal Website Draft

This repo contains a small static site sketch for Jan’s PhD personal page, inspired by the minimalist reading section on [adammaj.com/reading/insanely-simple](https://adammaj.com/reading/insanely-simple). It offers a hero intro, a grid of short book reflections, and a straightforward form for adding new entries.

## Status & progress

1. **Scaffold & layout (done)** — created the project directory, HTML layout with hero + cards, and a placeholder form. Updated TODO.md to track steps.
2. **Styling & responsive grid (done)** — wrote `styles.css` to mimic the clean, card-heavy look with bold typography and dark gradients.
3. **Dynamic reading list (done)** — `scripts/main.js` renders reading cards and lets Jan add entries via the inline form.
4. **Documentation (in progress)** — this README covers progress and user instructions; further iterations can detail SEO, deployment, or additional sections (bio, publications).

## Features

- Static `index.html` plus `styles.css` provide the main hero and grid.
- `scripts/main.js` holds the reading-data array, renders cards, and handles the "Add a book" form. Newly added entries appear at the top.
- Cards include author, year, status badge, and a short note, loosely mirroring the simplicity of Adam Maj’s layout.
- The form collects title/author/notes/year/status, resets after submission, and keeps entries in session memory.

## User manual

1. **Viewing** – simply open `index.html` in a browser (or run `python -m http.server` inside the folder and browse to `http://localhost:8000` for a mini dev server).
2. **Adding new readings** – fill the form at the bottom of the page. Provide the title, author, notes/impressions, publication year, and the reading status (Thinking about / Reading / Finished). Submission automatically prepends the entry to the grid.
3. **Customizing entries** – edit the `entries` array inside `scripts/main.js` to pre-populate additional books or adjust the sample list.
4. **Styling tweaks** – `styles.css` handles typography, cards, and the hero gradient; feel free to adapt colors or animation for the rest of the site.

## Next steps

- Add navigation and additional sections (bio, research, contact) once the reading layout is final.
- Integrate static assets (headshots, PDF downloads, ORCID badge) as needed.
- Deploy via GitHub Pages or similar once the other site sections are ready.

## TODO handling

Follow `TODO.md` as the iterative checklist; once every box is ticked, consider deploying the site or expanding to a multi-page structure.
