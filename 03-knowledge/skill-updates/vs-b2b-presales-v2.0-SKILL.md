---
name: vs-b2b-presales
description: >
  VSON internal skill for qualifying B2B opportunities using MEDDIC-lite, matching them to
  Service Cards from VS-B2B-Service-Design, and generating proposals and quotations. Covers
  two solution tracks: Activation Solutions (for brands) and Market Development (for Singapore
  corporates via MRA grant). Full presales lifecycle from inbound enquiry to proposal submission.
  Trigger on: presales, pre-sales, qualification, qualify this deal, MEDDIC, proposal, quotation,
  quote, costing, pricing, client pitch, RFQ, RFP, new opportunity, deal assessment, go/no-go,
  should we bid, write a proposal, prepare a quote, MRA, Singapore, market entry. Also trigger on:
  "a client asked about", "Dell wants", "HP needs", "new lead from", "someone enquired about",
  "prepare a proposal for", "how much should we charge", "can we do this project",
  "Singapore company wants to enter Vietnam", "MRA eligible". Always load for any B2B opportunity
  assessment or proposal work. Takes Service Cards from VS-B2B-Service-Design as input
  and produces proposals that feed into VS-B2B-Contracting. VSON internal standard (VS- prefix).
---

# VS-B2B-Presales v2.0

> **Changelog:** v1.0 → v2.0 (2026-04-01). Major update: replaced OT-1/OT-2/OT-3/OT-4
> references with 2 solution tracks (Activation Solutions + Market Development). Added
> MRA grant qualification logic, Singapore corporate buyer profile, activation agency
> referral channel, case study mapping for proposals. Source of truth: VSON Corporate
> website content (vson.vn wireframes, approved by Fred 2026-03-31).

## Purpose

This skill ensures every B2B opportunity gets a consistent, rigorous qualification before
VSON Solutions invests time in proposal writing. At a co-founder-led team, the #1 enemy
is wasted effort on unqualified deals. MEDDIC-lite gives you a fast go/no-go gate, then
the proposal process is templated to cut production time from days to hours.

**Core problem solved:** The founders spend too much time on proposals that don't convert
because deals weren't properly qualified upfront. This skill enforces qualification first,
then streamlines the proposal itself.

**Brand context:** All presales activities operate under the **VSON Solutions** brand.
See vs-core v2.0 for brand architecture and vs-b2b-service-design v2.0 for the service
catalogue.

---

## Theoretical Foundation

### MEDDIC-lite (Adapted for Founder-Led Selling)

**Origin:** MEDDIC was developed at PTC in the 1990s for enterprise software sales. The
full framework covers Metrics, Economic Buyer, Decision Criteria, Decision Process,
Identify Pain, Champion.

**VSON Adaptation:** We keep all six elements but compress the depth. Each element is
assessed with 1-3 questions that the founders can answer after a single client conversation.
Scoring is binary: 0 (unknown) or 1 (known). Score ≥ 4/6 to proceed; < 4 means park or
decline.

**Why MEDDIC over BANT:** VSON Solutions' deals — particularly Activation Solutions
campaigns and Market Development engagements — involve multiple stakeholders and
evaluation criteria. MEDDIC captures the political dimension (Champion, Economic Buyer)
that BANT misses.

---

## The 3-Gate Pipeline

Every B2B opportunity passes through three gates. Sequential — no skipping.

```
INBOUND OPPORTUNITY
        ↓
  ┌── Quick Route Check ──────────────────────────────────┐
  │  Is this Activation Solutions or Market Development?   │
  │  → Activation: proceed to Gate 1 (standard)            │
  │  → Market Dev: proceed to Gate 1 + MRA Qualifier       │
  │  → Unsure: assess during Gate 1                        │
  └────────────────────────────────────────────────────────┘
        ↓
┌─ GATE 1: MEDDIC-lite Qualification ─────────────────────┐
│  Score each element 0 or 1. Total ≥ 4 → proceed.        │
│  Total < 4 → park (set follow-up) or decline (explain).  │
│  + MRA Quick Check (for Market Development leads)         │
└──────────────────────────────────────────────────────────┘
        ↓ Go
┌─ GATE 2: Solution Fit ──────────────────────────────────┐
│  Match opportunity to Service Card(s) from catalogue.    │
│  Confirm scope, adjust pricing, identify customisation.  │
│  If no Service Card fits → flag for Service Design.      │
└──────────────────────────────────────────────────────────┘
        ↓ Fit confirmed
┌─ GATE 3: Proposal / Quotation Output ──────────────────┐
│  Generate proposal + quotation per track template.       │
│  Attach relevant case studies as proof points.           │
│  Review checklist before submission.                     │
└──────────────────────────────────────────────────────────┘
        ↓
   → VS-B2B-Contracting (if client accepts)
```

