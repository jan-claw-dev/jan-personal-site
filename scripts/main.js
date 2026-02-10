const bookCarousel = document.getElementById('book-carousel');
const detail = document.getElementById('book-detail');
const navButtons = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.section');
const form = document.getElementById('book-form');
const coverLookup = {
  'Insanely Simple': 'https://covers.openlibrary.org/b/isbn/9781591845119-L.jpg',
  'Data-Driven Science': 'https://covers.openlibrary.org/b/isbn/9780262537995-L.jpg',
  'Narrative Analytics': 'https://covers.openlibrary.org/b/isbn/9780190210424-L.jpg'
};

const entries = [
  { title: 'Insanely Simple', author: 'Ken Segall', notes: 'Simplicity is creative; teaches focus for RDE models.', year: 2012, status: 'Finished' },
  { title: 'Data-Driven Science', author: 'Carrie Treadway', notes: 'Inspired the DA-SHRED pipeline and latent alignment.', year: 2021, status: 'Reading' },
  { title: 'Narrative Analytics', author: 'Lina Santos', notes: 'Reminds me to craft research stories.', year: 2019, status: 'Thinking about' }
];

const research = [
  { title: 'Latent alignment for RDEs', summary: 'Building interpretable low/high fidelity fusion.', status: 'In progress' },
  { title: 'Brutalist data storytelling', summary: 'Minimal dashboards that explain lab notes and prototypes.', status: 'Planning' }
];

const blog = [
  { title: 'Shipping a PhD story', excerpt: 'Commit notes + analog drafts keep me grounded.', tags: ['process', 'writing'] },
  { title: 'Gating HF corrections', excerpt: 'Frequency-aware gates help me trust the residuals.', tags: ['model', 'DA-SHRED'] }
];

const publications = [
  { title: 'Latent frequency gates for rotating detonation control', venue: 'J. Combustion & Fluids (preprint)', year: 2025, status: 'In review' },
  { title: 'Narrative notes for data-driven experimentation', venue: 'Science Communication Quarterly', year: 2024, status: 'Published' },
  { title: 'SINDy-inspired PDE discovery in RDEs', venue: 'Chaos & Complexity Symposium', year: 2023, status: 'Conference' }
];

const timeline = [
  { period: '2023 — present', title: 'PhD Candidate', organization: 'RDE Lab, Somewhere University', description: 'Latent aligners, HF residual modeling, and interpretation workstreams.' },
  { period: '2021 — 2023', title: 'Research Engineer', organization: 'Combustion Workshop', description: 'Co-led data fusion pipelines and taught story-driven lab notes.' }
];

let activeCard = null;

function renderBooks() {
  bookCarousel.innerHTML = '';
  entries.forEach((entry, index) => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.index = index;
    const cover = coverLookup[entry.title] || `https://covers.openlibrary.org/b/olid/${entry.title.replace(/\s+/g, '')}-L.jpg`;
    card.style.backgroundImage = `linear-gradient(180deg, rgba(3,3,5,0), rgba(3,3,5,0.85)), url(${cover})`;
    card.innerHTML = `<div class="book-title">${entry.title}</div><div class="book-author">${entry.author}</div>`;
    card.addEventListener('click', () => selectBook(entry, card));
    bookCarousel.appendChild(card);
    if (index === 0) selectBook(entry, card);
  });
  updateStats();
}

function selectBook(entry, card) {
  if (card === activeCard) return;
  if (activeCard) activeCard.classList.remove('active');
  card.classList.add('active');
  activeCard = card;
  const cover = coverLookup[entry.title] || 'https://covers.openlibrary.org/b/olid/OL25424517M-L.jpg';
  detail.innerHTML = `
    <div class="detail-grid">
      <div class="detail-cover" style="background-image: linear-gradient(240deg, rgba(3,3,5,0.4), rgba(3,3,5,0.9)), url(${cover})"></div>
      <div>
        <h3>${entry.title}</h3>
        <p class="book-detail__meta">${entry.author} · ${entry.year}</p>
        <p>${entry.notes}</p>
        <p class="tag">${entry.status}</p>
      </div>
    </div>
  `;
}

function updateStats() {
  const stats = document.getElementById('reading-stats');
  const total = entries.length;
  const reading = entries.filter(e => e.status === 'Reading').length;
  const thinking = entries.filter(e => e.status === 'Thinking about').length;
  stats.innerHTML = `${total} books · ${reading} reading · ${thinking} thinking`;
}

function renderResearch() {
  const grid = document.getElementById('research-grid');
  grid.innerHTML = '';
  research.forEach(item => {
    const card = document.createElement('article');
    card.className = 'research-card';
    card.innerHTML = `<h3>${item.title}</h3><p>${item.summary}</p><span class="tag">${item.status}</span>`;
    grid.appendChild(card);
  });
}

function renderBlog() {
  const grid = document.getElementById('blog-grid');
  grid.innerHTML = '';
  blog.forEach(item => {
    const card = document.createElement('article');
    card.className = 'blog-card';
    card.innerHTML = `<h3>${item.title}</h3><p>${item.excerpt}</p><div class="tag">${item.tags.join(' · ')}</div>`;
    grid.appendChild(card);
  });
}

function renderPublications() {
  const grid = document.getElementById('publications-grid');
  grid.innerHTML = '';
  publications.forEach(pub => {
    const card = document.createElement('article');
    card.className = 'publication-card';
    card.innerHTML = `
      <h3>${pub.title}</h3>
      <p>${pub.venue}</p>
      <div class="tag">${pub.status.toUpperCase()} · ${pub.year}</div>
    `;
    grid.appendChild(card);
  });
}

function renderTimeline() {
  const container = document.getElementById('timeline');
  container.innerHTML = '';
  timeline.forEach(event => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <strong>${event.period}</strong>
      <span>${event.title} · ${event.organization}</span>
      <p>${event.description}</p>
    `;
    container.appendChild(item);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const values = new FormData(form);
  const entry = {
    title: values.get('title').trim(),
    author: values.get('author').trim(),
    notes: values.get('notes').trim(),
    year: Number(values.get('year')) || new Date().getFullYear(),
    status: values.get('status')
  };
  entries.unshift(entry);
  const coverURL = `https://covers.openlibrary.org/b/olid/${entry.title.replace(/\s+/g, '')}-L.jpg`;
  coverLookup[entry.title] = coverURL;
  renderBooks();
  form.reset();
});

navButtons.forEach(btn => btn.addEventListener('click', () => {
  navButtons.forEach(b => b.classList.remove('active'));
  sections.forEach(sec => sec.hidden = true);
  btn.classList.add('active');
  document.getElementById(btn.dataset.target).hidden = false;
}));

renderBooks();
renderResearch();
renderBlog();
renderPublications();
renderTimeline();
