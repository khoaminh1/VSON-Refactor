# VSON Web Platform — Next.js Monorepo Scaffold Specification

**Version:** 1.0
**Date:** 2026-04-12
**Author:** Fred Dang (PM)
**Purpose:** Hand this spec to Claude Code (or any developer) to initialise the project from scratch.

---

## 1. Project Context

### What we're building
A **Next.js monorepo** hosting two websites for two separate business entities under the VSON umbrella:

| Site | Domain | Pages | Language |
|------|--------|-------|----------|
| **VSON Corporate** | vson.vn | 12 pages (7 core + 5 case study detail) | English Phase 1 → Bilingual Phase 2 (/vi/) |
| **VSON Advisory** | vsonadvisory.com | 7 pages | English only |

These are **separate brands** with different colour palettes, typography, and tone — but they share common UI patterns (nav, footer, hero sections, card grids, contact forms, section layouts).

### What already exists
- **12 wireframe HTML files** for VSON Corporate (vanilla HTML/CSS/JS) — production-quality design with real copy, real design tokens, and real content structure. These are the **reference spec**, not throwaway prototypes.
- **7 build HTML files** for VSON Advisory — same quality level.
- **Full design specification** documents: DESIGN-SPEC.md, DEVELOPER-GUIDE.md, DISCOVERY-BRIEF.md per project.
- **Shared CSS** (`shared.css`) per project containing the complete design token system.
- Content briefs, case study drafts, leadership bios, and visual imagery specs.

### What we're NOT doing
- Not building a CMS — content is managed via markdown files in the repo.
- Not building complex backend services — Supabase handles contact forms only.
- Not migrating the vanilla HTML line-by-line — we use the wireframes as reference and rebuild as proper Next.js components.

---

## 2. Architecture — Monorepo Structure

Use **Turborepo** with pnpm workspaces. Three workspace categories: apps (deployable sites), packages (shared code), and content (markdown).

```
vson-web/
│
├── turbo.json                        ← Turborepo pipeline config
├── pnpm-workspace.yaml               ← Workspace definition
├── package.json                      ← Root scripts + devDependencies
├── .gitignore
├── .env.example                      ← Supabase URL + anon key template
│
├── apps/
│   ├── corporate/                    ← vson.vn (Next.js app)
│   │   ├── next.config.js
│   │   ├── vercel.json
│   │   ├── package.json
│   │   ├── app/                      ← App Router
│   │   │   ├── layout.tsx            ← Root layout (nav + footer)
│   │   │   ├── page.tsx              ← Home
│   │   │   ├── about/page.tsx
│   │   │   ├── solutions/
│   │   │   │   ├── activation-solutions/page.tsx
│   │   │   │   └── market-development/page.tsx
│   │   │   ├── store/page.tsx
│   │   │   ├── case-studies/
│   │   │   │   ├── page.tsx          ← Index (filterable grid)
│   │   │   │   └── [slug]/page.tsx   ← Dynamic case study detail
│   │   │   └── contact/page.tsx
│   │   ├── components/               ← Site-specific components (if any)
│   │   └── styles/
│   │       └── tokens.css            ← Corporate design tokens
│   │
│   └── advisory/                     ← vsonadvisory.com (Next.js app)
│       ├── next.config.js
│       ├── vercel.json
│       ├── package.json
│       ├── app/                      ← App Router
│       │   ├── layout.tsx
│       │   ├── page.tsx              ← Home
│       │   ├── approach/page.tsx
│       │   ├── capabilities/page.tsx
│       │   ├── brain-trust/page.tsx
│       │   ├── vault/page.tsx
│       │   ├── contact/page.tsx
│       │   └── thank-you/page.tsx
│       ├── components/
│       └── styles/
│           └── tokens.css            ← Advisory design tokens
│
├── packages/
│   ├── ui/                           ← Shared React components
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── Hero.tsx
│   │   │   ├── CardGrid.tsx
│   │   │   ├── SectionWrapper.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Nav.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── LeaderCard.tsx
│   │   │   ├── CaseStudyCard.tsx
│   │   │   └── index.ts              ← Barrel export
│   │   └── tsconfig.json
│   │
│   ├── lib/                          ← Shared utilities
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── supabase.ts           ← Supabase client init
│   │   │   ├── markdown.ts           ← Markdown parser (gray-matter + remark)
│   │   │   └── metadata.ts           ← SEO metadata helper
│   │   └── tsconfig.json
│   │
│   └── config/                       ← Shared configs
│       ├── eslint/
│       └── tsconfig/
│
└── content/                          ← Markdown content (both sites)
    ├── corporate/
    │   ├── pages/
    │   │   ├── home.md
    │   │   ├── about.md
    │   │   ├── activation-solutions.md
    │   │   ├── market-development.md
    │   │   ├── store.md
    │   │   └── contact.md
    │   ├── case-studies/
    │   │   ├── electronics-retail.md
    │   │   ├── education.md
    │   │   ├── fashion-retail.md
    │   │   ├── oem-merchandise.md
    │   │   └── ict-distribution.md
    │   └── team/
    │       ├── frederick-dang.md
    │       ├── henry-hung.md
    │       ├── emily-vo.md
    │       └── duy-le.md
    │
    └── advisory/
        ├── pages/
        │   ├── home.md
        │   ├── approach.md
        │   ├── capabilities.md
        │   ├── brain-trust.md
        │   ├── vault.md
        │   └── contact.md
        └── articles/                 ← Vault articles (future)
```

