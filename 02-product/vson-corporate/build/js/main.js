/**
 * VSON Corporate — Main JavaScript
 * Handles mobile menu toggle and smooth scrolling
 */

// Mobile menu toggle
(function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      }
    });
  }
})();

// Smooth scroll behavior (fallback for older browsers)
(function() {
  if (!CSS.supports('scroll-behavior: smooth')) {
    document.addEventListener('click', function(e) {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href === '#') return;

      const element = document.querySelector(href);
      if (!element) return;

      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    });
  }
})();

// Set active nav link based on current page
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav__links a');

  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href && href.split('/').pop() === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();
