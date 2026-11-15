// Mobile menu: show/hide the nav links
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Portfolio page: filter project cards by tag
const filterButtons = document.querySelectorAll('.tag-btn');
const cards = document.querySelectorAll('.card');
const noResults = document.querySelector('.no-results');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));

    let shown = 0;
    cards.forEach((card) => {
      const match = filter === 'all' || card.dataset.tags.split(' ').includes(filter);
      card.hidden = !match;
      if (match) shown++;
    });

    if (noResults) noResults.hidden = shown > 0;
  });
});
