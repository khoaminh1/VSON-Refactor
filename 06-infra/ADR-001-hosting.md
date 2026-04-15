# ADR-001: Hosting Platform

**Status:** Accepted
**Date:** 2026-04-02
**Decision-maker:** Fred Dang (PM) + Thinh (Tech Lead)
**Relates to:** CI-CD-PIPELINE.md, ENVIRONMENT-PLAN.md, DNS-DOMAINS.md, MONITORING.md

---

## Context

The VSON Web Platform programme has two static HTML/CSS/JS websites launching in Q2 2026:

- **vsonadvisory.com** — 6-page English consulting site
- **vson.vn** — 12-page corporate site (English Phase 1, Vietnamese Phase 2)

Both sites need: separate domains, staging + production environments, preview URLs for partner review, HTTPS, CDN, and form-to-email submission handling.

**Constraints:**
- Tech Lead (Thinh) is comfortable with GUI-based platforms and git-based deploys, not AWS CLI or custom IaC
- Monthly budget: under $20 for both sites combined
- `store.vson.vn` is hosted on Haravan (separate) — no conflict with main site hosting
- Contact forms on both sites must deliver email submissions to Fred without requiring a backend

---

## Decision

**Netlify** for both sites, on a single team account.

---

## Alternatives Considered

| Option | Evaluated | Rejected Because |
|--------|-----------|-----------------|
| Vercel | Yes | No native form handling — would require Formspree or similar third-party service, adding a dependency and potential cost |
| AWS S3 + CloudFront | Yes | Requires CLI/IaC skills beyond Thinh's current level; form handling still needs a Lambda or third-party; higher operational overhead for two static sites |
| Existing shared hosting | Yes | No CI/CD, no preview URLs, no CDN, no native HTTPS auto-renewal — fails performance budget requirements |

---

## Rationale

1. **Form handling built-in.** Netlify Forms captures submissions from an HTML `netlify` attribute on `<form>` tags. Submissions are stored in the Netlify dashboard and forwarded via email notification. No backend, no API keys, no third-party dependency. Free tier: 100 submissions/month. Pro: 1,000/month.

2. **Preview deploys for partner review.** Every branch push generates a unique preview URL (e.g., `deploy-preview-7--vson-advisory.netlify.app`). This replaces the need to email HTML files for partner feedback — Henry and Emily can review live URLs.

3. **Git-based deploy within Thinh's skill level.** Connect GitHub repo → auto-deploy on push to `main`. No CLI, no Docker, no build scripts needed for vanilla HTML/CSS/JS. Thinh configures once via the Netlify GUI.

4. **Two sites, one account.** Netlify supports multiple sites per team. Each site gets its own custom domain, deploy settings, and form inbox. Single billing, single dashboard.

5. **Cost fits budget.** Free tier is sufficient for launch (100GB bandwidth, 100 form submissions). Pro tier ($19/month for the team) when traffic or submissions grow.

6. **CDN + HTTPS automatic.** Global CDN via Netlify Edge. Let's Encrypt TLS auto-provisioned and auto-renewed per custom domain.

---

## Consequences

- **CI/CD pipeline** (CI-CD-PIPELINE.md) simplifies to: push to `main` = production deploy, push to branch = preview deploy
- **Environment plan** (ENVIRONMENT-PLAN.md) becomes: `main` branch = production, `staging` branch = staging, feature branches = preview
- **DNS** (DNS-DOMAINS.md) requires: CNAME or ALIAS records pointing both domains to Netlify
- **Monitoring** (MONITORING.md) uses Netlify Analytics (Pro) + external Lighthouse CI for performance budget enforcement
- **Store subdomain** (`store.vson.vn`) remains on Haravan — DNS A/CNAME record points to Haravan separately
- **Phase 2 bilingual** is unaffected — Netlify serves static files regardless of `/vi/` path structure

---

## Action Items

| # | Action | Owner | By |
|---|--------|-------|----|
| 1 | Create Netlify team account, connect GitHub repo | Thinh | 2026-04-04 |
| 2 | Configure custom domains (vsonadvisory.com, vson.vn) | Thinh | 2026-04-05 |
| 3 | Test Netlify Forms on Contact page HTML | Thinh + Fred | 2026-04-08 (Sprint 1) |
| 4 | Set up email notification for form submissions | Fred | 2026-04-08 |
| 5 | Configure `store.vson.vn` DNS to Haravan | Thinh | 2026-04-05 |
