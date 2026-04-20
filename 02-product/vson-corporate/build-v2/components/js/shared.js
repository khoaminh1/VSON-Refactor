/**
 * VSON Corporate — shared behaviours
 * - Mobile nav toggle + outside-click close
 * - Solutions dropdown accessibility (keyboard)
 * - Active nav link by current page
 * - Smooth-scroll fallback for older browsers
 * - Case Studies index filter buttons
 */

/* ── Mobile menu toggle ──────────────────────────────────── */
(function () {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.getElementById('nav-menu');
  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', function () {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('active');
  });

  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');
    });
  });

  document.addEventListener('click', function (event) {
    if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');
    }
  });
})();

/* ── Solutions dropdown keyboard + mobile tap ───────────── */
(function () {
  document.querySelectorAll('.nav__dropdown').forEach(function (dd) {
    const toggle = dd.querySelector('.nav__dropdown-toggle');
    if (!toggle) return;
    toggle.setAttribute('tabindex', '0');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('aria-haspopup', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', function (e) {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      dd.classList.toggle('open');
    });
    toggle.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle.click();
      }
    });
  });
})();

/* ── Smooth-scroll fallback ─────────────────────────────── */
(function () {
  if (CSS && CSS.supports && CSS.supports('scroll-behavior: smooth')) return;
  document.addEventListener('click', function (e) {
    const target = e.target.closest('a[href^="#"]');
    if (!target) return;
    const href = target.getAttribute('href');
    if (href === '#') return;
    const element = document.querySelector(href);
    if (!element) return;
    e.preventDefault();
    element.scrollIntoView({ behavior: 'smooth' });
  });
})();

/* ── Active nav link (matches current page filename) ────── */
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPage = href.split('/').pop();
    if (linkPage && linkPage === currentPage && !link.classList.contains('nav__cta')) {
      link.classList.add('active');
    }
  });
})();

/* ── Case Studies index filter ──────────────────────────── */
(function () {
  const filterBar = document.querySelector('.filter-bar');
  if (!filterBar) return;
  const buttons = filterBar.querySelectorAll('.filter-btn');
  const countEl = filterBar.querySelector('.filter-count');
  const cards   = document.querySelectorAll('.cs-card');
  if (!cards.length) return;

  function applyFilter(filter) {
    let visible = 0;
    cards.forEach(function (card) {
      const match = filter === 'all' || card.dataset.filter === filter;
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    if (countEl) {
      countEl.textContent = visible + ' case ' + (visible === 1 ? 'study' : 'studies');
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      applyFilter(btn.dataset.filter || 'all');
    });
  });
})();
