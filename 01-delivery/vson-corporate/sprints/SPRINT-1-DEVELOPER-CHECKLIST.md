# VSON Corporate — Sprint 1 Developer Checklist
**Build Period: 2026-04-08 to 2026-04-22 (14 days)**
**Deliverables: Home, About, Contact pages + Production-ready shared CSS**

---

## Pre-Build Kickoff (2026-04-08 morning)

- [ ] Read `SA-TECHNICAL-READINESS-REPORT.md` — understand all 8 gaps
- [ ] Read `DEVELOPER-GUIDE.md` — understand folder structure and asset tracking
- [ ] Read `DESIGN-SPEC.md` — understand content and layout per page
- [ ] Open wireframes in browser: `wireframes/home.html`, `wireframes/about.html`, `wireframes/contact.html`
- [ ] Review all design tokens and colour names in `DESIGN-SPEC.md` Section "Brand System"
- [ ] Verify asset status in `_content/TRACKER.md` with Fred
- [ ] Confirm Netlify account is created and vson.vn domain linked
- [ ] Set up git repo with structure:
  ```
  vson-corporate/
  ├── src/
  │   ├── css/
  │   │   ├── shared.css
  │   │   └── (page-specific styles)
  │   ├── js/
  │   │   └── (minimal JS — menu toggle, form validation)
  │   ├── assets/
  │   │   ├── images/
  │   │   ├── logos/
  │   │   └── fonts/
  │   ├── home.html
  │   ├── about.html
  │   ├── contact.html
  │   ├── thank-you.html
  │   ├── 404.html
  │   └── index.html (redirect to home.html or make home.html the root)
  ├── netlify.toml
  ├── .gitignore
  └── README.md
  ```
- [ ] Decide with team: mobile nav pattern (hamburger + overlay vs. stacked menu). Recommend: hamburger.
- [ ] Get GA4 property ID from Fred (for analytics)
- [ ] Get Google Fonts API key if using server-side rendering later (not needed for HTML-only, but note for Phase 2)

---

## Phase 1: Infrastructure & Accessibility (Days 1–2)

### Shared CSS Foundation
- [ ] Copy `wireframes/shared.css` to `src/css/shared.css`
- [ ] **Add CSS Reset rules** (SA Gap A1):
  ```css
  /* Add after line 14 existing reset */
  img, picture, video, canvas, svg { display: block; max-width: 100%; }
  input, button, textarea, select { font: inherit; }
  ```
- [ ] **Add Accessibility Utilities** (SA Gap A2 + A3):
  ```css
  /* Add .sr-only class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Add focus-visible styling */
  :focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
  ```
- [ ] **Add Responsive Breakpoint Scaffold** (SA Gap A4):
  ```css
  /* At end of shared.css, add breakpoint structure: */

  /* Mobile-first defaults — no change to existing styles (they're mobile by default) */

  @media (min-width: 640px) {
    /* Small landscape / small tablet adjustments */
  }

  @media (min-width: 768px) {
    /* Tablet portrait adjustments */
  }

  @media (min-width: 1024px) {
    /* Desktop — most current styles belong here or are already mobile-optimized */
  }

  @media (min-width: 1280px) {
    /* Wide desktop adjustments */
  }
  ```

### HTML Templates
- [ ] Create `src/home.html` from `wireframes/home.html`
  - [ ] Add font preload (SA Gap A5): Before stylesheet link:
    ```html
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" as="style">
    ```
  - [ ] Add skip-to-content link as first `<body>` element:
    ```html
    <a href="#main-content" class="sr-only">Skip to main content</a>
    ```
  - [ ] Add `id="main-content"` to first content section (after nav)
  - [ ] Update stylesheet link: `href="css/shared.css"`
- [ ] Create `src/about.html` from `wireframes/about.html` (same changes as home.html)
- [ ] Create `src/contact.html` from `wireframes/contact.html` (same changes as home.html)
- [ ] Verify all 3 pages load correctly in browser with CSS applied
- [ ] Run Lighthouse on all 3 pages → note current baseline scores (will be <70 without responsive)

