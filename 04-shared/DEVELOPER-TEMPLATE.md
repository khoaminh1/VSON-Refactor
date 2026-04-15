# VSON Advisory — Developer Template & Style Guide

**Document Version**: 1.0
**Date**: 2026-03-29
**Status**: For Developer Use
**Tech Stack**: HTML5, CSS3 (Tailwind-inspired custom properties), Vanilla JavaScript

---

## 1. Getting Started

### Directory Structure

```
vson-advisory/
├─ index.html              (Home page — reference template)
├─ approach.html           (Approach page — reference template)
├─ brain-trust.html        (Brain Trust page — reference template)
├─ vault.html              (Vault page — reference template)
├─ contact.html            (Contact page — reference template)
├─ [new-page].html         (Your new page here)
├─ css/
│  └─ styles.css          (Shared design system; do NOT modify)
├─ js/
│  └─ main.js             (Shared functionality; do NOT modify)
└─ assets/
   ├─ images/
   ├─ icons/
   └─ fonts/              (Playfair Display, Inter)
```

### Design System Overview

The entire site uses a single `styles.css` file with:
- **CSS Custom Properties (variables)** for colors, typography, spacing
- **Reusable component classes** (.btn, .btn-primary, .btn-ghost, .card, etc.)
- **Layout utilities** (.container, .grid, .flex, etc.)
- **Animation/transition classes** (fade-in, fade-up, etc.)

**DO NOT** create new CSS files. All styling must go into the shared `styles.css` or use inline `style=""` attributes for page-specific overrides.

---

## 2. HTML Page Template

Every new page must follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta Tags — FILL IN FOR EACH PAGE -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[PAGE TITLE] — VSON Advisory</title>
  <meta name="description" content="[120-160 character summary. Describes what the page is about for SEO and social sharing.]" />
  <meta name="keywords" content="[3-5 primary keywords related to the pillar and challenge]" />

  <!-- Social Meta Tags (OG tags) -->
  <meta property="og:title" content="[PAGE TITLE]" />
  <meta property="og:description" content="[Summary]" />
  <meta property="og:image" content="/assets/og-[page-slug].png" />
  <meta property="og:url" content="https://vson.global/[page-path]" />
  <link rel="canonical" href="https://vson.global/[page-path]" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />

  <!-- Shared Stylesheet -->
  <link rel="stylesheet" href="css/styles.css" />

  <!-- Favicon -->
  <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
</head>

