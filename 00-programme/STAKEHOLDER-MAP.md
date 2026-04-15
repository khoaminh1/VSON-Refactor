# Stakeholder Map — VSON Web Platform

**Owner:** Fred (PM)
**Last Updated:** 2026-04-02
**Source:** vnv-delivery-program-manager

---

## Stakeholder Matrix

| Stakeholder | Role | Interest | Influence | Communication Need |
|-------------|------|----------|-----------|-------------------|
| Henry Hung | Executive Sponsor | Strategic direction, brand integrity | High — approval authority | Programme status + design reviews |
| Emily Vo | Executive Sponsor | Strategic direction, content quality | High — approval authority | Programme status + design reviews |
| Duy Le | Product Owner | Content, UX, day-to-day product decisions | High — defines requirements | Sprint planning + daily standups |
| Thinh | Tech Lead | Architecture, code quality, infrastructure | High — technical decisions | Sprint planning + PR reviews |
| Fred Dang | Programme Manager | Delivery, governance, coordination | High — overall delivery | Owns all communication |

---

## Communication Plan

| Audience | What | Format | Frequency | Owner |
|----------|------|--------|-----------|-------|
| Henry + Emily | Programme status, Go/No-Go decisions | Status report + preview URL | At each stage gate | Fred |
| Henry + Emily | Design reviews | Preview URL + feedback form | Per milestone | Fred |
| Duy | Sprint planning, backlog review | Meeting or async doc | Weekly (sprint start) | Fred |
| Duy | Task clarification | Slack/Zalo | As needed | Thinh ↔ Duy |
| Thinh | Technical direction, PR reviews | GitHub + meeting | Weekly (sprint) | Fred + Duy |
| All | Retrospective | Meeting | End of each sprint | Fred |
| External partners | Review packages | Google Drive / email | At design milestones | Fred (via 05-comms/) |

---

## RACI Matrix

| Activity | Fred (PM) | Henry/Emily (Sponsors) | Duy (PO) | Thinh (TL) |
|----------|-----------|----------------------|-----------|------------|
| Programme governance | **R/A** | **I** | I | I |
| Quality standards | **A** | I | C | **R** |
| Sprint planning | **A** | I | **R** | **C** |
| Content decisions | C | **A** | **R** | I |
| Technical decisions | I | I | C | **R/A** |
| Code review | I | — | C | **R/A** |
| UAT sign-off | A | I | **R** | C |
| Go/No-Go decision | **R** | **A** | C | C |
| Stakeholder communication | **R/A** | Receive | I | I |

R = Responsible, A = Accountable, C = Consulted, I = Informed

---

## Release Roles (distinct from Delivery RACI above)

> Release Roles govern *version lock and approval authority*, separate from
> day-to-day delivery roles. A person can hold a delivery role and a release
> role simultaneously (e.g. Fred is Programme Manager *and* Release Owner).

| Release Role | Person(s) | Authority |
|--------------|-----------|-----------|
| **Release Owner** | Fred Dang | Owns the release calendar; approves Minor releases (v0.x); drafts release manifests; signs v0.1 lock |
| **Sponsor Consensus Group** | Fred + Henry + Emily + Duy | Approves Major releases (v1.0, v2.0); approves any compliance-posture change; consensus = all four agree |
| **Tech Release Gate** | Thinh | Validates technical readiness before any v0.9 → v1.0 promotion; cannot block a Minor release but can escalate technical risk to the Release Owner |

**Scope:** Both VSON Advisory and VSON Corporate use the same Release Roles
and the same Sponsor Consensus Group. If VSON Corporate later requires a
different stakeholder set, this section will be split per project.

**See:** `00-programme/RELEASE-AUTHORITY.md` for the two-stage approval model
and Minor/Major definitions.
