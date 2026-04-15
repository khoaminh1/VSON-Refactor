# IP Harvest Log | VSON Advisory

**Programme:** VS26 New Website (VSON Advisory + VSON Corporate)
**Entity:** VSON Advisory (Managing Partner: Fred Dang)
**Pod:** Website Delivery (Pod 1 baseline)
**Last Updated:** 2026-04-06

---

## How to Use This Log

This log catalogues every reusable accelerator harvested from the VS26 programme. Assets are organised into **bundles** (logical kits for a specific delivery phase) with **individual entries** cross-referenced inside each bundle.

When starting a new web engagement, scan the bundle list and pull the relevant kits. Each entry links to the source file in this workspace.

---

## Bundle Summary

| Bundle | Name | Assets | Phase it accelerates |
|---|---|---|---|
| BDL-01 | Sprint Governance Kit | 5 | Sprint planning, execution, retrospective |
| BDL-02 | Stage Gate Suite | 4 | Phase transitions, release, acceptance |
| BDL-03 | Programme Tracker Pack | 4 | Programme-level governance and tracking |
| BDL-04 | Quality Gate Suite | 4 | QA, testing, compliance checking |
| BDL-05 | CSS Architecture Starter | 5 | Front-end build foundation |
| BDL-06 | Netlify Deployment Kit | 3 | Hosting, SEO infrastructure, architecture decisions |
| BDL-07 | Discovery and Design Kit | 5 | Discovery, IA, design spec, content QA |
| BDL-08 | Content Pattern Library | 1 | Content structure templates |
| | **Total** | **31** | |

---

## BDL-01: Sprint Governance Kit

> Accelerates: Sprint planning, execution cadence, team workflow, retrospective.
> Use when: Starting any time-boxed web delivery with a defined team.

### IP-SGK-001: Definition of Ready (DoR)

| Field | Value |
|---|---|
| Source | `01-delivery/standards/DEFINITION-OF-READY.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | 3-tier DoR checklist: universal (all tasks), code tasks (developer-specific), content tasks (PO-specific). Includes escalation rules for unready tasks. |
| Customisation needed | Role names, branch naming convention |
| Est. time saved | 2-3 hrs PM setup per project |

### IP-SGK-002: Definition of Done (DoD)

| Field | Value |
|---|---|
| Source | `01-delivery/standards/DEFINITION-OF-DONE.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | 5-category DoD: Code Quality, Visual/Content, Performance, Security, Accessibility, Process. Includes exception handling procedure. |
| Customisation needed | Quality thresholds (Lighthouse targets), reviewer names |
| Est. time saved | 2-3 hrs PM/TL setup per project |

### IP-SGK-003: Sprint Template

| Field | Value |
|---|---|
| Source | `01-delivery/standards/SPRINT-TEMPLATE.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Sprint backlog, planning notes, mid-sprint check, sprint review, carry-over tracking. WIP limits built in. |
| Customisation needed | Sprint dates, capacity, team names |
| Est. time saved | 1-2 hrs PM per sprint |

### IP-SGK-004: Agent Workflow (5-Role Pipeline)

| Field | Value |
|---|---|
| Source | Embedded in Sprint 1-3 docs (both projects) |
| Type | Process pattern |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | SA scopes -> Developer builds -> Lead Dev reviews -> QC tests -> PM accepts. Each role has a defined gate and day allocation within a 7-day sprint. Proven across 6 sprints (3 per project, dual-stream). |
| Customisation needed | Role assignment per engagement; day allocation if sprint length changes |
| Est. time saved | 4-6 hrs process design per new engagement |

### IP-SGK-005: Retrospective Template

| Field | Value |
|---|---|
| Source | `03-knowledge/retrospectives/RETROSPECTIVE-TEMPLATE.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Structured retro format for post-sprint reflection. |
| Customisation needed | Minimal |
| Est. time saved | 0.5 hrs per sprint |

---

## BDL-02: Stage Gate Suite

> Accelerates: Phase transitions, go/no-go decisions, release, acceptance sign-off.
> Use when: Managing a multi-phase web delivery with stakeholder gates.

### IP-SGS-001: Stage Gate Checklists (B1-B6)

