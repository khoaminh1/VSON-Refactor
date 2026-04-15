# Sprint 01 — Combined Build Sprint

**Duration:** 2026-04-08 (Wed) to 2026-04-15 (Wed) — 6 working days
**Sprint Goal:** Launch both sites on a rolling basis. Advisory MVP live by Apr 10. Corporate MVP live by Apr 13. Full sites by Apr 15.
**Capacity:** Fred + Claude agent (single workstream). Thinh on standby for infra/technical issues.
**Method:** Kanban with WIP limits (max 3 In Progress, max 2 in Review)

---

## Rolling Launch Strategy

| Wave | Dates | Advisory | Corporate | Milestone |
|------|-------|----------|-----------|-----------|
| 1 | Apr 8-10 | Nav + Footer + Home + Contact | Nav + Footer + Home + Contact | Both sites have a live front door |
| 2 | Apr 11-13 | Approach + Brain Trust + Vault | About + Activation Solutions + Market Development | Core service pages live |
| 3 | Apr 14-15 | Polish + Lighthouse audit + fixes sweep | Store + Case Studies (index + 5 details) | Full sites complete |

---

## Critical Path

```
Apr 7 (Tue):  Content deadline — headshots, contact data (B2), case study selection
              ↓
Apr 8 (Wed):  BUILD STARTS — Advisory shared components + Home
              ↓
Apr 9 (Thu):  Advisory Contact + Corporate shared components + Home
              ↓
Apr 10 (Fri): Corporate Contact → WAVE 1 COMPLETE (both MVPs live)
              ↓
Apr 11 (Mon): Advisory Approach + Brain Trust
              ↓
Apr 12 (Tue): Advisory Vault + Corporate About + Activation Solutions
              ↓
Apr 13 (Wed): Corporate Market Development → WAVE 2 COMPLETE
              ↓
Apr 14 (Thu): Corporate Store + Case Studies (templated batch)
              ↓
Apr 15 (Fri): Advisory polish + audit + Corporate case studies → WAVE 3 COMPLETE
```

**Float:** Advisory has buffer (May 1 launch target vs Apr 15 completion). Corporate has zero float (Apr 15 go-live).
**Implication:** If anything slips, deprioritise Advisory polish in Wave 3 to protect Corporate go-live.

---

## Sprint Backlog

### Wave 1: Front Door (Apr 8-10)

| # | Task | Project | Size | DoR | Dependencies | Status |
|---|------|---------|------|-----|-------------|--------|
| 01 | Build shared nav component (responsive, sticky) | ADV | M | [ ] | Design spec, SHARED-STANDARDS | Backlog |
| 02 | Build shared footer component | ADV | S | [ ] | Design spec | Backlog |
| 03 | Build Home page (hero, value chain, pathways, why, capabilities, leadership preview, vault preview, CTA) | ADV | L | [ ] | #01, #02, design-concept-v2 | Backlog |
| 04 | Build Contact page + Netlify form integration | ADV | M | [ ] | #01, #02, B2 contact data (due Apr 7) | Backlog |
| 05 | Apply fixes F1-F4 during page builds (ghost nav, CTA copy, phase arrows, vault tags) | ADV | S | [ ] | Bundled into #03, #04 | Backlog |
| 06 | Build shared nav component (responsive, sticky) | CORP | M | [ ] | wireframes/shared.css, SHARED-STANDARDS | Backlog |
| 07 | Build shared footer component | CORP | S | [ ] | wireframes/shared.css | Backlog |
| 08 | Build Home page (hero, services overview, case study preview, CTA) | CORP | L | [ ] | #06, #07, hero image (in progress) | Backlog |
| 09 | Build Contact page + Netlify form integration | CORP | M | [ ] | #06, #07 | Backlog |
| 10 | Deploy both sites to Netlify staging, verify preview URLs | INFRA | S | [ ] | Netlify setup (D3 resolved) | Backlog |

### Wave 2: Core Pages (Apr 11-13)