<body>

  <!-- NAVIGATION (copy from existing page — do NOT modify) -->
  <nav class="nav">
    <div class="container" style="display:flex;justify-content:space-between;align-items:center;">
      <div style="display:flex;align-items:center;gap:8px;">
        <div class="nav-logomark">V</div>
        <div style="font-family:var(--serif);font-size:18px;font-weight:700;color:var(--navy);">VSON <span style="font-weight:300;color:var(--slate);">ADVISORY</span></div>
      </div>
      <div class="nav-menu">
        <a href="/" class="nav-link">Home</a>
        <a href="/approach.html" class="nav-link">Approach</a>
        <a href="/brain-trust.html" class="nav-link">Brain Trust</a>
        <a href="/vault.html" class="nav-link">The Vault</a>
        <a href="/contact.html" class="nav-link">Contact</a>
        <a class="btn btn-primary" style="margin-left:24px;">Request a Conversation</a>
      </div>
      <!-- Mobile hamburger menu -->
      <div class="nav__burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>

  <!-- MAIN CONTENT AREA (your page content goes here) -->
  <main role="main">
    <!-- Section 1 -->
    <section class="your-section">
      <div class="container">
        <!-- Page content here -->
      </div>
    </section>
    <!-- Additional sections... -->
  </main>

  <!-- FOOTER (copy from existing page — do NOT modify) -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:8px;">
            <div class="nav-logomark">V</div>
            <div style="font-family:var(--serif);font-size:18px;font-weight:700;color:white;">VSON <span style="font-weight:300;color:var(--s500);">ADVISORY</span></div>
          </div>
          <p>Operator-backed advisory for cross-border scaling. From operational friction to institutional value.</p>
          <div style="margin-top:16px;font-size:12px;color:var(--s600);">Singapore · Vietnam · USA</div>
        </div>
        <div>
          <div class="footer-col-title">Services</div>
          <ul class="footer-links">
            <li><a href="/services/strategic-finance.html">Strategic Finance &amp; M&amp;A</a></li>
            <li><a href="/services/performance-transformation.html">Performance Transformation</a></li>
            <li><a href="/services/cx-profit-multiplier.html">CX &amp; Revenue Growth</a></li>
            <li><a href="/services/digital-infrastructure.html">Digital Infrastructure</a></li>
            <li><a href="/services/global-gateway.html">Global Gateway</a></li>
            <li><a href="/services/applied-ai.html">Applied AI</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Company</div>
          <ul class="footer-links">
            <li><a href="/approach.html">Approach</a></li>
            <li><a href="/brain-trust.html">Brain Trust</a></li>
            <li><a href="/vault.html">The Vault</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Contact</div>
          <ul class="footer-links">
            <li><a href="mailto:fred@vson.global">fred@vson.global</a></li>
            <li><a href="tel:+6580488548">+65 8048 8548</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div style="width:100%;font-size:12px;color:var(--s600);margin-bottom:12px;">VSON Pte. Ltd. · UEN 202601234M · Registered at 7 Temasek Boulevard, #12-07 Suntec Tower One, Singapore 038987</div>
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;width:100%;">
          <p class="footer-copy">© 2026 VSON Pte. Ltd. All Rights Reserved.</p>
          <div class="footer-legal">
            <a href="/legal/privacy.html">Privacy Policy</a>
            <a href="/legal/terms.html">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Shared JavaScript -->
  <script src="js/main.js"></script>

  <!-- Page-specific JavaScript (if needed) -->
  <script>
    // Minimal page-specific code only
    // Keep logic in main.js whenever possible
  </script>

</body>
</html>
```

---

## 3. CSS Custom Properties (Design Tokens)

All colors, fonts, and spacing are managed as CSS variables in `styles.css`. Use them in your HTML:

### Color Variables

```css
/* Primary Colors */
--navy:   #0f172a    /* Primary text, headings, navy sections *)
--slate:  #334155    /* Secondary text, accents *)
--blue:   #3b82f6    /* Primary action color, accents *)

/* Grayscale (Slate) */
--s50:    #f8fafc    /* Lightest backgrounds *)
--s100:   #f1f5f9    (* Light backgrounds *)
--s200:   #e2e8f0    /* Borders, light elements *)
--s300:   #cbd5e1    (* Subtle dividers *)
--s400:   #94a3b8    (* Secondary text *)
--s500:   #64748b    (* Muted text *)
--s600:   #475569    (* Body text *)
--s700:   #334155    (* Slate (primary) *)
--s800:   #1e293b    (* Dark text *)
--s900:   #0f172a    (* Navy (darkest) *)

/* Paper/White */
--paper:  #f8fafc    (* Page background *)
--white:  #ffffff    (* Pure white, overlays *)
```

**Usage in HTML:**

```html
<!-- Inline styling with variables -->
<div style="background:var(--navy);color:white;">Navy section</div>
<p style="color:var(--s500);">Muted text</p>
<button style="background:var(--blue);">Primary action</button>
```

### Typography Variables

```css
--serif:  'Playfair Display', Georgia, serif    (* Headings, brand *)
--sans:   'Inter', sans-serif                   (* Body text, UI *)
```

**Usage:**

```html
<h1 style="font-family:var(--serif);font-size:2.5rem;font-weight:700;">Page Title</h1>
<p style="font-family:var(--sans);font-size:1rem;">Body text here.</p>
```

---

## 4. Reusable Component Classes

All components are pre-built in `styles.css`. Copy-paste the class and adapt markup:

### Button Component

```html
<!-- Primary Button -->
<a class="btn btn-primary">Request a Conversation</a>

<!-- Ghost Button (outline) -->
<a class="btn btn-ghost">Learn More →</a>

<!-- Secondary Button -->
<button class="btn btn-secondary">View Case Studies</button>

