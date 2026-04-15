# Release Authority — VSON Web Platform

**Owner:** Fred Dang (Release Owner)
**Last Updated:** 2026-04-07
**Status:** Draft v0.1 — Sections 1–3 of 7
**Source frameworks:** vnv-delivery-product-manager · vnv-delivery-product-owner

> This document governs **how versions of the VSON websites are locked and
> promoted**. It does not govern day-to-day change requests (see
> `CHANGE-CONTROL.md`) or delivery RACI (see `STAKEHOLDER-MAP.md`).

---

## 1. Purpose & Scope

**Purpose.** Establish a disciplined, auditable mechanism for locking versions
of the VSON Advisory and VSON Corporate websites so that:

- Past work cannot be silently overwritten
- Every released version has a named owner and a documented sign-off
- Compliance-posture changes cannot ship without sponsor consensus
- Future-Claude (or any team member) can answer "what did we have on date X?"
  by reading a single manifest

**In scope:** All artefacts under `02-product/vson-advisory/` and
`02-product/vson-corporate/` plus their corresponding `01-delivery/` content
specs and compliance audits.

**Out of scope:** Programme charter changes, infrastructure ADRs (see
`06-infra/`), and individual change requests (see `CHANGE-CONTROL.md`).

**Applies to:** Both VSON Advisory and VSON Corporate, using the same Release
Roles and the same Sponsor Consensus Group. If VSON Corporate later requires
a different stakeholder set, this document will be split per project.

---

## 2. Release Roles

Release Roles are defined in `STAKEHOLDER-MAP.md → Release Roles section`.
Summary only — do not duplicate the source of truth here.

| Role | Person(s) | Authority Summary |
|---|---|---|
| **Release Owner** | Fred Dang | Approves Minor releases alone; drafts manifests; signs locks |
| **Sponsor Consensus Group** | Fred + Henry + Emily + Duy | Approves Major releases; quorum rules in §5 |
| **Tech Release Gate** | Thinh | Validates technical readiness for v0.9 → v1.0 |

> For full role definitions, see `STAKEHOLDER-MAP.md`.

---

## 3. Versioning Scheme

| Tag pattern | Meaning | Approval gate | Typical use |
|---|---|---|---|
| `v0.x` | Internal pre-release snapshot. Not deployed. Not externally promised. | Release Owner alone | Baseline locks during build phase; content review milestones |
| `v0.9` | Release-candidate. Code-complete, content-locked, on staging. | Release Owner + Tech Release Gate | Last checkpoint before sponsor review |
| `v1.0` | First production release. Live on the public domain. | **Sponsor Consensus** required | Go-live |
| `v1.x` | Post-launch incremental release (bug fixes, content updates) | Release Owner alone, unless triggers Major criteria (see §4) | Maintenance |
| `v2.0`, `v3.0`… | Subsequent Major releases (redesign, new section, repositioning) | **Sponsor Consensus** required | Material site evolution |

**Number bumping rules:**

- **Minor bump** (`v0.1 → v0.2`, or `v1.3 → v1.4`): increment the right-hand digit
- **Major bump** (`v0.x → v1.0`, or `v1.x → v2.0`): increment the left-hand digit and reset the right-hand to zero
- The jump from any `v0.x` to `v1.0` is **always Major** (it crosses the production line)
- A `v0.9` is structurally Minor but is the gate immediately before a Major

**Working principle:** Every file under `02-product/[project]/build/` belongs
to a specific version. If you can't name the version it belongs to, stop
editing and check with the Release Owner.

---

## 4. Minor vs Major Definition

The two-stage approval model rests on a clear, testable distinction between
Minor and Major releases. **When in doubt, escalate to Major** — it is always
safer to over-consult than to ship something silently.

### 4.1 Minor Release (Release Owner approves alone)

A release is **Minor** when ALL of the following are true:

- No change to the production domain, hostname, or canonical URLs
- No change to legal/compliance posture (disclaimers, regulatory framing, SFA language)
- No change to brand-impacting hero/positioning copy or partner names/titles
- No change to the Sponsor Consensus Group's externally-visible commitments
- No new public-facing pages added or removed
- No change to data collection (forms, analytics, tracking)
- The release stays inside the same major version line (`v0.x → v0.x+1`, or `v1.3 → v1.4`)

