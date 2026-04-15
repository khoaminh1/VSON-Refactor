# Content Compliance Audit — VSON Advisory Website

**Date:** 2026-04-07
**Auditor:** Programme Manager (Fred Dang) + Claude (PM agent)
**Reference:** Internal Memo VS26/Advisory/Operation/Restriction v1.0 (2023-10-24)
**Scope:** All 7 production pages in `02-product/vson-advisory/build/`
**Status:** FINDINGS FOR REVIEW — no changes made yet

---

## Summary

The compliance memo establishes VSON Advisory's Golden Rule: **"We are Operational and Strategic Architects. We do not facilitate the sale of shares, raise capital from investors, or value securities."**

The current website content contains **4 critical violations, 5 high-severity items, and 3 medium-severity items** against the memo's DOs and DON'Ts. The mandatory SFA disclaimer (Section 6 of memo) is completely absent from all pages.

---

## CRITICAL — Must Fix Before Go-Live

### C1 — Missing Mandatory SFA Disclaimer (ALL PAGES)

**Memo Section 6 requires this text in the website footer:**

> "Vson Advisory Pte. Ltd. is a management consultancy firm. We do not provide financial advisory, investment advice, or corporate finance services as defined under the Singapore Securities and Futures Act. We do not facilitate the sale of securities or provide regulated financial services."

**Finding:** Zero instances of any disclaimer on any of the 7 pages.
**Fix:** Add to footer template on all pages.

---

### C2 — "fundraising readiness" (index.html)

**Location:** index.html, line 107 (Exit Value card in Value Chain section)
**Current text:** "Investment readiness, **fundraising readiness**, M&A positioning, cross-border expansion, and stronger valuation narratives."
**Violation:** DON'T #2 — NO "Fundraising"
**Memo guidance:** Never say we "raise capital" or "find investors"
**Suggested replacement:** "Investment readiness, operational readiness for growth capital, M&A preparation, cross-border expansion, and stronger market positioning."

---

### C3 — "capital raising" (capabilities.html + index.html)

**Location 1:** capabilities.html, line 114 (Pillar 6 description)
**Location 2:** index.html, line 230 (same Pillar 6 description)
**Current text:** "We prepare businesses for **capital raising**, M&A positioning, and exit execution, structuring the governance, financials, and **valuation narrative** that institutional investors require."
**Violation:** DON'T #2 — NO "Fundraising" / NO "raise capital"
**Memo guidance:** Say "optimize business operations to meet institutional investor standards" instead
**Suggested replacement:** "We prepare businesses for strategic transitions, M&A readiness, and exit execution, structuring the governance, financials, and operational narrative that meet institutional standards."

---

### C4 — Emily's bio: "personally led multiple fundraising rounds" (brain-trust.html + index.html)

**Location 1:** brain-trust.html, line 109
**Location 2:** index.html, line 263
**Current text:** "She has served as CEO of multi-unit operations and **personally led multiple fundraising rounds totalling double-digit millions.**"
**Violation:** DON'T #2 — Even as personal history, this positions VSON as having fundraising capability
**Memo guidance:** Focus on operational excellence, not capital raising
**Suggested replacement:** "She has served as CEO of multi-unit operations, scaling businesses to institutional readiness across food and beverage, education, and hospitality."

---

## HIGH — Should Fix Before Go-Live

### H1 — "attract capital" (index.html)

**Location:** index.html, line 76 (hero positioning paragraph)
**Current text:** "investment readiness to scale or **attract capital**"
**Suggested replacement:** "investment readiness to scale or prepare for strategic transitions"

### H2 — "international capital markets" (brain-trust.html + index.html)

**Location:** brain-trust.html, line 95; index.html, line 249
**Current text:** "Now US-based, Henry serves as VSON's bridge into **international capital markets.**"
**Suggested replacement:** "Now US-based, Henry serves as VSON's bridge for international market entry and cross-border operations."

### H3 — "valuation narrative" (approach.html + index.html)

**Locations:** approach.html line 126; index.html line 107
**Current text:** "Valuation narrative" (used as a service deliverable)
**Memo guidance:** DON'T #4 — No "Company Valuations." Use "Operational Assessment" or "Market Positioning Analysis"
**Suggested replacement:** "market positioning narrative" or "operational value narrative"

### H4 — "We position the business for institutional capital or exit" (approach.html)

**Location:** approach.html, line 128 (Layer 4 blockquote)
**Current text:** "We position the business for institutional capital or exit."
**Suggested replacement:** "We position the business for strategic transition, scale, or exit."

### H5 — "investment readiness mandates" (brain-trust.html)

**Location:** brain-trust.html, line 123 (Hung Tran bio)
**Current text:** "VSON's transaction support and **investment readiness mandates**"
**Note:** "mandates" implies a regulated advisory mandate
**Suggested replacement:** "VSON's transaction support and investment readiness engagements"

---

## MEDIUM — Reframe for Safety

### M1 — Contact form radio option (contact.html)

**Location:** contact.html, line 117
**Current text:** "Institutional Investor or Capital Partner"
**Suggested replacement:** "International Partner or Market Entrant"

### M2 — Footer pillar names (all pages)

**Current:** "Strategic Finance & M&A" and "Investment Readiness" appear in every footer
**Note:** Pillar names are not violations on their own, but the disclaimer (C1) provides critical context. Fix C1 first.

### M3 — Vault article title (vault.html)

**Location:** vault.html, line 130
**Current text:** "What Investors Look For Beyond the Pitch Deck"
**Suggested replacement:** "What Institutional Partners Evaluate Beyond the Pitch Deck"

---

## Phrasing Guide (from Memo Section 5)

| Instead of saying... | Say this instead... |
|:---|:---|
| "We help companies raise $10M in Series A." | "We optimize business operations to meet institutional investor standards." |
| "We find buyers for your business." | "We prepare the management structure for a successful exit or transition." |
| "We value your company for the M&A deal." | "We analyze operational bottlenecks that impact enterprise value." |
| "We negotiate the M&A transaction." | "We provide strategic support and operational data for the M&A process." |

---

## Safe Harbor Language (from Memo Section 3)

Use these terms freely:
- Operational Excellence
- Business Process Re-engineering
- Organizational Design
- M&A Readiness
- Exit Preparation
- Pre-deal Operational Due Diligence
- Post-Merger Integration (PMI)
- Corporate Restructuring for Performance
- Turnaround Management
- Increased EBITDA
- Scalable Infrastructure
- Optimized Management Workflows

---

## Next Steps

1. **Fred reviews** this document and confirms which items to fix and approves/adjusts suggested replacements
2. **Code changes** applied to all 7 build files in `02-product/vson-advisory/build/`
3. **Mandatory disclaimer** added to footer template on all pages
4. **UAT re-run** to confirm no regressions
5. **RAID log updated** with compliance risk item
6. **Design concept source files** in `specs/` also reviewed for same issues (future session)

---

**Prepared by:** Programme Manager + Claude PM Agent
**For review by:** Frederick Dang
**Decision required by:** Before go-live (2026-05-01)