| # | Task | Project | Size | DoR | Dependencies | Status |
|---|------|---------|------|-----|-------------|--------|
| 11 | Build Approach page (4-layer stack, engagement steps, CTA band) | ADV | M | [ ] | #01, #02 | Backlog |
| 12 | Build Brain Trust page (team profiles, credibility bar) | ADV | M | [ ] | #01, #02, B4 bio proof points | Backlog |
| 13 | Build Vault page (article list, pillar tags, "Coming Soon" if no articles) | ADV | M | [ ] | #01, #02, B3 vault articles decision | Backlog |
| 14 | Apply fixes F5-F10 during page builds | ADV | S | [ ] | Bundled into #11-#13 | Backlog |
| 15 | Build About page (company story, 4 leader bios + headshots) | CORP | M | [ ] | #06, #07, headshots (due Apr 7) | Backlog |
| 16 | Build Activation Solutions page (3-layer capability structure) | CORP | M | [ ] | #06, #07 | Backlog |
| 17 | Build Market Development page (MRA framework) | CORP | M | [ ] | #06, #07 | Backlog |

### Wave 3: Complete (Apr 14-15)

| # | Task | Project | Size | DoR | Dependencies | Status |
|---|------|---------|------|-----|-------------|--------|
| 18 | Build Store page (4 brand blocks, link to store.vson.vn) | CORP | M | [ ] | #06, #07, logos (available), brand photos | Backlog |
| 19 | Build Case Studies index + 5 detail pages (templated batch) | CORP | L | [ ] | #06, #07, case study selection (3 of 5) | Backlog |
| 20 | Advisory full-site Lighthouse audit (Performance >= 90, Accessibility >= 95) | ADV | M | [ ] | All ADV pages complete | Backlog |
| 21 | Corporate full-site Lighthouse audit | CORP | M | [ ] | All CORP pages complete | Backlog |
| 22 | Cross-browser check (Chrome, Safari, Firefox, mobile) | BOTH | M | [ ] | #20, #21 | Backlog |
| 23 | Security headers verified on staging (CSP, X-Frame-Options) | BOTH | S | [ ] | netlify.toml deployed | Backlog |

---

## Pre-Sprint Dependencies (must land by Apr 7)

| Item | Owner | Status | Impact if late |
|------|-------|--------|---------------|
| B2: Contact data (Advisory) | Fred | Due Apr 7 | Contact page delayed; can use placeholder and patch |
| B4: Bio proof points (Advisory) | Fred + partners | Pending | Brain Trust page uses draft bios |
| B3: Vault articles or "Coming Soon" decision | Emily | Pending | Vault page defaults to "Coming Soon" |
| Headshots x 4 (Corporate) | Fred | Collecting, due Apr 7 | About page uses silhouette placeholders |
| Case study selection (3 of 5) | Fred | Can decide now | Case study pages build all 5, feature 3 |
| Hero image (Corporate) | Team | In progress | Home page uses gradient/pattern fallback |
| Logos (Corporate) | Fred | Available | Upload to `02-product/vson-corporate/_content/_incoming/` |

**Fallback rule:** If a content dependency misses Apr 7, we build with a placeholder and patch post-launch. No content blocker stops the build.

---

## Sprint Planning Notes

- **Carried over:** Nothing (first sprint)
- **Dependencies to watch:** Content items above. If headshots arrive late, Corporate About page ships with placeholder silhouettes.
- **Risks this sprint:** Tight timeline for Corporate (zero float). Advisory has buffer to May 1.
- **TOC bottleneck:** Fred + Claude = single workstream. Cannot parallel-build. Sequence matters.

---

## Mid-Sprint Check (Apr 11, end of Wave 1)

- [ ] Wave 1 pages live on staging for both sites?
- [ ] Netlify preview URLs working?
- [ ] Any content still missing? Escalate or fallback?
- [ ] WIP limits respected?
- [ ] New impediments? Add to RAID.md

---

## Sprint Review (Apr 15)

**Date:** 2026-04-15
**Attendees:** Fred, Duy, Thinh

### Completed
| # | Task | DoD Met? | Notes |
|---|------|----------|-------|
| | | [ ] | |

### Not Completed (carry to Sprint 2)
| # | Task | Reason | Action |
|---|------|--------|--------|
| | | | |

### Demo
- [ ] Advisory staging URL shared with Henry & Emily?
- [ ] Corporate staging URL shared with sponsors?
- [ ] Lighthouse scores logged in `quality-results/`?

---

## Sprint Retrospective

**What went well:**
-

**What didn't go well:**
-

**Action items for next sprint:**
| Action | Owner | Due |
|--------|-------|-----|
| | | |

> After completion, summarise key lessons in `03-knowledge/retrospectives/`
