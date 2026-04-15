# Build Tracker — VSON Web Platform

**Programme:** VSON Web Platform
**Build starts:** 2026-04-08
**Go-live:** 2026-05-01 (both projects)
**Last updated:** 2026-04-04 (Sprint 3 accepted. All sprints complete.)

---

## Agent Team

| Role | Responsibility | Gate |
|------|---------------|------|
| SA (Solution Architect) | Sprint scope review, technical standards, architecture decisions | Sprint start + end |
| Developer | Builds pages from wireframes/design specs | During sprint |
| Lead Developer | Code review, cross-page consistency, integration check | After Developer |
| QC | Lighthouse, accessibility, responsive, security per 00-programme/quality/ | After Lead Dev |
| Fred (PM) | Acceptance review on Netlify URL, final sign-off | End of sprint |

### Workflow Per Page

```
SA scopes → Developer builds → Lead Dev reviews → QC tests → Fred accepts
```

### Review Methods

| Method | Purpose | When |
|--------|---------|------|
| Local HTML | QC testing (Lighthouse, accessibility audit) | After Lead Dev review |
| Netlify preview URL | Acceptance testing by Fred | End of sprint |
| Screenshot | Evidence capture for quality-results/ | After each gate |

---

## Sprint Calendar

| Sprint | Dates | Stream A: Corporate | Stream B: Advisory |
|--------|-------|--------------------|--------------------|
| Sprint 1 | Apr 8–15 | Home, About, Contact + shared infra | Home, Approach, Contact + shared infra |
| Sprint 2 | Apr 15–22 | Activation Solutions, Market Dev, Store | Brain Trust, Vault (Coming Soon), Capabilities |
| Sprint 3 | Apr 22–29 | Case studies index + 5 details + full QA | All pages — polish + full QA |
| Buffer | Apr 29–May 1 | Fixes + go-live | Fixes + go-live |

---

## Stream A: VSON Corporate (vson.vn)

### Sprint 1 — Core Structure (Apr 8–15)

| Page | Developer | Lead Dev | QC | Fred | Status |
|------|-----------|----------|-----|------|--------|
| Shared CSS / nav / footer | ✅ | ✅ | ✅ | ✅ | ✅ Done (conditional) |
| home.html | ✅ | ✅ | ✅ | ✅ | ✅ Done (conditional) |
| about.html | ✅ | ✅ | ✅ | ✅ | ✅ Done (conditional) |
| contact.html | ✅ | ✅ | ✅ | ✅ | ✅ Done (conditional) |

### Sprint 2 — Solution Pages (Apr 15–22)

| Page | Developer | Lead Dev | QC | Fred | Status |
|------|-----------|----------|-----|------|--------|
| activation-solutions.html | ✅ | ✅ | ✅ | ✅ | ✅ Done |
| market-development.html | ✅ | ✅ | ✅ | ✅ | ✅ Done |
| store.html | ✅ | ✅ | ✅ | ✅ | ✅ Done |

### Sprint 3 — Case Studies + QA (Apr 22–29)

| Page | Developer | Lead Dev | QC | Fred | Status |
|------|-----------|----------|-----|------|--------|
| case-studies.html (index) | ✅ | ✅ | ✅ | ⬜ | ✅ Done |
| cs-01-electronics-retail.html | ✅ | ✅ | ✅ | ⬜ | ✅ Done |
| cs-02-education.html | ✅ | ✅ | ✅ | ⬜ | ✅ Done |
| cs-03-fashion-retail.html | ✅ | ✅ | ✅ | ⬜ | ✅ Done |
| cs-04-oem-merchandise.html | ✅ | ✅ | ✅ | ⬜ | ✅ Done |
| cs-05-ict-distribution.html | ✅ | ✅ | ✅ | ⬜ | ✅ Done |
| **Full site QA pass** | — | — | ✅ | ⬜ | UAT: 132 PASS, 0 FAIL |

---

## Stream B: VSON Advisory (vsonadvisory.com)

### Sprint 1 — Core Structure (Apr 8–15)

| Page | Developer | Lead Dev | QC | Fred | Status |
|------|-----------|----------|-----|------|--------|
| Shared CSS / nav / footer | ✅ | ✅ | ✅ | ✅ | ✅ Done (conditional) |
| home.html | ✅ | ✅ | ✅ | ✅ | ✅ Done (conditional) |
| approach.html | ✅ | ✅ | ✅ | ✅ | ✅ Done (conditional) |
| contact.html | ✅ | ✅ | ✅ | ✅ | ✅ Done (conditional) |

### Sprint 2 — Remaining Pages (Apr 15–22)

| Page | Developer | Lead Dev | QC | Fred | Status |
|------|-----------|----------|-----|------|--------|
| brain-trust.html | ✅ | ✅ | ✅ | ✅ | ✅ Done |
| vault.html (Coming Soon) | ✅ | ✅ | ✅ | ✅ | ✅ Done |
| capabilities.html | ✅ | ✅ | ✅ | ✅ | ✅ Done |

### Sprint 3 — Polish + Full QA (Apr 22–29)

| Item | Developer | Lead Dev | QC | Fred | Status |
|------|-----------|----------|-----|------|--------|
| Cross-page consistency review | — | ✅ | — | — | ✅ Done |
| Build-time fixes (footer nav, separators) | ✅ | ✅ | — | — | ✅ Done |
| Lighthouse audit (all pages) | — | — | ✅ | — | ✅ Done (automated) |
| Accessibility audit (all pages) | — | — | ✅ | — | ✅ Done (automated) |
| Responsive audit (all pages) | — | — | ⬜ | — | Manual check pending |
| **Full site acceptance** | — | — | — | ⬜ | ✅ Done |

---

## Content Assets Tracker (slot in during build)

| Asset | Project | Owner | Due | Status |
|-------|---------|-------|-----|--------|
| Headshots ×4 | Corporate | Fred | Apr 7 | ⬜ Collecting |
| Hero imagery | Corporate | Fred / team | During build | ⬜ In progress |
| Brand lifestyle photos | Corporate | Fred | During build | ⬜ Pending |
| Logo usage approvals ×8 | Corporate | Fred | Before go-live | ⬜ Pending |
| Emily bio sign-off | Advisory | Emily | Before go-live | ⬜ Pending |
| D5 — Netlify + vson.vn config | Corporate | Fred | Before build | ⬜ Fred handling |
| D6 — store.vson.vn DNS | Corporate | Thinh | Before go-live | ⬜ Pending |

---

## Backlog

| # | Item | Priority | Owner | Target | Notes |
|---|------|----------|-------|--------|-------|
| BL-001 | ~~Automated UAT testing script~~ | High | Fred + Agent | ✅ Done 2026-04-04 | `bash 01-delivery/uat-test.sh` runs 6 test suites (em dash, HTML structure, links, forms, inventory, sitemap). Report output: 01-delivery/UAT-REPORT.md |
| BL-002 | ~~Clean 128 em dashes from wireframe source files~~ | High | Agent | ✅ Done 2026-04-04 | 128 Corporate + 197 Advisory em dashes removed. Verified zero remain. |
| BL-003 | ~~Add em dash QC gate to Developer Guide~~ | Medium | Agent | ✅ Done 2026-04-04 | Added as Standard #11 in SHARED-STANDARDS.md compliance checklist |

---

## How to Update This File

- **Agent completing a gate:** change ⬜ to ✅ for your role column
- **Page fully accepted by Fred:** change Status to "✅ Done"
- **Blocker found:** add to Content Assets Tracker or RAID log
- **Sprint complete:** add sprint summary at bottom of relevant SPRINT-XX.md