---

## Buyer Profiles

### Profile 1 — Brand / Corporate (Activation Solutions)

| Attribute | Detail |
|-----------|--------|
| Who they are | International brands, MNCs, corporates needing Vietnam brand presence |
| Typical roles | Marketing Manager, Procurement, Country GM, Brand Manager |
| What they want | Merchandise, activations, campaign intelligence, marketing automation |
| Entry point | Usually Layer 1 (physical activation / merchandise) |
| Upsell path | L1 → L2 (add data) → L3 (add automation) |
| Deal size | Small: $5K-$20K (single L1 order). Medium: $20K-$100K (L1+L2). Large: $100K+ (full stack) |
| Examples | Dell, HP, Lenovo, ASUS, retail chains, FMCG brands |

### Profile 2 — Singapore Corporate (Market Development)

| Attribute | Detail |
|-----------|--------|
| Who they are | Singapore SMEs wanting to enter or expand in Vietnam |
| Typical roles | CEO/Founder, BD Director, Regional Expansion Manager |
| What they want | Partner search, entity setup, market entry promotion in Vietnam |
| Grant enabler | Enterprise Singapore MRA Grant (up to S$100K, 70% funded) |
| Entry point | Usually Pillar 1 (Overseas Business Development) or full MRA package |
| Deal size | S$30K-$100K (structured around MRA grant caps) |
| Key qualifier | Must be Singapore-registered, <S$100M group revenue, ≥30% local shareholding |

### Profile 3 — Downstream Activation Agency (Referral)

| Attribute | Detail |
|-----------|--------|
| Who they are | Agencies that need Vietnam execution capability they don't have |
| Typical roles | Account Director, Project Manager |
| What they want | VSON as Vietnam execution partner for their client campaigns |
| Entry point | Project-based, usually L1 (merchandise/activation) |
| Deal structure | White-label or co-branded, agency manages client relationship |

---

## Gate 1 — MEDDIC-lite Qualification

### The Scorecard

Fill in during or immediately after the first client conversation.

```
╔══════════════════════════════════════════════════════════════╗
║              VSON DEAL QUALIFICATION SCORECARD                ║
║              [Deal ID: VS-DQ-YYYYMMDD-XXX]                   ║
╠══════════════════════════════════════════════════════════════╣
║  TRACK:  [ ] Activation Solutions  [ ] Market Development    ║
║                                                              ║
║  M — METRICS                                          [0/1]  ║
║  Can the client quantify what success looks like?            ║
║  Key question: "What would a successful outcome look         ║
║  like in numbers — units, revenue, timeline, KPI?"           ║
║  Notes: ________________________________________________     ║
║                                                              ║
║  E — ECONOMIC BUYER                                   [0/1]  ║
║  Do you know who controls the budget and final approval?     ║
║  Key question: "Who signs off on this purchase /             ║
║  engagement? Is there a procurement process?"                ║
║  Notes: ________________________________________________     ║
║                                                              ║
║  D — DECISION CRITERIA                                [0/1]  ║
║  Do you know what the client will evaluate you against?      ║
║  Key question: "What are the top 3 things you're looking     ║
║  for in a partner for this project?"                         ║
║  Notes: ________________________________________________     ║
║                                                              ║
║  D — DECISION PROCESS                                 [0/1]  ║
║  Do you know the steps and timeline to a decision?           ║
║  Key question: "What's your timeline? Are you evaluating     ║
║  other vendors? What happens after you receive our proposal?"║
║  Notes: ________________________________________________     ║
║                                                              ║
║  I — IDENTIFY PAIN                                    [0/1]  ║
║  Is there a clear, urgent pain driving this enquiry?         ║
║  Key question: "What's happening now that made you           ║
║  reach out? What's the cost of doing nothing?"               ║
║  Notes: ________________________________________________     ║
║                                                              ║
║  C — CHAMPION                                         [0/1]  ║
║  Do you have an internal advocate who wants VSON to win?     ║
║  Key question: (Observe) — Is the contact actively helping   ║
║  you navigate their organisation?                            ║
║  Notes: ________________________________________________     ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║  TOTAL SCORE:  ___  / 6                                      ║
║                                                              ║
║  ≥ 4  → PROCEED to Gate 2                                    ║
║  2-3  → PARK: Set 2-week follow-up to fill gaps              ║
║  0-1  → DECLINE: Politely explain timing/fit                 ║
║                                                              ║
║  DECISION:  [ ] Proceed  [ ] Park  [ ] Decline               ║
║  DATE: ___________  ASSESSED BY: _______________             ║
╚══════════════════════════════════════════════════════════════╝
```

