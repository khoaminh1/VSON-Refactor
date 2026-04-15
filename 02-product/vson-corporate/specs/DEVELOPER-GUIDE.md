# VSON Corporate — Developer Guide

**Project:** vson.vn
**Version:** 1.0
**Date:** 2026-04-01
**Read this before touching any code.**

---

## 1. Where We Are

The visual concept (wireframe prototype) is complete. All 12 pages have been built as
standalone HTML files in `wireframes/`. They contain real copy, real design tokens,
and real content structure — not lorem ipsum.

**Your job as the production developer is to:**
1. Read this guide fully
2. Review all 12 wireframe pages in a browser
3. Wait for the outstanding content assets listed in §4
4. Build the production site using the wireframes as the pixel-perfect spec

---

## 2. Folder Structure

```
vson-corporate/
│
├── PROJECT.md              ← Project status, decisions log, blockers
├── DEVELOPER-GUIDE.md      ← YOU ARE HERE
├── DESIGN-SPEC.md          ← Full page-by-page content and layout spec
├── DISCOVERY-BRIEF.md      ← Original discovery output (background only)
│
├── wireframes/             ← Visual concept — THE BUILD SPEC
│   ├── shared.css          ← Master stylesheet — design tokens, all shared components
│   ├── _template.html      ← Base template for new pages
│   ├── home.html
│   ├── about.html
│   ├── activation-solutions.html
│   ├── market-development.html
│   ├── store.html
│   ├── case-studies.html
│   ├── cs-01-electronics-retail.html
│   ├── cs-02-education.html
│   ├── cs-03-fashion-retail.html
│   ├── cs-04-oem-merchandise.html
│   ├── cs-05-ict-distribution.html
│   └── contact.html
│
└── _content/               ← Content assets and tracking
    ├── TRACKER.md          ← Master content status dashboard
    ├── briefs/             ← Content briefing docs (sent to Fred's team)
    │   ├── 01-case-studies-brief.md   ← 5 case study drafts + client quotes
    │   ├── 02-leadership-brief.md     ← Headshot specs and bio brief
    │   ├── 02-leadership-brief.pdf
    │   ├── 03-logo-approvals-brief.md ← Logo usage approval process
    │   ├── 03-logo-approvals-brief.pdf
    │   ├── 04-visual-imagery-brief.md ← Visual asset checklist per zone
    │   └── 04-visual-imagery-brief.pdf
    ├── case-studies/
    │   ├── _incoming/      ← Drop received case study assets here
    │   └── _approved/      ← Move here once Fred has approved
    ├── leadership/
    │   ├── _incoming/      ← Drop headshots here when received
    │   └── _approved/
    ├── logos/
    │   ├── _incoming/      ← Drop logo files here when received
    │   └── _approved/
    └── visual-imagery/
        ├── _incoming/
        └── _approved/
```

---

## 3. Design System

### Design Tokens (all in `wireframes/shared.css`)

```css
--forest-green:    #1B4D3E   /* Primary — headings, nav, hero backgrounds */
--digital-emerald: #2E8B57   /* Secondary — CTAs, links, highlights */
--tech-mint:       #A7FFEB   /* Accent — data touchpoints, hover, em text on dark */
--mint-white:      #F1F8F6   /* Page background, section alternation */
--clean-white:     #FFFFFF
--neutral-grey:    #333333   /* Body copy on light backgrounds */
--store-green:     #2AA84E   /* Store section ONLY */
--store-orange:    #ED7D28   /* Store section ONLY */
--border-light:    rgba(27,77,62,0.12)
```

### Typography

| Use | Font | Weights | Source |
|-----|------|---------|--------|
| Headlines | Montserrat | 400, 600, 700, 800 | Google Fonts |
| Body | Inter | 300, 400, 500, 600 | Google Fonts |

Google Fonts import (already in every page):
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

### Spacing & Layout

- Max content width: `1160px` (`.container`)
- Section padding: `96px 0` (`.section`) · `64px 0` (`.section--sm`)
- Container padding: `0 24px`

### Colour Rules