**Examples of Minor:**
- Internal baseline lock (v0.1) before any production deploy
- Bug fixes, typo corrections, broken-link repairs
- Image swaps that do not change positioning
- Backlog refinement on a content tracker
- Adding a `KNOWN-ISSUES` entry to a release manifest

### 4.2 Major Release (Sponsor Consensus required)

A release is **Major** when ANY of the following is true:

- It crosses the production line (any `v0.x → v1.0`)
- It changes legal/compliance posture (e.g. adding/removing the SFA disclaimer; rewording fundraising language)
- It changes brand-impacting copy: hero headline, positioning statement, partner bios, capability pillars
- It changes a partner's listed name, title, or photo
- It adds, removes, or renames a public page
- It changes the production domain, email domain, or canonical URLs
- It changes data collection (new form fields, new analytics, new tracking)
- It introduces or removes a third-party logo or testimonial
- It triggers a major version bump (`v1.x → v2.0`)

**Examples of Major:**
- Today's Round 2 SFA compliance fixes (changes legal/compliance posture)
- The original Round 1 content replacement (changed hero, positioning, partner bios)
- Adding the Vietnamese language version of VSON Corporate (Phase 2)
- Renaming "Brain Trust" to "Leadership"
- First go-live of either site

### 4.3 Escalation Rule (the "5-change" trigger)

If a Minor release accumulates more than **5 changes** of any kind during a
single editing cycle, the Release Owner MUST reassess the release tier:
many small changes can collectively constitute a Major. The reassessment
is documented in the release manifest's `SCOPE.md` under a "Tier Review"
heading. This rule prevents silent scope creep through accumulation.

### 4.4 Compliance Fast-Path (urgency override)

When a regulatory, legal, or compliance issue makes a Major release urgent
and Sponsor Consensus cannot be reached within the standard quorum window
(see §5), the Release Owner may invoke the **Compliance Fast-Path**:

1. The Release Owner documents the urgency rationale in `SCOPE.md` under
   "Fast-Path Justification" (cite the specific compliance memo, regulation,
   or audit finding)
2. The release is implemented immediately under the Release Owner's authority
3. Tech Release Gate (Thinh) must co-sign the technical implementation
4. The Sponsor Consensus Group MUST ratify the change within **5 business
   days** post-implementation
5. If ratification fails, the change is reverted in the next release

The Fast-Path is **not** a routine shortcut. It is reserved for material
compliance risk and is auditable: every Fast-Path invocation is logged in
`SIGN-OFF.md` with the rationale, the urgency evidence, and the ratification
outcome.

### 4.5 Today's Application

Under these rules:

