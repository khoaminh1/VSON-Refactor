# Sprint 2 | VSON Advisory

**Sprint:** 2 of 3
**Dates:** 2026-04-15 to 2026-04-22
**Goal:** Deliver Brain Trust, Vault (Coming Soon), and Capabilities pages
**Status:** Not started
**Prerequisite:** Sprint 1 accepted by Fred on Netlify UAT

---

## Sprint Scope

| # | Deliverable | Source | Acceptance Criteria |
|---|------------|--------|-------------------|
| 1 | brain-trust.html | Decompose from design-concept-v2.html (Brain Trust section) | Team profiles rendered; headshots placeholder-ready; responsive |
| 2 | vault.html | New page, Coming Soon teaser | Clean teaser with brief description; email capture or CTA; responsive |
| 3 | capabilities.html | Decompose from design-concept-v2.html (Capabilities section) | All capability areas listed; clear value proposition; responsive |
| 4 | Nav link integration | All Sprint 1 pages | Remove placeholder anchors; all nav links route to real pages |
| 5 | Cross-page consistency | All pages | Shared CSS tokens consistent; footer/nav identical across all pages |

---

## Agent Workflow

| Day | Role | Activity |
|-----|------|----------|
| Day 1 (Apr 15) | SA | Identify Brain Trust, Vault, Capabilities sections in design-concept-v2.html; define decomposition plan; check SHARED-STANDARDS.md (incl. Standard #11 em dash ban) |
| Day 2-4 (Apr 16-18) | Developer | Build Brain Trust, Vault (Coming Soon), Capabilities; update nav links on Sprint 1 pages |
| Day 4-5 (Apr 18-19) | Lead Developer | Code review: semantic HTML, CSS consistency, cross-page nav integration |
| Day 5-6 (Apr 19-20) | QC | Lighthouse 95+, accessibility audit, responsive check, **em dash grep (mandatory)** |
| Day 6-7 (Apr 20-21) | Fred | Review on Netlify UAT; accept or request changes |

---

## Quality Checklist (QC role)

| Check | Target | Tool | Result |
|-------|--------|------|--------|
| **Em dash scan** | **Zero across all files** | **grep** | |
| Lighthouse Performance | 95+ | Chrome DevTools | |
| Lighthouse Accessibility | 95+ | Chrome DevTools | |
| LCP | < 2.5s | Lighthouse | |
| CLS | < 0.1 | Lighthouse | |
| Page weight | < 500KB images, < 60KB CSS | DevTools Network | |
| Skip-to-content link | Present on all pages | Manual | |
| Focus-visible styles | All interactive elements | Keyboard nav | |
| Touch targets | 44x44px minimum | Manual | |
| Responsive: Mobile (375px) | No horizontal scroll, readable | Chrome DevTools | |
| Responsive: Tablet (768px) | Grid layout correct | Chrome DevTools | |
| Responsive: Desktop (1280px) | Full layout, correct max-width | Chrome DevTools | |
| Nav links | All internal links resolve to real pages | Manual click-through | |
| Meta/SEO | Title, description, OG tags, canonical | View source | |

---

## Page Status

| Page | Developer | Lead Dev | QC | Fred | Status |
|------|-----------|----------|-----|------|--------|
| brain-trust.html | ⬜ | ⬜ | ⬜ | ⬜ | Not started |
| vault.html (Coming Soon) | ⬜ | ⬜ | ⬜ | ⬜ | Not started |
| capabilities.html | ⬜ | ⬜ | ⬜ | ⬜ | Not started |
| Nav link fix (Sprint 1 pages) | ⬜ | ⬜ | ⬜ | ⬜ | Not started |

---

## Blockers / Decisions

| Item | Impact | Owner | Resolution |
|------|--------|-------|-----------|
| Emily bio sign-off | Brain Trust page contains Emily's bio | Emily | Deferred, do later before go-live |
| Vault content scope | "Coming Soon" teaser, confirm what text to show | Fred | Backlog, work together in Sprint 2 |
| Sprint 1 acceptance | Must be signed off before Sprint 2 starts | Fred | ✅ Conditional acceptance 2026-04-04 |
| **BL-001 Automated UAT testing** | **Condition of Sprint 1 acceptance. Build test script that runs Lighthouse, em dash scan, link checker, responsive checks against both UAT URLs. Send report to Fred for confirmation instead of manual review.** | **Agent + Fred** | **Must deliver in Sprint 2** |

---

## Sprint Review Notes

_(To be completed at end of sprint)_

| Item | Notes |
|------|-------|
| Pages accepted | |
| Pages needing rework | |
| Carry-over to Sprint 3 | |
| Lessons learned | |
