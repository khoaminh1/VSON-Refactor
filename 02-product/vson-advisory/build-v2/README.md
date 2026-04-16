# VSON Advisory — build-v2 (Refactored Frontend)

Refactored from `build/` per the 3-layer architecture. Old `build/` remains
untouched and continues to serve production until cutover.

## Layer responsibilities

| Layer | Purpose | What lives here |
|---|---|---|
| `components/layout/` | Page shell partials | `base-head.html`, `nav.html`, `footer.html` |
| `components/ui/` | Atomic, presentational elements | `Button.html`, `Card.html`, `Eyebrow.html`, `LeaderCard.html`, `VaultRow.html` |
| `components/sections/` | Page-level composed sections | `Hero.html`, `ValueChain.html`, `AudienceCards.html`, `WhyChecklist.html`, `CapabilityGrid.html`, `LeadershipCards.html`, `VaultPreview.html`, `CtaBand.html` |
| `components/css/` | Styling, split by concern | `tokens → reset → utilities → layout → ui → nav → footer → sections` (load order) |
| `components/js/` | Behaviour modules | `shared.js` — exports `useStickyNav`, `useMobileMenu`, `useActiveNavLink`, `useFadeOnScroll`, `useContactForm` |
| `content/` | All copy, data, config | `site.json`, `nav.json`, `footer.json`, `pages/[page].json` |
| `assets/` | Static binaries | `images/{hero,team,og}/`, `icons/`, `fonts/` |
| `pages/` | Output HTML shells | One thin file per route, includes layout + sections + script |

## Rules for AI agents

1. **Never write copy inside `components/`.** All visible strings live in `content/`.
2. **Never write inline `style=""` in markup.** Add a class to the appropriate `components/css/` file.
3. **Section components receive their slice of JSON as a prop** — not the whole page.
4. **UI components are pure** — they take props, render markup, call no behaviour.
5. **Behaviour goes in `shared.js`** as a single-purpose `use*` function.

## Content shape contracts

- `content/site.json` — `{ name, brand_short, brand_suffix, domain, lang, logo_initial, tagline, locations }`
- `content/nav.json` — `{ links: [{label, href}], cta: {label, href} }`
- `content/footer.json` — `{ columns: {services, company, contact}, legal: {disclaimer, registration, copyright, links} }`
- `content/pages/home.json` — `{ meta, hero, value_chain, audience, why_vson, capabilities, leadership, vault_preview, cta_band }` (see file for nested shapes)

## Build / preview

This codebase is template-syntax-agnostic. The `{{ ... }}` and `{{> partial}}`
notation is a placeholder for whichever build tool is chosen (11ty, Eleventy,
Astro static, or a tiny Node script per ADR-002). Pick one before the cutover —
the rest of the structure does not change.
