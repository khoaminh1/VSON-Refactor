# VSON Advisory Website — Project Snapshot

**Status:** 🟡 v0.2 SFA Compliance Release — deployed to staging, pending visual sign-off
**Last Updated:** 2026-04-09
**Owner:** Frederick Dang
**Domain:** `vsonadvisory.com`
**Language:** English only

> **Entity note:** VSON Advisory is a completely separate business from VSON (vson.vn). They share a workspace folder but have no brand or ownership relationship.
> For the full project index, see `../INDEX.md`

---

## What This Project Is

A professional English-language website for VSON Advisory, a consulting firm.
6-page site: Home, Approach, Brain Trust (team), Vault (insights), Contact, Footer.

---

## Team

| Name | Role | Region |
|------|------|--------|
| Frederick Dang | Managing Partner, Vson Advisory Pte. Ltd. (SG) / Product Owner | Singapore |
| Henry Hung | Strategic Partner (owner, Vson USA LLC) | USA |
| Emily Vo | Strategic Partner (owner, VSON Corp VN) / Content lead | Ho Chi Minh City |
| ~~Duy Le~~ | ~~Partner~~ — **removed from structure** per de-linked partnership model (2023-10-24) | — |

> **Corporate structure note:** Per the De-linked Partnership Model
> (`00-programme/CORPORATE-STRUCTURE.md` — to be created), Henry and Emily are
> publicly designated **"Strategic Partners"** — "Partner in Expertise, not
> Partner in Equity." Only Frederick holds the Managing Partner title for
> Vson Advisory (SG). This title discipline is a legal safeguard, not a
> presentation choice.

---

## Release Authority

This project follows the programme-wide release management model.

| Aspect | Reference |
|---|---|
| Release framework | `../../00-programme/RELEASE-AUTHORITY.md` |
| Release Owner | Fred Dang (approves Minor releases alone) |
| Sponsor Consensus | Fred + Henry + Emily + Duy (approves Major releases) |
| Tech Release Gate | Thinh (validates v0.9 → v1.0) |
| Current locked version | **v0.1** — locked 2026-04-07 (Minor, Build-Ready Baseline) — see `releases/v0.1/SIGN-OFF.md` |
| Releases folder | `releases/` (created at first lock) |

> Round 2 SFA compliance fixes are classified as a **Major** release per
> `RELEASE-AUTHORITY.md` §4.2 — Sponsor Consensus or Compliance Fast-Path required.

---

## Current Phase: v0.2 Compliance Build — Staging Review

- v0.1 baseline locked: 2026-04-07 (Build-Ready Baseline)
- v0.2 SFA compliance audit completed: 2026-04-07 (12 findings: 4 Critical, 5 High, 3 Medium)
- v0.2 build applied: 2026-04-09 (all 12 findings remediated across 7 pages)
- Automated SFA compliance test: 77/77 PASS
- Deployed to GitHub + Netlify staging: 2026-04-09
- **Pending:** Fred visual sign-off on footer layout
- Launch target: **2026-05-01**

---

## Phase Status

| Phase | Status | Date |
|-------|--------|------|
| Design & Strategy | ✅ Complete | 2026-03-29 |
| Partner Review | ✅ Complete | Design approved 2026-04-03 |
| v0.1 Baseline Lock | ✅ Complete | 2026-04-07 |
| v0.2 SFA Compliance Audit | ✅ Complete | 2026-04-07 (12 findings) |
| v0.2 Build (7 pages remediated) | ✅ Complete | 2026-04-09 |
| v0.2 Automated Test | ✅ Complete | 2026-04-09 (77/77 PASS) |
| v0.2 Leadership Defects | ✅ Complete | 2026-04-09 (reorder, titles, bio edits) |
| v0.2 Footer Restructure | ✅ Complete | 2026-04-09 (disclaimer + layout fix) |
| v0.2 GitHub + Netlify Deploy | ✅ Complete | 2026-04-09 |
| v0.2 Visual Sign-off | ✅ Complete | Fred approved footer layout 2026-04-11 |
| QA & Testing | ⏹ Not started | Parallel with build |
| Launch | ⏹ Not started | 2026-05-01 |

---

## Key Files

| File | Purpose |
|------|---------|
| `../INDEX.md` | Full project index and deliverables checklist |
| `design-concept.html` | Visual mockup — v1 original (2026-03-30) |
| `design-concept-v2.html` | Visual mockup — v2 with all 13 content fixes (2026-04-01) |
| `CONTENT-REVIEW-REPLACEMENTS.md` | Full change log with rationale for v1 → v2 |
| `css/styles.css` | Design system (tokens, components) |
| `js/main.js` | Shared interactions library |
| `../INFORMATION-ARCHITECTURE.md` | 6-page structure + 4-phase expansion plan |
| `../DEVELOPER-TEMPLATE.md` | Complete build guide for developers |
| `COMPLIANCE-AUDIT-2026-04-07.md` | SFA compliance audit — 12 findings (v0.2 scope source) |
| `../../02-product/vson-advisory/tests/sfa-compliance.test.js` | Automated SFA regression test (77 checks) |

---

## Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| 6 pages (not 12) | Fast MVP; Phase 2 for expansion |
| HTML mockup (not Figma) | Real browser preview; developer spec |
| Single CSS file | Design consistency; developer speed |
| 6 content pillars | Matches VSON's service offering |
| 4-phase content expansion | Launch fast, grow sustainably |
| Netlify hosting (ADR-001) | Form handling, preview URLs, git deploy — see `06-infra/ADR-001-hosting.md` |
| Vanilla HTML/CSS/JS stack (ADR-002) | No framework overhead, 95+ Lighthouse — see `06-infra/ADR-002-technical-stack.md` |
| Shared conventions, not shared code (ADR-003) | Brand separation, no build dependency — see `06-infra/ADR-003-shared-base-layer.md` |

