# VSON Advisory — Release v0.1 Known Issues

**Version:** v0.1
**Lock date:** 2026-04-07
**Release Owner:** Fred Dang
**Governed by:** `00-programme/RELEASE-AUTHORITY.md`

> This file lists debt carried forward into v0.1. These are NOT defects in
> v0.1 itself — v0.1 is a snapshot of current state. They are issues that
> the snapshot has inherited and that subsequent releases must address.
>
> Issue IDs are reused verbatim from their source documents (COMPLIANCE-AUDIT,
> PROJECT.md F-fixes). No new v0.1-namespaced IDs are introduced — this
> preserves direct traceability back to source.
>
> Full detail for each issue lives in its source document. This file
> references only; it does not duplicate.

---

## 1. Summary by Category

| Category | Items | Source | Target release | Release tier |
|---|---|---|---|---|
| SFA Compliance — Critical | C1, C2, C3, C4 | `COMPLIANCE-AUDIT-2026-04-07.md` | v0.2 | **Major** (compliance posture) |
| SFA Compliance — High | H1, H2, H3, H4, H5 | `COMPLIANCE-AUDIT-2026-04-07.md` | v0.2 | **Major** (compliance posture) |
| SFA Compliance — Medium | M1, M2, M3 | `COMPLIANCE-AUDIT-2026-04-07.md` | v0.2 | **Major** (compliance posture) |
| Build-time fix — Not done | F1, F10 | `PROJECT.md` §Build-Time Fixes | v0.2 or v0.3 | Minor (if no compliance overlap) |
| Build-time fix — Unverified | F4, F5, F7 | `PROJECT.md` §Build-Time Fixes | v0.2 or v0.3 | Minor |
| Build-time fix — Partial | F8 | `PROJECT.md` §Build-Time Fixes | v0.2 or v0.3 | Minor |
| Content quality | Emily bio sign-off, CSS drift, brain-trust.html filename | This file | Before v1.0 | Minor |
| Deferred scope | Vault articles, full partner addresses | `PROJECT.md` §Pre-Build Blockers (resolved) | Phase 2 | — |

**Total carried-forward items: 20**
(12 compliance + 6 build-time fixes + 2 content quality drift items = 20)

---

## 2. SFA Compliance Items (12)

All items below originate from the 2026-04-07 compliance audit and are
governed by the Internal Memo VS26/Advisory/Operation/Restriction v1.0
(2023-10-24). The Golden Rule: *"We are Operational and Strategic
Architects. We do not facilitate the sale of shares, raise capital from
investors, or value securities."*

### Critical (must fix before any go-live)

| ID | Summary | Location | Source |
|---|---|---|---|
| **C1** | Missing mandatory SFA disclaimer | All 7 pages (footer) | `COMPLIANCE-AUDIT-2026-04-07.md` §C1 |
| **C2** | "fundraising readiness" phrasing | `build/index.html:107` | `COMPLIANCE-AUDIT-2026-04-07.md` §C2 |
| **C3** | "capital raising" + "valuation narrative" in Pillar 6 | `build/capabilities.html:114`, `build/index.html:230` | `COMPLIANCE-AUDIT-2026-04-07.md` §C3 |
| **C4** | Emily bio: "personally led multiple fundraising rounds" | `build/brain-trust.html:109`, `build/index.html:263` | `COMPLIANCE-AUDIT-2026-04-07.md` §C4 |

### High (fix before go-live)

| ID | Summary | Location | Source |
|---|---|---|---|
| **H1** | "attract capital" in hero positioning | `build/index.html:76` | `COMPLIANCE-AUDIT-2026-04-07.md` §H1 |
| **H2** | "international capital markets" in Henry bio | `build/brain-trust.html:95`, `build/index.html:249` | `COMPLIANCE-AUDIT-2026-04-07.md` §H2 |
| **H3** | "Valuation narrative" as a service deliverable | `build/approach.html:126`, `build/index.html:107` | `COMPLIANCE-AUDIT-2026-04-07.md` §H3 |
| **H4** | "We position the business for institutional capital or exit" | `build/approach.html:128` | `COMPLIANCE-AUDIT-2026-04-07.md` §H4 |
| **H5** | "investment readiness mandates" in Hung Tran bio | `build/brain-trust.html:123` | `COMPLIANCE-AUDIT-2026-04-07.md` §H5 |

### Medium (reframe for safety)

| ID | Summary | Location | Source |
|---|---|---|---|
| **M1** | Contact form radio: "Institutional Investor or Capital Partner" | `build/contact.html:117` | `COMPLIANCE-AUDIT-2026-04-07.md` §M1 |
| **M2** | Footer pillar names ("Strategic Finance & M&A", "Investment Readiness") | All 7 pages (footer) — context-dependent on C1 | `COMPLIANCE-AUDIT-2026-04-07.md` §M2 |
| **M3** | Vault article title "What Investors Look For" | `build/vault.html:130` | `COMPLIANCE-AUDIT-2026-04-07.md` §M3 |

**Collectively, items C1–M3 constitute a compliance-posture change and
therefore force v0.2 to be classified as Major per `RELEASE-AUTHORITY.md`
§4.2.** Sponsor Consensus (or Compliance Fast-Path §4.4) is required
before v0.2 can lock.

---

## 3. Build-Time Fixes F1–F10 (6 pending)

