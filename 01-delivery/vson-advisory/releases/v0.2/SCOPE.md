# Release v0.2 — SCOPE

**Tier:** Major (Compliance Fast-Path per RELEASE-AUTHORITY.md §4.4)
**Release Owner:** Frederick Dang
**Planning start:** 2026-04-07
**Status:** DRAFT — design-concept-v3 ready for Fred review, build not yet started
**Target lock:** before build phase kickoff (replaces 2026-04-08 start)
**Launch target (unchanged):** 2026-05-01

---

## 1. Purpose

v0.2 closes the multi-jurisdictional content compliance gap identified after v0.1 lock. It consolidates three separate compliance inputs (Singapore SFA, US SEC/FINRA, Vietnam SSC) plus the De-linked Partnership & Ownership Model into a single release scope, applied consistently across:

- `02-product/vson-advisory/specs/design-concept-v3.html` (new, this release)
- `02-product/vson-advisory/build/*.html` (Round 2 fixes, after v3 approval)
- Supporting copy, titles, and entity naming across all pages

v0.2 does **not** deploy to production. It lands a compliant design concept + build baseline that Fred will promote to v1.0 on the launch gate.

---

## 2. Scope Boundaries

### IN SCOPE
- All 12 findings from `COMPLIANCE-AUDIT-2026-04-07.md` (SG audit: C1–C4, H1–H4, M1–M3)
  - **Except H5** (Hung Tran content) — frozen per Fred's instruction, deferred to later release
- New findings surfaced during v0.2 planning:
  - NEW-01: Title drift (all 3 partner cards wrongly labelled "Managing Partner")
  - NEW-02: Audience card "For Investors & Partners" reframe
  - NEW-03: Entity naming (Vson Advisory Pte. Ltd. SG / Vson USA LLC / VSON Corp VN)
  - NEW-04: De-linked partnership model disclosure (footer entity line)
  - NEW-05: Contact card title discipline (3× locations)
  - NEW-06: Nav + footer "Leadership" → "The Brain Trust" rename
- Mandatory SFA disclaimer (C1) in footer on all pages
- H2 (international capital markets) upgraded from High → Critical (convergent SG+US+VN violation, protects Henry personally under CFC/GILTI)
- Typography specimen fix (removes "investors" from design system example)
- Automation test: `compliance-terminology-scanner` (Node.js) to prevent regression

### OUT OF SCOPE (deferred)
- **H5 Hung Tran bio** — frozen zone, preserved in v3 as-is
- OP-01 through OP-05 (pitch deck, engagement letters, LinkedIn bios, VN invoicing, US fee structure) — operational items outside website
- Programme-level `CORPORATE-STRUCTURE.md` — skipped per Q7 decision; v0.2 carries the corporate model inline via PROJECT.md and footer
- Technical hardening / performance audit — belongs to future v0.x
- Phase 2 content (real Vault articles, expanded pages)

---

## 3. Compliance Input Registry

| ID | Source | Jurisdiction | Status |
|----|--------|--------------|--------|
| IN-01 | COMPLIANCE-AUDIT-2026-04-07.md | Singapore (SFA) | Fully absorbed |
| IN-02 | US Compliance Guidelines (Google Doc) | USA (SEC/FINRA Broker-Dealer) | Absorbed; ~0 new website findings — convergent with IN-01 |
| IN-03 | Vietnam Compliance Guidelines (Google Doc) | Vietnam (SSC / CPC 865) | Absorbed; ~0 new website findings — convergent |
| IN-04 | Strategic Advisory: De-linked Partnership & Ownership Model | Corporate structure | Canonical — drives NEW-01/03/04/05/06 |

**Convergence finding:** Of 12 SG audit items, 9 violate two or three jurisdictions simultaneously. H2 is the single triple-convergent violation (SG + US + VN + IN-04 legal protection for Henry).

---

## 4. Change Manifest (applied to design-concept-v3.html)

