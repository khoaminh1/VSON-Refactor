# VSON Advisory — Release v0.1 Manifest

**Version:** v0.1
**Lock date:** 2026-04-07
**Release Owner:** Fred Dang
**Total files in scope:** 25
**Governed by:** `00-programme/RELEASE-AUTHORITY.md`

> This manifest photographs the state of VSON Advisory files on 2026-04-07.
> Every file listed here is part of the v0.1 snapshot. Files under
> `02-product/` and `01-delivery/` remain editable after this lock — but
> edits made after 2026-04-07 belong to a later release, not to v0.1.
>
> For scope boundaries (what is and isn't included), see `SCOPE.md`.
> For known issues carried forward, see `KNOWN-ISSUES.md`.

---

## Tier A — Production Build Artefacts (11 files)

The actual website surface: HTML pages, shared CSS/JS, sitemap, hosting
configuration. This is what a user would see if the site were deployed
today.

| # | File (relative to repo root) | Size | Last modified | Purpose |
|---|---|---:|---|---|
| A1 | `02-product/vson-advisory/build/index.html` | 28 KB | 2026-04-05 | Home page — hero, value chain, capabilities preview, audience pathways, team preview |
| A2 | `02-product/vson-advisory/build/approach.html` | 14 KB | 2026-04-05 | Our Approach — engagement steps, methodology |
| A3 | `02-product/vson-advisory/build/brain-trust.html` | 14 KB | 2026-04-05 | Leadership page (filename still pre-rename; see KNOWN-ISSUES) |
| A4 | `02-product/vson-advisory/build/capabilities.html` | 11 KB | 2026-04-05 | Six capability pillars (Pillar 6 still has v1 wording — known issue) |
| A5 | `02-product/vson-advisory/build/contact.html` | 14 KB | 2026-04-05 | Contact form, inquiry type radios (F9 applied) |
| A6 | `02-product/vson-advisory/build/vault.html` | 12 KB | 2026-04-05 | "Coming Soon" teaser per resolved B3; real articles deferred to Phase 2 |
| A7 | `02-product/vson-advisory/build/thank-you.html` | 6.6 KB | 2026-04-05 | Form submission landing page |
| A8 | `02-product/vson-advisory/build/css/styles.css` | 18 KB | 2026-04-01 | Shared design system: tokens, components, utilities |
| A9 | `02-product/vson-advisory/build/js/main.js` | 4.2 KB | 2026-04-01 | Shared interactions library (fade, nav) |
| A10 | `02-product/vson-advisory/build/sitemap.xml` | 1.1 KB | 2026-04-02 | XML sitemap for search engines |
| A11 | `02-product/vson-advisory/build/netlify.toml` | 24 B | 2026-04-01 | Netlify hosting configuration |

**Tier A total: ~138 KB**

---

## Tier B — Design and Content Specifications (6 files)

Source-of-truth for what got built: the design mockups (v1 original and v2
with Round 1 fixes applied), the design spec document, the Round 1 content
replacement report, and the spec-level CSS/JS. Locking these with v0.1
means the *intent* behind the build is also frozen, not just the artefact.

| # | File | Size | Last modified | Purpose |
|---|---|---:|---|---|
| B1 | `02-product/vson-advisory/specs/design-concept.html` | 66 KB | 2026-04-02 | v1 original mockup (pre-Round-1 content fixes) |
| B2 | `02-product/vson-advisory/specs/design-concept-v2.html` | 66 KB | 2026-04-02 | v2 mockup with all 13 Round 1 content fixes applied |
| B3 | `02-product/vson-advisory/specs/DESIGN-SPEC.md` | 17 KB | 2026-04-02 | Design system tokens, component inventory, usage rules |
| B4 | `02-product/vson-advisory/specs/CONTENT-REVIEW-REPLACEMENTS.md` | 14 KB | 2026-04-02 | Round 1 content fixes — document ID VSA-RPT-20260401-001, status CONFIRMED |
| B5 | `02-product/vson-advisory/specs/css/styles.css` | 17 KB | 2026-04-02 | Spec-level CSS (drift from build/css/styles.css — see KNOWN-ISSUES) |
| B6 | `02-product/vson-advisory/specs/js/main.js` | 4.2 KB | 2026-04-02 | Spec-level JS (matches build) |

**Tier B total: ~184 KB**

---

## Tier C — Delivery and Governance Artefacts (4 files in scope)

Project state and governance files as of 2026-04-07. The PROJECT.md is
the freshly-updated version carrying the new Release Authority block
added earlier today.

| # | File | Size | Last modified | Purpose |
|---|---|---:|---|---|
| C1 | `01-delivery/vson-advisory/PROJECT.md` | 7.1 KB | 2026-04-07 | Project snapshot: phase status, blockers, fixes, content review log, release authority block |
| C2 | `01-delivery/vson-advisory/RAID.md` | 1.5 KB | 2026-03-30 | Risks, assumptions, issues, dependencies register |
| C3 | `01-delivery/vson-advisory/sprints/SPRINT-01.md` | 4.5 KB | 2026-04-03 | Sprint 1 record (historical) |
| C4 | `01-delivery/vson-advisory/sprints/SPRINT-02.md` | 4.0 KB | 2026-04-03 | Sprint 2 record (historical) |

**Tier C total: ~17 KB**

**Excluded from v0.1 (Tier C):**

| File | Reason for exclusion |
|---|---|
| `01-delivery/vson-advisory/COMPLIANCE-AUDIT-2026-04-07.md` (7.6 KB) | Defines v0.2 scope, not v0.1. Referenced from `KNOWN-ISSUES.md` but not a v0.1 input. |

---

## Tier D — Build and Release Artefacts (4 files)

Existing build records and release-adjacent documents. The existing
`RELEASE-LOG.md` is an empty placeholder that will receive its first
entry when v0.1 locks.

| # | File | Size | Last modified | Purpose |
|---|---|---:|---|---|
| D1 | `02-product/vson-advisory/artifacts/BUILD_SUMMARY.md` | 9.4 KB | 2026-03-30 | Build state summary at initial build |
| D2 | `02-product/vson-advisory/artifacts/DEFECTS.md` | 1.7 KB | 2026-04-04 | Defect register: 0 open, 5 closed (D001–D005, all em-dash cleanup in Sprint 1) |
| D3 | `02-product/vson-advisory/artifacts/RELEASE-LOG.md` | 139 B | 2026-04-01 | Rolling changelog (empty placeholder until v0.1 lock) |
| D4 | `02-product/vson-advisory/integration/SERVICES.md` | 469 B | 2026-04-02 | Integration services specification |

**Tier D total: ~12 KB**

---

## Summary

| Tier | Description | Files | Size |
|---|---|---:|---:|
| A | Production build | 11 | ~138 KB |
| B | Specs | 6 | ~184 KB |
| C | Delivery and governance | 4 | ~17 KB |
| D | Build/release artefacts | 4 | ~12 KB |
| **Total** | | **25** | **~351 KB** |

**Excluded:** 1 file (`COMPLIANCE-AUDIT-2026-04-07.md`) — defines v0.2 scope.

---

## Drift and Verification Notes

Flagged during the 2026-04-07 inventory pass:

1. **CSS drift** — `specs/css/styles.css` (17 KB) and `build/css/styles.css`
   (18 KB) have diverged. Both are captured in v0.1 as-is. Reconciliation
   is a known issue.
2. **Filename drift** — `brain-trust.html` is still named per the old
   "Brain Trust" label even though Round 1 renamed the external-facing
   section to "Leadership". The in-page content uses "Leadership" but
   the URL does not. Deferred.
3. **F1–F10 verification** — 4 done (F2, F3, F6, F9), 2 not done
   (F1, F10), 3 unverified (F4, F5, F7), 1 partial (F8). Full detail in
   `KNOWN-ISSUES.md`.
4. **Dates shown** are last-modified dates at time of manifest creation
   (2026-04-07). No SHA-256 hashes are recorded in this release tier
   (v0.1 is Minor). Hash integrity will be introduced at v0.9
   (release-candidate) when tamper-detection becomes relevant.

---

*End of manifest. This file becomes read-only once `SIGN-OFF.md` is signed.*
