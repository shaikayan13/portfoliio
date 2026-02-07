// Modern Intro Animation and Reveal
setTimeout(() => {
  // Hide intro overlay
  document.getElementById('intro-overlay').style.display = 'none';

  // Reveal main site with fade-in
  const mainSite = document.getElementById('main-site');
  mainSite.classList.remove('blurred-page');
  mainSite.classList.add('revealed-page');

  // Ensure full visibility and interaction after fade-in animation
  setTimeout(() => {
    mainSite.classList.remove('revealed-page');
    mainSite.style.opacity = "1";
    mainSite.style.filter = "none";
  }, 700); // match fadeInSite animation duration
}, 1850); // matches intro animation timing

// Smooth Scrolling for Navigation Links
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

// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);