---

## Pre-Build Blockers (Fred to resolve before 2026-04-08)

These items cannot be fixed at build time — they require Fred's input or partner action.

| # | Blocker | Owner | Status |
|---|---------|-------|--------|
| B1 | ~~Duy Le absent from all pages~~ | — | Removed — Duy not needed for Advisory site |
| B2 | ~~Placeholder contact data~~ | Fred | ✅ Resolved 2026-04-03 — Email: contact@vsonadvisory.com, Phone: +65 8867 9295, Address: city-level (SG / SF / HCM). Full addresses deferred |
| B3 | ~~Vault articles don't exist~~ | Fred | ✅ Resolved 2026-04-03 — launch with "Coming Soon" teaser. Articles deferred to Phase 2 |
| B4 | ~~Bio proof points needed~~ | Fred | ✅ Resolved 2026-04-03 — Fred: water metering portal + SGD 40M M&A; Henry: 1,000+ partners + 100+ brand launches; Emily: multi-unit CEO + double-digit million fundraising + new retail group network. Emily to verify before go-live |
| B5 | ~~Credibility bar contradicts positioning~~ | Fred | ✅ Resolved in v2 — rewritten to reference FPT, CEO-level ops, digital projects, M&A |
| B6 | ~~"Built Different. By Design." heading~~ | Fred | ✅ Resolved in v2 — replaced with "From Risk to Performance to Exit Value" |

---

## Build-Time Fixes (resolved by developer — no Fred input needed)

| # | Fix |
|---|-----|
| F1 | Remove ghost "Capabilities" nav item; replace with "Contact" |
| F2 | Standardise all CTA copy to single phrase: "Request a Strategic Briefing" |
| F3 | Link "Phase One/Two/Three →" arrows in Value Chain to `/approach.html` |
| F4 | Align Vault pillar tags to 6 official IA pillar names |
| F5 | Add CTA band to bottom of Approach page |
| F6 | Remove "Typically" from Engagement Steps heading |
| F7 | Change passive voice to active in all 6 Capability pillar cards |
| F8 | Demote 3rd Audience Pathway card (network join) to secondary visual weight |
| F9 | Remove 4th radio option from Contact form; replace with "Corporate / Institutional inquiry" |
| ~~F10~~ | ~~Add Duy Le to Brain Trust preview and Contact page~~ — **CANCELLED 2026-04-08.** Duy removed from partnership structure per De-linked Partnership Model (2023-10-24). Nominee trust eliminated. Do not re-open. |

---

## Content Review Log

| Date | Action |
|------|--------|
| 2026-04-09 | **v0.2 SFA COMPLIANCE RELEASE — BUILD COMPLETE.** All 12 findings from COMPLIANCE-AUDIT-2026-04-07.md remediated across 7 HTML pages (index, approach, brain-trust, capabilities, contact, vault, thank-you). SFA disclaimer added to all page footers. Automated regression test created (77 checks, 10 banned phrases + disclaimer verification per page). Leadership reordered: Frederick first, Henry/Emily titled "Strategic Partner". Fred's M&A sentence removed. Footer restructured with column layout + full-width disclaimer. Deployed to GitHub (tanphuocus/VS26-New-Websites) and Netlify staging (vs26-advisory). Pending: Fred visual sign-off on footer layout. |
| 2026-04-08 | **F10 CANCELLED** — Duy Le removed from partnership structure per De-linked Partnership Model (2023-10-24). Henry's title corrected from "Managing Partner" to "Strategic Partner" per same document. Corporate structure now canonical input to v0.2 compliance scope. See `releases/v0.2/PLANNING-INPUTS.md` |
| 2026-04-07 | **v0.1 locked** as Minor (Build-Ready Baseline) — no production deploy. See `releases/v0.1/SIGN-OFF.md` |
| 2026-04-03 | B2 Contact data resolved: contact@vsonadvisory.com, +65 8867 9295, city-level addresses. Individual emails replaced with single contact@ inbox |
| 2026-04-03 | B4 Bio proof points resolved: all 3 partner bios updated in design-concept-v2.html with concrete outcomes. Emily bio flagged for her sign-off before go-live |
| 2026-04-03 | B3 Vault decision: launch with "Coming Soon" teaser page. Real articles deferred to Phase 2. Emily dependency removed |
| 2026-04-03 | Design concept approved by Henry & Emily. Em dashes removed from user-facing prose (AI content signal). B2 contact data deadline moved to 2026-04-07 |
| 2026-04-01 | All 13 content replacements confirmed by Fred, see `CONTENT-REVIEW-REPLACEMENTS.md` |
| 2026-04-01 | Key decisions locked: hero = "govern outcomes", team section = "Leadership", emails = @vsonadvisory.com, Pillar 6 = Investment Readiness & Exit Advisory |
| 2026-04-01 | IA doc Pillar 6 updated from "Applied AI & Automation" to "Investment Readiness & Exit Advisory" |
| 2026-04-01 | Full critical content review completed — 6 critical, 4 major, 5 minor issues identified |
| 2026-03-30 | Design concept sent to partners for review |
| 2026-03-29 | Design & strategy phase complete |

---

## Reference

- Shared assets: `../_shared/REUSABLE-ASSETS/`
- VSON Corporate (sibling project): `../vson-corporate/PROJECT.md`
