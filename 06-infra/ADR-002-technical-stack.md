# ADR-002: Technical Stack

**Status:** Accepted
**Date:** 2026-04-02
**Decision-maker:** Fred Dang (PM) + Thinh (Tech Lead)
**Relates to:** ADR-001-hosting.md, 02-product/*/DEVELOPER-GUIDE.md

---

## Context

Both VSON websites need a technical stack decision before build starts on 2026-04-08. The team has already produced HTML prototypes (design concepts and wireframes) using vanilla HTML, CSS, and JavaScript — no framework, no build step, no templating engine.

**Key factors:**
- VSON Advisory: 6 pages, English-only, no planned expansion beyond Phase 2 Vault articles
- VSON Corporate: 12 pages, English Phase 1, Vietnamese Phase 2 at `/vi/` paths
- Hosting: Netlify (ADR-001) — serves static files, no server-side rendering available
- Team: Thinh (basic DevOps), Duy (product), developers TBC
- Contact forms: handled by Netlify Forms (no backend needed)

---

## Decision

**Phase 1 (both sites): Vanilla HTML/CSS/JS — no framework, no build step.**
**Phase 2 (vson.vn bilingual): Evaluate 11ty (Eleventy) as a static site generator.**

---

## Alternatives Considered

| Option | Evaluated | Verdict |
|--------|-----------|---------|
| Vanilla HTML/CSS/JS | Yes | **Accepted for Phase 1** — simplest, fastest, maximum Lighthouse scores, zero build tooling |
| Next.js / Nuxt.js | Yes | Rejected — server-side rendering and React/Vue overhead are unnecessary for static content sites with no interactivity beyond forms and scroll effects |
| 11ty (Eleventy) | Yes | **Deferred to Phase 2** — justified when vson.vn adds Vietnamese, because one content source can template into two language outputs. Not needed for Phase 1 English-only. |
| Hugo / Jekyll | Yes | Rejected in favour of 11ty — 11ty uses JavaScript (team familiarity), Hugo requires Go, Jekyll requires Ruby |
| WordPress / headless CMS | Yes | Rejected — adds hosting complexity, database dependency, and security surface for a 6–12 page site with infrequent content changes |

---

## Technical Decisions Locked for Phase 1

| Area | Decision | Rationale |
|------|----------|-----------|
| **Framework** | None (vanilla HTML/CSS/JS) | No reactivity, no client-side routing, no state management needed |
| **Build tooling** | None | No transpilation, no bundling — deploy HTML/CSS/JS as-is to Netlify |
| **CSS architecture** | Single shared stylesheet per project (`styles.css` / `shared.css`) with CSS custom properties | Design consistency, no build dependency, tokens for brand theming |
| **JavaScript** | Vanilla JS, IIFE-wrapped, `'use strict'`, passive event listeners | Minimal footprint (~5KB), no framework overhead |
| **Image optimisation** | Manual WebP conversion, `loading="lazy"` attribute, max 500KB per page | Meets performance budget without an image pipeline |
| **Font loading** | `font-display: swap` + `<link rel="preload">` for primary font, WOFF2 only | Prevents FOIT (Flash of Invisible Text), meets LCP < 2.5s target |
| **Form handling** | Netlify Forms via HTML `netlify` attribute | No backend, no API keys, email notification built-in |
| **SEO** | Manual `<meta>` tags, Open Graph, canonical URLs, `robots.txt` | Standard practice for static sites; no framework-generated meta |

---

## Phase 2 Trigger (vson.vn bilingual)

When the Vietnamese language version is approved for development, the team should evaluate 11ty because:

1. **Content templating** — write content once in markdown/data files, output to `/en/` and `/vi/` paths
2. **Partial rebuilds** — only regenerate changed pages, not the entire site
3. **Existing HTML reuse** — 11ty can use plain HTML as templates (low migration effort from Phase 1)
4. **hreflang generation** — automate `<link rel="alternate" hreflang="vi">` tags across all pages

This evaluation should be logged as **ADR-004** when the time comes.

---

## Consequences

- Developers build directly in HTML/CSS/JS — no `npm install`, no `node_modules`, no build step
- Lighthouse scores should reach 95+ with minimal effort (no framework JavaScript overhead)
- Content changes require editing HTML files directly (acceptable for 6–12 pages with infrequent updates)
- Phase 2 bilingual will require a migration to an SSG — the cost of this migration is low because 11ty accepts plain HTML templates
- No hot-reload during development — developers use a local file server or VS Code Live Server extension
