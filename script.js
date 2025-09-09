// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');
navToggle?.addEventListener('click', () => {
  primaryNav.classList.toggle('open');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
