# Design decisions

Chronological log of decisions that shaped `build-v2/`.

## 2026-04-18 — Refactor `build/` to match Advisory `build-v2/`

**Why:** The original `build/` folder shipped 13 self-contained HTML files
with inline `<style>` blocks per page, a single mega `styles.css`, and no
component reuse. Every copy change required editing HTML in 13 places; nav
and footer updates duplicated across every file.

**Decision:** Mirror the architecture already validated on VSON Advisory —
Handlebars-based static build, source split into `components/` +
`content/` + `assets/`, page shells list sections only.

**Kept:** All production copy verbatim. Brand palette (Forest Green /
Digital Emerald / Tech Mint) and typography (Montserrat + Inter) unchanged.
Old `build/` is frozen and continues to serve production until cutover.

## Why the Solutions dropdown lives in `nav.json`, not as a separate partial

A dropdown is a pattern of nav data, not a separate navigation surface.
Representing it as `links[i].children` in `nav.json` keeps the entire nav
structure in one place. `layout/nav.html` handles the rendering logic
(if `children` exists, render a dropdown).

## Why CSS is split into 8 files

Single-file CSS couples unrelated concerns. When a section is re-skinned
you should not have to navigate past the nav code. Split:

- `tokens.css` — colours, fonts, spacing (the vocabulary)
- `reset.css` — browser normalisation
- `utilities.css` — `.container`, `.section`, `.label`, `.divider`
- `layout.css` — skip-link + generic page-hero chrome
- `ui.css` — buttons, form fields (atoms)
- `nav.css` — nav + mobile menu + dropdown
- `footer.css` — footer grid + social links
- `sections.css` — everything else (homepage + inner pages + case studies)

## Why `sections.css` is one big file

Splitting every section into its own CSS file would scatter rules that share
tokens and media queries. One file keeps the cascade predictable. If it
grows past ~2000 lines, split by page group (home / solutions / case-studies).

## Why the port is 3001

VSON Advisory's `build-v2/` uses port 3000. Running both locally at the same
time needed a different port to avoid a clash.

## What is NOT refactored

- Netlify form handling — kept as-is via `data-netlify="true"` and honeypot.
- Robots.txt and sitemap.xml — identical to old `build/`.
- Vietnamese language — deferred to Phase 2, per the WORKSPACE plan.