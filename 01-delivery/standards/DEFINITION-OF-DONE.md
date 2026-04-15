# Definition of Done (DoD) — VSON Web Platform

**Owner:** Thinh (Tech Lead) + Fred (PM)
**Applies to:** Both projects
**Last Updated:** 2026-04-02
**Source:** vnv-delivery-scrum-master + 00-programme/quality/ standards

> A task is **not done** unless ALL applicable items below are satisfied.
> Thinh enforces technical DoD. Fred enforces process DoD.

---

## DoD Checklist — All Tasks

### Code Quality
- [ ] Code follows `04-shared/SHARED-STANDARDS.md` (CSS reset, naming, responsive breakpoints)
- [ ] HTML is valid (no errors from html-validate CLI)
- [ ] No console errors in browser dev tools
- [ ] Code committed to `feature/*` branch with descriptive commit message

### Visual & Content
- [ ] Matches design spec in `02-product/[project]/DESIGN-SPEC.md`
- [ ] Content matches approved copy (no placeholder text in deliverable)
- [ ] Responsive: tested at mobile (375px), tablet (768px), desktop (1280px)

### Performance (ref: 00-programme/quality/PERFORMANCE-BUDGET.md)
- [ ] Lighthouse Performance score ≥ 90
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Total page weight < 860 KB
- [ ] Images in WebP/AVIF, lazy-loaded below fold

### Security (ref: 00-programme/quality/SECURITY-POLICY.md)
- [ ] No inline scripts that violate CSP (check `netlify.toml` headers)
- [ ] External scripts reviewed and approved
- [ ] Form inputs validated (if applicable)
- [ ] No hardcoded credentials or API keys

### Accessibility (ref: 00-programme/quality/ACCESSIBILITY-STANDARD.md)
- [ ] All images have alt text
- [ ] Colour contrast passes WCAG AA (4.5:1 normal, 3:1 large)
- [ ] Keyboard navigable (tab through all interactive elements)
- [ ] Language attribute set (`lang="en"` or `lang="vi"`)

### Process
- [ ] PR created on GitHub with description
- [ ] Preview URL tested on Netlify deploy preview
- [ ] Reviewed by at least one other person (Duy for content, Thinh for code)
- [ ] Quality results logged in `01-delivery/[project]/quality-results/`

---

## DoD Exceptions

If a DoD item cannot be met:
1. Document the exception in the PR description
2. Create a follow-up task in the sprint backlog
3. Fred must approve the exception before merge
4. Log in RAID.md as an Issue if it affects launch
