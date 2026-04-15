# Standard Core Inventory | VSON Advisory IP Harvest

**Programme:** VS26 New Website (VSON Advisory + VSON Corporate)
**Entity:** VSON Advisory (Managing Partner: Fred Dang)
**Purpose:** Catalogue all reusable assets from this programme for future VSON Advisory work
**Last Updated:** 2026-04-06
**Harvest Scope:** Full (delivery process + technical assets + design methodology)

---

## Summary

| Category | Assets | Standard Core | Custom Edge |
|---|---|---|---|
| Delivery Process | 11 | 11 | 0 |
| Technical Assets | 10 | 10 | 0 |
| Design Methodology | 10 | 10 | 0 |
| **Total** | **31** | **31** | **0** |

All 31 assets are reusable. The Custom Edge in any future engagement is: client brand tokens (colors, fonts), client content (copy, images, bios), client IA (specific pages and service structure), and client-specific integrations.

---

## Category 1: Delivery Process IP

> How we delivered. Reusable for any web delivery project managed by VSON Advisory.

| # | Asset | Source | Reuse Form | Notes |
|---|---|---|---|---|
| P1 | Definition of Ready (DoR) | `01-delivery/standards/DEFINITION-OF-READY.md` | Template | Parameterise role names per project |
| P2 | Definition of Done (DoD) | `01-delivery/standards/DEFINITION-OF-DONE.md` | Template | Swap quality thresholds per project |
| P3 | Stage Gate Checklists (B1-B6) | `01-delivery/standards/STAGE-GATES.md` | Template | 6-gate lifecycle, project-agnostic |
| P4 | Sprint Template | `01-delivery/standards/SPRINT-TEMPLATE.md` | Template | Plug in sprint-specific scope |
| P5 | Build Tracker (dual-stream) | `01-delivery/programme/BUILD-TRACKER.md` | Template | Multi-stream progress tracker with role-based gates |
| P6 | Build-Ready Checklist | `01-delivery/programme/BUILD-READY-CHECKLIST.md` | Template | Pre-build go/no-go decision framework |
| P7 | Impediment Backlog | `01-delivery/programme/IMPEDIMENT-BACKLOG.md` | Template | Structured impediment tracking |
| P8 | Release Protocol | `01-delivery/programme/RELEASE-PROTOCOL.md` | Template | Go-live sequence and sign-off |
| P9 | Agent Workflow (5-role pipeline) | Embedded in Sprint docs | Process pattern | SA -> Developer -> Lead Dev -> QC -> PM acceptance |
| P10 | Retrospective Template | `03-knowledge/retrospectives/RETROSPECTIVE-TEMPLATE.md` | Template | Post-sprint reflection structure |
| P11 | Acceptance Review format | `01-delivery/acceptance/ACCEPTANCE-REVIEW-S2.md` | Template | Sprint acceptance structure with conditions |

---

## Category 2: Technical Assets

> What we built with. Reusable for any vanilla HTML/CSS/JS web project on Netlify.

| # | Asset | Source | Reuse Form | Notes |
|---|---|---|---|---|
| T1 | Shared Standards (11-point checklist) | `04-shared/SHARED-STANDARDS.md` | Checklist | CSS reset, a11y, fonts, images, breakpoints, forms, SEO, security, em dash ban |
| T2 | CSS Architecture Pattern | `02-product/*/build/css/styles.css` | Architecture pattern | Design tokens + components + utilities in single file; parameterise tokens per brand |
| T3 | HTML Page Template | `04-shared/templates/page-template.html` | Starter template | Semantic HTML5, a11y, meta block, nav/footer structure |
| T4 | Developer Template and Style Guide | `04-shared/DEVELOPER-TEMPLATE.md` | Guide | Directory structure, component usage, coding rules |
| T5 | Netlify Config Pattern | `02-product/*/build/netlify.toml` | IaC template | Security headers, redirects, form config |
| T6 | UAT Automation Script (6 test suites) | `01-delivery/testing/uat-test.sh` | Script | Em dash scan, HTML structure, links, forms, inventory, sitemap |
| T7 | UAT Report format | `01-delivery/testing/UAT-REPORT.md` | Template | Automated test output structure |
| T8 | JS Interaction Library | `02-product/*/build/js/main.js` | Code template | Nav toggle, scroll behaviour, animations; parameterise selectors |
| T9 | robots.txt + sitemap.xml pattern | `02-product/*/build/robots.txt`, `sitemap.xml` | Templates | Standard SEO files |
| T10 | ADR format (Architecture Decision Records) | `06-infra/ADR-001/002/003*.md` | Template | Structured decision record with rationale and consequences |

---

## Category 3: Design Methodology

> What we designed. Reusable for any professional services website engagement.

| # | Asset | Source | Reuse Form | Notes |
|---|---|---|---|---|
| D1 | Information Architecture methodology | `04-shared/INFORMATION-ARCHITECTURE.md` | Framework | Page structure, nav architecture, linking strategy, content expansion plan; parameterise per client service offering |
| D2 | Design Spec format | `02-product/*/specs/DESIGN-SPEC.md` | Template | Design token definitions, typography, color, spacing, component specs |
| D3 | Content Review and Replacement methodology | `02-product/vson-advisory/specs/CONTENT-REVIEW-REPLACEMENTS.md` | Process | Structured content QA with change log and rationale |
| D4 | Discovery Brief format | `02-product/vson-corporate/specs/DISCOVERY-BRIEF.md` | Template | Client discovery structure |
| D5 | Wireframe-to-production workflow | Evidenced across sprints | Process pattern | HTML wireframes as reviewable prototypes, not Figma; browser-testable from day 1 |
| D6 | Quality standards (3 policies) | `00-programme/quality/*.md` | Standalone policies | WCAG 2.1 AA, performance budget (Lighthouse 95+), security headers |
| D7 | Programme Charter format | `00-programme/PROGRAMME-CHARTER.md` | Template | Benefits map, dependency matrix, stakeholder map |
| D8 | RAID log format | `01-delivery/*/RAID.md` | Template | Risks, assumptions, issues, dependencies |
| D9 | Brand design token pattern | Evidenced in both `styles.css` files | Methodology | How to define colors, typography, spacing as CSS custom properties; parameterisable per client brand |
| D10 | Case study page pattern | Corporate wireframes + build | Content pattern | Card-based index page + full story detail template (hero, quote, outcomes) |

---

## What Is NOT Reusable (Custom Edge Per Engagement)

These elements are always client-specific and must be created fresh:

| Item | Why |
|---|---|
| Brand colors, typography, visual identity | Unique per client |
| Page copy and content | Unique per client |
| Team bios and headshots | Unique per client |
| Information architecture (specific pages) | Varies by service offering |
| Domain-specific integrations | Client infrastructure dependent |
| Logo files and brand assets | Client-owned |

---

## Cross-Reference

- IP Harvest Log (formal accelerator entries): `03-knowledge/ip-harvest/IP-HARVEST-LOG.md`
- Efficiency Baseline (Pod 1 effort data): `03-knowledge/ip-harvest/EFFICIENCY-BASELINE.md`
- Vinova Website Pod Canvas (productisation): `03-knowledge/website-pod/CANVAS.md`
