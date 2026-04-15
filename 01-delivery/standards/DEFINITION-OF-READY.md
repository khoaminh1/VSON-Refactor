# Definition of Ready (DoR) — VSON Web Platform

**Owner:** Fred (PM) + Duy (PO)
**Applies to:** Both projects
**Last Updated:** 2026-04-02
**Source:** vnv-delivery-scrum-master framework

> A task is **not ready** to start unless ALL items below are satisfied.
> The PO (Duy) owns readiness. The PM (Fred) enforces it.

---

## DoR Checklist — All Tasks

- [ ] **Clear acceptance criteria** — what does "done" look like for this task?
- [ ] **No unresolved dependencies** — check RAID.md and DEPENDENCY-MATRIX.md
- [ ] **Design input available** — wireframe, mockup, or design spec exists in `02-product/`
- [ ] **Content ready** — all text, images, or placeholders confirmed by Duy
- [ ] **Estimated** — task sized (S/M/L or hours) and fits within sprint capacity
- [ ] **Assigned** — specific person owns the task

## Additional DoR — Code Tasks (Thinh / devs)

- [ ] **Shared standards reviewed** — developer has read `04-shared/SHARED-STANDARDS.md`
- [ ] **Performance budget aware** — developer knows the targets in `00-programme/quality/PERFORMANCE-BUDGET.md`
- [ ] **Security requirements known** — relevant OWASP items from `00-programme/quality/SECURITY-POLICY.md` identified
- [ ] **Branch created** — `feature/[task-name]` branch exists in GitHub

## Additional DoR — Content Tasks (Duy)

- [ ] **Source material available** — brief, photos, copy approved by Fred or sponsors
- [ ] **Language version specified** — [EN] or [VI] or both
- [ ] **Page location identified** — which wireframe page in `02-product/` this content belongs to

---

## What Happens If DoR Is Not Met

Task stays in **Backlog**. Do not pull into sprint. If a critical task cannot meet DoR, escalate:
1. Missing dependency → add to RAID.md → Fred to unblock
2. Missing design → Duy to provide or escalate to Fred
3. Missing content → Fred to chase with sponsors (Henry/Emily)
