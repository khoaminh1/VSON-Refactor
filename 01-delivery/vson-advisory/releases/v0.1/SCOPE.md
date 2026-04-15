# VSON Advisory — Release v0.1 Scope

**Version:** v0.1
**Tier:** Minor (internal baseline)
**Lock date:** 2026-04-07
**Release Owner:** Fred Dang
**Status:** Draft — awaiting SIGN-OFF.md
**Governed by:** `00-programme/RELEASE-AUTHORITY.md`

---

## 1. Release Name

**"Build-Ready Baseline"**

This is the first formal version lock for VSON Advisory. It captures the
state of the project on 2026-04-07 — one day before the Build phase is
scheduled to begin (2026-04-08) and approximately three weeks before the
launch target (2026-05-01).

---

## 2. Why This Release Exists

Before v0.1:

- Round 1 content replacement (13 items) had been applied to
  `design-concept-v2.html` but was not formally locked
- Round 2 SFA compliance findings (12 items) had been audited but not applied
- No release discipline existed; files could be edited without trace
- Two rounds of content work overlapped on the same lines (Pillar 6, Emily bio)
  with no mechanism to prevent silent overwrite

v0.1 exists to **photograph the current state** so that subsequent work
(specifically v0.2 for Round 2 compliance fixes) can proceed without losing
or silently modifying Round 1's outputs.

---

## 3. What This Release IS

v0.1 is a **point-in-time snapshot** of:

- The 7 production HTML pages in `02-product/vson-advisory/build/` as of 2026-04-07
- The build CSS, JS, sitemap, and Netlify configuration
- The Round 1 design specs (v1 and v2 mockups, DESIGN-SPEC, CONTENT-REVIEW-REPLACEMENTS)
- The delivery state (PROJECT.md, RAID.md, Sprint 01 and Sprint 02 records)
- The build artefacts (BUILD_SUMMARY, DEFECTS register with 5 closed defects,
  the existing empty RELEASE-LOG placeholder, SERVICES.md)

See `MANIFEST.md` for the complete file inventory.

---

## 4. What This Release IS NOT

v0.1 deliberately excludes and does not claim:

- **No production deployment.** v0.1 is internal only. Nothing is live.
- **No SFA compliance fixes.** The 12 items in `COMPLIANCE-AUDIT-2026-04-07.md`
  are known issues carried forward to v0.2 (see `KNOWN-ISSUES.md`). The
  compliance audit file itself is referenced but is not a v0.1 input.
- **No claim that F1–F10 build-time fixes are complete.** Verification on
  2026-04-07 found 4 done, 2 not done (F1, F10), 3 unverified (F4, F5, F7),
  1 partial (F8). All are carried forward.
- **No Vault articles.** The Vault page ships as "Coming Soon" per resolved
  blocker B3. Real articles are deferred to Phase 2.
- **No Emily bio sign-off.** Her bio is drafted and in the build, but remains
  flagged for her personal review before go-live (residual from resolved B4).
- **No Duy Le presence.** He does not appear in any build file. Deferred to
  a later release (originally tracked as F10).
- **No CSS reconciliation.** The drift between `specs/css/styles.css` (17 KB)
  and `build/css/styles.css` (18 KB) is recorded as a known issue, not
  resolved.

---

## 5. Release Tier Classification

**Tier: Minor** per `RELEASE-AUTHORITY.md` §4.1.

All Minor criteria are met:

- [x] No change to production domain, hostname, or canonical URLs (no deploy)
- [x] No change to legal/compliance posture (audit findings are carried forward, not applied)
- [x] No change to brand-impacting hero/positioning copy or partner names/titles (Round 1 already locked in design-concept-v2)
- [x] No change to externally-visible commitments (no external comms)
- [x] No new public-facing pages added or removed
- [x] No change to data collection
- [x] Stays inside the v0.x line (this is the first v0 lock)

**Tier Review trigger (§4.3 "5-change rule"):** Not invoked. v0.1 is a
baseline snapshot, not an editing cycle. Zero new edits are being
introduced by the v0.1 lock itself.

**Approval authority:** Release Owner (Fred Dang) alone, per §4.1.

---

## 6. Relationship to Future Releases

| Version | Purpose | Tier | Approval |
|---|---|---|---|
| **v0.1** (this) | Build-ready baseline snapshot | Minor | Fred alone |
| v0.2 | Round 2 SFA compliance fixes (12 items from audit) | **Major** (compliance posture change) | Sponsor Consensus or Fast-Path |
| v0.3 | F1–F10 build-time fix completion | Minor (if no compliance implications) | Fred alone |
| v0.9 | Release-candidate on staging | — | Fred + Tech Release Gate (Thinh) |
| v1.0 | First production release | Major | Sponsor Consensus |

This sequence is a working plan, not a commitment. Versions can be merged,
reordered, or renumbered as delivery progresses, subject to
`RELEASE-AUTHORITY.md` rules.

---

## 7. Lock Criteria

v0.1 is considered LOCKED when all four files exist in this folder:

- [x] `SCOPE.md` (this file)
- [ ] `MANIFEST.md`
- [ ] `KNOWN-ISSUES.md`
- [ ] `SIGN-OFF.md` (signed by Release Owner)

Once locked, the files in this folder become read-only historical record.
The files they reference (under `02-product/` and `01-delivery/`) remain
editable — but any edit after 2026-04-07 belongs to a later version, not
to v0.1.
