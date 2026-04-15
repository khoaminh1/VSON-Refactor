# Stage Gate Checklists — VSON Web Platform

**Owner:** Fred (PM)
**Applies to:** Both projects (Track B — Service Delivery)
**Last Updated:** 2026-04-03
**Source:** vs-b2b-project-delivery (Track B gates)

> No project moves to the next stage until all gate items are checked.
> Fred owns gate sign-off. Thinh co-signs technical gates (B3→B4, B4→B5).

---

## B1 → B2: Discovery → Design

| # | Gate Criteria | VSON Advisory | VSON Corporate |
|---|--------------|---------------|----------------|
| 1 | Content structure / IA documented | ✅ INFORMATION-ARCHITECTURE.md | ✅ DISCOVERY-BRIEF.md |
| 2 | User journeys / page flow defined | ✅ | ✅ wireframes/index.html |
| 3 | Stakeholder requirements gathered | ✅ Partner review sent | ✅ Content briefs sent |
| 4 | Discovery brief delivered and reviewed | ✅ | ✅ |

**Status:** ✅ Both projects have passed B1→B2.

---

## B2 → B3: Design → Development

| # | Gate Criteria | Owner | Check |
|---|--------------|-------|-------|
| 1 | Design concept / wireframes approved by sponsors | Fred | [x] Advisory: approved 2026-04-03 / [x] Corporate: wireframes confirmed 2026-04-03 |
| 2 | Design spec documented in `02-product/[project]/DESIGN-SPEC.md` | Duy | [x] Advisory: ✅ done / [x] Corporate: ✅ done |
| 3 | Shared standards agreed (ADR-003, SHARED-STANDARDS.md) | Thinh | [x] Completed 2026-04-02 |
| 4 | Hosting and CI/CD decided (ADR-001, ADR-002) | Thinh | [x] Netlify confirmed 2026-04-02 |
| 5 | DoR and DoD defined and shared with team | Fred | [x] Created 2026-04-02 |
| 6 | RAID log current with no unmitigated High risks | Fred | [x] Reviewed 2026-04-03, no unmitigated High risks |

**Status:** ✅ Both projects have passed B2→B3. Build starts 2026-04-08.

---

## B3 → B4: Development → Testing/QA

| # | Gate Criteria | Owner | Check |
|---|--------------|-------|-------|
| 1 | All pages built per design spec | Thinh | [ ] |
| 2 | Content populated (no placeholder text) | Duy | [ ] |
| 3 | Internal code review completed (PR reviewed) | Thinh | [ ] |
| 4 | Lighthouse audit: Performance ≥ 90, Accessibility ≥ 95 | Thinh | [ ] |
| 5 | Security checklist passed (OWASP items from SECURITY-POLICY.md) | Thinh | [ ] |
| 6 | All DoD items met for every task in sprint | Fred | [ ] |
| 7 | Preview URL deployed on Netlify staging | Thinh | [ ] |

---

## B4 → B5: Testing/QA → Go-Live

| # | Gate Criteria | Owner | Check |
|---|--------------|-------|-------|
| 1 | UAT completed by Duy on staging URL | Duy | [ ] |
| 2 | Partner/sponsor review on staging URL | Fred | [ ] |
| 3 | All critical issues resolved (no open P1/P2 in RAID) | Fred | [ ] |
| 4 | Performance budget met on staging (not just local) | Thinh | [ ] |
| 5 | Security headers verified on staging (`netlify.toml`) | Thinh | [ ] |
| 6 | Forms tested end-to-end (submission → email notification) | Thinh + Fred | [ ] |
| 7 | Cross-browser tested (Chrome, Safari, Firefox, mobile) | Thinh | [ ] |
| 8 | Go/No-Go sign-off (see RELEASE-PROTOCOL.md) | Fred + sponsors | [ ] |

---

## B5 → B6: Go-Live → Close

| # | Gate Criteria | Owner | Check |
|---|--------------|-------|-------|
| 1 | Production DNS configured and verified | Thinh | [ ] |
| 2 | HTTPS working on production domain | Thinh | [ ] |
| 3 | Site live and stable for 48 hours minimum | Thinh | [ ] |
| 4 | Monitoring configured (uptime, error tracking) | Thinh | [ ] |
| 5 | Analytics configured and verified | Fred | [ ] |
| 6 | Google Search Console verified | Thinh | [ ] |
| 7 | Stakeholders notified of launch | Fred | [ ] |
| 8 | Retrospective conducted → `03-knowledge/retrospectives/` | Fred | [ ] |
| 9 | Lessons learned documented | Fred | [ ] |
| 10 | RAID log closed (all items retired or transferred) | Fred | [ ] |
