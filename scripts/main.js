const bookCarousel = document.getElementById('book-carousel');
const detail = document.getElementById('book-detail');
const navButtons = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.section');
const form = document.getElementById('book-form');

const titles = [
  { title: 'Insanely Simple', author: 'Ken Segall', notes: 'Simplicity is an act of bravery—mirrors the discipline I strive for in experiments.', year: 2012, status: 'Finished', color: '#5f3dc4' },
  { title: 'Data-Driven Science', author: 'Carrie Treadway', notes: 'Reinforces my work on DA-SHRED and latent discovery.', year: 2021, status: 'Reading', color: '#0693e3' },
  { title: 'Narrative Analytics', author: 'Lina Santos', notes: 'Wants us to tell science stories as carefully as we write code.', year: 2019, status: 'Thinking about', color: '#f6c90e' }
];

const research = [
  { title: 'Latent aligners', summary: 'Pairing LF/HF encoders, inspired by Goodrich’s lattice.', status: 'In progress' },
  { title: 'Story-first dashboards', summary: 'Making RDE results readable for non-experts.', status: 'Planning' }
];

const blog = [
  { title: 'Shipping narratives', excerpt: 'Why I treat each commit as a short story.', tags: ['process', 'writing'] },
  { title: 'Gating the residual', excerpt: 'How frequency-aware multipliers stabilized HF corrections.', tags: ['modeling', 'DA-SHRED'] }
];

const coverLookup = {
  'Insanely Simple': 'https://covers.openlibrary.org/b/isbn/9781591845119-L.jpg',
  'Data-Driven Science': 'https://covers.openlibrary.org/b/isbn/9780262537995-L.jpg',
  'Narrative Analytics': 'https://covers.openlibrary.org/b/isbn/9780190210424-L.jpg'
};

let activeCard = null;

function renderBooks() {
  bookCarousel.innerHTML = '';
  titles.forEach((entry, index) => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.index = index;
    card.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.65)), url(${coverLookup[entry.title] || 'https://via.placeholder.com/120x170?text=Book'})`;
    card.innerHTML = `<div class="book-title">${entry.title}</div><div class="book-author">${entry.author}</div>`;
    card.addEventListener('click', () => selectBook(entry, card));
    bookCarousel.appendChild(card);
    if (index === 0) selectBook(entry, card);
  });
  updateStats();
}

function selectBook(entry, card) {
  if (activeCard) activeCard.classList.remove('active');
  card.classList.add('active');
  activeCard = card;
  detail.innerHTML = `
    <h3>${entry.title}</h3>
    <p class="book-detail__meta">${entry.author} · ${entry.year}</p>
    <p>${entry.notes}</p>
    <p class="tag">${entry.status}</p>
  `;
}

function updateStats() {
  const stats = document.getElementById('reading-stats');
  const total = titles.length;
  const reading = titles.filter(e => e.status === 'Reading').length;
  const thinking = titles.filter(e => e.status === 'Thinking about').length;
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

form.addEventListener('submit', e => {
  e.preventDefault();
  const values = new FormData(form);
  const entry = {
    title: values.get('title').trim(),
    author: values.get('author').trim(),
    notes: values.get('notes').trim(),
    year: Number(values.get('year')) || new Date().getFullYear(),
    status: values.get('status'),
    color: '#111'
  };
  titles.unshift(entry);
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