### MRA Quick Check (Market Development leads only)

When the lead is a Singapore company interested in Vietnam market entry, add this
supplementary check alongside MEDDIC:

```
╔══════════════════════════════════════════════════════════════╗
║              MRA GRANT ELIGIBILITY — QUICK CHECK             ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  1. Singapore-registered business?           [ ] Yes [ ] No  ║
║  2. ≥ 30% local (Singapore) shareholding?    [ ] Yes [ ] No  ║
║  3. Group annual revenue < S$100M?           [ ] Yes [ ] No  ║
║  4. Vietnam is a NEW market for them?        [ ] Yes [ ] No  ║
║  5. Have they applied for MRA before (Vietnam)? [ ] Y [ ] N  ║
║                                                              ║
║  ELIGIBLE: Questions 1-3 all YES + Q4 YES → likely eligible  ║
║  NOT SURE: Refer to Singapore consultant network for advice  ║
║  NOT ELIGIBLE: Proceed without MRA framing (self-funded)     ║
║                                                              ║
║  MRA SCOPE ESTIMATE:                                         ║
║  Pillar 1 (BD):        S$ _______ (cap S$50,000)            ║
║  Pillar 2 (Set-up):    S$ _______ (cap S$30,000)            ║
║  Pillar 3 (Promotion): S$ _______ (cap S$20,000)            ║
║  TOTAL:                S$ _______ (cap S$100,000)            ║
║  Client pays 30%:      S$ _______                            ║
║  MRA covers 70%:       S$ _______                            ║
║                                                              ║
║  Notes: ________________________________________________     ║
╚══════════════════════════════════════════════════════════════╝
```

**Important:** VSON does not guarantee MRA approval. The grant application is the
client's responsibility (or their Singapore consultant's). VSON positions as the
Vietnam-side delivery partner and can advise on structuring the engagement to align
with MRA pillars, but does not submit or manage the MRA application.

### Track-Specific Qualification Nuances

| Element | Activation Solutions (Brands) | Market Development (SG Corporates) |
|---------|-------------------------------|-------------------------------------|
| M — Metrics | Units, campaign reach, ROI, brand awareness | Market entry timeline, revenue target, # of partners |
| E — Econ. Buyer | Procurement / Marketing Manager / Country GM | CEO/Founder or Regional Expansion lead |
| D — Criteria | Price, quality, speed, Vietnam market knowledge | On-ground presence, MRA alignment, trust, track record |
| D — Process | Quote → PO (simple) or RFP → shortlist (complex) | Often founder-to-founder; faster but relationship-dependent |
| I — Pain | Event deadline, previous vendor failed, no local capability | No Vietnam presence, regulatory uncertainty, wasted BD trips |
| C — Champion | Marketing manager or BD lead at the brand | The founder/CEO themselves (in SMEs, they ARE the champion) |

**Activation Solutions deals (Layer 1 / merchandise)** often score 5-6 quickly — they're
transactional. Move fast on these.

