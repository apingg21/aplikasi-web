// Scroll halus saat klik menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animasi muncul saat scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Toggle Bahasa ID ↔ EN
let currentLang = 'id';

document.getElementById('toggle-language').addEventListener('click', () => {
  currentLang = currentLang === 'id' ? 'en' : 'id';

  document.querySelectorAll('[data-id][data-en]').forEach(el => {
    const newText = el.getAttribute(`data-${currentLang}`);
    if (newText !== null) {
      el.textContent = newText;
    }
  });

  document.getElementById('toggle-language').textContent = currentLang === 'id' ? 'English' : 'Indonesia';
});