- Orange (#ED7D28) appears on Store page only — never on corporate or Solutions pages
- Tech Mint (#A7FFEB) used as accent only — never as a background fill
- All hero backgrounds use Forest Green or a dark gradient anchored to Forest Green

---

## 4. Content Assets — Outstanding

Do not build the production pages for these sections until assets are received.
All assets go into `_content/[category]/_incoming/` first, then Fred approves to `_approved/`.

| Asset | Where used | Status | Notes |
|-------|-----------|--------|-------|
| Headshots × 4 (FD, HH, EV, DL) | About — leadership cards | ⏹ Pending | Min 400×400px, square crop |
| Logos × 4 (Torayvino, Zojirushi, Kingbag, Nepia) | Home §4 + Store | ⏹ Pending | SVG preferred, PNG fallback |
| Logos × 4 (Dell, HP, Lenovo, ASUS) | Home §4 | ⏹ Pending | Requires written brand approval |
| Case study selection (3 of 5) | Case Studies index | ⏹ Pending Fred | Fred to confirm which 3 to feature |
| Home hero visual | Home §1 right column | ⏹ Direction TBD | Photo vs graphic — confirm with Fred |
| Brand lifestyle photos × 4 | Store — brand cards | ⏹ Pending | Torayvino, Zojirushi, Kingbag, Nepia |

---

## 5. Page-by-Page Build Notes

### home.html
- Hero: two-column layout. Left = headline + CTA. Right = visual (TBD — placeholder for now)
- Logo row: two rows (Brands we distribute / Clients we've served). Use SVG logos at ~120px height, greyscale with colour on hover
- Case study preview: show 2 cards linking to the first two selected case studies

### about.html
- Leadership: replace `.leader-card__initials` spans with `<img>` tags once headshots arrive
- Photo placeholder background colours per card are set — maintain them until real photos land

### store.html
- Brand cards: current treatment is CSS gradient blocks. Replace with lifestyle photos once received
- "Where to buy" channel links: Fred to provide final URLs for Shopee, Lazada, Zalo Shop

### case-studies.html
- Currently shows all 5 cards. Fred will select 3 to feature — remove the other 2 cards and update the filter count
- Filter bar: update tag labels to match final approved tags if they change

### cs-01 through cs-05
- All 5 pages are fully built. Activate only the 3 Fred selects
- Case study hero gradients are per-story — keep them as differentiators
- Snapshot stats: all figures are from approved content brief — do not change without Fred sign-off

### contact.html
- Form is HTML only (no backend). Needs form submission handler (see §6)

---

## 6. Production Tech Stack Recommendation

The wireframes are static HTML/CSS/JS — intentionally framework-free for review speed.
For production, the recommended approach is:

| Concern | Recommendation | Why |
|---------|---------------|-----|
| Build tool | **Eleventy (11ty)** or **plain HTML** | No React overhead needed; static site is fine |
| CSS | Extract `shared.css` as-is into production | Already production-quality |
| Hosting | **Vercel** or **Netlify** | Free tier, instant deploys, custom domain, SSL |
| DNS | Point `vson.vn` A record to host | Domain is owned — just needs DNS update |
| Contact form | **Formspree** or **Netlify Forms** | No backend required; free tier handles volume |
| Vietnamese (Phase 2) | Add `/vi/` directory with translated pages | Simple, no i18n library needed at this scale |
| Analytics | Google Analytics 4 | Free; standard |
| Images | Compress to WebP via Squoosh before upload | All images should be <200KB |

### Minimum viable for launch
1. All HTML files moved to production folder
2. `shared.css` linked correctly
3. Contact form connected to Formspree
4. DNS pointed to host
5. SSL certificate active (auto via Vercel/Netlify)
6. Google Analytics snippet in `<head>` of all pages

---

## 7. SEO Basics (implement at build time)

Each page needs the following in `<head>`:

```html
<meta name="description" content="[page-specific description, 150–160 chars]" />
<meta property="og:title" content="VSON — [Page Name]" />
<meta property="og:description" content="[same as description]" />
<meta property="og:image" content="[og-image.jpg — 1200×630px]" />
<meta property="og:url" content="https://vson.vn/[page-path]" />
<link rel="canonical" href="https://vson.vn/[page-path]" />
```

Page titles follow the pattern: `VSON — [Page Name]` (already set in wireframes).

---

## 8. What the Next Developer Should Do First

1. Open `wireframes/home.html` in a browser — get the visual context
2. Read `DESIGN-SPEC.md` — understand every page's intent
3. Read `_content/TRACKER.md` — know what content is ready and what isn't
4. Check `_content/briefs/01-case-studies-brief.md` — read the 5 case study drafts
5. Check with Fred which 3 case studies to feature before building case study pages
6. Do not hardcode any logo or brand asset that hasn't been through `_approved/`
7. Build the contact form handler before anything else (it's a common launch blocker)

---

## 9. Decisions Already Made — Do Not Revisit

| Decision | Details |
|----------|---------|
| Site architecture | 7 core pages + case study detail pages per story — confirmed |
| Brand system | Forest Green / Digital Emerald / Tech Mint — locked |
| Typography | Montserrat + Inter — locked |
| Language strategy | English Phase 1 → /vi/ Phase 2 — locked |
| Case studies page | Shows 3 cards (Fred to select which 3 from 5 available) |
| Leadership team | FD, HH, EV (Emily Vo), DL (Duy Le) — all confirmed |
| No orange on corporate canvas | Store section only — non-negotiable |

---

## 10. Open Questions (resolve with Fred before build)

| Question | Impact |
|----------|--------|
| Which 3 of 5 case studies to feature? | Determines which detail pages to activate |
| Home hero treatment — photo or graphic? | Hero layout differs depending on choice |
| Store channel URLs (Shopee, Lazada, Zalo)? | Needed for "Where to Buy" links |
| Contact form routing — confirm email addresses? | solutions@vson.vn and hello@vson.vn confirmed in spec |
| Google Analytics property ID? | Needed before launch |
| Phase 2 Vietnamese timeline? | Affects whether to set up i18n structure from the start |

---

*End of Developer Guide — v1.0 · 2026-04-01*
