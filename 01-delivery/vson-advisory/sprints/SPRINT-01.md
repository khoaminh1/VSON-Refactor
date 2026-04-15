# Sprint 1 — VSON Advisory

**Sprint:** 1 of 3
**Dates:** 2026-04-08 to 2026-04-15
**Goal:** Deliver navigable core site — Home, Approach, Contact + shared infrastructure
**Status:** ✅ Conditionally accepted by Fred (2026-04-04)

---

## Sprint Scope

| # | Deliverable | Source | Acceptance Criteria |
|---|------------|--------|-------------------|
| 1 | Shared CSS (design tokens, components, utilities) | css/styles.css | Matches design-concept-v2.html tokens; passes SHARED-STANDARDS.md checklist |
| 2 | Nav component | design-concept-v2.html (Block A) | Responsive; "Contact" replaces ghost "Capabilities" link (F1); active state on current page |
| 3 | Footer component | design-concept-v2.html (Block F) | All links valid; contact@vsonadvisory.com + +65 8867 9295; legal row present |
| 4 | home.html | design-concept-v2.html (Blocks B–C) | Hero, Value Chain, Audience Pathways, Why VSON, Capabilities preview, Leadership preview, Vault preview, CTA band |
| 5 | approach.html | design-concept-v2.html (Block D) | 4-Layer Solution Stack, Engagement Steps (F6: remove "Typically"), CTA band at bottom (F5) |
| 6 | contact.html | design-concept-v2.html (Block E) | Audience selector radio buttons, qualification form, Netlify form working, regional contacts (city-level), F9: replace 4th radio with "Corporate / Institutional inquiry" |

---

## Build-Time Fixes in Scope (from PROJECT.md)

| # | Fix | Page |
|---|-----|------|
| F1 | Remove ghost "Capabilities" nav item; replace with "Contact" | Nav (all pages) |
| F2 | Standardise all CTA copy to "Request a Strategic Briefing" | All pages |
| F5 | Add CTA band to bottom of Approach page | approach.html |
| F6 | Remove "Typically" from Engagement Steps heading | approach.html |
| F9 | Remove 4th radio option; replace with "Corporate / Institutional inquiry" | contact.html |

_(F3, F4, F7, F8, F10 apply to Sprint 2 pages)_

---

## Agent Workflow

| Day | Role | Activity |
|-----|------|----------|
| Day 1 (Apr 8) | SA | Review design-concept-v2.html against SHARED-STANDARDS.md; confirm technical approach; flag gaps |
| Day 2–4 (Apr 9–11) | Developer | Build shared CSS, nav, footer, then Home → Approach → Contact |
| Day 4–5 (Apr 11–12) | Lead Developer | Code review: semantic HTML, CSS consistency, cross-page integration, F-fixes applied |
| Day 5–6 (Apr 12–13) | QC | Lighthouse (target 95+), accessibility audit, responsive check (mobile/tablet/desktop) |
| Day 6–7 (Apr 13–14) | Fred | Review on Netlify preview URL; accept or request changes |

---

## Quality Checklist (QC role)

| Check | Target | Tool | Result |
|-------|--------|------|--------|
| Lighthouse Performance | 95+ | Chrome DevTools | |
| Lighthouse Accessibility | 95+ | Chrome DevTools | |
| LCP | < 2.5s | Lighthouse | |
| CLS | < 0.1 | Lighthouse | |
| Page weight | < 500KB images, < 60KB CSS | DevTools Network | |
| Skip-to-content link | Present on all pages | Manual | |
| Focus-visible styles | All interactive elements | Keyboard nav | |
| Touch targets | 44×44px minimum | Manual | |
| Responsive: Mobile (375px) | No horizontal scroll, readable | Chrome DevTools | |
| Responsive: Tablet (768px) | Grid layout correct | Chrome DevTools | |
| Responsive: Desktop (1280px) | Full layout, correct max-width | Chrome DevTools | |
| Form submission | Netlify form receives data | Test submit | |
| Meta/SEO | Title, description, OG tags, canonical | View source | |
| CTA consistency | All CTAs say "Request a Strategic Briefing" | Manual scan | |

---

## Page Status

| Page | Developer | Lead Dev | QC | Fred | Status |
|------|-----------|----------|-----|------|--------|
| Shared CSS / nav / footer | ✅ | ✅ | ✅ | ⬜ | QC passed |
| home.html | ✅ | ✅ | ✅ | ⬜ | QC passed |
| approach.html | ✅ | ✅ | ✅ | ⬜ | QC passed |
| contact.html | ✅ | ✅ | ✅ | ⬜ | QC passed |

---

## Blockers / Decisions

| Item | Impact | Owner | Resolution |
|------|--------|-------|-----------|
| None | — | — | All Advisory blockers cleared 2026-04-03 |

---

## Sprint Review Notes

| Item | Notes |
|------|-------|
| Pages accepted | Home, Approach, Contact, shared CSS/nav/footer (conditional) |
| Pages needing rework | None |
| Carry-over to Sprint 2 | Automated UAT testing (BL-001) required as condition of acceptance |
| Lessons learned | Em dashes from source specs carried into production. Prevention: Standard #11 added to SHARED-STANDARDS.md; automated test script in Sprint 2 scope. |