| Field | Value |
|---|---|
| Source | `01-delivery/standards/STAGE-GATES.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | 6-gate lifecycle: Discovery -> Design -> Development -> Testing/QA -> Go-Live -> Close. Each gate has specific criteria, owner, and sign-off requirement. Dual sign-off (PM + Tech Lead) on technical gates. |
| Customisation needed | Gate criteria per project scope; reviewer names |
| Est. time saved | 4-6 hrs governance design per project |

### IP-SGS-002: Build-Ready Checklist

| Field | Value |
|---|---|
| Source | `01-delivery/programme/BUILD-READY-CHECKLIST.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Pre-build go/no-go decision framework. Ensures all blockers cleared, design approved, standards agreed, infra decided before build starts. |
| Customisation needed | Blocker categories per project |
| Est. time saved | 2-3 hrs PM per project |

### IP-SGS-003: Release Protocol

| Field | Value |
|---|---|
| Source | `01-delivery/programme/RELEASE-PROTOCOL.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Go-live sequence: staging verification, DNS config, HTTPS check, monitoring setup, analytics, stakeholder notification, 48hr stability check. |
| Customisation needed | Domain-specific DNS steps; monitoring tool |
| Est. time saved | 2-3 hrs per release |

### IP-SGS-004: Acceptance Review Format

| Field | Value |
|---|---|
| Source | `01-delivery/acceptance/ACCEPTANCE-REVIEW-S2.md`, `ACCEPTANCE-REVIEW-S3.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Sprint acceptance structure with conditional acceptance, carry-over items, and lessons learned capture. |
| Customisation needed | Acceptance criteria per sprint scope |
| Est. time saved | 1-2 hrs per sprint review |

---

## BDL-03: Programme Tracker Pack

> Accelerates: Programme-level governance, multi-stream tracking, risk management.
> Use when: Managing a programme with 2+ parallel workstreams or multiple stakeholders.

### IP-PTP-001: Build Tracker (Dual-Stream)

| Field | Value |
|---|---|
| Source | `01-delivery/programme/BUILD-TRACKER.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Multi-stream progress tracker with role-based gate columns (Developer, Lead Dev, QC, PM). Sprint calendar, content assets tracker, backlog section. Proven for dual-stream parallel delivery. |
| Customisation needed | Stream names, sprint dates, team roles |
| Est. time saved | 3-4 hrs programme setup |

### IP-PTP-002: Impediment Backlog

| Field | Value |
|---|---|
| Source | `01-delivery/programme/IMPEDIMENT-BACKLOG.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Structured impediment tracking with priority, owner, resolution status. |
| Customisation needed | Minimal |
| Est. time saved | 1 hr setup |

### IP-PTP-003: Programme Charter Format