---

## Phase 2: Contact Form & Netlify Integration (Days 2–3)

### Contact Form HTML (SA Gap A6 + A7)
- [ ] Open `src/contact.html`
- [ ] Replace `<div class="contact-form">` wrapper with proper `<form>` element:
  ```html
  <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  ```
- [ ] Add honeypot spam field (first in form):
  ```html
  <p class="sr-only">
    <label>Don't fill this out: <input name="bot-field"></label>
  </p>
  ```
- [ ] Update all form inputs with proper attributes:
  | Field | type | id | name | required | placeholder |
  |---|---|---|---|---|---|
  | Name | text | `contact-name` | `name` | ✅ | "Your full name" |
  | Company | text | `contact-company` | `company` | ❌ | "Your company name" |
  | Email | email | `contact-email` | `email` | ✅ | "your@email.com" |
  | Phone | tel | `contact-phone` | `phone` | ❌ | "+84 or +65..." |
  | Enquiry Type | select | `contact-enquiry` | `enquiry` | ✅ | (no placeholder) |
  | Message | textarea | `contact-message` | `message` | ✅ | "Tell us..." |

- [ ] Pair all labels with inputs using `<label for="[id]">` pattern
- [ ] Example refactored field:
  ```html
  <div class="form-field">
    <label for="contact-name">Name *</label>
    <input type="text" id="contact-name" name="name" required placeholder="Your full name">
  </div>
  ```
- [ ] Change submit button to `<button type="submit">` (from `<button class="btn">`)
- [ ] Close `</form>` tag after submit button
- [ ] Create `src/thank-you.html` success page:
  ```html
  <!-- Copy header/nav/footer from home.html -->
  <section class="page-hero">
    <div class="container">
      <h1>Thank you!</h1>
      <p>We've received your message and will be in touch shortly.</p>
      <a href="home.html" class="btn btn--primary">Return to Home</a>
    </div>
  </section>
  ```

### Netlify Configuration
- [ ] Create `netlify.toml` at repo root:
  ```toml
  [build]
    publish = "src"
    command = "echo 'No build step needed for static site'"

  [[redirects]]
    from = "/contact"
    to = "/contact.html"
    status = 200

  [[redirects]]
    from = "/*"
    to = "/404.html"
    status = 404

  [context.production]
    command = "echo 'Static deploy'"

  # Form settings
  [[headers]]
    for = "/*"
    [headers.values]
      X-Frame-Options = "SAMEORIGIN"
      X-Content-Type-Options = "nosniff"
      Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com"
  ```
- [ ] Create `src/404.html` custom error page:
  ```html
  <!-- Same header/nav as other pages -->
  <h1>Page Not Found</h1>
  <p>The page you're looking for doesn't exist.</p>
  <a href="home.html" class="btn btn--primary">Return to Home</a>
  ```
- [ ] Test form locally with Netlify CLI: `netlify dev`
- [ ] Submit test form → verify it appears in Netlify Forms dashboard
- [ ] Verify routing: Enquiry Type = "Activation Solutions" should route to solutions@vson.vn (requires Netlify form settings or webhook — confirm with Fred if auto-routing is configured)

---

## Phase 3: Responsive Design (Days 3–4)

### Mobile-First CSS Refactor (SA Gap A4)

**Home page hero — 2-column → 1-column on mobile:**
```css
/* In home.html <style> or shared.css */

/* Default: mobile (320px–639px) */
.hero__inner {
  grid-template-columns: 1fr; /* Changed from: 1fr 1fr */
  gap: 40px;
}

.hero__visual { padding: 20px 0; } /* Reduced from: 40px 0 */

/* Tablet and up (768px+) */
@media (min-width: 768px) {
  .hero__inner {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }
  .hero__visual { padding: 40px 0; }
}
```

