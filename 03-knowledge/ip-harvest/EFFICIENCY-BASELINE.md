# Efficiency Baseline | Pod 1 (VS26 New Website)

**Programme:** VS26 New Website (VSON Advisory + VSON Corporate)
**Entity:** VSON Advisory
**Last Updated:** 2026-04-06
**Source:** Sprint docs (agent workflow day allocations)

---

## Pod 1 Output

| Metric | Advisory | Corporate | Combined |
|---|---|---|---|
| Pages delivered | 6 | 12 | 18 |
| Sprints | 3 | 3 | 6 (parallel) |
| Elapsed weeks | 3 + 0.5 buffer | 3 + 0.5 buffer | 3.5 weeks (parallel) |
| UAT result | All pass | 132 PASS, 0 FAIL | All pass |

---

## Effort by Role (Derived from Sprint Day Allocations)

Each sprint followed a 7-day structure with defined role windows. Effort estimated at 6 productive hours per role-day.

### Per Sprint (7 days)

| Role | Days allocated | Hours per sprint | Activity |
|---|---|---|---|
| SA (Solution Architect) | 1 (start) + 0.5 (end) | 9 hrs | Scope review, standards check, gap flagging |
| Developer | 3 | 18 hrs | Page builds from wireframes/specs |
| Lead Developer | 1.5 | 9 hrs | Code review, cross-page consistency, integration |
| QC | 1.5 | 9 hrs | Lighthouse, accessibility, responsive, automated tests |
| PM (Fred) | 1.5 | 9 hrs | Review on Netlify, acceptance, RAID updates |
| **Sprint total** | **9** | **54 hrs** | |

### Per Project (3 sprints)

| Role | Advisory (3 sprints) | Corporate (3 sprints) |
|---|---|---|
| SA | 27 hrs | 27 hrs |
| Developer | 54 hrs | 54 hrs |
| Lead Developer | 27 hrs | 27 hrs |
| QC | 27 hrs | 27 hrs |
| PM | 27 hrs | 27 hrs |
| **Project total** | **162 hrs** | **162 hrs** |

### Programme Total (both projects, delivered in parallel)

| Role | Total hours | Classification |
|---|---|---|
| SA | 54 hrs | Senior (onshore judgment) |
| Developer | 108 hrs | Execution (offshore-eligible) |
| Lead Developer | 54 hrs | Senior (onshore judgment) |
| QC | 54 hrs | Execution (offshore-eligible) |
| PM | 54 hrs | Senior (onshore judgment) |
| **Programme total** | **324 hrs** | |

| Category | Hours | % |
|---|---|---|
| Senior hours (SA + Lead Dev + PM) | 162 hrs | 50% |
| Execution hours (Developer + QC) | 162 hrs | 50% |

---

## Efficiency Ratios

| Metric | Value |
|---|---|
| Hours per page (total) | 324 / 18 = **18 hrs/page** |
| Hours per page (execution only) | 162 / 18 = **9 hrs/page** |
| Hours per page (senior only) | 162 / 18 = **9 hrs/page** |
| Senior-to-execution ratio | 1:1 |
| Pages per sprint | 18 / 6 = **3 pages/sprint** |
| Pages per elapsed week | 18 / 3.5 = **5.1 pages/week** |

---

## Additional PM Effort (Not in Sprint Cycles)

| Activity | Estimated hours | Notes |
|---|---|---|
| Programme setup (charter, standards, DoR/DoD, stage gates) | 16-20 hrs | One-time; becomes IP for future Pods |
| Discovery and design (IA, design spec, wireframes) | 20-30 hrs | Per project; partially reusable |
| Stakeholder management (partner reviews, feedback cycles) | 10-15 hrs | Per project; client-specific |
| Content unblocking (blockers B1-B6) | 5-8 hrs | Per project; client-specific |
| **Total additional PM** | **51-73 hrs** | |

---

## Pod 1 Full Baseline (Including Setup)

| Category | Hours (low est.) | Hours (high est.) |
|---|---|---|
| Sprint delivery (both projects) | 324 | 324 |
| Programme setup | 16 | 20 |
| Discovery and design (both projects) | 40 | 60 |
| Stakeholder management (both projects) | 20 | 30 |
| Content unblocking (both projects) | 10 | 16 |
| **Pod 1 total** | **410 hrs** | **450 hrs** |

---

## Efficiency Improvement Targets

Using the PM framework's 11th-Pod target (20% reduction in senior hours):

| Metric | Pod 1 | Pod 5 target | Pod 11 target |
|---|---|---|---|
| Senior hours per page | 9 hrs | 7.5 hrs (-17%) | 7.2 hrs (-20%) |
| Execution hours per page | 9 hrs | 7.5 hrs (-17%) | 7.2 hrs (-20%) |
| Programme setup hours | 16-20 hrs | 8-10 hrs (-50%) | 4-5 hrs (-75%) |
| Discovery hours per project | 20-30 hrs | 15-20 hrs (-33%) | 10-15 hrs (-50%) |

**Where the efficiency gains come from:**
- Programme setup: reuse BDL-01, BDL-02, BDL-03 (Sprint Governance, Stage Gates, Programme Tracker)
- Discovery/design: reuse BDL-07 (Discovery and Design Kit) templates and IA methodology
- Sprint delivery: reuse BDL-05 (CSS Architecture Starter) reduces developer build time
- QC: reuse BDL-04 (Quality Gate Suite) automated UAT script eliminates manual test authoring

---

## Cross-Reference

- Standard Core Inventory: `03-knowledge/ip-harvest/STANDARD-CORE-INVENTORY.md`
- IP Harvest Log (bundles): `03-knowledge/ip-harvest/IP-HARVEST-LOG.md`
- Vinova Website Pod Canvas: `03-knowledge/website-pod/CANVAS.md`
