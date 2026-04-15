# Shared Standards | VSON Web Platform

**Owner:** Fred (PM) + Thinh (Tech Lead)
**Last Updated:** 2026-04-02
**Status:** ✅ Active, reference before writing CSS/JS for either project
**Authority:** ADR-003 (06-infra/ADR-003-shared-base-layer.md)

---

## Purpose

This document defines the **invisible infrastructure** patterns that both VSON Advisory and VSON Corporate must implement. Each project applies these standards in its own stylesheet using its own brand tokens. There is no shared CSS/JS import between projects.

Code reviewers check PRs against this document.

---

## 1. CSS Reset

Both projects must include this baseline reset at the top of their main stylesheet:

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
img, picture, video, canvas, svg { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }
```

**Why:** Eliminates browser-default inconsistencies. Both sites currently do this, but with slight variations — standardise on the above.

---

## 2. Accessibility Utilities

Both projects must include these utility classes (per 00-programme/quality/ACCESSIBILITY-STANDARD.md — WCAG 2.1 AA):

```css
/* Screen-reader only — visually hidden but accessible */
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

/* Focus-visible — keyboard focus ring, not mouse click */
:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

/* Remove default outline for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

**Skip-to-content link** — every page must include as the first element inside `<body>`:

```html
<a href="#main-content" class="sr-only" style="position:absolute; top:0; left:0; z-index:9999; padding:1rem; background:#fff; color:#000;">
  Skip to main content
</a>
<!-- ... nav ... -->
<main id="main-content">
```

**Minimum touch target:** 44×44px for all interactive elements (buttons, links, form inputs).

**Language attribute:** `<html lang="en">` (Advisory), `<html lang="en">` Phase 1 / `<html lang="vi">` Phase 2 (Corporate).

---

## 3. Font Loading Strategy

Both projects must follow this pattern to prevent Flash of Invisible Text (FOIT) and meet LCP < 2.5s:

```html
<!-- Preload the primary body font (critical) -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" as="style">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap">
```

**Rules:**
- Always include `&display=swap` in Google Fonts URLs
- Preload only the primary body font (Inter for both projects)
- Headline fonts (Playfair Display / Montserrat) load normally — they appear below the fold or after FCP
- Use WOFF2 format if self-hosting fonts in future
- Subset to Latin + Vietnamese Extended when serving Vietnamese content (Phase 2)

---

## 4. Image Pattern

All images must follow this pattern to meet the <500KB per page budget:

```html
<!-- Preferred: WebP with fallback -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Descriptive alt text" loading="lazy" width="800" height="450">
</picture>

<!-- Acceptable for simple cases -->
<img src="image.webp" alt="Descriptive alt text" loading="lazy" width="800" height="450">
```

**Rules:**
- `loading="lazy"` on all images below the fold
- Hero/above-fold images: do NOT lazy-load (add `fetchpriority="high"` instead)
- Always include `width` and `height` attributes to prevent CLS (Cumulative Layout Shift)
- Maximum image dimensions per zone:

| Zone | Max Width | Format | Notes |
|------|-----------|--------|-------|
| Hero background | 1920px | WebP, quality 80 | Single largest asset on page |
| Card thumbnail | 600px | WebP, quality 80 | |
| Team headshot | 400px | WebP, quality 85 | Higher quality for faces |
| Logo/icon | 200px | SVG preferred, PNG fallback | |

---

## 5. Responsive Breakpoints

Both projects must use the same breakpoint values:

```css
/* Small (mobile landscape) */
@media (min-width: 640px) { }

/* Medium (tablet) */
@media (min-width: 768px) { }

/* Large (desktop) */
@media (min-width: 1024px) { }

/* Extra large (wide desktop) */
@media (min-width: 1280px) { }
```

**Approach:** Mobile-first. Default styles target mobile (<640px). Media queries add complexity for larger screens.

**Container max-widths:**
- Advisory: `max-width: 1200px` (existing)
- Corporate: `max-width: 1160px` (existing)
- Both acceptable — no need to unify brand-specific layout widths

---

## 6. Form Pattern (Netlify Forms)

Both projects use Netlify Forms for contact form submission (ADR-001).

```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <!-- Honeypot field (spam protection, hidden from users) -->
  <p class="sr-only">
    <label>Don't fill this out: <input name="bot-field"></label>
  </p>

  <label for="name">Full Name</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Message</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Send</button>
</form>
```

**Rules:**
- Every `<input>` must have a matching `<label>` with `for` attribute (accessibility)
- Use HTML5 `required`, `type="email"`, `minlength` for client-side validation
- Error states: add class `.field--error` to the field wrapper, display message in a `<span class="field__error" role="alert">`
- Success state: redirect to a `/thank-you.html` page (configure in Netlify settings)

---

## 7. Meta / SEO Template

Every page in both projects must include this meta block in `<head>`:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[Page Title] — [Site Name]</title>
<meta name="description" content="[150-160 char description]">
<link rel="canonical" href="https://[domain]/[page].html">

<!-- Open Graph -->
<meta property="og:title" content="[Page Title] — [Site Name]">
<meta property="og:description" content="[Same as meta description]">
<meta property="og:image" content="https://[domain]/og-image.jpg">
<meta property="og:url" content="https://[domain]/[page].html">
<meta property="og:type" content="website">

<!-- Favicon -->
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

**Additional files per project root:**
- `robots.txt` — allow all, link to sitemap
- `sitemap.xml` — list all public pages with `<lastmod>` dates

---

## Compliance Checklist (for code review)

| # | Standard | Check |
|---|----------|-------|
| 1 | CSS Reset | Box-sizing, margin/padding reset, scroll-behavior present |
| 2 | Accessibility | `.sr-only` class exists, `:focus-visible` styled, skip-to-content link on every page |
| 3 | Font loading | `display=swap` on all Google Fonts URLs, primary font preloaded |
| 4 | Images | `loading="lazy"` below fold, `width`/`height` on all `<img>`, WebP preferred |
| 5 | Breakpoints | Uses 640/768/1024/1280, mobile-first approach |
| 6 | Forms | Netlify `data-netlify="true"`, honeypot field, labels on all inputs |
| 7 | Meta/SEO | Title, description, canonical, OG tags, favicon on every page |
| 8 | Touch targets | Minimum 44×44px on all interactive elements |
| 9 | Language | `lang` attribute on `<html>` tag |
| 10 | Security headers | CSP, X-Frame-Options, X-Content-Type-Options in `netlify.toml` |
| 11 | **Em dash ban** | **Zero em dashes (—) in any user-facing content. Grep all HTML/CSS/JS before marking page as built. Titles use pipe, labels use colon, prose uses commas/periods. CSS `content` properties use `›` not `—`. This is a mandatory gate: no page passes QC with em dashes present.** |