**Footer — 1-column → 2-column (768px) → 4-column (1024px):**
```css
/* Default: mobile (320px–639px) */
.footer__top {
  grid-template-columns: 1fr;
  gap: 32px;
}

/* Tablet portrait (768px+) */
@media (min-width: 768px) {
  .footer__top {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .footer__top {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 48px;
  }
}
```

**Navigation — vertical stack (mobile) → horizontal (768px+) + hamburger menu:**
- [ ] Add mobile hamburger button to nav (HTML):
  ```html
  <nav class="nav">
    <div class="container">
      <div class="nav__inner">
        <a href="home.html" class="nav__logo">...</a>

        <!-- Hamburger button (visible on mobile only) -->
        <button class="nav__menu-toggle" aria-label="Toggle menu">☰</button>

        <ul class="nav__links">
          <!-- links -->
        </ul>
      </div>
    </div>
  </nav>
  ```
- [ ] Add CSS for mobile menu:
  ```css
  /* Mobile: hidden by default */
  .nav__links {
    display: none;
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    background: rgba(27, 77, 62, 0.98);
    flex-direction: column;
    gap: 0;
    padding: 20px 0;
  }

  .nav__links.active { display: flex; }

  .nav__links li { padding: 0 24px; }
  .nav__links a { display: block; padding: 14px 0; }

  /* Desktop: visible, horizontal */
  @media (min-width: 768px) {
    .nav__menu-toggle { display: none; }
    .nav__links {
      display: flex !important;
      position: static;
      background: transparent;
      flex-direction: row;
      padding: 0;
      gap: 32px;
    }
    .nav__links li { padding: 0; }
    .nav__links a { padding: 0; }
  }
  ```
- [ ] Add JavaScript to `src/js/menu.js`:
  ```javascript
  document.querySelector('.nav__menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav__links').classList.toggle('active');
  });
  ```
- [ ] Link JS in all HTML pages: `<script src="js/menu.js"></script>` before `</body>`

**About page — 2-column grid → 1-column on mobile:**
```css
.story__inner {
  grid-template-columns: 1fr; /* mobile */
  gap: 40px;
}

@media (min-width: 768px) {
  .story__inner {
    grid-template-columns: 1fr 2fr;
    gap: 80px;
  }
}

.leadership__grid {
  grid-template-columns: 1fr; /* mobile */
  gap: 24px;
}

@media (min-width: 640px) {
  .leadership__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .leadership__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

**Contact page — 2-column form/details → 1-column:**
```css
.contact-body__inner {
  grid-template-columns: 1fr; /* mobile */
  gap: 40px;
}

