# Sprint 2 Acceptance Review

**Programme:** VSON Web Platform
**Sprint:** 2 of 3
**Review date:** 2026-04-04
**Prepared by:** Programme Manager (Fred Dang)
**Go-live target:** 2026-05-01

---

## 1. UAT Environment Links

### Stream A: VSON Corporate (vson.vn)

| Page | UAT Link | Status |
|------|----------|--------|
| Home | [vs26-newcorp.netlify.app](https://vs26-newcorp.netlify.app/) | Review |
| About | [vs26-newcorp.netlify.app/about.html](https://vs26-newcorp.netlify.app/about.html) | Review |
| Contact | [vs26-newcorp.netlify.app/contact.html](https://vs26-newcorp.netlify.app/contact.html) | Review |
| Activation Solutions | [vs26-newcorp.netlify.app/activation-solutions.html](https://vs26-newcorp.netlify.app/activation-solutions.html) | Review |
| Market Development | [vs26-newcorp.netlify.app/market-development.html](https://vs26-newcorp.netlify.app/market-development.html) | Review |
| Store | [vs26-newcorp.netlify.app/store.html](https://vs26-newcorp.netlify.app/store.html) | Review |

### Stream B: VSON Advisory (vsonadvisory.com)

| Page | UAT Link | Status |
|------|----------|--------|
| Home | [vs26-advisory.netlify.app](https://vs26-advisory.netlify.app/) | Review |
| Our Approach | [vs26-advisory.netlify.app/approach.html](https://vs26-advisory.netlify.app/approach.html) | Review |
| Contact | [vs26-advisory.netlify.app/contact.html](https://vs26-advisory.netlify.app/contact.html) | Review |
| Brain Trust | [vs26-advisory.netlify.app/brain-trust.html](https://vs26-advisory.netlify.app/brain-trust.html) | Review |
| Capabilities | [vs26-advisory.netlify.app/capabilities.html](https://vs26-advisory.netlify.app/capabilities.html) | Review |
| The Vault | [vs26-advisory.netlify.app/vault.html](https://vs26-advisory.netlify.app/vault.html) | Review |

---

## 2. Automated Test Results

**Script:** `bash 01-delivery/uat-test.sh`
**Report:** `01-delivery/UAT-REPORT.md`

| Result | Count |
|--------|-------|
| PASS | 96 |
| FAIL | 0 |
| WARN | 2 |
| Total | 98 |

**Verdict:** PASS

**Test coverage:**

| Suite | Scope | Result |
|-------|-------|--------|
| Em dash content scan | Zero em dashes in user-facing HTML (both projects) | PASS |
| HTML structure | Title, meta, OG, skip-to-content, lang, h1 (all 14 pages) | PASS |
| Internal link integrity | All href links resolve to existing files | PASS |
| Forms | Netlify attributes, honeypot protection (3 forms) | PASS |
| File inventory | 7 HTML + 1 CSS + 1 JS per project | PASS |
| Sitemap | 6 URLs per project matching public pages | PASS |

**Warnings (non-blocking):** 2 em dashes in CSS comments (developer-facing only, not user-visible)

---

## 3. Sprint 2 Delivery Summary

### 3.1 Corporate: Pages Delivered

| Page | Source | Key Features |
|------|--------|-------------|
| activation-solutions.html | Wireframe | Three-layer capability stack, brand proof points, CTA band |
| market-development.html | Wireframe | MRA grant eligibility, 3 service pillars, 4-step process track |
| store.html | Wireframe | 4-brand portfolio grid, channel cards, partnership form |

### 3.2 Advisory: Pages Delivered

| Page | Source | Key Features |
|------|--------|-------------|
| brain-trust.html | design-concept-v2.html | 3 managing partners + 2 strategic advisors, credibility bar |
| capabilities.html | design-concept-v2.html | Six Pillars of Enterprise Value, dark navy layout |
| vault.html | New (Coming Soon) | Teaser with 5 preview articles, email notification form |

### 3.3 Cross-Project Items

| Item | Description | Status |
|------|-------------|--------|
| Nav link integration | All Sprint 1 placeholder anchors (#) replaced with real page links | Done |
| Capabilities in Advisory nav | capabilities.html added to navigation on all 7 pages | Done |
| Case studies nav (Corporate) | Reverted to # pending Sprint 3 build | Expected |
| Em dash QC gate | Standard #11 added to SHARED-STANDARDS.md compliance checklist | Done |
| Automated UAT test script | BL-001 delivered: `bash 01-delivery/uat-test.sh` | Done |

---

## 4. QC Defects Found and Resolved

| # | Project | Defect | Severity | Resolution |
|---|---------|--------|----------|------------|
| 1 | Corporate | case-studies.html 404 in nav (3 Sprint 2 pages) | Critical | Reverted to # placeholder until Sprint 3 |
| 2 | Corporate | about.html heading hierarchy skip (h4 after h2) | High | Changed h4 to h3 |
| 3 | Advisory | capabilities.html not linked from any nav | Medium | Added to all 7 pages |
| 4 | Advisory | vault.html form missing Netlify attributes | Medium | Added data-netlify and honeypot |

---

## 5. Known Limitations (Not Defects)

| # | Item | Impact | Plan |
|---|------|--------|------|
| 1 | Case Studies nav links to # (Corporate) | Users see nav item but no page | Sprint 3 delivery |
| 2 | Placeholder images (headshots, hero) | Visual quality below final | Content assets pending from Fred |
| 3 | Social media links (LinkedIn, Facebook, Zalo) | Footer links are # | Real URLs needed before go-live |
| 4 | Privacy Policy and Terms of Use | Footer links are # | Legal content needed before go-live |
| 5 | Inline CSS in Advisory pages | Maintainability concern | Post-launch refactor |

---

## 6. Acceptance Criteria

For Sprint 2 to be formally accepted, the Programme Manager confirms:

| # | Criterion | Accepted |
|---|-----------|----------|
| 1 | All Sprint 2 pages are accessible on UAT URLs | [ ] |
| 2 | Navigation works across all pages (no broken links) | [ ] |
| 3 | Automated UAT test passes with zero FAIL | [ ] |
| 4 | Content is accurate and free of em dashes | [ ] |
| 5 | Forms are functional (Netlify attributes present) | [ ] |
| 6 | Pages are responsive (mobile, tablet, desktop) | [ ] |
| 7 | Brand consistency maintained across pages | [ ] |

---

## 7. Acceptance Decision

| Decision | Option |
|----------|--------|
| [ ] | **Accept** — Sprint 2 deliverables meet acceptance criteria. Proceed to Sprint 3. |
| [ ] | **Accept with conditions** — Proceed to Sprint 3 with noted conditions. |
| [ ] | **Reject** — Rework required before Sprint 3 can start. |

**Conditions (if applicable):**

1. _____________________________________________
2. _____________________________________________

---

**Programme Manager:** Fred Dang
**Date:** _______________
**Signature:** _______________
