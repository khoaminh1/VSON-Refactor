# Build-Ready Checklist — VSON Web Platform

**Date:** 2026-04-03
**Build starts:** 2026-04-08 (Tuesday)
**Prepared by:** Fred Dang (Programme Manager)

---

## Programme Summary

Both projects have cleared all structural blockers and can begin production build on 2026-04-08. This checklist confirms readiness and tracks the remaining content items that slot in during build.

---

## A. VSON Advisory (vsonadvisory.com)

### Resolved Blockers (all cleared 2026-04-03)

| # | Item | Resolution |
|---|------|-----------|
| B2 | Contact data | ✅ Email: contact@vsonadvisory.com, Phone: +65 8867 9295, Address: city-level (SG / SF / HCM) |
| B3 | Vault page content | ✅ Launch with "Coming Soon" teaser. Articles deferred to Phase 2 |
| B4 | Bio proof points | ✅ All 3 partner bios updated with concrete outcomes in design-concept-v2.html |
| B5 | Credibility bar | ✅ Resolved in v2 |
| B6 | Hero heading | ✅ Resolved in v2 |
| D1 | Hosting decision | ✅ Netlify (ADR-001) |
| D2 | Design tokens | ✅ Both projects have tokens in own CSS; SHARED-STANDARDS.md covers conventions |
| D3 | Netlify account + domain | ✅ Setup complete |

### Build-Time Fixes (developer handles, no Fred input needed)

| # | Fix |
|---|-----|
| F1 | Remove ghost "Capabilities" nav item; replace with "Contact" |
| F2 | Standardise all CTA copy to "Request a Strategic Briefing" |
| F3 | Link Phase arrows in Value Chain to /approach.html |
| F4 | Align Vault pillar tags to 6 official IA pillar names |
| F5 | Add CTA band to bottom of Approach page |
| F6 | Remove "Typically" from Engagement Steps heading |
| F7 | Change passive voice to active in all 6 Capability pillar cards |
| F8 | Demote 3rd Audience Pathway card to secondary visual weight |
| F9 | Remove 4th radio option from Contact form; replace with "Corporate / Institutional inquiry" |
| F10 | Add Duy Le to Brain Trust preview and Contact page (once role confirmed) |

### Content to Slot in During Build

| Item | Owner | Due | Impact if late |
|------|-------|-----|---------------|
| Emily bio sign-off | Emily | Before go-live | Bio text goes live unverified |
| Full office addresses | Fred | Phase 2 | City-level used at launch |

### Ready to Build?

**YES** — all structural, design, and content blockers cleared. Developer can begin 2026-04-08.

---

## B. VSON Corporate (vson.vn)

### Resolved Items

| Item | Resolution |
|------|-----------|
| Discovery | ✅ Complete — DISCOVERY-BRIEF.md |
| Design spec | ✅ Complete — DESIGN-SPEC.md v1.2 |
| Wireframes (12 pages) | ✅ Complete — confirmed by Emily & Henry (2026-04-03) |
| Leader bios | ✅ Complete — all 4 leaders |
| Case studies | ✅ All 5 included (CS-01 to CS-05) |
| Logo files | ✅ Fred has logos |
| Hosting decision | ✅ Netlify (ADR-001) |
| Tech stack | ✅ Vanilla HTML/CSS/JS (ADR-002) |
| Shared standards | ✅ SHARED-STANDARDS.md (ADR-003) |

### Content to Slot in During Build

| Item | Owner | Due | Impact if late |
|------|-------|-----|---------------|
| Headshots ×4 | Fred (collecting) | 2026-04-07 | About page uses placeholder silhouettes |
| Hero imagery | Fred / team | During build | Home page uses placeholder or gradient |
| Brand lifestyle photos | Fred | During build | Store page uses placeholder blocks |
| Logo usage approvals ×8 (written) | Fred | Before go-live | Logos cannot appear on live site without approval |

### Infrastructure (Fred + Thinh)

| Item | Owner | Due | Status |
|------|-------|-----|--------|
| D5 — Netlify + vson.vn domain config | Fred | Before build | Fred handling |
| D6 — store.vson.vn DNS → Haravan | Thinh | Before go-live | Pending |

### Ready to Build?

**YES** — all structural and design blockers cleared. Wireframes approved. Developer can begin 2026-04-08. Content assets slot in progressively.

---

## C. Shared Quality Gates (apply to both projects)

These standards from `00-programme/quality/` must be met before go-live:

### Performance (PERFORMANCE-BUDGET.md)

| Metric | Target |
|--------|--------|
| Lighthouse score | 95+ |
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Page weight | < 500KB images, < 60KB CSS, < 100KB JS per page |

### Accessibility (ACCESSIBILITY-STANDARD.md)

| Check | Standard |
|-------|----------|
| WCAG level | 2.1 AA |
| Skip-to-content | Every page |
| Focus-visible | Styled on all interactive elements |
| Touch targets | Minimum 44×44px |
| Alt text | All images |
| Language attribute | Set on html tag |

### Security (SECURITY-POLICY.md)

| Check | Standard |
|-------|----------|
| HTTPS | Enforced via Netlify |
| Security headers | CSP, X-Frame-Options, X-Content-Type-Options in netlify.toml |
| Form spam protection | Netlify honeypot field |
| OWASP review | Complete before go-live (currently TODO) |

---

## D. Key Dates

| Date | Milestone |
|------|-----------|
| 2026-04-03 | Build-ready checklist signed off (this document) |
| 2026-04-07 | Headshots due, D5 Netlify config due |
| 2026-04-08 | **Build starts — both projects** |
| 2026-05-01 | **Both projects go-live** |

---

## E. Session Log (2026-04-03)

Blockers resolved in this session with Fred:

1. **B3** — Vault page: launch as "Coming Soon", articles deferred to Phase 2
2. **B4** — Bio proof points: Fred (water metering portal + SGD 40M M&A), Henry (1,000+ partners + 100+ brand launches), Emily (multi-unit CEO + double-digit million fundraising + leading new retail group network)
3. **B2** — Contact data: contact@vsonadvisory.com, +65 8867 9295, city-level addresses
4. **D3** — Case studies: all 5 included, no cut
5. **D2** — Design tokens: resolved, each project has own tokens per ADR-003
6. **D5** — Netlify + vson.vn config: Fred handling directly