@media (min-width: 768px) {
  .contact-body__inner {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
}

/* Form row: 2-column input pairs → single column on mobile */
.form-row {
  grid-template-columns: 1fr; /* mobile */
  gap: 16px;
}

@media (min-width: 640px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}
```

### Responsive Testing
- [ ] Test all 3 pages at 375px (mobile), 640px, 768px, 1024px, 1440px (desktop)
- [ ] Verify no horizontal scrolling on mobile
- [ ] Verify hamburger menu works (click to open, click item to navigate)
- [ ] Verify form fields stack on mobile, side-by-side on tablet+
- [ ] Run Lighthouse on mobile view (target 85+ Performance)
- [ ] Check that dropdown menu works on touch devices (consider adding @media (hover: none) handling)

---

## Phase 4: SEO & Meta Infrastructure (Days 4–5)

### Root-level Files
- [ ] Create `src/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: /sitemap.xml
  ```
- [ ] Create `src/sitemap.xml`:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://vson.vn/</loc>
      <lastmod>2026-04-22</lastmod>
    </url>
    <url>
      <loc>https://vson.vn/about.html</loc>
      <lastmod>2026-04-22</lastmod>
    </url>
    <url>
      <loc>https://vson.vn/contact.html</loc>
      <lastmod>2026-04-22</lastmod>
    </url>
  </urlset>
  ```
- [ ] Create favicon files:
  - [ ] `/favicon.ico` (32×32 PNG converted to ICO)
  - [ ] `/icon.svg` (SVG format, e.g., simple V logo)
  - [ ] `/apple-touch-icon.png` (180×180, iOS home screen)
- [ ] Add favicon links to all pages (in `<head>`):
  ```html
  <link rel="icon" href="/favicon.ico" sizes="32x32">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  ```

### Meta & OG Tags (SA Gap A8)
- [ ] **home.html** — add after `<meta name="viewport">`:
  ```html
  <meta name="description" content="Vietnam's Phygital Commerce Ecosystem — 20 years connecting world-class brands to Vietnamese households & powering campaigns, data, and market entry strategies that drive growth.">
  <link rel="canonical" href="https://vson.vn/">
  <meta property="og:title" content="VSON — Home">
  <meta property="og:description" content="Vietnam's Phygital Commerce Ecosystem — 20 years connecting world-class brands to Vietnamese households & powering campaigns, data, and market entry strategies that drive growth.">
  <meta property="og:image" content="https://vson.vn/og-image.jpg">
  <meta property="og:url" content="https://vson.vn/">
  <meta property="og:type" content="website">
  ```

- [ ] **about.html**:
  ```html
  <meta name="description" content="Meet the VSON team — Frederick Dang, Henry Hung, Emily Vo, and Duy Le. Discover 20 years of market expertise, commercial instincts, and cross-border perspective.">
  <link rel="canonical" href="https://vson.vn/about.html">
  <meta property="og:title" content="VSON — About">
  <meta property="og:description" content="Meet the VSON team — Frederick Dang, Henry Hung, Emily Vo, and Duy Le. Discover 20 years of market expertise, commercial instincts, and cross-border perspective.">
  <meta property="og:image" content="https://vson.vn/og-image.jpg">
  <meta property="og:url" content="https://vson.vn/about.html">
  <meta property="og:type" content="website">
  ```

- [ ] **contact.html**:
  ```html
  <meta name="description" content="Contact VSON for brand activation, market development, or distribution partnerships. Get in touch with our team in Ho Chi Minh City.">
  <link rel="canonical" href="https://vson.vn/contact.html">
  <meta property="og:title" content="VSON — Contact">
  <meta property="og:description" content="Contact VSON for brand activation, market development, or distribution partnerships. Get in touch with our team in Ho Chi Minh City.">
  <meta property="og:image" content="https://vson.vn/og-image.jpg">
  <meta property="og:url" content="https://vson.vn/contact.html">
  <meta property="og:type" content="website">
  ```

- [ ] Create OG image (`/og-image.jpg` — 1200×630px):
  - Use home page hero as background (once image available, or create placeholder with VSON logo + tagline)
  - Ensure text is readable and brand colors are visible
  - Compress to <100KB

### Google Analytics
- [ ] Get GA4 Property ID from Fred
- [ ] Add GA snippet to all 3 pages (before `</head>`):
  ```html
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  ```
- [ ] Test GA is firing with Google Analytics Debugger extension

### SEO Testing
- [ ] Use Google Structured Data Testing Tool on all 3 pages
- [ ] Verify no errors/warnings
- [ ] Check meta descriptions appear correctly (150–160 chars)
- [ ] Test social share preview (use Facebook Share Debugger or Twitter Card validator)

---

## Phase 5: Final QA & Polish (Days 5)

### Accessibility Audit
- [ ] Install axe DevTools browser extension
- [ ] Run axe scan on all 3 pages
- [ ] Fix all critical/serious violations (should be 0 if work above done correctly)
- [ ] Manual keyboard navigation test:
  - [ ] Press Tab through every interactive element
  - [ ] Verify focus ring is visible (outline = 2px solid)
  - [ ] Verify focus order is logical (left→right, top→bottom)
  - [ ] Verify no keyboard traps (ability to Tab away from all elements)
  - [ ] Test form submission with keyboard (Tab to button, Enter)
- [ ] Manual screen reader test (NVDA on Windows or VoiceOver on Mac):
  - [ ] Navigate home.html page
  - [ ] Verify skip-to-content link is first focusable element
  - [ ] Verify page structure is logical (h1 → h2/h3 hierarchy)
  - [ ] Verify form labels are read with inputs
  - [ ] Verify alt text on hero placeholder (if image added)

### Performance Audit
- [ ] Run Lighthouse on all 3 pages (desktop + mobile)
- [ ] Target scores: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+
- [ ] If scores <90:
  - [ ] Check image sizes (compress WebP images)
  - [ ] Check unused CSS (may need to clean up)
  - [ ] Check font load strategy (preload already added, should help LCP)
  - [ ] Check JavaScript execution time (menu toggle script should be minimal)
- [ ] Note performance baseline before asset images are added (images will impact score)

### Cross-Browser Testing
- [ ] Test on Chrome (desktop + mobile)
- [ ] Test on Firefox (desktop)
- [ ] Test on Safari (desktop + iOS if available)
- [ ] Test on Edge (desktop)
- [ ] Verify layout consistency, form submission, nav functionality on all

### Pre-Launch Checks
- [ ] [ ] Verify all links work (internal + external):
  - [ ] Home nav links go to home.html, about.html, contact.html
  - [ ] About → About link (active state)
  - [ ] Contact → Contact link (active state)
  - [ ] Footer links all work
  - [ ] Social links go somewhere (currently `#` — confirm with Fred)
  - [ ] Privacy Policy + Terms of Use links (currently `#` — need real URLs or remove)
- [ ] Verify all buttons have `:hover` states and are clickable
- [ ] Verify form validation:
  - [ ] Name, Email, Enquiry Type, Message marked required
  - [ ] Submitting form with empty fields shows validation error (browser default OK for now)
  - [ ] Submitting form successfully shows thank-you page
- [ ] Verify mobile menu opens/closes correctly
- [ ] Verify dropdown "Solutions" works on hover (desktop) and touch (mobile)
- [ ] Check for console errors: F12 → Console → no red errors

### Deployment to Staging
- [ ] Commit all code to git: `git add -A && git commit -m "Sprint 1: Home, About, Contact + responsive CSS + SEO"`
- [ ] Push to GitHub (or Netlify git integration)
- [ ] Deploy to staging: `netlify deploy --prod --dir=src`
- [ ] Verify staging URL works: `https://[staging-url].netlify.app`
- [ ] Verify form submission on staging (may need to test with Netlify Forms)
- [ ] Share staging URL with Fred for sign-off

### Sign-Off Checklist (for Fred)
- [ ] All 3 pages display correctly
- [ ] Responsive on mobile/tablet/desktop
- [ ] Contact form works and routes correctly
- [ ] No broken links
- [ ] SEO metadata visible in page source
- [ ] Accessibility is good (keyboard nav, focus rings)
- [ ] Ready for content asset insertion (headshots, logos, hero image)

---

## Handoff to Fred & Next Sprint

- [ ] Document any deviations from spec in `DEVIATIONS.md`
- [ ] List outstanding decisions/questions in `OPEN-QUESTIONS.md`
- [ ] Create Sprint 2 backlog: Remaining 9 pages (Solutions pages, Case Studies, Store, etc.)
- [ ] Update `PROJECT.md` with completion status and next phase dates
- [ ] Archive this checklist in `01-delivery/vson-corporate/sprints/` folder

---

**Sprint 1 End Target:** 2026-04-22
**Success Criteria:**
- ✅ Home, About, Contact fully responsive and deployed to staging
- ✅ Contact form submitting successfully
- ✅ All accessibility issues resolved (axe-core = 0 critical/serious)
- ✅ Lighthouse 90+ on all 4 categories (desktop + mobile)
- ✅ Fred sign-off received
- ✅ Ready for Sprint 2 (remaining 9 pages)
