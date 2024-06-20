document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav');
  const logo = document.querySelector('.logo');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      nav.classList.add('nav-scrolled');
      logo.classList.add('logo-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
      logo.classList.remove('logo-scrolled');
    }
  });
});