<!-- Full-width Button -->
<button class="btn btn-primary" style="width:100%;justify-content:center;">Submit Form</button>
```

**CSS (in styles.css):**

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--blue);
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-ghost {
  background: transparent;
  color: var(--navy);
  border: 1px solid var(--blue);
}

.btn-ghost:hover {
  background: var(--s50);
}
```

### Card Component

```html
<div class="card">
  <h3 class="card-title">Service Title</h3>
  <p class="card-body">Description of the service or offering.</p>
  <a class="btn btn-ghost" style="margin-top:16px;">Learn More →</a>
</div>
```

### Grid Layouts

```html
<!-- 3-Column Grid (auto-responsive) -->
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;">
  <div class="card"><!-- Card 1 --></div>
  <div class="card"><!-- Card 2 --></div>
  <div class="card"><!-- Card 3 --></div>
</div>

<!-- 2-Column Grid (with fallback to 1 on mobile) -->
<div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;">
  <div><!-- Left column --></div>
  <div><!-- Right column --></div>
</div>

@media (max-width: 768px) {
  /* On mobile, stack to 1 column */
  grid-template-columns: 1fr;
}
```

### Section Pattern (Eyebrow + Divider + Heading + Intro)

```html
<section style="background:var(--white);padding:64px 0;">
  <div class="container">
    <div class="section-eyebrow">Section Label (optional)</div>
    <div class="divider-accent" style="width:60px;height:3px;background:var(--blue);margin:12px 0 32px;"></div>
    <h2 class="section-heading">Main Section Heading</h2>
    <p class="section-intro">Introductory paragraph for context and positioning.</p>

    <!-- Section content here -->
  </div>
</section>
```

### Tag/Pillar Label

```html
<div class="tag" style="background:var(--s100);color:var(--slate);font-size:12px;font-weight:600;padding:4px 12px;border-radius:4px;display:inline-block;">
  Strategic Finance & M&A Integrity
</div>
```

---

## 5. Common Layout Patterns

### Hero Section Pattern

```html
<section class="hero" style="background:var(--navy);color:white;padding:120px 0;min-height:100vh;display:flex;align-items:center;">
  <div class="container">
    <h1 style="font-family:var(--serif);font-size:3.5rem;line-height:1.2;margin-bottom:24px;">
      Your Hero Headline
    </h1>
    <p style="font-size:1.25rem;color:var(--s300);max-width:600px;margin-bottom:40px;">
      Supporting subheadline or intro paragraph.
    </p>
    <a class="btn btn-primary" style="background:white;color:var(--navy);">Primary CTA</a>
  </div>
</section>
```

### Two-Column Content Pattern

```html
<section style="padding:64px 0;">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;">
      <div>
        <h2>Left Column Heading</h2>
        <p>Body copy here...</p>
        <ul style="margin-top:20px;display:flex;flex-direction:column;gap:12px;">
          <li>• First point</li>
          <li>• Second point</li>
          <li>• Third point</li>
        </ul>
      </div>
      <div>
        <img src="/assets/images/sample.png" alt="Descriptive alt text" style="width:100%;border-radius:8px;" />
      </div>
    </div>
  </div>
</section>

@media (max-width: 768px) {
  grid-template-columns: 1fr;
  gap: 40px;
}
```

### Card Grid Pattern

```html
<section style="background:var(--s50);padding:64px 0;">
  <div class="container">
    <h2 class="section-heading">Our Six Capabilities</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:32px;margin-top:48px;">
      <!-- Card 1 -->
      <div class="card">
        <div style="font-size:2rem;font-weight:700;color:var(--blue);margin-bottom:16px;">01</div>
        <h3 style="font-family:var(--serif);font-size:1.5rem;margin-bottom:12px;">Capability Title</h3>
        <p>Description of what this capability helps with...</p>
      </div>
      <!-- Repeat for 2-6 -->
    </div>
  </div>
</section>
```

### Feature List Pattern (with icons/numbers)

```html
<div style="display:flex;flex-direction:column;gap:24px;">
  <div style="display:flex;gap:20px;">
    <div style="flex-shrink:0;">
      <div style="width:40px;height:40px;background:var(--blue);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;">✓</div>
    </div>
    <div>
      <h4 style="font-family:var(--serif);font-size:1.125rem;margin-bottom:8px;">Feature Title</h4>
      <p>Description of the feature or benefit.</p>
    </div>
  </div>
  <!-- Repeat for more features -->
</div>
```