| Field | Value |
|---|---|
| Source | `00-programme/PROGRAMME-CHARTER.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Programme charter with benefits map, dependency matrix, stakeholder map, integrated roadmap. |
| Customisation needed | Programme-specific content |
| Est. time saved | 4-6 hrs programme initiation |

### IP-PTP-004: RAID Log Format

| Field | Value |
|---|---|
| Source | `01-delivery/*/RAID.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Risks, Assumptions, Issues, Dependencies log with status tracking. Used across both projects. |
| Customisation needed | Minimal |
| Est. time saved | 1-2 hrs per project |

---

## BDL-04: Quality Gate Suite

> Accelerates: QA, automated testing, compliance verification.
> Use when: Any web build targeting professional-grade quality (Lighthouse 95+, WCAG AA).

### IP-QGS-001: Shared Standards (11-Point Compliance Checklist)

| Field | Value |
|---|---|
| Source | `04-shared/SHARED-STANDARDS.md` |
| Type | Checklist |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | 11 standards: CSS reset, accessibility utilities, font loading, image pattern, responsive breakpoints, form pattern (Netlify), meta/SEO template, touch targets, language attribute, security headers, em dash ban. Each with code examples. |
| Customisation needed | Form provider (if not Netlify); font stack per brand |
| Est. time saved | 6-8 hrs standards authoring per project |

### IP-QGS-002: Quality Policies (3 Documents)

| Field | Value |
|---|---|
| Source | `00-programme/quality/ACCESSIBILITY-STANDARD.md`, `PERFORMANCE-BUDGET.md`, `SECURITY-POLICY.md` |
| Type | Standalone policies |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | WCAG 2.1 AA standard, performance budget (Lighthouse 95+, LCP <2.5s, CLS <0.1, page weight limits), security header policy (CSP, X-Frame-Options). |
| Customisation needed | Threshold adjustments per client requirements |
| Est. time saved | 4-6 hrs policy authoring per project |

### IP-QGS-003: UAT Automation Script

| Field | Value |
|---|---|
| Source | `01-delivery/testing/uat-test.sh` |
| Type | Executable script |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | 6 test suites: em dash content scan, HTML structure validation, link checker, form validation, page inventory, sitemap verification. Runs against local build files. Generated 132 PASS, 0 FAIL on Corporate site. |
| Customisation needed | File paths; add project-specific test cases |
| Est. time saved | 8-12 hrs test script development per project |

### IP-QGS-004: UAT Report Format

| Field | Value |
|---|---|
| Source | `01-delivery/testing/UAT-REPORT.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Automated test output format with PASS/WARN/FAIL per test case. Machine-generated, human-readable. |
| Customisation needed | Minimal |
| Est. time saved | 1 hr per test cycle |

---

## BDL-05: CSS Architecture Starter

> Accelerates: Front-end build foundation, design system setup, developer onboarding.
> Use when: Building a vanilla HTML/CSS/JS website with design token architecture.

### IP-CAS-001: CSS Architecture Pattern

| Field | Value |
|---|---|
| Source | `02-product/*/build/css/styles.css` |
| Type | Architecture pattern |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Single-file CSS architecture: custom properties (design tokens) at top, component classes (btn, card, grid), utility classes, animation/transition classes. Proven on two different brand systems. |
| Customisation needed | Replace design tokens (colors, fonts, spacing) per client brand |
| Est. time saved | 8-12 hrs CSS architecture per project |

### IP-CAS-002: HTML Page Template

| Field | Value |
|---|---|
| Source | `04-shared/templates/page-template.html` |
| Type | Starter template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Semantic HTML5 base: skip-to-content link, nav, main, footer, meta block, OG tags, favicon links, font preload. Standards-compliant from line 1. |
| Customisation needed | Brand-specific nav items, meta content, font URLs |
| Est. time saved | 2-3 hrs per page scaffolding |

### IP-CAS-003: Developer Template and Style Guide

| Field | Value |
|---|---|
| Source | `04-shared/DEVELOPER-TEMPLATE.md` |
| Type | Guide |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Directory structure, design system overview, HTML page template with code, component usage examples, coding rules. Developer onboarding document. |
| Customisation needed | Project-specific directory, component list |
| Est. time saved | 4-6 hrs developer guide authoring |

### IP-CAS-004: JS Interaction Library

| Field | Value |
|---|---|
| Source | `02-product/*/build/js/main.js` |
| Type | Code template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Vanilla JS: mobile nav toggle, smooth scroll, scroll-triggered animations, intersection observer patterns. No framework dependency. |
| Customisation needed | Selector names, animation timings |
| Est. time saved | 4-6 hrs JS development per project |

### IP-CAS-005: Brand Design Token Methodology

| Field | Value |
|---|---|
| Source | Evidenced in both projects' `styles.css` |
| Type | Methodology |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | How to define colors, typography, spacing, shadows as CSS custom properties. Proven across two different brand identities (Advisory: dark/gold; Corporate: green/mint). Includes naming convention and cascade strategy. |
| Customisation needed | Token values per brand |
| Est. time saved | 2-3 hrs design token setup |

---

## BDL-06: Netlify Deployment Kit

> Accelerates: Hosting setup, SEO infrastructure, architecture decision documentation.
> Use when: Deploying a static/JAMstack site on Netlify.

### IP-NDK-001: Netlify Config Pattern

| Field | Value |
|---|---|
| Source | `02-product/*/build/netlify.toml` |
| Type | IaC template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Security headers (CSP, X-Frame-Options, X-Content-Type-Options), redirect rules, form configuration, build settings. |
| Customisation needed | Domain-specific CSP allowlist; form names |
| Est. time saved | 2-3 hrs config per project |

### IP-NDK-002: SEO File Templates

| Field | Value |
|---|---|
| Source | `02-product/*/build/robots.txt`, `sitemap.xml` |
| Type | Templates |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | robots.txt (allow all, link to sitemap) and sitemap.xml (page list with lastmod dates). |
| Customisation needed | Domain, page URLs, dates |
| Est. time saved | 0.5-1 hr per project |

### IP-NDK-003: ADR Format (Architecture Decision Records)

| Field | Value |
|---|---|
| Source | `06-infra/ADR-001-hosting.md`, `ADR-002-technical-stack.md`, `ADR-003-shared-base-layer.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Structured decision record format: context, decision, rationale, consequences, alternatives considered. 3 real examples included as reference. |
| Customisation needed | Decision-specific content |
| Est. time saved | 1-2 hrs per ADR |

---

## BDL-07: Discovery and Design Kit

> Accelerates: Client discovery, information architecture, design specification, content QA.
> Use when: Running discovery and design phases for a new website engagement.

### IP-DDK-001: Information Architecture Methodology

| Field | Value |
|---|---|
| Source | `04-shared/INFORMATION-ARCHITECTURE.md` |
| Type | Framework |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Page structure definition, navigation architecture (header + footer), internal linking strategy, content expansion plan (4-phase growth). Proven for a 6-page advisory site and 12-page corporate site. |
| Customisation needed | Pages, nav items, service offering per client |
| Est. time saved | 4-6 hrs IA design per project |

### IP-DDK-002: Design Spec Format

| Field | Value |
|---|---|
| Source | `02-product/*/specs/DESIGN-SPEC.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Design token definitions (colors, typography, spacing), component specs, section-by-section page layout documentation. |
| Customisation needed | Brand tokens, component list |
| Est. time saved | 4-6 hrs design spec authoring |