**Market Development deals** often start at 3-4 — the client may not have defined metrics
for Vietnam entry, and the decision process may be exploratory. This is normal. The MRA
grant structure helps accelerate — it gives the deal a framework and timeline.

---

## Gate 2 — Solution Fit

Once a deal scores ≥ 4, match it to the VSON Solutions Service Catalogue.

### Process

1. **Select Service Card(s):** Which VS-SC card(s) match the client's need?
   - Single card → use as-is
   - Multiple cards → bundled offering (e.g., VS-SC-AB-01 for full Phygital stack)
   - No card fits → flag for VS-B2B-Service-Design

2. **Scope Confirmation:** Walk through the Service Card with the client's specific needs.

3. **Pricing Adjustment:** Start from Service Card pricing and adjust for:
   - Volume (tier structure)
   - Customisation complexity (+% premium)
   - Client strategic value (anchor account? willing to accept lower margin?)
   - Timeline pressure (rush premium: +10-20%)
   - MRA structure (for Market Dev: align pricing to pillar caps)

4. **Case Study Selection:** Identify the most relevant case studies from CS-01 to CS-05
   to include in the proposal as proof points.

### Case Study Mapping

| Case Study | Track | Best Use |
|-----------|-------|----------|
| CS-01: Electronics Retail | Activation Solutions (L1+L2) | Large brand activation campaigns |
| CS-02: Education | Activation Solutions (L1) | Targeted activation / campus |
| CS-03: Fashion Retail | Activation Solutions (L1+L2+L3) | Full-stack Phygital engagement |
| CS-04: OEM Merchandise | Activation Solutions (L1) | High-volume branded goods |
| CS-05: ICT Distribution | Market Development (P1+P2+P3) | Singapore company entering Vietnam |

### Fit Checklist

| Check | Question | Pass |
|-------|----------|------|
| Scope clarity | One sentence describing what the client gets? | Yes |
| Delivery confidence | Can VSON deliver with current team + partners? | Yes |
| Margin viability | Adjusted price meets 20% minimum margin? | Yes |
| Timeline feasibility | Can VSON meet the deadline? | Yes |
| MRA alignment | (Market Dev) Pricing fits within MRA pillar caps? | Yes |
| Case study available | At least one relevant case study for the proposal? | Yes |

---

## Gate 3 — Proposal / Quotation Output

### Output Types by Track

| Track | Primary Output | Supporting Documents |
|-------|----------------|---------------------|
| Activation L1 (Merchandise) | Quotation Sheet | Product specs, sample photos |
| Activation L1+L2 or L1+L2+L3 | Full Proposal | Solution approach, case studies |
| Activation L2 or L3 only | Proposal + Platform Overview | Dashboard mockups, workflow diagrams |
| Market Development (any pillar) | MRA-Aligned Proposal | MRA pillar mapping, Vietnam market brief |
| Market Development (full package) | Full Proposal + MRA Grant Brief | Pillar-by-pillar costing, timeline, case study |

### Proposal Structure — Activation Solutions

**For Layer 1 only (Merchandise) — Quotation Format:**
```
1. Cover page (VSON Solutions branding, client name, date)
2. Quotation summary table (item, qty, unit price, total, lead time)
3. Product specifications
4. Terms & conditions (payment, delivery, warranty)
5. Validity period (standard: 30 days)
```

**For Multi-Layer (L1+L2+L3) — Full Proposal Format:**
```
1. Cover page
2. Executive summary (1 page max)
3. Understanding of your situation (paraphrase client's pain)
4. The VSON Phygital Approach (3-layer model, relevant layers highlighted)
5. Proposed scope per layer (inclusions + exclusions)
6. Team & credentials
7. Relevant case studies (CS-01 to CS-04)
8. Investment summary (phased pricing per layer)
9. Terms & conditions
10. Next steps (clear CTA with date)
```

### Proposal Structure — Market Development

