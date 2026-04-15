# Integrated Roadmap — VSON Web Platform

**Owner:** Fred (PM)
**Last Updated:** 2026-04-02

---

## Programme Timeline

```
APRIL 2026
Week 1 (31 Mar - 04 Apr)  Week 2 (07 - 11 Apr)  Week 3 (14 - 18 Apr)  Week 4 (21 - 25 Apr)  Week 5 (28 Apr - 02 May)

PROGRAMME  ████ Restructure      ▒▒▒▒ Governance        ░░░░ Oversight          ░░░░ Oversight          ░░░░ Oversight
           ████ Infra decisions

ADVISORY   ████ Partner review   ████ Sprint 1           ████ Sprint 2           ████ Sprint 3           ██▓▓ Go/No-Go → Launch
           Gate: B2→B3 ◆        (Core pages)            (Remaining pages)       (QA + polish)          ◆ Go-Live (May 1)

CORPORATE  ░░░░ Content chase    ░░░░ Content chase      ░░░░ Content chase      ████ Sprint 1?          ████ Sprint 1?
           Blocked: assets      Blocked: assets         Gate: B2→B3 ◆ (if      (if unblocked)          (if unblocked)
                                                         assets received)

INFRA      ████ Netlify setup    ████ DNS + CI/CD        ░░░░ Monitoring          ░░░░ Stable             ░░░░ Stable
           ADR-001, 002, 003    Domain config           Uptime checks

████ = Active work   ▒▒▒▒ = Light touch   ░░░░ = Monitoring   ◆ = Gate/Milestone   ▓▓ = Decision point
```

---

## Key Milestones

| # | Milestone | Project | Target Date | Dependencies | Status |
|---|-----------|---------|------------|--------------|--------|
| M1 | Netlify account + DNS configured | Infra | 2026-04-05 | ADR-001 decided ✅ | Pending |
| M2 | Partner feedback received | Advisory | 2026-04-05 | Sent to Henry/Emily | Pending |
| M3 | Gate B2→B3 passed (build starts) | Advisory | 2026-04-08 | M1 + M2 | Pending |
| M4 | Sprint 1 complete (core pages) | Advisory | 2026-04-18 | M3 | Not started |
| M5 | Sprint 2 complete (all pages) | Advisory | 2026-04-25 | M4 | Not started |
| M6 | Go/No-Go decision | Advisory | 2026-04-28 | M5 + UAT + sponsor review | Not started |
| M7 | Production launch | Advisory | 2026-05-01 | M6 | Not started |
| M8 | Content assets received | Corporate | TBD | Henry/Emily/Fred | Blocked |
| M9 | Gate B2→B3 passed | Corporate | TBD (M8 + 3 days) | M8 | Blocked |

---

## Cross-Project Dependencies (visual)

```
Advisory Sprint 1 ──────→ Lessons learned ──────→ Corporate Sprint 1
                                                    (if unblocked)
Infra setup ─────────────→ Both projects depend on Netlify being ready
Shared Standards (ADR-003) → Both projects reference same CSS patterns
```

---

## Risk to Timeline

| Risk | Impact | Mitigation |
|------|--------|------------|
| Partner feedback late | Advisory build delayed | Proceed with available feedback, iterate |
| Corporate content never arrives | Corporate indefinitely blocked | Fred escalates to sponsors weekly |
| Netlify setup delayed | Both projects delayed | Thinh to complete by Apr 5 |
