# PLANNING-INPUTS — VSON Advisory v0.2

**Status:** Draft — inputs being collected. **Do NOT treat as approved scope.**
**Created:** 2026-04-08
**Owner:** Fred Dang (Release Owner)
**Target release:** v0.2 (pre-classified **Major** per `RELEASE-AUTHORITY.md` §4.2)

---

## 1. Purpose

This file parks the inputs that will feed `v0.2/SCOPE.md` in a later working
session. It is **not** v0.2 scope itself. Its job is to:

- Register every source document that must be reconciled before v0.2 can be scoped
- Record pre-audit observations that emerged while reading those inputs
- List open questions and deferred decisions so the next session starts clean
- Prevent re-ingestion loss (traceability over regeneration)

v0.2 SCOPE.md will be produced by a consolidated audit that reads all four
inputs below and emits a single findings table. Until that audit is run, the
only approved v0.2 classification statement is:

> *"v0.2 is a Major release driven by multi-jurisdictional compliance
> alignment (SG + US + VN) and corporate structure disclosure."*

---

## 2. Input Registry

| ID | Source | Type | Approved | Ingested | Location |
|----|--------|------|----------|----------|----------|
| IN-01 | `COMPLIANCE-AUDIT-2026-04-07.md` (SG SFA) | Audit findings — 12 items (C1–C4, H1–H5, M1–M3) | 2026-04-07 | 2026-04-07 | `01-delivery/vson-advisory/COMPLIANCE-AUDIT-2026-04-07.md` |
| IN-02 | US Compliance Guidelines v1.0 | Policy memo — SEC/FINRA Broker-Dealer avoidance | 2023-10-24 | 2026-04-08 | Google Doc `1QKKl4Ji...` (VS26/Advisory/US_Operation/Restriction) |
| IN-03 | Vietnam Compliance Guidelines v1.0 | Policy memo — SSC / CPC 865 scope | 2023-10-24 | 2026-04-08 | Google Doc `1zoucKgr...` (VS26/Advisory/VN_Operation/Restriction) |
| IN-04 | Strategic Advisory — De-linked Partnership Model v1.0 | Corporate structure memo | 2023-10-24 | 2026-04-08 | Google Doc `19hgkUcd...` (VS26/Advisory/Strategic/Transparency) |

**Note on IN-02/IN-03/IN-04:** These are policy/structure documents, **not**
audit findings. They define the guardrails — the v0.2 audit must still map
them to specific site locations to generate actionable findings.

**Note on IN-01:** IN-01 is already finding-level. A large fraction of its
items will overlap with the terminology forbidden by IN-02 and IN-03
(e.g. "capital raising", "valuation", "fundraising").

---

## 3. Pre-Audit Observations

Observations recorded while reading IN-02/IN-03/IN-04. These are **not**
findings — they are leads for the consolidated audit.

### 3.1 Title drift across all three partners (systemic)

All three partners are labelled "Managing Partner" in the current build
(`index.html`, `brain-trust.html`, `contact.html`). Per IN-04, only
Frederick is Managing Partner (of Vson Advisory Pte. Ltd.). Henry and
Emily must be publicly designated **"Strategic Partner"** — "Partner in
Expertise, not Partner in Equity."

Affected locations (from grep 2026-04-08):

| File | Line(s) | Current |
|---|---|---|
| `brain-trust.html` | 86, 88 | Section heading `"Managing Partners"` (plural) |
| `brain-trust.html` | 93, 100, 107 | All three individual tags `"Managing Partner"` |
| `index.html` | 247, 254, 261 | All three Leadership section tags |
| `contact.html` | 190, 202, 213 | All three contact card tags |

**Implication for v0.2:** Cannot be a simple find-and-replace. The section
heading "Managing Partners" is a structural label that needs a replacement
(candidates: "Leadership", "Partners", "The Brain Trust"). Decision deferred.

### 3.2 Henry bio — convergent multi-jurisdiction violation (highest priority)

`brain-trust.html` line 95 and `index.html` line 249 contain identical text:

> *"Now US-based, Henry serves as VSON's bridge into international capital markets."*

This single sentence violates all three jurisdictions simultaneously:

- **IN-01 (SG SFA)** — already flagged as H2 "international capital markets"
- **IN-02 (US)** — "capital markets" positions Henry near Broker-Dealer
  reclassification, directly defeating the CFC/GILTI/Form 5471 protections
  that IN-04 was designed to secure for him personally
- **IN-03 (VN)** — equivalent to "huy động vốn" (capital raising), which
  IN-03 §2 explicitly forbids