---

## 3. Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| **Framework** | Next.js 14+ (App Router) | Best Vercel integration, built-in i18n for Phase 2, API routes for Supabase |
| **Language** | TypeScript | Type safety, better DX, industry standard |
| **Monorepo** | Turborepo + pnpm | Fast builds, workspace isolation, Vercel-native |
| **Styling** | CSS Modules + CSS custom properties | No build dependency, matches existing token system, easy to reference from wireframes |
| **Content** | Markdown (gray-matter + remark/rehype) | Git-tracked, easy to edit, no CMS dependency |
| **Forms** | Supabase (REST API via server action) | Already live, Fred owns the data, email notifications via webhook |
| **Hosting** | Vercel (two projects, one repo) | Auto-preview deploys, edge CDN, HTTPS |
| **Database** | Supabase (PostgreSQL) | Contact form submissions only |
| **Backend** | Railway | Available if needed in future — not required for Phase 1 |
| **Analytics** | Vercel Analytics or GA4 | TBD — configure post-launch |
| **Fonts** | Google Fonts (Montserrat + Inter) | Both support Vietnamese diacritics |

### Why CSS Modules (not Tailwind)
The existing wireframes use a well-defined CSS custom property system. CSS Modules let us carry the same token approach (`var(--forest-green)`) into components without adding a build dependency or learning Tailwind. Each site has its own `tokens.css` that defines its palette — components read tokens, not hard-coded colours.

---

## 4. Content System — Markdown

### Frontmatter schema (pages)

```markdown
---
title: "About VSON"
description: "SEO meta description (150-160 chars)"
ogImage: "/images/og-about.jpg"
sections:
  - type: hero
    headline: "The People Behind VSON"
    subline: "Built on 20 years of trust."
  - type: story
    body: true  # renders the markdown body below
  - type: leadership
    source: team/*.md
  - type: cta
    headline: "Ready to explore what VSON can do for you?"
    button: "Request a Consultation"
    link: "/contact"
---

## Optional body content rendered by the "story" section type
```

### Frontmatter schema (team members)

```markdown
---
name: "Frederick Dang"
title: "Co-Founder & CEO"
photo: "/images/team/fred.jpg"
order: 1
---

Frederick built VSON from the ground up — from the first brand partnership to the ecosystem it is today. His focus has always been on the fundamentals: the right brands, the right structure, and the execution discipline to make growth stick.
```

### Frontmatter schema (case studies)

```markdown
---
title: "Nationwide brand activation for a leading electronics retailer"
slug: "electronics-retail"
track: "Activation Solutions"
tags: ["Campaign Activation", "Trade Marketing"]
client: "A leading international electronics brand"
featured: true
thumbnail: "/images/case-studies/cs-01.jpg"
stats:
  - label: "Retail locations"
    value: "500+"
  - label: "Campaign duration"
    value: "6 months"
  - label: "Consumer reach"
    value: "2M+"
---

Case study body content here...
```

---

## 5. Shared Components — packages/ui

