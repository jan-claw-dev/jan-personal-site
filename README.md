# Jan’s Personal Site Draft

This repository now contains a static PhD portfolio draft inspired by the minimalist carousel layout on [adammaj.com/reading/insanely-simple](https://adammaj.com/reading/insanely-simple). The site features a hero, a book carousel (with bookshelf styling), and placeholder sections for bio/research/blog.

## Layout & sections

- **Carousel bookshelf:** Book cards render as vertical covers with cover-color gradients, mimicking a shelf. Clicking a cover displays the front-page summary below.
- **Bio / research / blog panels:** Quick blurbs describe your PhD focus, current projects, and writing habit, echoing the storytelling style of the reference site.
- **Add book form:** Simple form populates new readings at the top with color-coded covers.

## Project status

- HTML/CSS/JS triple set up with responsive design and interactive carousel.
- Carousel data is stored in `scripts/main.js`; adding entries updates the DOM and preserves state during the session.
- Placeholder content draws on the RDE/data-driven background mentioned earlier.

## User manual

1. Open `index.html` in a browser or run `python -m http.server` from the repo root.
2. Use the book form to add curated readings; new cards appear immediately on the shelf and show notes.
3. Adjust `research` / `blogPosts` arrays in `scripts/main.js` to keep the context fresh.

## Next steps

- Expand the bio/research/blog copy with real experiences, publications, and updates.
- Add navigation anchors, contact info, and SEO metadata for deployment.
- Integrate this static draft with a static site generator or GitHub Pages when ready.