### IP-DDK-003: Content Review and Replacement Methodology

| Field | Value |
|---|---|
| Source | `02-product/vson-advisory/specs/CONTENT-REVIEW-REPLACEMENTS.md` |
| Type | Process |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Structured content QA: issue severity classification (critical, major, minor), before/after replacement tracking, rationale for each change. 13 content replacements documented as reference. |
| Customisation needed | Content-specific issues |
| Est. time saved | 2-3 hrs content QA methodology per project |

### IP-DDK-004: Discovery Brief Format

| Field | Value |
|---|---|
| Source | `02-product/vson-corporate/specs/DISCOVERY-BRIEF.md` |
| Type | Template |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Client discovery structure: business context, target audience, competitive positioning, content requirements, technical constraints. |
| Customisation needed | Client-specific content |
| Est. time saved | 2-3 hrs discovery setup |

### IP-DDK-005: Wireframe-to-Production Workflow

| Field | Value |
|---|---|
| Source | Evidenced across Sprint 1-3 docs |
| Type | Process pattern |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | HTML wireframes as browser-testable prototypes (not Figma). Client reviews in real browser. Wireframes become the developer spec. Eliminates design-to-dev handoff gap. Proven: both projects went from HTML wireframe to production build with zero design misinterpretation. |
| Customisation needed | None (process is tool-agnostic) |
| Est. time saved | 8-12 hrs design handoff per project (eliminates Figma-to-code translation) |

---

## BDL-08: Content Pattern Library

> Accelerates: Content structure for common page types.
> Use when: Building content-heavy pages (case studies, team bios, service descriptions).
> Note: This bundle will grow as more patterns are harvested from future engagements.

### IP-CPL-001: Case Study Pattern (Index + Detail)

| Field | Value |
|---|---|
| Source | Corporate wireframes + build (`02-product/vson-corporate/build/case-studies.html`, `cs-01-*.html` to `cs-05-*.html`) |
| Type | Content pattern |
| Harvested from | VS26 New Website (Pod 1) |
| Date | 2026-04-06 |
| Description | Two-level case study system: card-based index page with filter categories, plus full story detail pages (hero, client context, challenge, solution, outcomes, quote). 5 real examples as reference. |
| Customisation needed | Client case studies, filter categories, visual design |
| Est. time saved | 4-6 hrs content structure per project |

---

## Efficiency Tracking (Pod 1 Baseline)

> See `03-knowledge/ip-harvest/EFFICIENCY-BASELINE.md` for detailed hours data.

| Metric | Pod 1 (VS26) | Pod 5 Target | Pod 11 Target |
|---|---|---|---|
| Total senior hours (PM + SA) | TBD | TBD | Pod 1 x 0.80 |
| Total execution hours (Dev + QC) | TBD | TBD | Pod 1 x 0.80 |
| Total elapsed weeks | 3 sprints + buffer = 4 weeks | TBD | TBD |
| Pages delivered | 18 (6 Advisory + 12 Corporate) | TBD | TBD |

---

## Log Maintenance Rules

- Update after every Pod delivery (within 2 weeks of engagement close)
- New accelerators: add entry to the relevant bundle
- New bundle: create when 3+ related accelerators don't fit existing bundles
- Review quarterly: are accelerators being used? Are time-saved estimates accurate?