All components accept brand tokens via CSS custom properties. They never import colours directly — the consuming app's `tokens.css` defines the palette.

### Component inventory

| Component | Props | Used by |
|-----------|-------|---------|
| `<Hero>` | headline, subline, eyebrow?, backgroundVariant ("gradient" \| "image"), cta? | Both — every page has a hero |
| `<SectionWrapper>` | background ("white" \| "tinted" \| "dark"), padding ("default" \| "compact"), id? | Both — wraps every content section |
| `<CardGrid>` | columns (2 \| 3 \| 4), gap?, children | Both — leadership, case studies, services, brands |
| `<Card>` | image?, title, subtitle?, body?, link?, hoverEffect? | Both — generic card used in grids |
| `<LeaderCard>` | name, title, photo, bio | Both — About page leadership grid |
| `<CaseStudyCard>` | title, track, tags[], thumbnail?, client, link | Corporate — case study index |
| `<ContactForm>` | enquiryTypes[], submitEndpoint, successRedirect? | Both — contact pages |
| `<Button>` | variant ("primary" \| "secondary" \| "outline" \| "ghost"), size?, href? | Both — CTAs everywhere |
| `<Nav>` | logo, links[], cta | Both — different links and brand per site |
| `<Footer>` | companyInfo, links[], socials[] | Both — different content per site |
| `<LogoStrip>` | logos[], title?, variant ("colour" \| "greyscale") | Corporate — Heritage section |
| `<CtaBand>` | headline, subline?, button, link | Both — bottom-of-page CTA sections |
| `<FilterBar>` | filters[], activeFilter, onFilter | Corporate — case study filtering |

### Design tokens per site

**Corporate (vson.vn) — `apps/corporate/styles/tokens.css`**
```css
:root {
  --brand-primary:    #1B4D3E;  /* Forest Green */
  --brand-secondary:  #2E8B57;  /* Digital Emerald */
  --brand-accent:     #A7FFEB;  /* Tech Mint */
  --brand-bg-tinted:  #F1F8F6;  /* Mint White */
  --brand-bg-white:   #FFFFFF;
  --brand-text:       #333333;
  --brand-border:     rgba(27,77,62,0.12);
  --font-heading:     'Montserrat', sans-serif;
  --font-body:        'Inter', sans-serif;
}
```

**Advisory (vsonadvisory.com) — `apps/advisory/styles/tokens.css`**
```css
:root {
  --brand-primary:    #1B2A4A;  /* Navy */
  --brand-secondary:  #4A6FA5;  /* Slate Blue */
  --brand-accent:     #E8D5B7;  /* Warm Gold */
  --brand-bg-tinted:  #F5F5F0;  /* Warm White */
  --brand-bg-white:   #FFFFFF;
  --brand-text:       #333333;
  --brand-border:     rgba(27,42,74,0.12);
  --font-heading:     'Playfair Display', serif;
  --font-body:        'Inter', sans-serif;
}
```

Components reference `var(--brand-primary)` etc. — never hard-coded hex values.

---

## 6. Supabase Integration — Forms Only

### Table schema

```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  site TEXT NOT NULL CHECK (site IN ('corporate', 'advisory')),
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  enquiry_type TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  is_read BOOLEAN DEFAULT false
);

-- Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form submission)
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Only authenticated users can read (for admin dashboard, future)
CREATE POLICY "Authenticated read" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');
```

### Server Action (Next.js)

```typescript
// packages/lib/src/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

```typescript
// apps/corporate/app/contact/actions.ts
'use server'

import { supabase } from '@vson/lib/supabase'

