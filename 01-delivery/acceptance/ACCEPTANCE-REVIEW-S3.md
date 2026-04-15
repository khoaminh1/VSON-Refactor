# Sprint 3 Acceptance Review | VSON Web Platform

**Sprint:** 3 (Final)
**Date:** 2026-04-04
**Reviewer:** Fred Dang (Programme Manager)
**Verdict:** ✅ Accepted by Fred (2026-04-04)

---

## 1. UAT Environment

| Project | UAT URL | Pages |
|---------|---------|-------|
| VSON Corporate | https://vs26-newcorp.netlify.app | 13 (12 public + thank-you) |
| VSON Advisory | https://vs26-advisory.netlify.app | 7 (6 public + thank-you) |

> Fred: push to GitHub to trigger Netlify deploy, then review on UAT URLs above.

---

## 2. Automated Test Results

**Script:** `bash 01-delivery/testing/uat-test.sh`
**Full report:** `01-delivery/testing/UAT-REPORT.md`

| Result | Count |
|--------|-------|
| PASS | 132 |
| FAIL | 0 |
| WARN | 2 |
| Total | 134 |

**Verdict: PASS**

WARN details (non-blocking):
- vson-corporate CSS: 2 em dashes in comments only (not user-facing)
- vson-advisory CSS: 2 em dashes in comments only (not user-facing)

---

## 3. Sprint 3 Delivery Summary

### Stream A: VSON Corporate (6 new pages)

| Page | Description | Status |
|------|-------------|--------|
| case-studies.html | Index page with filter bar by industry | Built + QA passed |
| cs-01-electronics-retail.html | Phong Vu case study | Built + QA passed |
| cs-02-education.html | Education institution case study | Built + QA passed |
| cs-03-fashion-retail.html | Fashion retail case study | Built + QA passed |
| cs-04-oem-merchandise.html | OEM merchandise case study | Built + QA passed |
| cs-05-ict-distribution.html | ICT distribution case study | Built + QA passed |

Additional work completed:
- All 7 existing pages: Case Studies nav link updated from `#` to `case-studies.html`
- sitemap.xml updated with 6 new URLs (total: 12)
- Zero em dashes verified across all HTML files

### Stream B: VSON Advisory (QA polish pass)

| Fix | Pages Affected | Status |
|-----|---------------|--------|
| Footer nav: Leadership link corrected to `/brain-trust.html` | 4 Sprint 1 pages | Fixed |
| Footer nav: Vault link corrected to `/vault.html` | 4 Sprint 1 pages | Fixed |
| Footer region separator standardized to `·` | 3 pages | Fixed |

All 7 pages pass automated UAT with zero failures.

---

## 4. Complete Page Inventory

### VSON Corporate (13 pages)

| # | Page | Sprint |
|---|------|--------|
| 1 | index.html (Home) | S1 |
| 2 | about.html | S1 |
| 3 | contact.html | S1 |
| 4 | activation-solutions.html | S2 |
| 5 | market-development.html | S2 |
| 6 | store.html | S2 |
| 7 | case-studies.html | S3 |
| 8 | cs-01-electronics-retail.html | S3 |
| 9 | cs-02-education.html | S3 |
| 10 | cs-03-fashion-retail.html | S3 |
| 11 | cs-04-oem-merchandise.html | S3 |
| 12 | cs-05-ict-distribution.html | S3 |
| 13 | thank-you.html | S1 |

### VSON Advisory (7 pages)

| # | Page | Sprint |
|---|------|--------|
| 1 | index.html (Home) | S1 |
| 2 | approach.html | S1 |
| 3 | contact.html | S1 |
| 4 | brain-trust.html | S2 |
| 5 | capabilities.html | S2 |
| 6 | vault.html (Coming Soon) | S2 |
| 7 | thank-you.html | S1 |

---

## 5. Known Limitations (Pre Go-Live)

| # | Item | Impact | Owner | Target |
|---|------|--------|-------|--------|
| 1 | Headshots x4 not yet uploaded | Corporate About page shows placeholders | Fred | Before go-live |
| 2 | Hero imagery pending | Corporate Home uses placeholder | Fred / team | Before go-live |
| 3 | Brand lifestyle photos pending | Corporate pages | Fred | Before go-live |
| 4 | Logo usage approvals x8 | Corporate pages reference partner logos | Fred | Before go-live |
| 5 | Emily bio sign-off | Advisory Brain Trust | Emily | Before go-live |
| 6 | store.vson.vn DNS | Store page external link | Thinh | Before go-live |
| 7 | Social media links (LinkedIn, Facebook, Zalo) | Footer links still `#` on both sites | Fred | Before go-live |
| 8 | Privacy Policy / Terms of Use | Footer links still `#` on both sites | Fred | Before go-live |
| 9 | Responsive audit (manual) | Automated tests cover structure; manual device check needed | QC / Fred | Buffer week |

---

## 6. Acceptance Criteria

| # | Criterion | Corporate | Advisory |
|---|-----------|-----------|----------|
| 1 | All planned pages built and deployed | ✅ 13 pages | ✅ 7 pages |
| 2 | Zero em dashes in HTML content | ✅ Verified | ✅ Verified |
| 3 | All internal links resolve | ✅ Verified | ✅ Verified |
| 4 | Meta/SEO tags on all pages | ✅ Verified | ✅ Verified |
| 5 | Skip-to-content on all pages | ✅ Verified | ✅ Verified |
| 6 | Forms with Netlify + honeypot | ✅ contact.html | ✅ contact.html + vault.html |
| 7 | Sitemap covers all public pages | ✅ 12 URLs | ✅ 6 URLs |
| 8 | Nav links consistent across pages | ✅ Verified | ✅ Verified |
| 9 | Automated UAT: 0 FAIL | ✅ 132 PASS | (included) |

---

## 7. Sign-Off

| Role | Name | Decision | Date |
|------|------|----------|------|
| Programme Manager | Fred Dang | ✅ Accept | 2026-04-04 |

**Post-acceptance defect resolved:** D016 (dropdown dead zone) found and fixed same day.

**Next step:** Buffer week (Apr 29 - May 1) for content assets, manual responsive check, and go-live preparation.