Source: `01-delivery/vson-advisory/PROJECT.md` §Build-Time Fixes.
Verification pass conducted during v0.1 inventory (2026-04-07).

### Not done (2)

| ID | Summary | Verified state | Source |
|---|---|---|---|
| **F1** | Remove "Capabilities" nav item; replace with "Contact" | "Capabilities" link still present in `build/index.html:44, 60` and footer. Contact also present (so removal, not addition, is the work) | `PROJECT.md` F1 |
| **F10** | Add Duy Le to Brain Trust preview and Contact page | Zero "Duy Le" occurrences across all build files | `PROJECT.md` F10 |

### Unverified (3)

| ID | Summary | Reason | Source |
|---|---|---|---|
| **F4** | Align Vault pillar tags to 6 official IA pillar names | Requires deep content review of `build/vault.html` against `INFORMATION-ARCHITECTURE.md` | `PROJECT.md` F4 |
| **F5** | Add CTA band to bottom of Approach page | Requires structural review of `build/approach.html` | `PROJECT.md` F5 |
| **F7** | Passive → active voice in Capability pillar cards | Requires sentence-level review of `build/capabilities.html` | `PROJECT.md` F7 |

### Partial (1)

| ID | Summary | State | Source |
|---|---|---|---|
| **F8** | Demote 3rd Audience Pathway card (network join) | "Join the Expert Network" still exists as h3 in `build/index.html:135`. Visual demotion not confirmed via CSS inspection. | `PROJECT.md` F8 |

### Done (4, recorded for completeness)

| ID | Summary | Evidence |
|---|---|---|
| ~~F2~~ | CTA copy → "Request a Strategic Briefing" | 13 occurrences across 7 pages |
| ~~F3~~ | Phase arrows → `/approach.html` | Confirmed on index.html lines 96, 102, 108 |
| ~~F6~~ | Remove "Typically" from Engagement Steps heading | Zero "Typically" occurrences in `build/` |
| ~~F9~~ | Contact form 4th radio → "Corporate / Institutional Inquiry" | Confirmed on contact.html:124–125 |

⚠️ **Conflict between F9 and M1:** F9 was approved as "Corporate / Institutional
Inquiry" in Round 1. M1 in the 2026-04-07 compliance audit now flags
"Institutional Investor or Capital Partner" on contact.html line 117 as
needing replacement to "International Partner or Market Entrant". These
may or may not be the same radio option — **investigation required in
v0.2 planning** to confirm whether F9's work has been superseded or
whether M1 refers to a different element.

---

## 4. Content Quality and Drift (2)

| ID | Summary | Detail |
|---|---|---|
| **KI-DRIFT-01** | CSS drift between specs and build | `specs/css/styles.css` is 17 KB; `build/css/styles.css` is 18 KB. Both captured in v0.1 as-is. Reconciliation deferred. |
| **KI-DRIFT-02** | Filename drift: `brain-trust.html` not renamed to `leadership.html` | Round 1 renamed the external-facing section to "Leadership" (§3 of CONTENT-REVIEW-REPLACEMENTS), but the file is still `brain-trust.html`. In-page content uses "Leadership". URL drift remains. |

Two `KI-` prefix IDs introduced here only because these issues have no
source document to reference back to — they were discovered during the
v0.1 inventory pass itself.

---

## 5. Content Items Flagged But Not Blocking

| Item | Status | Source |
|---|---|---|
| Emily bio personal sign-off | Required before go-live, not before v0.2 | `PROJECT.md` B4 resolution note |
| Vault articles | Deferred to Phase 2 per resolved B3; v0.1 ships "Coming Soon" | `PROJECT.md` B3 |
| Full partner addresses | Deferred; v0.1 uses city-level (SG/SF/HCM) | `PROJECT.md` B2 resolution |

---

## 6. Release Targeting Recommendation

Based on the items above, the recommended release sequence after v0.1:

| Release | Scope | Tier | Approval |
|---|---|---|---|
| **v0.2** | All 12 SFA compliance items (C1–M3). Resolve F9/M1 conflict. | **Major** | Sponsor Consensus or Fast-Path |
| **v0.3** | F1, F10, F4, F5, F7, F8. CSS drift reconciliation. Filename rename if desired. | Minor (if no compliance overlap) | Fred alone |
| **v0.9** | Release-candidate. Emily bio sign-off. Full staging QA. | Minor structurally, but gated | Fred + Thinh (Tech Release Gate) |
| **v1.0** | First production release. Go-live. | **Major** | Sponsor Consensus |

This recommendation is not a commitment — it is a working plan. The
Release Owner can merge, reorder, or renumber versions subject to
`RELEASE-AUTHORITY.md` rules.

---

## 7. Cross-References

| Source | Location |
|---|---|
| 2026-04-07 compliance audit (C1–M3) | `01-delivery/vson-advisory/COMPLIANCE-AUDIT-2026-04-07.md` |
| Build-time fixes F1–F10 | `01-delivery/vson-advisory/PROJECT.md` §Build-Time Fixes |
| Round 1 content replacement (13 items) | `02-product/vson-advisory/specs/CONTENT-REVIEW-REPLACEMENTS.md` |
| Release framework | `00-programme/RELEASE-AUTHORITY.md` |
| SFA compliance memo | Internal Memo VS26/Advisory/Operation/Restriction v1.0 (2023-10-24) |

---

*End of known issues. This file becomes read-only once `SIGN-OFF.md` is signed.*
