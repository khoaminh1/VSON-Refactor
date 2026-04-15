# Sprint 1 — VSON Corporate

**Sprint:** 1 of 3
**Dates:** 2026-04-08 to 2026-04-15
**Goal:** Deliver navigable core site — Home, About, Contact + shared infrastructure
**Status:** ✅ Conditionally accepted by Fred (2026-04-04)

---

## Sprint Scope

| # | Deliverable | Source | Acceptance Criteria |
|---|------------|--------|-------------------|
| 1 | Shared CSS (design tokens, components, utilities) | wireframes/shared.css | Matches design spec tokens; passes SHARED-STANDARDS.md checklist |
| 2 | Nav component | wireframes/_template.html | Responsive; all links route correctly; active state on current page |
| 3 | Footer component | wireframes/_template.html | All links valid; legal row present; responsive |
| 4 | home.html | wireframes/home.html | All sections rendered; hero with placeholder if image not ready; CTAs link correctly |
| 5 | about.html | wireframes/about.html | 4 leader bios rendered; headshot placeholders if photos not ready; company story complete |
| 6 | contact.html | wireframes/contact.html | Netlify form working; honeypot spam protection; validation on required fields |

---

## Agent Workflow

| Day | Role | Activity |
|-----|------|----------|
| Day 1 (Apr 8) | SA | Review wireframes against SHARED-STANDARDS.md; confirm technical approach; flag any gaps |
| Day 2–4 (Apr 9–11) | Developer | Build shared CSS, nav, footer, then Home → About → Contact |
| Day 4–5 (Apr 11–12) | Lead Developer | Code review: semantic HTML, CSS consistency, cross-page integration |
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

---

## Page Status

| Page | Developer | Lead Dev | QC | Fred | Status |
|------|-----------|----------|-----|------|--------|
| Shared CSS / nav / footer | ✅ | ✅ | ✅ | ⬜ | QC passed |
| home.html | ✅ | ✅ | ✅ | ⬜ | QC passed |
| about.html | ✅ | ✅ | ✅ | ⬜ | QC passed |
| contact.html | ✅ | ✅ | ✅ | ⬜ | QC passed |

---

## Blockers / Decisions

| Item | Impact | Owner | Resolution |
|------|--------|-------|-----------|
| Headshots ×4 | About page uses placeholders if not received by Apr 7 | Fred | Collecting |
| Hero image | Home page uses gradient/placeholder if not ready | Fred | In progress |
| D5 Netlify + vson.vn config | Cannot deploy to preview URL without this | Fred | Fred handling |

---

## Sprint Review Notes

| Item | Notes |
|------|-------|
| Pages accepted | Home, About, Contact, shared CSS/nav/footer (conditional) |
| Pages needing rework | None |
| Carry-over to Sprint 2 | Automated UAT testing (BL-001) required as condition of acceptance |
| Lessons learned | Em dashes from wireframe sources carried into production undetected. Root cause: no automated content scan in QC gate. Prevention: Standard #11 added to SHARED-STANDARDS.md; automated test script in Sprint 2 scope. |
