/* ============================================================
   VSON ADVISORY — Shared Behaviours
   Each "use*" function = one isolated behaviour (custom-hook style).
   No business logic; UI behaviours only.
   ============================================================ */

(function () {
  'use strict';

  /* ── useStickyNav: adds .nav--scrolled when scrollY > 20 ─── */
  function useStickyNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    function onScroll() {
      nav.classList.toggle('nav--scrolled', window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── useMobileMenu: burger + drawer open/close + body lock ─ */
  function useMobileMenu() {
    const nav = document.querySelector('.nav');
    const burger = document.querySelector('.nav__burger');
    const mobileMenu = document.querySelector('.nav__mobile');
    if (!burger || !mobileMenu || !nav) return;

    function setOpen(open) {
      burger.classList.toggle('open', open);
      mobileMenu.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    }

    burger.setAttribute('aria-expanded', 'false');
    burger.addEventListener('click', function () {
      setOpen(!burger.classList.contains('open'));
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });

    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
        setOpen(false);
      }
    });
  }

  /* ── useActiveNavLink: highlights the link matching pathname */
  function useActiveNavLink() {
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/index.html';
    document.querySelectorAll('.nav__link').forEach(function (link) {
      const href = link.getAttribute('href') || '';
      const linkPath = href.replace(/\/$/, '');
      const isMatch =
        linkPath === currentPath ||
        (currentPath.endsWith('index.html') && linkPath === '') ||
        (currentPath === '/' && linkPath === '') ||
        (linkPath !== '' && currentPath.includes(linkPath));
      if (isMatch) link.classList.add('nav__link--active');
    });
  }

  /* ── useFadeOnScroll: IntersectionObserver fade-up for [data-fade] */
  function useFadeOnScroll() {
    const fadeEls = document.querySelectorAll('[data-fade]');
    if (!fadeEls.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el, i) {
      const delay = (i % 4) * 0.1;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease ' + delay + 's, transform 0.6s ease ' + delay + 's';
      observer.observe(el);
    });
  }

  /* ── useContactForm: submit UX (replace setTimeout with real endpoint) */
  function useContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      btn.textContent = 'Sending…';
      btn.disabled = true;

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

  /* ── Bootstrap all behaviours ────────────────────────────── */
  function init() {
    useStickyNav();
    useMobileMenu();
    useActiveNavLink();
    useFadeOnScroll();
    useContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
