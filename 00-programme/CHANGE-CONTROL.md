# Integrated Change Control — VSON Web Platform

**Owner:** Fred (PM)
**Last Updated:** 2026-04-02
**Source:** vnv-delivery-program-manager

> Any change to scope, timeline, or shared standards must go through this process.
> This prevents scope creep and ensures both projects stay coordinated.

---

## What Requires Change Control

| Change Type | Example | Approval Required |
|-------------|---------|-------------------|
| Scope change (add/remove page) | "Add a blog section" | Fred + Duy (PO) |
| Timeline change (milestone shift) | "Delay launch by 2 weeks" | Fred + Henry/Emily (sponsors) |
| Shared standard change | "Change CSS framework" | Thinh + Fred (via ADR) |
| Quality standard change | "Lower Lighthouse target to 80" | Fred + Thinh |
| Budget change | "Upgrade Netlify to Pro tier" | Fred + Henry |
| Cross-project dependency change | "Corporate blocks Advisory" | Fred (programme level) |

---

## Change Request Process

### 1. Raise
Anyone on the team raises a change by adding an entry to the Change Log below.

### 2. Assess
Fred assesses impact across both projects:
- Does this affect the other project?
- Does this change the DEPENDENCY-MATRIX?
- Does this shift a milestone in PROGRAMME-CHARTER?
- Does this violate a quality standard?

### 3. Decide
- **Small changes** (within sprint, no cross-project impact): Fred approves
- **Medium changes** (affects milestone or standard): Fred + Thinh/Duy
- **Large changes** (affects launch date or programme scope): Fred + Henry/Emily

### 4. Implement
- Update affected documents (RAID, PROJECT.md, PROGRAMME-CHARTER, DEPENDENCY-MATRIX)
- Communicate to affected team members
- Log decision in Programme Charter Decision Log

---

## Change Log

| # | Date | Requested By | Change Description | Impact | Decision | Approved By |
|---|------|-------------|-------------------|--------|----------|-------------|
| CR-1 | | | | | | |

---

## Relationship to Release Authority

Change Control governs **modifications during a release cycle**.
Release Authority governs **locking and promoting a version**.

A change can be approved here without being released; conversely, a release
lock (v0.1, v0.2 …) can only happen once all in-scope changes have cleared
this process.

| Question | Answered by |
|---|---|
| "Can we make this change?" | This document (CHANGE-CONTROL.md) |
| "Can we lock this version?" | `RELEASE-AUTHORITY.md` |
| "Who approves a Major release?" | `RELEASE-AUTHORITY.md` → Sponsor Consensus Group |
| "Who approves a Minor release?" | `RELEASE-AUTHORITY.md` → Release Owner (Fred) |

**Mapping the existing change-size model to release impact:**

- **Small change** (Fred alone) → typically rolls into the next Minor release
- **Medium change** (Fred + Thinh/Duy) → typically rolls into the next Minor release; flagged in release manifest's KNOWN-ISSUES if deferred
- **Large change** (Fred + Henry/Emily) → forces re-evaluation of release scope; may trigger a Major release classification

**See:** `00-programme/RELEASE-AUTHORITY.md` and `00-programme/STAKEHOLDER-MAP.md` → Release Roles section.
