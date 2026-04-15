---
name: vs-b2b-presales
description: >
  VSON internal skill for qualifying B2B opportunities using MEDDIC-lite, matching them to
  Service Cards from VS-B2B-Service-Design, and generating proposals and quotations. Covers the
  full presales lifecycle from inbound enquiry to proposal submission. Trigger on: presales,
  pre-sales, qualification, qualify this deal, MEDDIC, proposal, quotation, quote, costing,
  pricing, client pitch, RFQ, RFP, new opportunity, deal assessment, go/no-go,
  should we bid, write a proposal, prepare a quote. Also trigger on: "a client asked about",
  "Dell wants", "HP needs", "new lead from", "someone enquired about", "prepare a proposal for",
  "how much should we charge", or "can we do this project". Always load for any B2B opportunity
  assessment or proposal work. Takes Service Cards from VS-B2B-Service-Design as input
  and produces proposals that feed into VS-B2B-Contracting. VSON internal standard (VS- prefix),
  designed for lean founder-led team.
---

# VS-B2B-Presales v1.0

## Purpose

This skill ensures every B2B opportunity gets a consistent, rigorous qualification before
VSON invests time in proposal writing. At <10 people with the founder handling most sales,
the #1 enemy is wasted effort on unqualified deals. MEDDIC-lite gives you a fast go/no-go
gate, then the proposal process is templated to cut production time from days to hours.

**Core problem solved:** The founder spends too much time on proposals that don't convert
because deals weren't properly qualified upfront. This skill enforces qualification first,
then streamlines the proposal itself.

---

## Theoretical Foundation

### MEDDIC-lite (Adapted for Founder-Led Selling)

**Origin:** MEDDIC was developed at PTC in the 1990s by Jack Napoli and Dick Dunkel for
enterprise software sales. The full framework (Metrics, Economic Buyer, Decision Criteria,
Decision Process, Identify Pain, Champion) is designed for complex, multi-stakeholder deals
with dedicated sales teams.

**VSON Adaptation:** We keep all six elements but compress the depth. In classic MEDDIC,
each element might require multiple meetings and stakeholder interviews. For VSON, each
element is assessed with 1-3 questions that the founder can answer after a single client
conversation. Scoring is binary: you either know it (1) or you don't (0). Score ≥ 4/6
to proceed; score < 4 means park the deal until you can fill the gaps or decline.

**Why MEDDIC over BANT:** BANT (Budget, Authority, Need, Timeline) is sufficient for
transactional sales. But VSON's B2B deals — especially CX consulting and large gifting
contracts — involve procurement processes, multiple stakeholders, and evaluation criteria.
MEDDIC captures the political dimension (Champion, Economic Buyer) that BANT misses.
Your MBA background means you'll appreciate the rigour without finding it burdensome.

**Why not full MEDDPICC:** The two extra letters (Paper Process, Competition) add value
in enterprise software sales where procurement and competitive bake-offs are standard.
For VSON's deal sizes and market, they're overkill. If VSON moves upmarket into larger
CX engagements (>500M VND), we can upgrade to MEDDPICC later.

---

## The 3-Gate Pipeline

Every B2B opportunity passes through three gates. The gates are sequential — you cannot
skip Gate 1 to jump into proposal writing. This is the discipline that protects founder time.

```
INBOUND OPPORTUNITY
        ↓
┌─ GATE 1: MEDDIC-lite Qualification ─────────────────────┐
│  Score each element 0 or 1. Total ≥ 4 → proceed.        │
│  Total < 4 → park (set follow-up) or decline (explain).  │
└──────────────────────────────────────────────────────────┘
        ↓ Go
┌─ GATE 2: Solution Fit ──────────────────────────────────┐
│  Match opportunity to Service Card(s) from catalogue.    │
│  Confirm scope, adjust pricing, identify customisation.  │
│  If no Service Card fits → flag for VS-B2B-Service-Design.   │
└──────────────────────────────────────────────────────────┘
        ↓ Fit confirmed
┌─ GATE 3: Proposal / Quotation Output ──────────────────┐
│  Generate proposal document + quotation sheet.           │
│  Use appropriate template per offering type.             │
│  Review checklist before submission.                     │
└──────────────────────────────────────────────────────────┘
        ↓
   → VS-B2B-Contracting (if client accepts)
```

---

## Gate 1 — MEDDIC-lite Qualification

### The Scorecard

