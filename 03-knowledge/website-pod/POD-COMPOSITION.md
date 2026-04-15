# Pod Composition | Website Delivery Pod (CX/MarTech Overlay)

**Pod:** POD-WEB-001
**Version:** v0.1 (Draft)
**Last Updated:** 2026-04-06

---

## Delivery Model: Overlay

Vinova does not replace the client's developer team. Vinova overlays governance, architecture, and quality assurance onto the client's existing CX/MarTech team. The client's developers do execution work using Vinova's Standard Core accelerators.

```
CLIENT TEAM (execution)              VINOVA OVERLAY (governance + quality)
--------------------------           ------------------------------------
Developers (2-5)                     Solution Architect (SA)
Content / PO                         QC Engineer
Lead Developer (client or Vinova)    Programme / Project Manager
                                     TPM / Scrum Master (optional)
```

---

## Vinova Roles

### Solution Architect (SA) — Lead Role

| Field | Value |
|---|---|
| Grade | Senior (Vinova onshore) |
| Rikkei-eligible | No |
| Allocation | Sprint start (1 day) + Sprint end (0.5 day) = 1.5 days/sprint |
| Responsibilities | Architecture decisions, CSS design system setup, standards enforcement, sprint scope review, design spec review, ADR authoring |
| Judgment required | Yes: brand-to-token translation, IA decisions, performance optimisation strategy |
| Substitution risk | High: SA departure would require client re-onboarding; mitigate by documenting all decisions as ADRs |

### QC Engineer

| Field | Value |
|---|---|
| Grade | Mid |
| Rikkei-eligible | Yes |
| Allocation | 1.5 days/sprint |
| Responsibilities | Lighthouse audit (all pages), accessibility audit (manual + automated), responsive testing (3 breakpoints), automated UAT script execution, em dash scan, security header verification |
| Judgment required | Limited: follows BDL-04 Quality Gate Suite checklists; escalates anomalies to SA |

### Programme / Project Manager (PM)

| Field | Value |
|---|---|
| Grade | Senior (Vinova onshore) |
| Rikkei-eligible | No |
| Allocation | 1.5 days/sprint + ongoing stakeholder management |
| Responsibilities | Sprint governance, stage gate sign-off, RAID management, stakeholder alignment, acceptance review, build tracker maintenance |
| Judgment required | Yes: stakeholder navigation, scope decisions, go/no-go calls |

### TPM / Scrum Master (optional, shared)

| Field | Value |
|---|---|
| Grade | Mid |
| Rikkei-eligible | Yes |
| Allocation | 0.5 days/sprint (shared across Pods) |
| Responsibilities | Sprint cadence enforcement, impediment tracking, DORA metrics |
| When to include | Multi-stream engagements (Enterprise tier) or when client team is unfamiliar with sprint-based delivery |

---

## Client Roles

### Developers (2-5)

| Field | Value |
|---|---|
| Provider | Client's existing CX/MarTech team |
| Allocation | Full sprint execution (3 days/sprint per developer) |
| Responsibilities | Page builds from design specs, CSS implementation using Vinova's token architecture, form implementation, image optimisation |
| What they receive from Vinova | BDL-05 CSS Architecture Starter, Developer Template, Shared Standards checklist, sprint backlog with clear acceptance criteria |
| Onboarding | 0.5 day onboarding to Vinova standards (Developer Guide + Shared Standards walkthrough) |

### Content / Product Owner

| Field | Value |
|---|---|
| Provider | Client |
| Allocation | As needed (content preparation, acceptance review) |
| Responsibilities | Copy, images, requirements, acceptance criteria, stakeholder feedback routing |

### Lead Developer

| Field | Value |
|---|---|
| Provider | Client (preferred) or Vinova |
| Allocation | 1.5 days/sprint |
| Responsibilities | Code review, cross-page consistency, integration checks |
| Decision rule | If client has a senior front-end developer, they take this role (builds internal capability). If not, Vinova provides. |

---

## Pod Configurations

### Pilot (1 week, $3K-5K)

```
Vinova: SA (3 days) + QC (2 days)
Client: Access to codebase + 1 point of contact
Output: Architecture review report, Lighthouse/a11y audit, recommendations
```

### Standard (3-4 weeks, $10K-15K)

```
Vinova: SA (1.5 days/sprint x 3) + QC (1.5 days/sprint x 3) + PM (1.5 days/sprint x 3)
Client: Developers (2-3) + Content/PO + Lead Dev
Output: 6-12 page website, governance framework, automated UAT suite
```

### Enterprise (4-8 weeks, $15K-25K)

```
Vinova: SA (2 days/sprint x 3-6) + QC (2 days/sprint x 3-6) + PM (2 days/sprint x 3-6) + TPM (shared)
Client: Developers (3-5) + Content/PO + Lead Dev
Output: 12-30 page website (possibly multi-stream), full programme governance, automated UAT
```

---

## Minimum Viable Pod

For budget-constrained or small-scope engagements:

```
SA (part-time, 1 day/sprint) + QC (part-time, 1.5 days/sprint)
Client provides everything else
Conditions: Standard Core >= 80%; site scope <= 6 pages; single sprint
```

---

## Mitosis Readiness Checklist

| Criteria | Status | Gap |
|---|---|---|
| Standard Core >= 80% | ~70% | Need CMS pattern and multi-language pattern from Pods 2-3 |
| Second qualified SA certified | No | Need 1 SA to complete supervised delivery |
| Canvas SOP: new SA onboards in <= 3 days | Partial | Developer Guide exists; SA-specific onboarding playbook needed |
| >= 2 prior deliveries at target margin | 0 commercial | Pod 1 was internal; need 2 commercial engagements |

**Mitosis target: Pod 5** (after 4 commercial deliveries + IP harvest cycles)

---

## Cross-Reference

- Canvas: `03-knowledge/website-pod/CANVAS.md`
- Catalog Entry: `03-knowledge/website-pod/CATALOG-ENTRY.md`
- IP Harvest Log: `03-knowledge/ip-harvest/IP-HARVEST-LOG.md`
- Efficiency Baseline: `03-knowledge/ip-harvest/EFFICIENCY-BASELINE.md`
