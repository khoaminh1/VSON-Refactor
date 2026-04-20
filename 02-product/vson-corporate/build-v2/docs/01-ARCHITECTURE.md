# Architecture — VSON Corporate `build-v2/`

## The 3 layers

```
components/      ← reusable UI (what the site LOOKS like)
content/         ← all text and data (what the site SAYS)
assets/          ← images, icons, fonts (static binaries)
```

These three folders are the **source of truth**. Everything else in
`build-v2/` is either a template, a build script, or generated output.

---

## Folder-by-folder

### `components/` — reusable UI

Contains all HTML partials, CSS, and JS. Split into 3 tiers by edit cadence:

```
components/
├── layout/      3 files — changes rarely (only during rebrand)
│   ├── base-head.html    <head> block for every page
│   ├── nav.html          site navigation (with Solutions dropdown)
│   └── footer.html       site footer (brand + 3 columns)
│
├── ui/          atoms — changes when design system evolves
│   ├── Button.html
│   ├── Eyebrow.html
│   └── LogoMark.html
│
├── sections/    page-level sections — changes when pages are redesigned
│   ├── Hero.html                (homepage hero with grid visual)
│   ├── PageHero.html            (generic inner-page hero)
│   ├── PillarsGrid.html         (Two Pillars: Store + Solutions)
│   ├── Ecosystem.html           (3-item grid: Reach/Activate/Grow)
│   ├── HeritageTrust.html       (story + logo chips)
│   ├── CaseStudiesPreview.html  (home page 2-card teaser)
│   ├── CtaBand.html             (shared full-width CTA)
│   ├── Story.html               (About — aside + body paras)
│   ├── LeadershipCards.html     (About — 4 leader cards)
│   ├── Layers.html              (Activation Solutions — 3 layer rows)
│   ├── WhyBrands.html           (Activation Solutions — why grid)
│   ├── MdHero.html              (Market Dev hero with MRA card)
│   ├── Services.html            (Market Dev — 3 service cards)
│   ├── WhyVson.html             (Market Dev — 5 signals)
│   ├── HowItWorks.html          (Market Dev — 4-step process)
│   ├── CtaDual.html             (Market Dev — 2-column CTA)
│   ├── StoreHero.html           (Store hero with brand preview cards)
│   ├── BrandsGrid.html          (Store — 4 brands)
│   ├── WhereToBuy.html          (Store — 4 channels)
│   ├── PartnerForm.html         (Store — partnership form)
│   ├── CaseStudyFilter.html     (Case Studies index filter bar)
│   ├── CaseStudyGrid.html       (Case Studies index — 5 cards)
│   ├── Taxonomy.html            (Case Studies — tag reference)
│   ├── CsHero.html              (Case Study detail hero)
│   ├── CsSnapshot.html          (Case Study — 4-stat bar)
│   ├── CsBody.html              (Case Study — main + sidebar)
│   ├── CsOutcomes.html          (Case Study — 3 outcome cards)
│   ├── CsNav.html               (Case Study — prev/next)
│   ├── ContactForm.html         (Contact page form)
│   ├── ContactDetails.html      (Contact page details + routing)
│   └── ThankYou.html            (Thank-you page centred content)
│
├── css/         8 files — styling, split by concern
│   └── tokens → reset → utilities → layout → ui → nav → footer → sections
│
└── js/
    └── shared.js   behaviour: nav toggle, dropdown, active link, CS filter
```

**Rule:** Components NEVER contain hardcoded copy. They have `{{ }}`
placeholders for text and data.

### `content/` — all text

```
content/
├── site.json               brand name, domain, legal info
├── nav.json                nav links + Solutions dropdown + primary CTA
├── footer.json             footer brand + 3 columns + legal
└── pages/
    ├── index.json          homepage content
    ├── about.json          story + leadership bios
    ├── activation-solutions.json
    ├── market-development.json
    ├── store.json          brands + channels + partner form
    ├── case-studies.json   5-card grid + taxonomy
    ├── contact.json        form fields + routing + contact details
    ├── thank-you.json
    ├── cs-01-electronics-retail.json
    ├── cs-02-education.json
    ├── cs-03-fashion-retail.json
    ├── cs-04-oem-merchandise.json
    └── cs-05-ict-distribution.json
```

**Rule:** If a word appears on the live website, it belongs in `content/`.

### `assets/` — static binaries

```
assets/
├── fonts/
│   ├── fonts.css           loads Montserrat + Inter from Google Fonts CDN
│   └── README.md           instructions for self-hosting
├── icons/
│   └── README.md           favicon, icon.svg, apple-touch-icon (to produce)
└── images/
    └── README.md           OG images, team headshots, brand logos
```

**Rule:** Only binary files — no HTML, CSS, or JS here (except font
loading, which is tightly coupled to font files).

### `pages/` — template shells

```
pages/
├── index.html              ~25 lines, lists sections the homepage uses
├── about.html
├── activation-solutions.html
├── market-development.html
├── store.html
├── case-studies.html
├── contact.html
├── thank-you.html
├── cs-01-electronics-retail.html
├── cs-02-education.html
├── cs-03-fashion-retail.html
├── cs-04-oem-merchandise.html
└── cs-05-ict-distribution.html
```

Each page shell is a tiny assembly file — it names the sections, nothing more.

### `_site/` — build output (generated)

Created fresh on every build. Never edit these files — they get overwritten.

---

## Why 3 tiers in `components/`

| Tier | When does it change? | Example |
|---|---|---|
| `layout/` | Once per rebrand | New nav link, new footer column |
| `ui/` | When the design system evolves | New button variant |
| `sections/` | When a page is redesigned | New case study layout |

---

## What the build does (in one sentence)

> Reads templates from `pages/` + text from `content/` + partials from
> `components/`, and writes 13 finished HTML files into `_site/`.