Fill this in during or immediately after the first substantive client conversation.
Each element scores 0 (unknown/absent) or 1 (known/confirmed).

```
╔══════════════════════════════════════════════════════════════╗
║              VSON DEAL QUALIFICATION SCORECARD                ║
║              [Deal ID: VS-DQ-YYYYMMDD-XXX]                   ║
╠══════════════════════════════════════════════════════════════╣
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
║  Key question: (Observe, don't ask directly) — Is the        ║
║  person you're talking to actively helping you navigate      ║
║  their organisation? Sharing internal info? Following up?    ║
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

### Offering-Type Nuances in Qualification

The six MEDDIC elements apply universally, but their weight differs by offering type:

| Element | OT-1 Gifting | OT-2 Distribution | OT-3 CX Consulting |
|---------|-------------|-------------------|---------------------|
| M — Metrics | Quantity + delivery date (straightforward) | Revenue targets + channel KPIs | CX KPIs: CAC, retention, NPS |
| E — Econ. Buyer | Procurement / marketing manager | Country GM or VP Asia | CMO / CDO / CIO |
| D — Criteria | Price, quality, speed, customisation | Market knowledge, reach, compliance | Methodology, platform fit, ROI |
| D — Process | Often single-stage quote → PO | Multi-stage evaluation | RFP → shortlist → pilot → rollout |
| I — Pain | Event deadline, previous vendor failed | No local presence, regulatory blockers | Data silos, wasted marketing spend |
| C — Champion | Direct contact (usually marketing mgr) | Local BD person at the brand | Marketing lead frustrated with status quo |

**OT-1 deals (gifting) often score 5-6 quickly** — they're transactional with clear metrics
and a single buyer. Move fast on these; don't over-qualify.

**OT-3 deals (CX consulting) often score 2-3 initially** — the client may not have defined
metrics, the economic buyer may be unclear, and the decision process may be opaque. This is
normal. Park with a structured follow-up plan, not a decline.

---

## Gate 2 — Solution Fit

Once a deal scores ≥ 4, match it to the VSON Service Catalogue.

### Process

1. **Select Service Card(s):** Which VS-SC card(s) match the client's need?
   - Single card → straightforward, use as-is
   - Multiple cards → bundled offering, create a combined scope
   - No card fits → flag for VS-B2B-Service-Design to create a new card

2. **Scope Confirmation:** Walk through Section C of the Service Card with the client's
   specific requirements. Mark what's included, excluded, and any customisation needed.

3. **Pricing Adjustment:** Start from the Service Card pricing (Section D) and adjust for:
   - Volume (use tier structure from `references/pricing-models.md`)
   - Customisation complexity (add % premium)
   - Client strategic value (anchor account? willing to accept lower margin?)
   - Timeline pressure (rush premium: +10-20%)
   - Payment terms (extended terms: +5-10% to compensate cash flow)

4. **Solution Approach (for OT-3 only):** For CX consulting deals, write a 1-page solution
   approach covering: understanding of the client's situation, proposed methodology,
   phased delivery plan, team composition, and expected outcomes. Use the template in
   `references/proposal-templates.md`.

### Fit Checklist

Before moving to Gate 3, confirm:

| Check | Question | Pass |
|-------|----------|------|
| Scope clarity | Can you describe in one sentence what the client gets? | Yes |
| Delivery confidence | Can VSON deliver this with current team + suppliers? | Yes |
| Margin viability | Does the adjusted price meet the 20% minimum margin? | Yes |
| Timeline feasibility | Can VSON meet the client's deadline? | Yes |
| Dependency awareness | Are all client-side dependencies identified? | Yes |

If any check fails, address it before proceeding. Common fixes:
- Scope unclear → schedule a clarification call
- Can't deliver → consider partnering or subcontracting (and adjust margin)
- Margin below 20% → negotiate scope reduction or price increase
- Timeline impossible → propose phased delivery

---

## Gate 3 — Proposal / Quotation Output

### Output Types by Offering Type

| Offering Type | Primary Output | Supporting Documents |
|--------------|----------------|---------------------|
| OT-1: Gifting | Quotation Sheet | Product specs, sample photos |
| OT-2: Distribution | Proposal + Commercial Terms | Market analysis summary |
| OT-3: CX Consulting | Full Proposal | Solution approach, team CVs, case studies |
| OT-1 large / strategic | Proposal + Quotation | Design concepts, production plan |

### Proposal Structure (Standard Template)

See `references/proposal-templates.md` for full templates. Summary structure:

**For OT-1 (Gifting) — Quotation Format:**
```
1. Cover page (VSON branding, client name, date)
2. Quotation summary table (item, qty, unit price, total, lead time)
3. Product specifications
4. Terms & conditions (payment, delivery, warranty)
5. Validity period (standard: 30 days)
```

**For OT-3 (CX Consulting) — Full Proposal Format:**
```
1. Cover page
2. Executive summary (1 page max)
3. Understanding of your situation (paraphrase client's pain — shows listening)
4. Proposed approach (methodology, phases, timeline)
5. Team & credentials (founder bio, relevant experience, PangoCDP partnership)
6. Deliverables & scope (explicit inclusions and exclusions)
7. Investment summary (phased pricing, payment schedule)
8. Case studies / references (if available)
9. Terms & conditions
10. Next steps (clear CTA with date)
```

**For OT-2 (Distribution) — Proposal Format:**
```
1. Cover page
2. Executive summary
3. Vietnam market overview (relevant to client's category)
4. Proposed distribution strategy (channels, timeline, KPIs)
5. VSON capabilities & track record
6. Commercial model (retainer / commission / hybrid)
7. Terms & conditions
8. Next steps
```

### Pre-Submission Checklist

Before sending any proposal or quotation to the client:

| # | Check | Done? |
|---|-------|-------|
| 1 | Client name and details correct throughout | [ ] |
| 2 | Pricing reviewed and margin confirmed ≥ 20% | [ ] |
| 3 | Scope inclusions AND exclusions clearly stated | [ ] |
| 4 | Payment terms match VSON standards (or exception approved) | [ ] |
| 5 | Timeline is realistic (checked with suppliers if applicable) | [ ] |
| 6 | Validity period stated (standard: 30 days) | [ ] |
| 7 | VSON contact details and next steps included | [ ] |
| 8 | Document proofread (no template placeholders remaining) | [ ] |
| 9 | Filename follows convention: VSON_[Type]_[ClientName]_[Date] | [ ] |

---

## Deal Tracking

Every qualified deal (score ≥ 4 at Gate 1) gets tracked. At VSON's scale, a simple
spreadsheet or Kanban board is sufficient. The minimum fields:

| Field | Description |
|-------|-------------|
| Deal ID | VS-DQ-YYYYMMDD-XXX |
| Client Name | Company name |
| Contact Person | Primary contact |
| Offering Type | OT-1 / OT-2 / OT-3 / OT-4 |
| Service Card(s) | Which VS-SC cards apply |
| MEDDIC Score | X/6 |
| Estimated Value | VND |
| Stage | Qualified / Proposal Sent / Negotiating / Won / Lost / Parked |
| Expected Close Date | When the client will decide |
| Next Action | What needs to happen next, by whom, by when |
| Notes | Key context |

**Pipeline review cadence:** Weekly (founder reviews all active deals for 15 minutes).
At <10 deals in pipeline, this is a quick scan, not a formal meeting.

---

## Integration with Other VS- Skills

```
VS-B2B-Service-Design → provides Service Cards (offering catalogue)
        ↓
VS-B2B-Presales (this skill)
  Gate 1: MEDDIC-lite qualification scorecard
  Gate 2: Solution fit against Service Cards
  Gate 3: Proposal / quotation output
        ↓
VS-B2B-Contracting → takes accepted proposals into contract negotiation
        ↓
VS-B2B-Procurement → materials sourcing (triggered by signed contract)
        ↓
VS-B2B-Project-Delivery → execution against proposal scope
        ↓
VS-B2B-Finance → invoicing per proposal payment terms
```

---

## When to Use This Skill

**Always trigger when:**
- A new B2B enquiry comes in (any channel)
- Client asks for a quote, proposal, or pricing
- Founder is deciding whether to pursue an opportunity
- Reviewing the deal pipeline
- Preparing for a client meeting or pitch

**Do not use for:**
- Designing new offerings (that's VS-B2B-Service-Design)
- Contract negotiation (that's VS-B2B-Contracting)
- B2C product pricing (that's VS-Retail-Finance)
- Project execution after contract is signed (that's VS-B2B-Project-Delivery)

---

## References

- `references/proposal-templates.md` — Full templates for each offering type
- `references/meddic-cheat-sheet.md` — Quick-reference MEDDIC questions and coaching tips
