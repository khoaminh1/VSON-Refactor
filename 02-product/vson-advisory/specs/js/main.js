/* ============================================================
   VSON ADVISORY - Shared JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ── Nav: Sticky scroll effect ──────────────────────────── */
  const nav = document.querySelector('.nav');

  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 20) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ── Nav: Mobile burger menu ────────────────────────────── */
  const burger = document.querySelector('.nav__burger');
  const mobileMenu = document.querySelector('.nav__mobile');

  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      const isOpen = burger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Nav: Active link highlighting ─────────────────────── */
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('.nav__link').forEach(function (link) {
    const href = link.getAttribute('href') || '';
    const linkPath = href.replace(/\/$/, '');
    if (
      linkPath === currentPath ||
      (currentPath.endsWith('index.html') && linkPath === '') ||
      (currentPath === '/' && linkPath === '') ||
      currentPath.includes(linkPath) && linkPath !== ''
    ) {
      link.classList.add('nav__link--active');
    }
  });

  /* ── Fade-up on scroll (Intersection Observer) ──────────── */
  const fadeEls = document.querySelectorAll('[data-fade]');

  if (fadeEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    fadeEls.forEach(function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease ' + (i % 4) * 0.1 + 's, transform 0.6s ease ' + (i % 4) * 0.1 + 's';
      observer.observe(el);
    });
  }

  /* ── Contact form: basic UX ─────────────────────────────── */
  const form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = form.querySelector('[type="submit"]');
      const originalText = btn.textContent;

      btn.textContent = 'Sending…';
      btn.disabled = true;

      // Simulate submission (replace with real endpoint)
      setTimeout(function () {
        btn.textContent = 'Request Sent';
        btn.style.background = '#16a34a';

        const msg = document.createElement('p');
        msg.textContent = 'Thank you. We will follow up shortly.';
        msg.style.cssText = 'color:#16a34a;font-size:0.875rem;margin-top:1rem;font-weight:500;';
        form.appendChild(msg);
      }, 1200);
    });
  }

})();
