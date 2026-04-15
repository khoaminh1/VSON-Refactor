# Environment Plan — VSON Web Platform

**Owner:** Thinh (Tech Lead)
**Last Updated:** 2026-04-02
**Status:** ✅ Defined — Netlify branch-based environments (per ADR-001)

---

## Environments

| Environment | Purpose | URL Pattern | Who Uses | Branch |
|-------------|---------|-------------|----------|--------|
| Local | Developer machine | `localhost` (VS Code Live Server) | Thinh + devs | any |
| Preview | Per-branch deploy for review | `deploy-preview-N--vson-advisory.netlify.app` | Duy, Fred, partners | `feature/*` |
| Staging | Pre-production QA | `staging--vson-advisory.netlify.app` | Duy (UAT), Fred (review) | `staging` |
| Production | Live site | `vsonadvisory.com` / `vson.vn` | Public | `main` |

---

## Local Development

No build step required (ADR-002). Developers open HTML files directly or use:

```bash
# VS Code Live Server (recommended)
# Install "Live Server" extension → right-click index.html → Open with Live Server

# Or Python simple server
python3 -m http.server 8000

# Or Node
npx serve .
```

---

## Environment Parity

All environments must match production as closely as possible:

- [x] Same file structure (no build transforms)
- [x] Same CSP headers (via `netlify.toml`)
- [x] Same font loading (Google Fonts CDN)
- [ ] Analytics: disabled in non-prod (configured via Netlify environment variable)

---

## Preview URL Workflow (Partner Review)

1. Developer pushes to `feature/partner-review-round-2`
2. Netlify generates: `deploy-preview-5--vson-advisory.netlify.app`
3. Fred shares URL with Henry/Emily for feedback
4. Feedback collected → developer updates branch → preview URL auto-updates
5. Approved → merge to `main` → production deploy
