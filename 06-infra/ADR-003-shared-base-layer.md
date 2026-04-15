# ADR-003: Shared Base Layer Strategy

**Status:** Accepted
**Date:** 2026-04-02
**Decision-maker:** Fred Dang (PM)
**Relates to:** 04-shared/SHARED-STANDARDS.md, ADR-002-technical-stack.md

---

## Context

The programme manages two websites for separate business entities:

- **VSON Advisory** (vsonadvisory.com) — navy/slate/blue palette, Inter + Playfair Display, `--vson-` token prefix
- **VSON Corporate** (vson.vn) — forest green/emerald palette, Inter + Montserrat, `--forest-`/`--digital-` token prefix

Both projects have independently built their own CSS reset, typography, button system, nav, footer, and layout utilities. The question is whether to share code or share conventions.

---

## Decision

**Shared conventions (documented standard), not shared code (imported files).**

A standards document (`04-shared/SHARED-STANDARDS.md`) defines the invisible infrastructure patterns that both projects must implement. Each project implements these in its own stylesheet using its own brand tokens.

---

## Alternatives Considered

| Option | Evaluated | Verdict |
|--------|-----------|---------|
| **Shared conventions doc** | Yes | **Accepted** — no build dependency, respects brand separation, easy to maintain |
| Shared base CSS file in `04-shared/` | Yes | Rejected — creates coupling between two separate brands; any change to the shared file risks breaking one site; requires a build step or symlink strategy to import |
| CSS framework (Tailwind, Bootstrap) | Yes | Rejected — adds build tooling (contradicts ADR-002), creates a framework dependency, overkill for two small static sites |
| No shared standard at all | Yes | Rejected — leads to divergent accessibility, performance, and responsive patterns that create maintenance burden |

---

## Rationale

1. **Brand separation is intentional.** Advisory uses serif headings (Playfair Display) to signal premium consulting. Corporate uses geometric sans-serif (Montserrat) to signal operational capability. Forcing a shared CSS file would create constant overrides.

2. **The invisible infrastructure should be consistent.** Users never see the CSS reset, accessibility utilities, or font loading strategy — but developers need these to behave identically. A documented standard achieves this without code coupling.

3. **No build step required.** A shared conventions doc is a reference that developers read and apply. A shared CSS import would require either a build tool or symlinks — contradicting our vanilla stack decision (ADR-002).

4. **Easier to enforce in code review.** Thinh can review PRs against a checklist of standards. This is simpler than debugging why a shared CSS import caused a layout regression on the other site.

---

## What the Standards Document Covers

The full specification lives in `04-shared/SHARED-STANDARDS.md`. Summary:

| Standard | What It Defines | Why |
|----------|----------------|-----|
| **CSS Reset** | `box-sizing: border-box`, margin/padding reset, `scroll-behavior: smooth` | Consistent baseline rendering |
| **Accessibility** | `.sr-only` class, `:focus-visible` styles, skip-to-content link, minimum touch target 44×44px | WCAG 2.1 AA compliance (per 00-programme/quality/ACCESSIBILITY-STANDARD.md) |
| **Font loading** | `font-display: swap`, `<link rel="preload">` for primary font, WOFF2 format only | Prevents FOIT, meets LCP < 2.5s |
| **Image pattern** | `loading="lazy"`, WebP with `<picture>` fallback, max dimensions per zone | Meets <500KB/page budget |
| **Responsive breakpoints** | 640px (sm) / 768px (md) / 1024px (lg) / 1280px (xl) | Both sites behave consistently on same devices |
| **Form pattern** | Netlify Forms `netlify` attribute, HTML5 validation, error state class convention | Consistent UX, no backend |
| **Meta/SEO** | Open Graph tags, favicon set, canonical URLs, `robots.txt`, `sitemap.xml` | Consistent search/social presence |

---

## Consequences

- No shared CSS/JS files between projects — each site is fully self-contained
- Developers reference `04-shared/SHARED-STANDARDS.md` before writing CSS/JS
- Code review checks compliance against the standards document
- If a third VSON website is created, it follows the same standards doc without inheriting either brand's tokens
- The standards doc should be versioned and updated when new patterns emerge (e.g., Phase 2 bilingual i18n)