| ID | Audit Ref | Location | Before | After |
|----|-----------|----------|--------|-------|
| V3-01 | C1 | Footer, all pages | (missing) | Regulatory Notice block with full SFA disclaimer |
| V3-02 | C2 | Value Chain Exit Value card | "fundraising readiness ... valuation narratives" | "operational readiness for growth capital ... market positioning narratives" |
| V3-03 | C3 | Capability Pillar 6 body | "capital raising ... valuation narrative ... institutional investors" | "strategic transitions ... operational narrative ... institutional standards" |
| V3-04 | C4 | Emily Vo bio | "personally led multiple fundraising rounds totalling double-digit millions" | "scaling businesses to institutional readiness across food and beverage, education, and hospitality" |
| V3-05 | H1 | Hero body | "scale or attract capital" | "scale or prepare for strategic transitions" |
| V3-06 | H2 | Henry Hung bio (Critical) | "bridge into international capital markets" | "bridge for international market entry and cross-border operations" |
| V3-07 | H3 | Stack Layer 4 list item | "Valuation narrative" | "Market positioning narrative" |
| V3-08 | H4 | Stack Layer 4 quote | "institutional capital or exit" | "strategic transition, scale, or exit" |
| V3-09 | M1 | Contact radio | "Investor or capital partner" | "International partner or market entrant" |
| V3-10 | M3 | Vault article title | "What Investors Look For Beyond the Pitch Deck" | "What Institutional Partners Evaluate Beyond the Pitch Deck" |
| V3-11 | NEW-01 | Henry card role | "Managing Partner" | "Strategic Partner (US)" |
| V3-12 | NEW-01 | Emily card role | "Managing Partner" | "Strategic Partner (VN)" |
| V3-13 | NEW-01 | Fred card role | "Managing Partner" | "Managing Partner (SG)" |
| V3-14 | NEW-02 | Audience pathway card | "For Investors & Partners / investors, family offices" | "For International Partners / international brands, strategic partners, corporate groups" |
| V3-15 | NEW-03 | Contact cards | City labels only | "Singapore — Vson Advisory Pte. Ltd." / "United States — Vson USA LLC" / "Vietnam — VSON Corp" |
| V3-16 | NEW-04 | Footer entity line | "VSON Pte. Ltd. · UEN ..." | "Vson Advisory Pte. Ltd. (SG) · Vson USA LLC (US) · VSON Corp (VN) — de-linked partnership model" |
| V3-17 | NEW-05 | Contact card titles | 3× "Managing Partner" | Fred=Managing Partner / Henry=Strategic Partner / Emily=Strategic Partner |
| V3-18 | NEW-06 | Nav link + footer + section eyebrow | "Leadership" | "The Brain Trust" |
| V3-19 | Title drift | Credibility bar | "managing partners have collectively operated" | "partners have collectively operated" |
| V3-20 | Title drift | Concept note | "3 Managing Partners + 2 Strategic Advisors" | "1 Managing Partner + 2 Strategic Partners + 2 Strategic Advisors" |
| V3-21 | Title drift | Section intro | "VSON is led by operators and strategic advisors" | "Vson Advisory is led by a Managing Partner in Singapore ... Strategic Partners and Advisors" |
| V3-22 | Style | Typography specimen | "founders, operators, and investors" | "founders, operators, and strategic partners" |
| V3-23 | Style | Pillar 4 body | "investor-ready reporting" | "board-ready reporting" |
| V3-24 | Style | Pillar 6 title | "Investment Readiness & Exit Advisory" | "Institutional Readiness & Exit Advisory" |
| V3-25 | Style | Footer copyright + brand | "VSON Advisory" (all caps) | "Vson Advisory" (proper case) |
| V3-26 | Style | Footer Services list | "Investment Readiness" | "Institutional Readiness & Exit Advisory" |
| V3-27 | H2-context | Hero sub | "boutique firm" | "management consultancy" |
| V3-28 | Style | Approval banner / title | v2 labels | v3 + v0.2 compliance tag |
| V3-29 | H4-context | Value Chain intro + Capability intro | (passive) | Added "strategic transition" language |

**Total changes:** 29 edits applied to design-concept-v3.html.
**Frozen zone (unchanged in v3):** Hung Tran advisor card (lines ~675–682 in v3), Bernard Lim card (compliant).

---

## 5. Automation Test (new)

`compliance-terminology-scanner` — Node.js script (no runtime deps) located at:
`00-programme/quality/scanners/compliance-terminology-scanner.js`

**Categories:**
- **Hard-forbidden:** fundraising, capital raising, raise capital, attract capital, broker-dealer, find investors, valuation narrative, investor-ready, international capital markets, institutional capital, fundrais (stem)
- **Contextually forbidden:** "Managing Partner" (only Fred in SG permitted — scanner flags all other contexts for manual review)
- **Required presences:** SFA disclaimer text fragment ("Singapore Securities and Futures Act"); entity line ("Vson Advisory Pte. Ltd.")
- **Exclusion zones:** Hung Tran advisor card (frozen), meta/comment blocks

**Exit codes:** 0 = clean, 1 = hard violations, 2 = required-text missing, 3 = contextual warnings only.

**Run surface:** design-concept-v3.html (must return 0); build/*.html (captures baseline for Round 2 fixes).

---

## 6. Approval & Sign-off (Fast-Path)

Per RELEASE-AUTHORITY.md §4.4 (Compliance Fast-Path):
- **Fred approves alone** as Release Owner
- **Notify-only** to Henry and Emily (no blocking dependency)
- **Rationale file:** this SCOPE + v3 diff constitute the compliance evidence bundle
- **Tech Release Gate (Thinh):** does not apply to v0.2 (Reading A per Q5)

---

## 7. Exit Criteria

- [ ] design-concept-v3.html reviewed and approved by Fred
- [ ] Compliance scanner returns exit 0 against v3
- [ ] Baseline scanner run captured against build/*.html
- [ ] MANIFEST.md written
- [ ] KNOWN-ISSUES.md records H5 defer + OP-01..05 defer
- [ ] SIGN-OFF.md signed by Fred (Fast-Path)
- [ ] Notify email sent to Henry + Emily
- [ ] PROJECT.md Current locked version updated to v0.2

---

## 8. Cross-References

- `PLANNING-INPUTS.md` — input consolidation, decisions, revisions log
- `../../COMPLIANCE-AUDIT-2026-04-07.md` — SG audit source
- `../../../../02-product/vson-advisory/specs/design-concept-v3.html` — the deliverable
- `../../../../00-programme/quality/scanners/compliance-terminology-scanner.js` — automation test
- `../../../../00-programme/RELEASE-AUTHORITY.md` §4.2 (Major) + §4.4 (Fast-Path)

---

**Prepared by:** Fred Dang + Claude PM Agent
**Status:** DRAFT pending Fred's review of design-concept-v3.html