**Implication for v0.2:** This is the single highest-priority finding. Left
in place, it undermines the legal protection architecture of IN-04.

### 3.3 F10 cancellation confirmed clean

No "Duy Le" references exist in any current build file. F10 ("Add Duy Le to
Brain Trust preview and Contact page") was never implemented. Cancellation
per IN-04 creates zero orphan content.

Logged: `PROJECT.md` F10 row marked ~~cancelled~~ with rationale pointing
to IN-04 (2026-04-08).

### 3.4 Entity naming inconsistency in IN-03

IN-03 §5 says *"Vson Advisory operates as a Management Consulting entity
under the Law on Enterprises of Vietnam."* But per IN-04, Vson Advisory is
a **Singapore** Pte. Ltd. owned 100% by Frederick — not a Vietnamese entity.
The Vietnamese entity is **VSON Corp**, owned 100% by Emily.

This looks like a drafting bug in IN-03 (the memo probably meant "Vson Corp"
or "the Vietnam entity"). It does not affect the Advisory website directly,
but it means IN-03's disclaimer text cannot be copied verbatim onto
`vsonadvisory.com` — it would be factually wrong.

**Implication for v0.2:** Any VN-facing disclaimer on vsonadvisory.com must
clarify that vsonadvisory.com is the **SG entity's** site, and that services
in Vietnam are delivered through VSON Corp via MSA.

### 3.5 Operational constraints outside website scope

IN-02 §2 recommends "NO SUCCESS FEES" and IN-03 §4 constrains VN invoicing
language. These are **operational** not **website content** — they affect
fee schedules, engagement letters, and accounting entries, not HTML.

**Implication for v0.2:** Flag them in the audit but mark **OUT OF SCOPE**
for v0.2 (which is a website release). Route to a separate operational
action item for Fred and Emily.

---

## 4. Open Questions / Deferred Decisions

To be resolved in the next working session before `SCOPE.md` can be drafted.

| # | Question | Owner | Blocks |
|---|---|---|---|
| ~~Q1~~ | ~~Single consolidated v0.2, or split v0.2-SG / v0.2-US / v0.2-VN into parallel Major releases?~~ **DECIDED 2026-04-08: Option C — Hybrid.** One v0.2 release with SCOPE.md internally organised into §SG, §US, §VN, §Shared sections. Single Sponsor Consensus cycle; per-jurisdiction traceability preserved via section structure. | Fred | ~~Scope structure~~ ✅ |
| ~~Q2~~ | ~~Does vsonadvisory.com need an "Entity Disclosure" footer naming all three legal entities and the MSA relationship?~~ **DECIDED 2026-04-08: Option A — Minimal legal footer.** Single line: *"© 2026 Vson Advisory Pte. Ltd. (Singapore). All rights reserved."* No three-entity disclosure block. No dedicated `/corporate-structure.html` page in v0.2. See Q2a below for disclaimer placement sub-question. | Fred | ~~Footer design~~ ✅ |
| ~~Q2a~~ | ~~Where do the US (IN-02 §4) and VN (IN-03 §5) jurisdiction-specific disclaimers live, if not in the footer?~~ **DECIDED 2026-04-08: Option (a) — Pitch-deck only.** Disclaimers stay off vsonadvisory.com entirely. v0.2 website scope is limited to terminology fixes + title corrections + Henry bio fix + footer line. Pitch-deck compliance tracked as operational follow-up (see §7 below). | Fred | ~~Scope completeness for v0.2~~ ✅ |
| ~~Q3~~ | ~~What replaces the "Managing Partners" section heading on brain-trust.html?~~ **DECIDED 2026-04-08: "The Brain Trust"** (Candidate 3). Rationale: matches the URL/page name (self-referential IA), zero compliance surface (branded phrase, not a regulated title), distinctive vs peers. Individual cards below retain precise titles (Fred = Managing Partner, Henry + Emily = Strategic Partner). **Fallback:** "Partners" (Candidate 2) if Henry or Emily push back on tone during v0.2 Sponsor Consensus review. | Fred | ~~Section H1 copy~~ ✅ |
| ~~Q4~~ | ~~Does the Sponsor Consensus Group need recalibration from 4 members to 3 (removing Duy per IN-04)?~~ **DECIDED 2026-04-08:** (Q4-factual-Advisory) Reading A — Duy is OUT of Sponsor authority for VSON Advisory. (Q4-factual-Corporate) Duy REMAINS Sponsor for VSON Corporate — VN entity, Duy's role preserved in a separate Corporate Sponsor group. Advisory and Corporate now have distinct Sponsor groups. (Q4-mechanical) "Make it simple — Fred will do now." No elaborate quorum rule codified this session. For v0.2, Fred approves alone via Compliance Fast-Path (see Q6). Formal Advisory quorum rule deferred until post-v0.2 retrospective. | Fred | ~~`RELEASE-AUTHORITY.md` §5.1~~ ✅ (provisional: Fast-Path for v0.2; formal rule deferred) |
| ~~Q5~~ | ~~Does Thinh's Tech Release Gate apply to v0.2?~~ **DECIDED 2026-04-08: Reading A — Tech Gate does NOT apply to v0.2.** v0.2 is text-only HTML content edits, no architecture changes. Thinh is informed but not in approval chain. Gap flagged for post-v0.2 retrospective: if future Major releases touch CSS/JS/routing, the rule needs explicit handling. | Fred | ~~Approval path~~ ✅ |
| ~~Q6~~ | ~~Sponsor Consensus (normal path, ~5 business days) vs Compliance Fast-Path?~~ **DECIDED 2026-04-08 (implicitly via Q4):** **Compliance Fast-Path.** Fred approves v0.2 alone as Release Owner invoking Fast-Path per `RELEASE-AUTHORITY.md` §4.4. Henry and Emily informed via notify-only (channel-agnostic per §5.3). Rationale: this is Fred's first Major release, pre-production, and Fred wants to build experience before codifying a formal Sponsor Consensus rule. Fast-Path is the correct mechanism to preserve Major classification while avoiding premature ceremony. | Fred | ~~Approval path~~ ✅ |
| ~~Q7~~ | ~~Is a new programme doc `CORPORATE-STRUCTURE.md` needed?~~ **DECIDED 2026-04-08: Option (b) — Skip.** Do not create a programme-level mirror of IN-04. Link to the Google Doc from PLANNING-INPUTS.md §7 is sufficient. Rationale: avoids duplicating content in markdown with no audit benefit; keeps Google Doc as single source of truth; prevents drift between the Doc and a mirrored .md file. | Fred | ~~Programme layer~~ ✅ |
| ~~Q8~~ | ~~Audit finding ID scheme?~~ **DECIDED 2026-04-08: Option (a) — Reuse source IDs verbatim.** SG findings keep C1–C4, H1–H5, M1–M3 from `COMPLIANCE-AUDIT-2026-04-07.md`. New US findings use prefix `US-NN`, new VN findings use prefix `VN-NN`. Convergent findings (affecting multiple jurisdictions) use the original SG ID plus cross-reference notes. Consistent with v0.1 KNOWN-ISSUES approach — reference-only, no invented ID layers. | Fred | ~~Audit format~~ ✅ |

---

## 5. What Happens Next

The next working session on v0.2 will:

1. **Answer Q1–Q8** above (Fred + Claude, step by step)
2. **Run the consolidated audit** — Claude reads current build + IN-01 through
   IN-04, emits a single findings table with columns:
   `Finding ID | Location | Current text | Jurisdictions (SG/US/VN) | Severity | Proposed fix | Disclaimer trigger | Operational trigger`
3. **Draft `v0.2/SCOPE.md`** based on the consolidated audit
4. **Draft `v0.2/MANIFEST.md`** listing every file that will be modified
5. **Route to Sponsor Consensus** per `RELEASE-AUTHORITY.md` §5

No work on `v0.2/SCOPE.md`, `MANIFEST.md`, `KNOWN-ISSUES.md`, or `SIGN-OFF.md`
is permitted until Q1–Q8 are answered.

---

## 6. Operational Follow-ups (Outside v0.2 Website Scope)

These items are **not** part of v0.2. They are operational actions that must
be tracked separately because v0.2 scope decisions depend on them being
handled elsewhere. Logged here for traceability so no operational gap is
created by a narrow website release.

| ID | Item | Trigger | Owner | Status | Must be resolved before |
|----|------|---------|-------|--------|-------------------------|
| OP-01 | **Vson Advisory pitch deck must carry the IN-02 US disclaimer and IN-03 VN disclaimer.** Q2a Option (a) chosen on the assumption that the pitch deck is (or will be) the compliance surface for jurisdiction-specific disclaimers. If pitch deck is out of date, missing, or non-compliant, the risk simply shifts to a surface Fred doesn't control — which is worse, not better. | Q2a Option (a) decision, 2026-04-08 | Fred | Open | v0.2 Sponsor Consensus approval |
| OP-02 | **Engagement letters, SOWs, and contract templates** should also carry the correct jurisdiction-specific disclaimer appropriate to the contracting entity (SG Pte. Ltd. / US LLC / VN Corp). | IN-04 §5 MSA model | Fred | Open | Before first signed engagement in each jurisdiction |
| OP-03 | **LinkedIn bios for Fred, Henry, Emily** should align with IN-04 §5 — Henry and Emily as "Strategic Partner," Fred as "Managing Partner, Vson Advisory Pte. Ltd." | IN-04 §5 "total transparency" | Fred (own bio), Henry + Emily (own bios) | Open | Before v0.2 website goes live |
| OP-04 | **Invoicing discipline in Vietnam** — no "Investment" (Đầu tư) in VN invoice descriptions per IN-03 §4. | IN-03 §4 invoicing rule | Emily | Open | First VN invoice |
| OP-05 | **US fee structure review** — IN-02 §2 recommends no success fees. Confirm current Vson Advisory engagement pricing is Fixed / Hourly / Retainer for any US-nexus work. | IN-02 §2 Broker-Dealer avoidance | Fred + Henry | Open | First US engagement |

> **Note on OP-01 specifically:** Q2a Option (a) is only defensible if OP-01
> is closed. If the pitch deck is confirmed non-compliant at v0.2 Sponsor
> Consensus review, re-open Q2a and reconsider Option (b) or (c).

---

## 7. Cross-References

- Release framework: `../../../../00-programme/RELEASE-AUTHORITY.md`
- Stakeholder roles: `../../../../00-programme/STAKEHOLDER-MAP.md`
- Project record: `../../PROJECT.md`
- Locked baseline: `../v0.1/SIGN-OFF.md`
- SG audit source: `../../COMPLIANCE-AUDIT-2026-04-07.md`
- US memo: Google Doc `1QKKl4Ji4aV9fH4n4fLOLbJ4MiJ1ihLuatT30fyekZVc`
- VN memo: Google Doc `1zoucKgr7XEyPvksesLNxbYAbpb1npY6FrX-ExuuNM9o`
- Corporate structure: Google Doc `19hgkUcddshf4dpW5GVYpsLGxxqz6CgmFfrZno6BrQvY`

---

*This file is mutable until v0.2 SCOPE.md is approved. Any change must be
noted with date and rationale in a "Revisions" section appended below.*

## Revisions

| Date | Change | By |
|---|---|---|
| 2026-04-08 | Initial draft — 4 inputs registered, 5 observations logged, 8 open questions recorded | Fred + Claude |
| 2026-04-08 | Q1–Q8 + Q2a all decided. See §4 strikethrough entries for locked decisions. | Fred |
| 2026-04-08 | **H2 severity upgrade confirmed (High → Critical).** Rationale: H2 is the only audit finding that violates SG + US + VN simultaneously AND directly undermines IN-04's CFC/GILTI/Form 5471 legal protections for Henry personally. Re-rated in Batch 1 consolidated audit. v0.2 Critical count becomes 5 (C1–C4 + H2). | Fred |
| 2026-04-08 | **Hung Tran content frozen — "keep as-is".** Discovery during Batch 2+3 scan found a 4th person on `brain-trust.html:120–123` not listed in PROJECT.md or IN-04. Fred instructed: ignore Hung Tran content, keep as-is. Cascade: (a) NEW-01 (discovery) — no action; (b) NEW-02 (Hung Tran's title "Finance & Investment") — no action; (c) **H5 from original SG audit — DEFERRED from v0.2** because H5 modifies Hung Tran's bio line and "keep as-is" freezes that entire section. H5 moves to v0.3 backlog or later. | Fred |
| 2026-04-08 | **NEW-03 approved:** Audience card heading `index.html:129` reframed from "For Investors & Partners" → "For International Partners" with body text reworked to remove "investors, family offices" language. | Fred |
| 2026-04-08 | **NEW-04 closed by cascade with NEW-03.** No separate action. | Fred |
| 2026-04-08 | **NEW-05 approved:** `capabilities.html:104` + `index.html:220` "investor-ready reporting infrastructure" → **"board-ready reporting infrastructure"**. Rationale: aligns with brand voice ("boardroom-level insights" already in use on vault.html) and repositions audience from investors to institutional standards. | Fred |
| 2026-04-08 | **NEW-06 no-action:** `index.html:8` meta keywords log-only. No violation. | Fred |