---

## 6. Mobile Responsiveness Checklist

All pages must be mobile-responsive. Before deploying, verify:

- [ ] Navigation collapses to hamburger menu on screens < 768px (handled by `main.js`)
- [ ] Container padding adjusts for mobile (defined in CSS)
- [ ] Grid layouts stack to 1 column on mobile (use CSS media queries)
- [ ] Font sizes remain readable (minimum 16px for body text)
- [ ] Buttons have minimum 44px touch target (WCAG recommendation)
- [ ] Images scale down proportionally on mobile
- [ ] Spacing (margins/padding) reduces proportionally on mobile

**Quick Mobile Test:**

```bash
# Open DevTools (F12 in Chrome)
# Click "Toggle Device Toolbar" (Ctrl+Shift+M)
# Test common viewports: iPhone 12 (390px), iPad (768px), Desktop (1024px+)
```

---

## 7. Accessibility Standards (WCAG 2.1 AA)

All pages must meet accessibility standards:

### Heading Hierarchy

```html
<!-- CORRECT: Headings flow logically -->
<h1>Page Title</h1>  <!-- One h1 per page -->
<h2>Section 1</h2>
<h3>Subsection 1a</h3>
<h2>Section 2</h2>

<!-- WRONG: Don't skip levels -->
<h1>Page Title</h1>
<h3>Subsection</h3>  <!-- Missing h2 -->
```

### Image Alt Text

```html
<!-- GOOD: Descriptive alt text -->
<img src="/assets/images/team-meeting.png" alt="VSON team discussing strategic options in meeting room" />

<!-- AVOID: Vague alt text -->
<img src="/assets/images/team-meeting.png" alt="team" />

<!-- Decorative images: empty alt -->
<img src="/assets/images/divider.png" alt="" />
```

### Color Contrast

Minimum contrast ratio: 4.5:1 for text on background.

