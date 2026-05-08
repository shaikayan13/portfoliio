// Modern Intro Animation and Reveal
const intro = document.getElementById('intro-overlay');
const mainSite = document.getElementById('main-site');

// Disable pointer events immediately
intro.style.pointerEvents = "none";

setTimeout(() => {
  // Hide intro overlay
  intro.style.display = 'none';

  // Reveal main site
  mainSite.classList.remove('blurred-page');
  mainSite.classList.add('revealed-page');

  setTimeout(() => {
    mainSite.classList.remove('revealed-page');
    mainSite.style.opacity = "1";
    mainSite.style.filter = "none";
  }, 700);
}, 1850);

// Smooth scrolling (ONLY internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer (optional animations)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Observe animated elements
document.querySelectorAll('.fade-in-up, .fade-in').forEach(el => {
  observer.observe(el);
});
