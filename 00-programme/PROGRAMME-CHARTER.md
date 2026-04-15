# VSON Website Programme Charter

**Programme Name:** VSON Web Platform Programme
**Programme Manager:** Fred Dang
**Executive Sponsors:** Henry Hung, Emily Vo
**Product Owner:** Duy Le
**Tech Lead:** Thinh
**Created:** 2026-04-02
**Status:** Active

---

## Executive Intent

Deliver two professional websites — vsonadvisory.com (VSON Advisory) and vson.vn (VSON Corporate) — under a coordinated programme to ensure shared quality standards, reusable assets, and efficient resource utilisation.

> **Important:** These are two separate, unrelated business entities managed by Fred in the same workspace. VSON Advisory has no ownership or brand relationship with VSON (vson.vn). Do not conflate them.

---

## Programme Scope

| Project | Domain | Language | Phase |
|---------|--------|----------|-------|
| VSON Advisory | vsonadvisory.com | English | Design complete → Build starting 2026-04-08 |
| VSON Corporate | vson.vn | English first → Vietnamese Phase 2 | Visual concept complete → Awaiting content assets |

---

## Team & Roles

| Role | Person | Responsibility |
|------|--------|---------------|
| Programme Manager / PM | Fred Dang | Cross-project coordination, governance, stakeholder alignment |
| Executive Sponsor | Henry Hung | Strategic direction, approval authority |
| Executive Sponsor | Emily Vo | Strategic direction, approval authority |
| Product Owner | Duy Le | Backlog ownership, content/UX decisions, acceptance criteria |
| Tech Lead | Thinh | Architecture, code quality, CI/CD, security, infra |

---

## Shared Standards

- Quality standards: `00-programme/quality/`
- Dependency matrix: `00-programme/DEPENDENCY-MATRIX.md`
- Reusable assets: `04-shared/`
- Change control: `00-programme/CHANGE-CONTROL.md`
- Stakeholder map + RACI: `00-programme/STAKEHOLDER-MAP.md`
- Domain glossary: `00-programme/DOMAIN-GLOSSARY.md`
- Integrated roadmap: `00-programme/INTEGRATED-ROADMAP.md`

## Delivery Controls

- Definition of Ready: `01-delivery/DEFINITION-OF-READY.md`
- Definition of Done: `01-delivery/DEFINITION-OF-DONE.md`
- Stage gates: `01-delivery/STAGE-GATES.md`
- Release protocol: `01-delivery/RELEASE-PROTOCOL.md`
- Sprint template: `01-delivery/SPRINT-TEMPLATE.md`
- Impediment backlog: `01-delivery/IMPEDIMENT-BACKLOG.md`
- Action log: `00-programme/status-reports/ACTION-LOG.md`

---

## Key Dates

| Milestone | Target Date |
|-----------|-------------|
| VSON Advisory — Build start | 2026-04-08 |
| VSON Advisory — Launch | 2026-05-01 |
| VSON Corporate — Content assets ready | TBD |
| VSON Corporate — Build start | TBD |

---

## Decision Log

| # | Date | Decision | Made By |
|---|------|----------|---------|
| D1 | 2026-04-02 | Adopted 7-layer programme folder structure | Fred |
| D2 | 2026-04-02 | Security: structured OWASP review, not just checklist | Fred |
| D3 | 2026-04-02 | Infra/DevOps included from day one (06-infra/) | Fred |
| D4 | 2026-04-02 | Hosting: Netlify selected for both sites (ADR-001) | Fred + Thinh |
| D5 | 2026-04-02 | Tech stack: Vanilla HTML/CSS/JS, no framework (ADR-002) | Fred + Thinh |
| D6 | 2026-04-02 | Shared base layer: common CSS patterns, separate brand tokens (ADR-003) | Fred + Thinh |
| D7 | 2026-04-03 | Full programme controls applied: DoR, DoD, stage gates, release protocol, change control, RACI, domain glossary, impediment backlog, roadmap | Fred |