| Release | Tier | Approval | Rationale |
|---|---|---|---|
| **v0.1** (today's lock) | Minor | Fred alone | Internal baseline, no external commitment, no compliance change |
| **v0.2** (Round 2 SFA fixes) | **Major** | Sponsor Consensus | Changes legal/compliance posture (SFA disclaimer + 12 audit items) |
| **v1.0** (go-live) | Major | Sponsor Consensus | Crosses production line by definition |

> **Implication for tomorrow's build:** Round 2 cannot be locked as v0.2
> until Sponsor Consensus is reached, OR until the Compliance Fast-Path is
> invoked with documented urgency. The build phase can proceed on v0.1
> without these fixes; v0.2 lock can follow once consensus or Fast-Path
> is in place.

---

## 5. Approval Mechanism

This section operationalises the approval rules from §4. It is intentionally
lightweight: the discipline is in the artefacts (manifest, sign-off, comms
archive), not in the channel.

### 5.1 Quorum Rule for Sponsor Consensus

- **Standard quorum:** All 4 of {Fred, Henry, Emily, Duy} respond Approve
- **Reduced quorum:** After **5 business days** with no response from one
  member, quorum drops to **3-of-4 with Fred mandatory**
- **Failed quorum:** Fewer than 3 approvals, or Fred absent → release blocked
  until consensus restored OR Compliance Fast-Path invoked (§4.4)
- The 5-business-day clock starts when the Release Owner sends the consensus
  request and ends when the Release Owner closes the window in writing

### 5.2 Sign-Off Mechanic

Every release that requires Sponsor Consensus produces two artefacts:

1. **`SIGN-OFF.md`** in the release folder, containing one row per approver:
   - Name
   - Date (ISO 8601)
   - Decision: `Approve` / `Approve with conditions` / `Reject`
   - Conditions or rationale (free text)

2. **Comms archive** in `05-comms/[project]/release-approvals/v0.x-[date].md`
   containing the original consensus request and the verbatim responses
   (email threads, Slack/Zalo screenshots, doc comments — whatever the
   approvers used)

A release lock is **only complete** when both artefacts exist. The
`SIGN-OFF.md` is the structured truth; the comms archive is the evidence.

### 5.3 Channel — Approver's Choice

There is **no mandatory channel** for the consensus request. The Release
Owner may use email, Slack, Zalo, a Confluence page, a Google Doc, or
in-person conversation — whatever the approvers will actually respond to.

**Single requirement:** the verbatim record of the request and each response
must be captured in the comms archive (§5.2). If a decision happens verbally
or in-person, the Release Owner writes it down and confirms it back to the
approver in writing within 24 hours.

### 5.4 Tie-Break

If a release receives mixed decisions (e.g. 2 Approve, 1 Approve with
conditions, 1 Reject):

1. The Release Owner facilitates a resolution conversation with all
   responding approvers
2. Conditions and rejections are resolved or incorporated into a revised
   release scope
3. A second consensus pass is run on the revised scope
4. If consensus still cannot be reached after **two passes**, the release
   is escalated to Henry as Executive Sponsor for a binding decision
5. The escalation rationale and outcome are logged in `SIGN-OFF.md`

### 5.5 Minor Release Sign-Off (Release Owner alone)

For Minor releases, the Release Owner self-signs `SIGN-OFF.md` with name,
date, and a one-sentence rationale confirming the release meets all Minor
criteria from §4.1. No comms archive required for Minor releases.

---

## 6. Release Folder Convention

Each project carries its own `releases/` folder under its delivery layer:

    01-delivery/vson-advisory/releases/
    01-delivery/vson-corporate/releases/

Inside each, every locked version gets its own subfolder named by version tag:

    releases/
    ├── v0.1/
    │   ├── MANIFEST.md      ← inventory of files in scope, with paths and last-modified dates
    │   ├── SCOPE.md         ← what this version IS and what it deliberately ISN'T
    │   ├── KNOWN-ISSUES.md  ← debt carried forward to the next release
    │   └── SIGN-OFF.md      ← approver(s), date, decision (per §5.2)
    ├── v0.2/
    │   └── ...
    └── v1.0/
        └── ...

**Rules:**

- Once a version folder is locked (SIGN-OFF complete), its files are
  read-only — they become historical record
- Corrections to a locked version do not edit the locked files; they
  produce a new version
- A version can be superseded but never deleted
- The current "live" version is always the highest-numbered locked folder
- Version folders are numbered chronologically; gaps are not permitted
  (no skipping from v0.2 directly to v0.5)

---

## 7. Cross-References

| Topic | See |
|---|---|
| Programme-level RACI and stakeholder matrix | `00-programme/STAKEHOLDER-MAP.md` |
| Release Roles definitions | `00-programme/STAKEHOLDER-MAP.md` → Release Roles section |
| Change request process during a release cycle | `00-programme/CHANGE-CONTROL.md` |
| VSON Advisory project state and content review log | `01-delivery/vson-advisory/PROJECT.md` |
| VSON Corporate project state and content tracker | `01-delivery/vson-corporate/PROJECT.md` |
| Quality standards (security, accessibility, performance) | `00-programme/quality/` |
| Infrastructure ADRs | `06-infra/` |
| Comms archive for sponsor consensus | `05-comms/[project]/release-approvals/` |

---

## Document Self-Governance

This document follows the same release discipline it describes. Future
revisions of `RELEASE-AUTHORITY.md` are themselves classified as Minor or
Major:

- **Minor revision** — clarifications, typo fixes, examples added
  → Release Owner alone
- **Major revision** — new approval rules, changes to quorum, changes to
  Sponsor Consensus Group composition, changes to Minor/Major triggers
  → Sponsor Consensus required

**Document version:** Draft v0.1 — Sections 1–7 complete.
**Status:** Ready for Release Owner sign-off.
