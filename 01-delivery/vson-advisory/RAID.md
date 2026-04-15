# RAID Log — VSON Advisory Website

**Project:** vsonadvisory.com
**Track:** B — Service Delivery
**Last Reviewed:** 2026-04-09
**Next Review:** 2026-04-14 (v0.2 sign-off target)

---

## RISKS

| # | Risk | Likelihood | Impact | Mitigation | Owner |
|---|------|-----------|--------|------------|-------|
| R1 | Partner feedback delays build start | M | M | Deadline set 2026-04-05, proceed with available feedback | Fred |
| R2 | ~~Hosting not decided before build~~ | — | — | ✅ Resolved — Netlify selected (ADR-001, 2026-04-02) | Thinh |
| R3 | SFA compliance language regression | H | H | Automated test (77 checks) created at `tests/sfa-compliance.test.js`. Wire into CI/CD build command. | Fred |
| R4 | Git repo corruption recurrence | L | H | Repo re-initialized 2026-04-09. SSH key auth configured. Monitor for segfaults. | Fred |

## ASSUMPTIONS

| # | Assumption | Impact if Wrong | How to Verify | Status |
|---|-----------|----------------|---------------|--------|
| A1 | ~~Design concept v2 is the approved direction~~ | — | ✅ Confirmed by Henry & Emily (2026-04-03) | Resolved |

## ISSUES

| # | Issue | Impact | Action | Owner | Target | Status |
|---|-------|--------|--------|-------|--------|--------|
| I1 | v0.2 footer layout needs visual sign-off | M | Fred to verify footer in browser (dark bg prevented Chrome screenshot verification) | Fred | 2026-04-10 | Open |
| I2 | v0.2 release governance path undecided | M | Classify as Sponsor Consensus or Compliance Fast-Path per RELEASE-AUTHORITY.md §4.4 | Fred | 2026-04-14 | Open |

## DEPENDENCIES

| # | Dependency | Who Provides | Needed By | Status |
|---|-----------|-------------|-----------|--------|
| D1 | ~~Hosting environment decision~~ | Thinh | 2026-04-05 | ✅ Resolved — Netlify (ADR-001) |
| D2 | ~~Shared design tokens finalised~~ | Duy + Thinh | — | ✅ Resolved 2026-04-03 — both projects have tokens in own CSS; SHARED-STANDARDS.md covers conventions per ADR-003 |
| D3 | ~~Netlify account + domain configuration~~ | Thinh | 2026-04-05 | ✅ Resolved — setup complete (2026-04-03) |
| D4 | Headshots, hero imagery, brand photos | Emily / Henry | Before launch | Open — needed for production |
| D5 | Emily bio sign-off | Emily | Before launch | Open |
| D6 | Privacy Policy + Terms of Service pages | Fred (legal) | Before launch | Open |
| D7 | Social media links (LinkedIn) | Fred | Before launch | Open |
