const readingGrid = document.getElementById('reading-grid');
const researchGrid = document.getElementById('research-grid');
const blogGrid = document.getElementById('blog-grid');
const form = document.getElementById('book-form');

const entries = [
  { title: 'Insanely Simple', author: 'Ken Segall', notes: 'Simple is creative. Halting scope mirrors my RDE work.', year: 2012, status: 'Finished', color: '#fca311' },
  { title: 'Data-Driven Science', author: 'Carrie Treadway', notes: 'Inspired the DA-SHRED and latent exploration.', year: 2021, status: 'Reading', color: '#7aa8ff' },
  { title: 'The Combustion Mind', author: 'N. Kaspar', notes: 'Linking pyro models with storytelling to explain detonation waves.', year: 2022, status: 'Thinking about', color: '#c0f6a8' }
];

const research = [
  { title: 'Latent alignment for RDEs', summary: 'Merging LF/HF encoders into a single interpretable workflow.', status: 'In progress' },
  { title: 'DA-SHRED open-source', summary: 'Publishing code + docs for the sparse-frequency aligner.', status: 'Drafting' }
];

const blogPosts = [
  { title: 'Shipping a PhD story', excerpt: 'Patience, playlists, and persistence keep me grounded.', tags: ['life', 'thesis'] },
  { title: 'Gating HF corrections', excerpt: 'Why frequency-aware gating stabilized the residuals.', tags: ['model', 'DA-SHRED'] }
];

function createBookCard(entry, index) {
  const card = document.createElement('div');
  card.className = 'book-card';
  card.setAttribute('role', 'button');
  card.style.background = entry.color;
  card.style.transform = `translateY(${index * -3}px)`;
  card.innerHTML = `
    <div class="book-title">${entry.title}</div>
    <div class="book-author">${entry.author}</div>
  `;
  card.addEventListener('click', () => selectBook(entry, card));
  return card;
}

const detailNode = document.getElementById('book-detail');
let activeCard = null;

function selectBook(entry, card) {
  if (activeCard) activeCard.classList.remove('active');
  card.classList.add('active');
  activeCard = card;
  detailNode.innerHTML = `
    <h3>${entry.title}</h3>
    <p class="card__meta">${entry.author} · ${entry.year}</p>
    <p>${entry.notes}</p>
    <p class="card__status">${entry.status}</p>
  `;
}

function renderBooks() {
  const carousel = document.getElementById('book-carousel');
  carousel.innerHTML = '';
  entries.forEach((entry, i) => {
    const card = createBookCard(entry, i);
    carousel.appendChild(card);
    if (i === 0) selectBook(entry, card);
  });
}

function renderResearch() {
  researchGrid.innerHTML = '';
  research.forEach(proj => {
    const card = document.createElement('article');
    card.className = 'research-card';
    card.innerHTML = `
      <h3>${proj.title}</h3>
      <p>${proj.summary}</p>
      <span class="tag">${proj.status}</span>
    `;
    researchGrid.appendChild(card);
  });
}

function renderBlog() {
  blogGrid.innerHTML = '';
  blogPosts.forEach(post => {
    const card = document.createElement('article');
    card.className = 'blog-card';
    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <div class="tag">${post.tags.join(' · ')}</div>
    `;
    blogGrid.appendChild(card);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const newEntry = {
    title: data.get('title').trim(),
    author: data.get('author').trim(),
    notes: data.get('notes').trim(),
    year: Number(data.get('year')) || new Date().getFullYear(),
    status: data.get('status'),
    color: data.get('color')
  };
  entries.unshift(newEntry);
  renderBooks();
  form.reset();
});

renderBooks();
renderResearch();
renderBlog();
