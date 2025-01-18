// Sticky Header on Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile Navigation Toggle (Optional, if adding a hamburger menu)
document.querySelector('.logo').addEventListener('click', () => {
  const navLinks = document.querySelectorAll('.nav-links');
  navLinks.forEach(links => links.classList.toggle('active'));
});

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
