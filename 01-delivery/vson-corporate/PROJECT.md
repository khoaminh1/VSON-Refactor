# VSON Corporate Website — Project Brief

**Status:** 🟢 `build-v2/` refactor complete — 2026-04-18
**Created:** 2026-03-31
**Last updated:** 2026-04-18
**Owner:** Fred Dang
**Domain:** vson.vn
**Language:** English (Phase 1) → Vietnamese at vson.vn/vi/ (Phase 2)

---

## Phase Progress

| Phase | Status | Notes |
|-------|--------|-------|
| Discovery | ✅ Complete | `DISCOVERY-BRIEF.md` |
| Design Spec | ✅ Complete | `DESIGN-SPEC.md` v1.2 — all 7 pages confirmed |
| Visual Concept (wireframes) | ✅ Complete | 12 HTML pages in `wireframes/`. Confirmed by Emily & Henry (2026-04-03) |
| **Technical Readiness** | ✅ PASS | `SA-TECHNICAL-READINESS-REPORT.md` — 8 gaps identified, all addressable during build. BUILD-READY. |
| Content — Company & About | ✅ Complete | Bios drafted for all 4 leaders |
| Content — Case Studies | 🟡 Can generate | 5 drafts exist, select and finalise |
| Content — Headshots | 🟡 Collecting | Due 2026-04-07 (Tuesday) |
| Content — Logo approvals | ✅ Fred has logos | Files available, upload to `_content/_incoming/` |
| Content — Visual imagery | 🟡 In progress | Hero image being created internally |
| Production Build | 🟢 Refactored to `build-v2/` 2026-04-18 | Handlebars static build mirroring `vson-advisory/build-v2/`. 13 pages render clean; content split into JSON; 8 CSS files. Old `build/` retained for cutover. |
| QA & Testing | ⏹ Not started | Parallel with build, using Sprint 1 checklist |
| Launch | ⏹ Not started | Target 2026-05-01 |

---

## What Has Been Built (Visual Concept)

All pages are functional HTML prototypes in `wireframes/`. They use real content,
real design tokens, and real copy — not placeholders. The prototype is review-ready.

| File | Page | Content status |
|------|------|---------------|
| `home.html` | Home | ✅ Full copy + structure |
| `about.html` | About | ✅ Company story + 4 leader bios (headshots pending) |
| `activation-solutions.html` | Activation Solutions | ✅ Full copy + 3-layer capability structure |
| `market-development.html` | Market Development | ✅ Full copy + MRA framework |
| `store.html` | Store | ✅ Full copy + 4 brand blocks (imagery pending) |
| `case-studies.html` | Case Studies index | ✅ 5 real case study cards |
| `cs-01-electronics-retail.html` | CS-01 detail | ✅ Full story + quote + outcomes |
| `cs-02-education.html` | CS-02 detail | ✅ Full story + quote + outcomes |
| `cs-03-fashion-retail.html` | CS-03 detail | ✅ Full story + quote + outcomes |
| `cs-04-oem-merchandise.html` | CS-04 detail | ✅ Full story + quote + outcomes |
| `cs-05-ict-distribution.html` | CS-05 detail | ✅ Full story + quote + outcomes |
| `contact.html` | Contact | ✅ Full copy + form structure |
| `shared.css` | Shared stylesheet | ✅ All design tokens, components, utilities |
| `_template.html` | Developer template | ✅ Use as base for any new page |

---

## Team

| Name | Role | Contact |
|------|------|---------|
| Frederick Dang | Co-Founder / Product Owner | hello@vson.vn |
| Henry Hung | Co-Founder | hello@vson.vn |
| Emily Vo | Operations Director & Market Expansion Lead | — |
| Duy Le | Operations Manager | — |

---

## Pending Before Production Build

The following are the only remaining blockers for the production build to start:

| Item | Owner | Priority | Notes |
|------|-------|----------|-------|
| Leader headshots × 4 | Fred | High | Collecting, due 2026-04-07 |
| Logo files × 8 | Fred | ✅ Done | Fred has all 8 logo files |
| Logo usage approvals — distribution ×4 | Fred | ✅ Done | Covered by existing distribution agreements |
| Logo usage approvals — B2B clients ×4 | Fred | Low | Check brand portal terms before go-live |
| ~~Case studies (select which 3 of 5 to feature)~~ | Fred | ✅ Done | Resolved 2026-04-03 — launch with all 5 case studies |
| Home hero visual | Fred | Medium | Being created internally |
| Brand lifestyle photos (Torayvino, Zojirushi, Kingbag, Nepia) | Fred | Medium | For Store page |

---

## Key Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-31 | Project initiated | Fred wants separate corporate site from VSON Advisory |
| 2026-03-31 | Bilingual (EN first, VI Phase 2) | English for international/investor audience now; VI at /vi/ later |
| 2026-03-31 | Design tokens: Forest Green (#1B4D3E), Digital Emerald (#2E8B57), Tech Mint (#A7FFEB), Mint White (#F1F8F6) | VSON corporate brand system |
| 2026-03-31 | Typography: Montserrat (headlines) + Inter (body) | Supports Vietnamese diacritics |
| 2026-03-31 | Case Studies: 7 core pages + individual detail pages per case study | More depth; better SEO per story |
| 2026-04-01 | 5 case study drafts written (CS-01 to CS-05) | Sourced from PangoCDP stories + VSON's own OEM/ICT work |
| 2026-04-01 | All 4 leader names and titles confirmed (FD, HH, EV, DL) | Emily Vo / Duy Le confirmed by Fred |
| 2026-04-01 | Case study filter updated to Activation Solutions / Market Development | Aligns with VSON's two solution tracks |
| 2026-04-02 | Netlify hosting selected (ADR-001) | Form handling, preview URLs, git deploy — see `06-infra/ADR-001-hosting.md` |
| 2026-04-02 | Vanilla HTML/CSS/JS stack confirmed (ADR-002) | No framework for Phase 1; evaluate 11ty for Phase 2 bilingual — see `06-infra/ADR-002-technical-stack.md` |
| 2026-04-02 | Shared conventions, not shared code (ADR-003) | Both sites self-contained; standards in `04-shared/SHARED-STANDARDS.md` |
| 2026-04-03 | Case study decision: launch with all 5 (CS-01 to CS-05), no cut needed | Content already complete |
| 2026-04-03 | Go-live moved from 2026-04-15 to 2026-05-01 | Aligned with Advisory; 3-sprint build with agent team |
| 2026-04-03 | Build date confirmed: 2026-04-08 | Both projects build in parallel |
| 2026-04-03 | Wireframes confirmed by Emily & Henry | Presented by Fred |
| 2026-04-03 | Logos available (Fred has files) | Upload pending |
| 2026-04-03 | Logo approvals resolved: distribution brands covered by existing agreements, B2B client logos to check brand portal terms | No outreach needed |
| 2026-04-02 | `store.vson.vn` stays on Haravan, DNS separation | Store page on vson.vn is a gateway, not a storefront |

---

## Reference

- Design spec: `DESIGN-SPEC.md`
- Discovery brie