- Navy (#0f172a) on white (#ffffff): ✓ Pass (23:1)
- Slate (#334155) on white: ✓ Pass (8:1)
- Blue (#3b82f6) on white: ✓ Pass (4.5:1)

**Test contrast:** Use WebAIM Contrast Checker or Lighthouse audit.

### Form Labels

```html
<!-- CORRECT: Explicit label -->
<label for="email">Email Address</label>
<input id="email" type="email" placeholder="you@example.com" />

<!-- AVOID: Placeholder as label -->
<input type="email" placeholder="Email Address" />
```

### Link Text

```html
<!-- GOOD: Clear, descriptive link text -->
<a href="/insights/scaling-guide.html">Read our guide to scaling beyond $10M ARR</a>

<!-- AVOID: Generic link text -->
<a href="/insights/scaling-guide.html">Click here</a> or <a href="/insights/scaling-guide.html">Learn more</a>
```

---

## 8. SEO Best Practices

### Meta Tags Template

Every page needs:

```html
<title>Page Topic — VSON Advisory</title>
<meta name="description" content="[120-160 chars. Describes page purpose.]" />
<meta name="keywords" content="[3-5 primary keywords]" />
<meta property="og:title" content="[Page Title]" />
<meta property="og:description" content="[Summary]" />
<meta property="og:image" content="/assets/og-[slug].png" />
<link rel="canonical" href="https://vson.global/[path]" />
```

### Heading Structure (H1 → H2 → H3)

- **H1**: One per page, main topic (usually at top)
- **H2**: Major sections
- **H3**: Subsections under H2

```html
<h1>Strategic Finance & M&A Readiness (Main page topic)</h1>

<h2>Why Finance Matters for Exit Planning</h2>
<p>...</p>

<h3>Three Key Areas of Focus</h3>
<p>...</p>

<h3>How VSON Approaches Finance</h3>
<p>...</p>

<h2>Case Study: Electronics Importer</h2>
<p>...</p>
```

### Internal Linking

Every article/page should link to:
- At least 3 related pages or service pillars
- Contact or CTA page (call to action)
- Home page (footer nav is automatic)

**Example linking strategy:**

```html
<!-- In a case study about performance transformation -->
<p>
  This client applied principles from our
  <a href="/services/performance-transformation.html">Performance Transformation</a>
  pillar, combined with
  <a href="/insights/cost-optimization-strategy.html">cost optimization insights</a>.
</p>

<!-- Near the end, a CTA -->
<p>
  <a href="/contact.html" class="btn btn-primary">Start Your Own Transformation</a>
</p>
```

---

## 9. JavaScript Usage (main.js Overview)

The shared `main.js` handles:
- Sticky nav on scroll
- Mobile hamburger menu
- Active link highlighting (based on current URL)
- Fade-up animations on scroll (using `data-fade` attribute)
- Contact form basic UX

### Using the Fade-Up Animation

Add `data-fade` attribute to any element you want to fade in on scroll:

```html
<div data-fade style="opacity:0;transform:translateY(24px);">
  This element will fade in when it enters the viewport
</div>
```

No additional JavaScript needed — it's handled by the shared `main.js`.

### Adding Page-Specific JavaScript

If your page needs custom functionality:

```html
<script>
  // Minimal, page-specific code only
  // Keep logic in main.js whenever possible

  (function () {
    'use strict';

    // Your code here
    console.log('Page-specific script loaded');
  })();
</script>
```

**DO NOT** override global functions or create duplicate event listeners.

---

## 10. Image & Asset Management

### Image Optimization

Before adding images to a page:

1. **Compress** using TinyPNG, ImageOptim, or Squoosh
2. **Format**: Use .jpg for photos, .png for graphics, .svg for logos/icons
3. **Size**: Images should not exceed 200KB
4. **Resolution**: Provide 2x variants for retina displays (e.g., `image.png` + `image@2x.png`)
5. **Alt text**: Always include descriptive alt text

```html
<img
  src="/assets/images/case-study-photo.jpg"
  alt="CFO presenting financial dashboard to board members"
  style="width:100%;max-width:800px;border-radius:8px;"
/>
```

### Using CSS Background Images

For decorative backgrounds:

```html
<div style="
  background-image:url('/assets/images/pattern.png');
  background-size:cover;
  background-position:center;
  padding:60px;
">
  Content over background
</div>
```

### SVG Icons

For logos, icons, and graphics:

```html
<!-- Inline SVG -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="..." stroke="currentColor" stroke-width="2" />
</svg>

<!-- Or reference SVG file -->
<img src="/assets/icons/arrow-right.svg" alt="" style="width:20px;height:20px;" />
```

---

## 11. Form Handling

### Contact Form Pattern

```html
<form class="contact-form">
  <div class="form-group">
    <label class="form-label" for="name">Your Name</label>
    <input class="form-input" id="name" type="text" placeholder="John Doe" required />
  </div>

  <div class="form-group">
    <label class="form-label" for="email">Email Address</label>
    <input class="form-input" id="email" type="email" placeholder="john@company.com" required />
  </div>

  <div class="form-group">
    <label class="form-label" for="situation">What situation are you facing?</label>
    <select class="form-select" id="situation" required>
      <option value="">Select an option</option>
      <option value="scaling">Scaling &amp; Growth</option>
      <option value="turnaround">Turnaround &amp; Stabilization</option>
      <option value="investment">Investment Readiness</option>
      <option value="expansion">Cross-Border Expansion</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div class="form-group">
    <label class="form-label" for="message">Tell us more (optional)</label>
    <textarea class="form-textarea" id="message" placeholder="Describe your situation..."></textarea>
  </div>

  <button class="btn btn-primary" type="submit" style="width:100%;justify-content:center;">Submit Inquiry</button>
</form>
```

**Form Submission:** Currently, `main.js` simulates a submission with a success message. For real submissions, replace the form handler with an API endpoint or service (Formspree, Netlify Forms, custom backend).

---

## 12. Performance Checklist

Before deploying any new page:

- [ ] Lighthouse score ≥ 80 (Performance, Accessibility, Best Practices, SEO)
- [ ] Total page size < 1MB
- [ ] Largest image < 200KB
- [ ] No unused CSS or JavaScript
- [ ] Fonts are preloaded (in `<head>`)
- [ ] Links are checked (no 404s)
- [ ] Mobile responsiveness tested on 3+ breakpoints
- [ ] Accessibility audit passed (WCAG AA)

**Run Lighthouse:**

```
DevTools (F12) → Lighthouse → Generate report
```

---

## 13. Deployment & QA

### Pre-Launch Checklist

- [ ] All links work (internal and external)
- [ ] All images load and have alt text
- [ ] Form submission works
- [ ] Nav highlights active page correctly
- [ ] Mobile menu opens/closes on all devices
- [ ] Page loads in < 3 seconds (desktop) and < 5 seconds (mobile)
- [ ] All text is spell-checked
- [ ] Metadata (title, description) is unique per page
- [ ] Social sharing preview looks correct (OG tags)

### Browser Testing Matrix

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari
- Android Chrome

---

## 14. Common Patterns & Code Snippets

### CTA Banner at End of Page

```html
<section style="background:var(--navy);color:white;padding:80px 0;text-align:center;">
  <div class="container">
    <h2 style="font-family:var(--serif);font-size:2.5rem;margin-bottom:24px;">Ready to Explore This Further?</h2>
    <p style="font-size:1.125rem;max-width:600px;margin:0 auto 32px;">Start with a serious conversation about your current situation and goals.</p>
    <a class="btn btn-primary" style="background:white;color:var(--navy);">Request a Strategic Briefing</a>
  </div>
</section>
```

### Table (for data comparison)

```html
<div style="overflow-x:auto;margin:32px 0;">
  <table style="width:100%;border-collapse:collapse;">
    <thead>
      <tr style="border-bottom:2px solid var(--s200);">
        <th style="text-align:left;padding:12px;font-weight:600;color:var(--navy);">Feature</th>
        <th style="text-align:left;padding:12px;font-weight:600;color:var(--navy);">Standard</th>
        <th style="text-align:left;padding:12px;font-weight:600;color:var(--navy);">Premium</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid var(--s100);">
        <td style="padding:12px;">Item 1</td>
        <td style="padding:12px;">✓</td>
        <td style="padding:12px;">✓</td>
      </tr>
      <!-- More rows -->
    </tbody>
  </table>
</div>
```

### Testimonial / Quote Block

```html
<blockquote style="
  border-left:4px solid var(--blue);
  padding-left:24px;
  margin:32px 0;
  font-style:italic;
  color:var(--s700);
  font-family:var(--serif);
  font-size:1.25rem;
">
  "This is a powerful testimonial quote that illustrates the impact of the engagement. It should be specific and measurable."
  <div style="margin-top:16px;font-style:normal;font-size:0.9rem;color:var(--slate);">
    — <strong>Client Name</strong>, Title at Company
  </div>
</blockquote>
```

---

## 15. Naming Conventions

### CSS Class Names

Use BEM (Block-Element-Modifier) for custom components:

```css
/* Block: standalone component */
.testimonial { }

/* Element: part of block */
.testimonial__quote { }
.testimonial__author { }

/* Modifier: variant of block */
.testimonial--featured { }
```

### HTML IDs and Data Attributes

Use kebab-case for IDs and data attributes:

```html
<div id="main-content">...</div>
<div data-section-type="hero">...</div>
<form data-form-type="contact">...</form>
```

### File Names

Use lowercase, hyphens for word separation:

```
good-file-name.html
CaseStudy.html  ← AVOID
case_study.html ← AVOID (use hyphens, not underscores)
```

---

## 16. Summary: Quick Start for a New Page

1. **Copy** the HTML template from this guide (Section 2)
2. **Fill in** metadata (title, description, keywords, OG tags)
3. **Build** your content using the patterns in Section 5
4. **Use** CSS variables and component classes (Sections 3-4)
5. **Make** it responsive using grid and flexbox (mobile-first)
6. **Test** accessibility (headings, links, contrast, alt text)
7. **Validate** links, images, and forms
8. **Run** Lighthouse and fix any issues > 80
9. **Deploy** and monitor for 404s or performance issues

---

**Questions?** Reference `styles.css` for all available CSS classes and variables.
