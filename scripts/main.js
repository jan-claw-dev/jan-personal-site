const readingGrid = document.getElementById('reading-grid');
const form = document.getElementById('book-form');

const entries = [
  {
    title: 'Insanely Simple',
    author: 'Ken Segall',
    notes: 'A quick reminder that simplification is a creative act. The "focus on one thing" narrative parallels my thesis scope reduction.',
    year: 2012,
    status: 'Finished'
  },
  {
    title: 'Data-Driven Science',
    author: 'Carrie Treadway',
    notes: 'Great examples aligning low-and high-fidelity models; inspired how I think about embeddings in Cheap2Rich.',
    year: 2021,
    status: 'Reading'
  }
];

const statusClass = {
  'Thinking about': 'status--thinking',
  'Reading': 'status--reading',
  'Finished': 'status--done'
};

function renderEntries() {
  readingGrid.innerHTML = '';
  entries.forEach(entry => {
    const card = document.createElement('article');
    card.className = 'card';

    card.innerHTML = `
      <header>
        <h3 class="card__title">${entry.title}</h3>
        <div class="card__meta">
          <span>${entry.author}</span>
          <span>${entry.year}</span>
        </div>
      </header>
      <p class="card__notes">${entry.notes}</p>
      <div class="card__status ${statusClass[entry.status] || ''}">${entry.status}</div>
    `;

    readingGrid.appendChild(card);
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
    status: data.get('status')
  };
  entries.unshift(newEntry);
  renderEntries();
  form.reset();
});

renderEntries();
