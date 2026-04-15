# Release Protocol (Go/No-Go) — VSON Web Platform

**Owner:** Fred (PM)
**Sign-off authority:** Fred (PM) + Henry or Emily (Executive Sponsor)
**Last Updated:** 2026-04-02
**Source:** vnv-delivery-program-manager + vs-b2b-project-delivery

> This protocol must be followed before any production deployment.
> It corresponds to Stage Gate B4→B5 in STAGE-GATES.md.

---

## Pre-Launch Checklist

### Technical Readiness (Thinh signs off)

- [ ] All pages deployed to staging, no build errors
- [ ] Lighthouse scores meet budget (Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95)
- [ ] Security headers verified on staging (CSP, X-Frame-Options, HSTS)
- [ ] OWASP checklist items addressed (ref SECURITY-POLICY.md)
- [ ] Forms working end-to-end (submit → email notification received)
- [ ] Cross-browser tested: Chrome, Safari, Firefox, Edge (desktop + mobile)
- [ ] DNS configured and propagated
- [ ] HTTPS verified on production domain
- [ ] Netlify rollback tested (can revert to previous deploy in < 5 min)

### Content Readiness (Duy signs off)

- [ ] All page content is final (no placeholder text)
- [ ] All images are final (no placeholder images)
- [ ] Links tested (no 404s, no broken anchors)
- [ ] Contact information correct
- [ ] Legal/privacy notice present (if required)

### Business Readiness (Fred signs off)

- [ ] UAT completed and signed off by Duy
- [ ] Partner/sponsor review completed (Henry and/or Emily)
- [ ] All P1/P2 issues in RAID resolved
- [ ] Analytics configured (tracking code verified)
- [ ] Monitoring configured (uptime checks active)
- [ ] Rollback plan documented (who does what if site breaks)
- [ ] Post-launch communication prepared (announce to stakeholders)

---

## Go/No-Go Decision

| Criteria | Status | Sign-off |
|----------|--------|----------|
| Technical readiness | [ ] Go / [ ] No-Go | Thinh: __________ |
| Content readiness | [ ] Go / [ ] No-Go | Duy: __________ |
| Business readiness | [ ] Go / [ ] No-Go | Fred: __________ |
| Executive approval | [ ] Go / [ ] No-Go | Henry/Emily: __________ |

**Decision:** [ ] GO — deploy to production / [ ] NO-GO — reason: __________

**Date:** __________

---

## Rollback Plan

| Trigger | Action | Owner | Time |
|---------|--------|-------|------|
| Critical bug discovered post-launch | Netlify instant rollback to previous deploy | Thinh | < 5 min |
| Content error reported | Fix on `hotfix/*` branch → deploy | Thinh + Duy | < 1 hour |
| Security issue detected | Rollback + investigate | Thinh + Fred | < 30 min |
| Sponsor requests changes | Hotfix if small, rollback if large | Fred decides | Case by case |

---

## Post-Launch Actions (within 48 hours)

- [ ] Verify production site loads correctly on all target devices
- [ ] Confirm analytics data flowing
- [ ] Confirm uptime monitoring active and sending alerts
- [ ] Submit sitemap to Google Search Console
- [ ] Send launch announcement to stakeholders
- [ ] Update WORKSPACE.md project status to "Live"
- [ ] Update 01-delivery/[project]/PROJECT.md phase to "B6 — Close"
- [ ] Schedule retrospective within 1 week of launch
