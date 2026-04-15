# CI/CD Pipeline — VSON Web Platform

**Owner:** Thinh (Tech Lead)
**Last Updated:** 2026-04-02
**Status:** ✅ Defined — Netlify git-based deploy (per ADR-001, ADR-002)

---

## Pipeline Design

Since both sites are vanilla HTML/CSS/JS with no build step (ADR-002), the pipeline is Netlify's native git-based deploy:

```
Developer pushes code to GitHub
  → Netlify auto-detects push
  → Deploys static files to CDN (no build command needed)
  → Preview URL generated (for feature branches)
  → Production URL updated (for main branch)
```

### Optional Quality Gates (Sprint 1 setup)

These run locally or via GitHub Actions before merge:

```
Developer opens PR
  → HTML validation (html-validate CLI)
  → Lighthouse CI audit (must meet performance budget)
  → Manual review by Duy / Fred on preview URL
  → Merge to main → auto-deploy to production
```

---

## Branch Strategy

| Branch | Purpose | Deploys To | Auto-deploy |
|--------|---------|-----------|-------------|
| `main` | Production-ready | vsonadvisory.com / vson.vn | Yes |
| `staging` | Pre-production QA | staging--[site].netlify.app | Yes |
| `feature/*` | Active development | deploy-preview-N--[site].netlify.app | Yes |

---

## Netlify Configuration

Each project needs a `netlify.toml` in its root:

```toml
[build]
  publish = "."          # No build step — serve files as-is
  # command = ""         # No build command needed

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'"
```

---

## DORA Metrics Tracking

| Metric | Target | How Measured |
|--------|--------|-------------|
| Deployment Frequency | Weekly during build | Netlify deploy log |
| Lead Time for Changes | < 1 day | PR open → merge time |
| Change Failure Rate | < 5% | Rollbacks / total deploys |
| Mean Time to Recovery | < 1 hour | Netlify instant rollback to previous deploy |
