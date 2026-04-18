# Architecture — VSON Advisory `build-v2/`

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
│   ├── nav.html          site navigation
│   └── footer.html       site footer
│
├── ui/          5 atoms — changes when design system evolves
│   ├── Button.html
│   ├── Card.html
│   ├── Eyebrow.html
│   ├── LeaderCard.html
│   └── VaultRow.html
│
├── sections/    17 sections — changes when pages are redesigned
│   ├── Hero.html
│   ├── CapabilityGrid.html
│   ├── LeadershipCards.html
│   └── … (14 more)
│
├── css/         8 files — styling, split by concern
│   └── tokens → reset → utilities → layout → ui → nav → footer → sections
│
└── js/
    └── shared.js   behaviour: sticky nav, mobile menu, fade, form UX
```

**Rule:** Components NEVER contain hardcoded copy. They have `{{ }}`
placeholders for text and data.

### `content/` — all text

```
content/
├── site.json               brand name, domain, locations
├── nav.json                nav links + primary CTA
├── footer.json             footer columns + legal disclaimer
└── pages/
    ├── index.json          homepage content (hero, sections, etc.)
    ├── approach.json
    ├── brain-trust.json    leadership bios
    ├── capabilities.json
    ├── vault.json
    ├── contact.json        form fields, regional contacts
    └── thank-you.json
```

**Rule:** If a word appears on the live website, it belongs in `content/`.

### `assets/` — static binaries

```
assets/
├── fonts/
│   ├── fonts.css           loads Inter + Playfair from Google Fonts CDN
│   └── README.md           instructions for self-hosting
├── icons/
│   └── README.md           favicon, icon.svg, apple-touch-icon (to produce)
└── images/
    └── README.md           OG images, team headshots, hero images
```

**Rule:** Only binary files — no HTML, CSS, or JS here (except font
loading, which is tightly coupled to font files).

### `pages/` — template shells

```
pages/
├── index.html              ~25 lines, lists sections the homepage uses
├── approach.html
├── brain-trust.html
├── capabilities.html
├── vault.html
├── contact.html
└── thank-you.html
```

Each page shell is a tiny assembly file — it names the sections, nothing more.
The build script combines these with content JSON and component partials to
produce the final HTML.

### `_site/` — build output (generated)

```
_site/
└── *.html                  7 finished HTML files, gitignored
```

Created fresh on every build. Never edit these files — they get overwritten.
See [02-HOW-IT-WORKS.md](02-HOW-IT-WORKS.md) for why this folder exists.

---

## Why 3 tiers in `components/`

The three tiers separate concerns by their **edit frequency**:

| Tier | When does it change? | Example |
|---|---|---|
| `layout/` | Once per rebrand | New nav link, new logo |
| `ui/` | When the design system evolves | New button variant |
| `sections/` | When a page is redesigned | New hero layout |

Separating them prevents a section change from accidentally breaking a button.

---

## Why CSS and JS live in `components/`, not `assets/`

CSS and JS are **code**, not static binaries. They define behaviour and
structure of components. They belong with the components they style and
drive, not with images and fonts.

`assets/` is reserved for files served to the browser that are neither
code nor content: images, icons, fonts.

---

## What the build does (in one sentence)

> Reads templates from `pages/` + text from `content/` + partials from
> `components/`, and writes 7 finished HTML files into `_site/`.

For the full mechanism, see [02-HOW-IT-WORKS.md](02-HOW-IT-WORKS.md).