export async function submitContactForm(formData: FormData) {
  const { error } = await supabase.from('contact_submissions').insert({
    site: 'corporate',
    name: formData.get('name'),
    company: formData.get('company'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    enquiry_type: formData.get('enquiry_type'),
    message: formData.get('message'),
  })

  if (error) throw new Error('Submission failed')
  return { success: true }
}
```

### Email notification
Configure a Supabase Database Webhook on the `contact_submissions` table (INSERT trigger) → sends to a webhook endpoint (e.g., Supabase Edge Function or external service like Resend) → delivers email to:
- `solutions@vson.vn` for Activation Solutions + Market Development enquiries
- `hello@vson.vn` for Distribution, Store Partnership, and General enquiries

---

## 7. Deployment — Vercel

### Two Vercel projects, one repo

| Vercel Project | Root Directory | Domain | Branch → Environment |
|----------------|---------------|--------|---------------------|
| vson-corporate | `apps/corporate` | vson.vn | main → Production, * → Preview |
| vson-advisory | `apps/advisory` | vsonadvisory.com | main → Production, * → Preview |

### vercel.json (per app)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

### Environment variables (both projects)

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```

### DNS changes (Fred handles)

| Domain | Record | Value |
|--------|--------|-------|
| vson.vn | A | 76.76.21.21 (Vercel) |
| vson.vn | CNAME (www) | cname.vercel-dns.com |
| vsonadvisory.com | A | 76.76.21.21 (Vercel) |
| vsonadvisory.com | CNAME (www) | cname.vercel-dns.com |
| store.vson.vn | CNAME | [Haravan value — unchanged] |

---

## 8. Phase 2 — Bilingual (vson.vn only, future)

When Vietnamese is approved, use Next.js built-in i18n:

```
content/corporate/
├── en/
│   ├── pages/home.md
│   └── case-studies/...
└── vi/
    ├── pages/home.md
    └── case-studies/...
```

URL strategy: `vson.vn/` (English default) + `vson.vn/vi/` (Vietnamese). Configured via Next.js `i18n` in `next.config.js`. No structural changes needed — the monorepo is ready for this.

---

## 9. Reference Materials

When building components, reference these existing wireframe files for pixel-accurate design:

### VSON Corporate (12 pages)
Located at: `02-product/vson-corporate/specs/wireframes/`
- `shared.css` — complete design token system, all shared component styles
- `home.html` — hero, two pillars, ecosystem, heritage, case study preview, footer
- `about.html` — company story, leadership cards, CTA band
- `activation-solutions.html` — hero, three-layer capability, CTA
- `market-development.html` — hero, three service blocks, why VSON, how it works, CTA
- `store.html` — hero, brand showcase, where to buy, partner CTA
- `case-studies.html` — hero, filter bar, card grid
- `cs-01` through `cs-05` — individual case study detail pages
- `contact.html` — hero, contact form, direct contact details

### VSON Advisory (7 pages)
Located at: `02-product/vson-advisory/build/`
- `index.html`, `approach.html`, `capabilities.html`, `brain-trust.html`, `vault.html`, `contact.html`, `thank-you.html`

### Design specifications
- `02-product/vson-corporate/specs/DESIGN-SPEC.md` — full page-by-page content and layout spec
- `02-product/vson-corporate/specs/DEVELOPER-GUIDE.md` — design system, colour rules, build notes
- `02-product/vson-corporate/specs/DISCOVERY-BRIEF.md` — business context, audiences, tone of voice

---

## 10. Scaffold Checklist — What Claude Code Should Do

When you give this spec to Claude Code, ask it to execute these steps in order:

```
Step 1: Initialise monorepo
- Create root package.json, pnpm-workspace.yaml, turbo.json
- Initialise git repo
- Set up .gitignore, .env.example

Step 2: Create app shells
- apps/corporate — Next.js app with App Router, TypeScript
- apps/advisory — Next.js app with App Router, TypeScript
- Add tokens.css for each app with the correct brand palette

Step 3: Create shared packages
- packages/ui — shared component library (stub components)
- packages/lib — Supabase client, markdown parser, metadata helper
- packages/config — shared ESLint + TypeScript configs

Step 4: Set up content structure
- content/corporate/pages/ — markdown files with frontmatter for each page
- content/corporate/case-studies/ — 5 case study markdown files
- content/corporate/team/ — 4 team member markdown files
- content/advisory/pages/ — markdown files for each page

Step 5: Wire up one complete page
- Build the Corporate home page end-to-end:
  Hero component → reads from content/corporate/pages/home.md
  Renders with correct design tokens
  Proves the markdown → component → page pipeline works

Step 6: Build the contact form
- ContactForm component in packages/ui
- Server action in apps/corporate/app/contact/actions.ts
- Supabase insert (use .env for credentials)

Step 7: Verify local dev works
- pnpm install
- pnpm dev (both apps run concurrently)
- Visit localhost:3000 (corporate) and localhost:3001 (advisory)

Step 8: Prepare for Vercel
- vercel.json in each app
- Document environment variables needed
- Confirm turbo.json build pipeline
```

---

## 11. Design Rules — Non-Negotiable

Carry these forward from the existing DEVELOPER-GUIDE.md:

1. **No orange on corporate canvas** — orange (#ED7D28) is VSON Store section only
2. **Tech Mint is accent only** — never use #A7FFEB as a background fill
3. **All hero backgrounds use Forest Green** — or a dark gradient anchored to Forest Green
4. **Vietnamese-safe fonts** — Montserrat + Inter (both support diacritics)
5. **Brand separation is intentional** — Advisory uses serif headings (Playfair Display) to signal premium consulting; Corporate uses geometric sans-serif (Montserrat) to signal operational capability
6. **Components never hard-code colours** — always use CSS custom properties from tokens.css
7. **Images under 200KB each** — compress to WebP before committing

---

## 12. Testing Strategy

### Philosophy
Fred is a business owner, not a QA engineer. The testing strategy must be automated, visual, and integrated into the deploy pipeline. The goal: **no visual surprise reaches production**.

### Testing pyramid (VSON-specific)

```
             /  Visual Regression  \       PRIMARY — screenshot every page, diff on every PR
            /  Image Validation     \      Catch broken/oversized/wrong-format images at build
           /  Lighthouse CI Audit    \     Performance budget, accessibility, SEO scores
          /  Link + Form Validation   \    No broken links, form submits correctly
         /    Build Succeeds           \   TypeScript compiles, no errors
```

### 12A. Visual Regression Testing (PRIMARY)

**Tool:** Playwright (`@playwright/test`) — free, runs locally and in CI, built-in screenshot comparison.

**How it works:**
1. On first run, Playwright takes a screenshot of every page → stored as baseline images in `tests/screenshots/`
2. On every subsequent PR, Playwright takes new screenshots and compares pixel-by-pixel
3. If any page changed visually, the test **fails** and generates a diff image showing exactly what moved
4. The developer (or Fred via Vercel preview) reviews the diff and either approves (updates baseline) or fixes the regression

**What to screenshot (19 pages total):**

```
Corporate (12 pages):
  - home (desktop + mobile)
  - about (desktop + mobile)
  - activation-solutions
  - market-development
  - store
  - case-studies (index)
  - cs-01 through cs-05 (detail pages)
  - contact

Advisory (7 pages):
  - home (desktop + mobile)
  - approach
  - capabilities
  - brain-trust
  - vault
  - contact
  - thank-you
```

**Viewport breakpoints for critical pages:**
- Desktop: 1280 × 800
- Tablet: 768 × 1024
- Mobile: 375 × 812

Home and About pages get all three breakpoints (most complex layout). Other pages get desktop only to keep test suite fast.

**Example test file:**

```typescript
// tests/visual-regression/corporate.spec.ts
import { test, expect } from '@playwright/test'

const CORPORATE_URL = 'http://localhost:3000'

const pages = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'activation-solutions', path: '/solutions/activation-solutions' },
  { name: 'market-development', path: '/solutions/market-development' },
  { name: 'store', path: '/store' },
  { name: 'case-studies', path: '/case-studies' },
  { name: 'contact', path: '/contact' },
]

for (const page of pages) {
  test(`corporate/${page.name} matches baseline`, async ({ page: p }) => {
    await p.goto(`${CORPORATE_URL}${page.path}`)
    await p.waitForLoadState('networkidle')
    await expect(p).toHaveScreenshot(`corporate-${page.name}.png`, {
      fullPage: true,
      maxDiffPixelRatio: 0.01, // Allow 1% pixel variance (anti-aliasing)
    })
  })
}

// Critical pages also test mobile viewport
for (const name of ['home', 'about']) {
  test(`corporate/${name} mobile matches baseline`, async ({ page: p }) => {
    await p.setViewportSize({ width: 375, height: 812 })
    await p.goto(`${CORPORATE_URL}/${name === 'home' ? '' : name}`)
    await p.waitForLoadState('networkidle')
    await expect(p).toHaveScreenshot(`corporate-${name}-mobile.png`, {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    })
  })
}
```

**Updating baselines when a design change is intentional:**

```bash
# After making a deliberate design change, update baselines:
pnpm exec playwright test --update-snapshots
git add tests/screenshots/
git commit -m "Update visual baselines — [describe what changed]"
```

**CI integration (GitHub Actions):**

```yaml
# .github/workflows/visual-regression.yml
name: Visual Regression
on: [pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - run: pnpm install
      - run: pnpm build
      - run: pnpm exec playwright install --with-deps chromium
      - run: pnpm exec playwright test
      - uses: actions/upload-artifact@v4
        if: failure()
        with:
          name: visual-diff-report
          path: test-results/
```

When a visual regression test fails in CI, the diff images are uploaded as artifacts. Fred (or the developer) can download and review exactly what changed.

### 12B. Image Validation (build-time)

**Tool:** Custom Node script (`scripts/validate-images.ts`) — runs as a Turborepo build step.

**Checks:**

| Check | Rule | Fails build? |
|-------|------|-------------|
| File exists | Every image `src` in markdown/code resolves to a real file | Yes |
| Valid format | Magic bytes match extension (catches HTML-disguised-as-PNG) | Yes |
| File size | Each image < 200KB (WebP) or < 500KB (PNG/JPG fallback) | Yes |
| Dimensions | Hero images ≥ 1440px wide, headshots ≥ 800×800, thumbnails ≥ 800×500 | Warning |
| Format preference | Warn if JPG/PNG used where WebP could reduce size by >50% | Warning |

**Example script structure:**

```typescript
// scripts/validate-images.ts
import { glob } from 'glob'
import sharp from 'sharp'
import { readFileSync } from 'fs'

const RULES = {
  hero:      { minWidth: 1440, maxSize: 500_000 },
  headshot:  { minWidth: 800, minHeight: 800, maxSize: 200_000 },
  thumbnail: { minWidth: 800, maxSize: 200_000 },
  logo:      { maxSize: 100_000 },
}

// Validate magic bytes match file extension
function isValidImage(buffer: Buffer, ext: string): boolean {
  const PNG  = [0x89, 0x50, 0x4E, 0x47]
  const JPEG = [0xFF, 0xD8, 0xFF]
  const WEBP = [0x52, 0x49, 0x46, 0x46] // RIFF
  // ... check buffer against expected signature
}

// Run against all images in public/images/
async function validate() {
  const files = await glob('apps/*/public/images/**/*.{png,jpg,jpeg,webp,svg}')
  // ... validate each file, report errors and warnings
}
```

Add to `turbo.json`:

```json
{
  "pipeline": {
    "build": { "dependsOn": ["validate-images"] },
    "validate-images": {}
  }
}
```

### 12C. Lighthouse CI (quality gate)

**Tool:** `@lhci/cli` — runs Lighthouse audits in CI and enforces score thresholds.

**Thresholds (per page):**

| Category | Minimum score | Why |
|----------|--------------|-----|
| Performance | 90 | Static site with no framework overhead should score high |
| Accessibility | 95 | WCAG 2.1 AA is the target (per existing quality standards) |
| Best Practices | 90 | Security headers, HTTPS, no console errors |
| SEO | 95 | Proper meta tags, canonical URLs, structured data |

**Runs on:** Every Vercel preview deploy (via GitHub Actions).

### 12D. Link + Form Validation

**Tool:** Playwright

| Check | How | When |
|-------|-----|------|
| No broken internal links | Crawl all pages, assert no 404s | Every build |
| No broken external links | HEAD request to external URLs | Weekly (scheduled, not blocking) |
| Contact form submits | Playwright fills and submits form, asserts Supabase row created | Every build |
| Form validation works | Test required fields, invalid email, empty message | Every build |

### 12E. Scaffold Checklist Addition

Add this step to Section 10:

```
Step 9: Set up testing
- Install Playwright: pnpm add -D @playwright/test
- Install sharp: pnpm add -D sharp (for image validation)
- Create tests/visual-regression/ with page screenshot specs
- Create scripts/validate-images.ts
- Run initial screenshot baselines: pnpm exec playwright test --update-snapshots
- Add GitHub Actions workflow for visual regression + Lighthouse CI
- Add validate-images to turbo.json build pipeline
```

---

*End of Scaffold Specification — v1.0 · 2026-04-12*