**MRA-Aligned Proposal Format:**
```
1. Cover page
2. Executive summary — your Vietnam opportunity
3. VSON's approach to market entry (Explore → Design → Deliver → Grow)
4. Service scope mapped to MRA pillars:
   - Pillar 1: Overseas Business Development — scope + deliverables + cost
   - Pillar 2: Overseas Market Set-up — scope + deliverables + cost
   - Pillar 3: Overseas Market Promotion — scope + deliverables + cost
5. Investment summary with MRA grant structure:
   - Total engagement: S$ ___
   - MRA covers (70%): S$ ___
   - Client contribution (30%): S$ ___
6. VSON credentials: 20 years in Vietnam, on-the-ground operations
7. Relevant case study (CS-05: ICT Distribution)
8. Team & Vietnam network
9. Why VSON (5 reasons — from website)
10. Terms & conditions
11. Next steps + MRA application timeline note
```

### Pre-Submission Checklist

| # | Check | Done? |
|---|-------|-------|
| 1 | Client name and details correct throughout | [ ] |
| 2 | Pricing reviewed and margin confirmed ≥ 20% | [ ] |
| 3 | MRA pillar alignment confirmed (Market Dev only) | [ ] |
| 4 | Scope inclusions AND exclusions clearly stated | [ ] |
| 5 | Relevant case studies attached | [ ] |
| 6 | Payment terms match VSON standards | [ ] |
| 7 | Timeline is realistic | [ ] |
| 8 | Validity period stated (standard: 30 days) | [ ] |
| 9 | VSON Solutions contact details and next steps included | [ ] |
| 10 | Document proofread (no template placeholders remaining) | [ ] |
| 11 | Filename follows convention: VSON_[Type]_[ClientName]_[Date] | [ ] |

---

## Deal Tracking

Every qualified deal (score ≥ 4 at Gate 1) gets tracked.

| Field | Description |
|-------|-------------|
| Deal ID | VS-DQ-YYYYMMDD-XXX |
| Client Name | Company name |
| Contact Person | Primary contact |
| Solution Track | Activation Solutions / Market Development |
| Layer(s) / Pillar(s) | L1, L2, L3 / P1, P2, P3 |
| Service Card(s) | Which VS-SC cards apply |
| MEDDIC Score | X/6 |
| MRA Eligible | Yes / No / TBC (Market Dev only) |
| Estimated Value | VND or SGD |
| Stage | Qualified / Proposal Sent / Negotiating / Won / Lost / Parked |
| Expected Close Date | When the client will decide |
| Next Action | What needs to happen next, by whom, by when |
| Case Studies Used | Which CS-XX referenced in proposal |
| Notes | Key context |

**Pipeline review cadence:** Weekly (co-founders review all active deals, 15 minutes).

---

## Integration with Other VS- Skills

```
VS-B2B-Service-Design v2.0 → provides Service Cards (2 tracks, layers/pillars)
        ↓
VS-B2B-Presales v2.0 (this skill)
  Route Check: Activation or Market Development?
  Gate 1: MEDDIC-lite + MRA Quick Check (if Market Dev)
  Gate 2: Solution fit + case study selection
  Gate 3: Track-specific proposal/quotation
        ↓
VS-B2B-Contracting → contract negotiation (+ MRA-specific terms for Market Dev)
        ↓
VS-B2B-Procurement → materials sourcing
        ↓
VS-B2B-Project-Delivery → execution
        ↓
VS-B2B-Finance → invoicing
```

---

## When to Use This Skill

**Always trigger when:**
- A new B2B enquiry comes in (any channel)
- A Singapore company asks about Vietnam market entry
- Client asks for a quote, proposal, or pricing
- Founders are deciding whether to pursue an opportunity
- Reviewing the deal pipeline
- Preparing for a client meeting or pitch
- Someone mentions MRA grant or Enterprise Singapore

**Do not use for:**
- Designing new offerings (that's VS-B2B-Service-Design)
- Contract negotiation (that's VS-B2B-Contracting)
- B2C product pricing (that's VS-B2C-Finance)
- VSON Advisory engagements (that's vs-advisory-* skills)

---

## References

- `references/proposal-templates.md` — Full templates per track
- `references/meddic-cheat-sheet.md` — Quick-reference MEDDIC questions
- `references/mra-grant-guide.md` — Enterprise Singapore MRA Grant details
- Case studies CS-01 to CS-05 on vson.vn
