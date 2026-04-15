# Hosting Strategy — VSON Web Platform

**Owner:** Thinh (Tech Lead)
**Reviewer:** Fred (PM)
**Last Updated:** 2026-04-02
**Status:** ✅ Decided — Netlify (see ADR-001-hosting.md)

---

## Decision

**Netlify** — single team account hosting both sites.

Full rationale, alternatives considered, and action items in [ADR-001-hosting.md](ADR-001-hosting.md).

---

## Why Netlify

- **Built-in form handling** — Netlify Forms captures contact form submissions and sends email notifications. No backend required.
- **Preview deploys** — every branch push generates a unique URL for partner review.
- **Git-based deploy** — push to `main` = production. Within Thinh's skill level.
- **Two sites, one account** — separate domains, separate deploy settings, single billing.
- **CDN + HTTPS automatic** — global edge network, Let's Encrypt auto-provisioned.

---

## Cost

| Tier | Price | Includes |
|------|-------|----------|
| Free (launch) | $0 | 100GB bandwidth, 100 form submissions/month, 1 concurrent build |
| Pro (when needed) | $19/month | 1TB bandwidth, 1,000 form submissions, analytics, 3 concurrent builds |

---

## Requirements (all met)

- [x] Serve two separate domains: vsonadvisory.com + vson.vn
- [x] Support staging + production environments per project
- [x] Preview URLs for branch deployments (for partner review)
- [x] HTTPS enforced with auto-renewal
- [x] CDN for static asset delivery
- [x] Compatible with CI/CD pipeline (see CI-CD-PIPELINE.md)
- [x] Form-to-email for contact pages
- [x] `store.vson.vn` remains on Haravan (DNS separation)

---

## Setup Actions

| # | Action | Owner | By |
|---|--------|-------|----|
| 1 | Create Netlify team account, connect GitHub repo | Thinh | 2026-04-04 |
| 2 | Configure custom domains (vsonadvisory.com, vson.vn) | Thinh | 2026-04-05 |
| 3 | Test Netlify Forms on Contact page HTML | Thinh + Fred | 2026-04-08 |
| 4 | Set up email notification for form submissions | Fred | 2026-04-08 |
| 5 | Configure `store.vson.vn` DNS to Haravan | Thinh | 2026-04-05 |
