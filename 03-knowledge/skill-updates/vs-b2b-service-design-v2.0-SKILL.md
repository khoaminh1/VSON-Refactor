---
name: vs-b2b-service-design
description: >
  VSON internal skill for designing, packaging, and maintaining the company's B2B service
  catalogue under the VSON Solutions brand. Two solution tracks: Activation Solutions
  (3-layer Phygital stack for brands) and Market Development (MRA-backed Vietnam market
  entry for Singapore corporates). Trigger on: service design, offering design, service
  catalogue, service card, what do we sell, pricing model, packaging an offering, new
  service line, value proposition, service portfolio, offering review, Activation Solutions,
  Market Development, Phygital, MRA. Also trigger on: "create a service card", "design a
  new offering", "review the service catalogue", "package this as a service", "what should
  we charge for", "how do we productise this", or "update the catalogue". Always load for
  any work involving VSON Solutions service portfolio, pricing architecture, or offering
  standardisation. This is a VSON internal standard (VS- prefix).
---

# VS-B2B-Service-Design v2.0

> **Changelog:** v1.0 → v2.0 (2026-04-01). Major restructure: replaced 4 offering types
> (OT-1 through OT-4) with 2 solution tracks (Activation Solutions + Market Development).
> Added Phygital framing, case study references, MRA grant mapping. Removed OT-4 (B2C Retail)
> from B2B scope — now sits entirely under VSON Store. Source of truth: VSON Corporate
> website content (vson.vn wireframes, approved by Fred 2026-03-31).

## Purpose

This skill ensures VSON Solutions has a **standardised, reusable service catalogue** so
the team can move from opportunity to proposal without reinventing the offering each time.
Every service VSON Solutions sells — whether a brand activation campaign for Dell or an
MRA-backed market entry for a Singapore SME — should have a pre-defined Service Card
that feeds directly into VS-B2B-Presales for proposal generation.

**Core problem solved:** Without standardised offerings, every deal starts from scratch.
The founders' time is wasted on scoping and pricing that could be templated. This skill
eliminates that waste.

**Brand context:** All B2B services sit under the **VSON Solutions** brand (internal name:
An Phú). See vs-core v2.0 for brand architecture rules.

---

## Theoretical Foundation

### Value Proposition Canvas (Osterwalder, 2014)

The primary framework. Each offering maps customer jobs, pains, and gains to VSON's
pain relievers and gain creators. This ensures every service is designed from the customer's
perspective, not from VSON's internal capability list.

**Adaptation for VSON:** We extend VPC with a "Delivery Requirements" section that captures
what VSON needs internally to fulfil the offering (people, materials, timeline, dependencies).
This connects directly to VS-B2B-Procurement and VS-B2B-Project-Delivery downstream.

### Service Card Format (VSON Internal Standard)

A one-page template per offering. Think of it as a "product spec sheet" but for services.
It standardises what each offering includes, excludes, costs, and requires — making it
directly reusable in proposals, quotations, and client presentations.

**Design principle:** Any team member should be able to pick up a Service Card and explain
the offering to a client without the founders' involvement. This is the #1 scalability
lever for a founder-dependent business.

---

## VSON Solutions — Offering Taxonomy

VSON Solutions operates **two solution tracks**. Each has different delivery mechanics,
cost structures, client profiles, and case studies. The Service Card format is the same
across both tracks, but the content differs.

```
VSON SOLUTIONS — SERVICE TRACKS (v2.0)
├── Track 1: Activation Solutions  (for Brands)
│   ├── Layer 1 — Merchandise & Activation     (Physical)
│   ├── Layer 2 — Data & Campaign Platform      (Intelligence)
│   └── Layer 3 — Marketing & Automation        (Growth)
│
└── Track 2: Market Development  (for Singapore Corporates)
    ├── Service 1 — Overseas Business Development   (MRA Pillar 1)
    ├── Service 2 — Overseas Market Set-up          (MRA Pillar 2)
    └── Service 3 — Overseas Market Promotion       (MRA Pillar 3)
```

> **What changed from v1.0:** The old 4 offering types (OT-1 through OT-4) are replaced.
> OT-1 (Corporate Gifting & Brand Activation) and OT-3 (CX Consulting / PangoCDP) are
> consolidated into Activation Solutions as Layers 1-3. OT-2 (Omni-channel Distribution)
> is absorbed into both tracks where relevant. OT-4 (B2C Retail) is removed from B2B
> scope entirely — it belongs under VSON Store (see vs-b2c-* skills).

---

## Track 1 — Activation Solutions

**Brand line:** "Activate your brand in Vietnam."

**Client profile:** International brands, MNCs, and corporates who need their brand
activated in the Vietnamese market — from physical merchandise to campaign intelligence
to automated growth.

**Phygital framing:** Activation Solutions is VSON's Phygital offering. It connects
physical brand activation (Layer 1) to digital campaign intelligence (Layer 2) to
automated marketing scale (Layer 3). This integrated stack is VSON's core differentiator —
most activation agencies handle one layer only.

### Layer 1 — Merchandise & Activation (Physical)

Premium branded touchpoints that create real-world presence.

**What this covers:**
- Premium branded merchandise design & production
- Corporate gifting programmes
- Retail & event activations
- POSM and in-store display materials

**Delivery model:** Per-unit or per-project pricing. Physical production + logistics.
Similar to old OT-1.

### Layer 2 — Data & Campaign Platform (Intelligence)

A connected platform that tracks every touchpoint.

**What this covers:**
- Campaign performance tracking & dashboards
- Consumer data capture and profiling
- Omni-channel attribution reporting
- Market intelligence and insight briefs

**Delivery model:** Platform setup fee + retainer or milestone-based.
This replaces the old "PangoCDP" naming — the technology is embedded, not branded
separately to the client. PangoCDP may still be the underlying tool, but the client-facing
name is "Data & Campaign Platform."

### Layer 3 — Marketing & Automation (Growth)

Automated workflows that turn data into the next action.

**What this covers:**
- CRM and lifecycle marketing automation
- Multi-channel campaign deployment
- Audience segmentation and targeting
- Performance optimisation workflows

**Delivery model:** Retainer or performance-based. Often bundled with Layer 2.

### Activation Solutions — Selling Model

Clients can engage on:
- **Single layer** — e.g., branded merchandise only (Layer 1)
- **Two layers** — e.g., activation + campaign intelligence (Layers 1+2)
- **Full stack** — all three layers integrated (highest value, highest differentiation)

The upsell path is always: Layer 1 → Layer 2 → Layer 3.
Layer 1 is the most common entry point. Layer 3 is the stickiest and most profitable.

### Activation Solutions — Case Studies

| ID | Client Type | Summary | Layers Engaged |
|----|------------|---------|----------------|
| CS-01 | Electronics Retail | National activation campaign | L1 + L2 |
| CS-02 | Education | Campus activation programme | L1 |
| CS-03 | Fashion Retail | Omni-channel brand activation | L1 + L2 + L3 |
| CS-04 | OEM Merchandise | Large-scale branded goods production | L1 |

> Use case studies as proof points in proposals. Map each case to the layers engaged
> to demonstrate track record for the specific scope the client is considering.

---

## Track 2 — Market Development

**Brand line:** "Enter Vietnam with confidence — and the right partner."

**Client profile:** Singapore companies (primarily SMEs) who want to enter or expand
in the Vietnamese market. Often funded via Enterprise Singapore's MRA Grant.

**Key differentiator:** VSON is not a remote advisory firm — it's a Vietnam-registered,
Vietnam-operating business with 20 years of on-the-ground experience. It can cover all
three MRA pillars directly or through its partner network.

### MRA Grant Context

| Detail | Value |
|--------|-------|
| Grant name | Enterprise Singapore Market Readiness Assistance (MRA) Grant |
| Maximum amount | Up to S$100,000 per new market |
| Funding rate | 70% (from 1 April 2026) |
| Eligible companies | Singapore-registered, min. 30% local shareholding, group revenue < S$100M |
| Pre-approved vendor list | Not required — companies can engage VSON directly |

### Service 1 — Overseas Business Development (MRA Pillar 1)

"Find Your Footing."

**What this covers:**
- Identify right distributors, JV partners, logistics operators in Vietnam
- Build BD strategy for market engagement
- Partner search and commercial introduction

**MRA Pillar 1 cap:** S$50,000

### Service 2 — Overseas Market Set-up (MRA Pillar 2)

"Set Up Right."

**What this covers:**
- Facilitate incorporation (through partner network)
- IP protection guidance
- Compliance and regulatory navigation
- Vietnam entity formation support

**MRA Pillar 2 cap:** S$30,000

> **Note:** VSON facilitates through its partner network (legal partners, compliance
> advisors). VSON does not provide legal services directly.

### Service 3 — Overseas Market Promotion (MRA Pillar 3)

"Get Known."

**What this covers:**
- Market entry campaign in Vietnam
- Trade introductions and brand visibility
- Leverage same activation infrastructure used for international brands (Track 1)

**MRA Pillar 3 cap:** S$20,000

### Market Development — Process

| Phase | Step | Detail |
|-------|------|--------|
| 1 | Explore | Understand business, Vietnam goals, MRA eligibility. No commitment. |
| 2 | Design | Map market entry plan across 3 MRA pillars — partners, set-up, promotion. |
| 3 | Deliver | Execute across all pillars — directly and through partner network. Keep MRA docs on track. |
| 4 | Grow | Stay alongside client as Vietnam presence matures. Connect to next opportunities. |

### Market Development — Case Studies

| ID | Client Type | Summary | MRA Pillars |
|----|------------|---------|-------------|
| CS-05 | ICT Distribution | Singapore ICT company entering Vietnam market | P1 + P2 + P3 |

### Market Development — Referral Model

For clients not yet familiar with MRA, VSON connects them to its Singapore consultant
network for eligibility advice before engagement begins. This is a referral channel,
not a formal partnership — the consultant network advises on MRA, VSON delivers in Vietnam.

---

## Service Card Template

Every offering in VSON Solutions' catalogue must have a completed Service Card.
The template below is the VSON internal standard. Fields marked with * are mandatory.

```
╔══════════════════════════════════════════════════════════════╗
║                    VSON SERVICE CARD                         ║
║                    [Card ID: VS-SC-XXX]                      ║
╠══════════════════════════════════════════════════════════════╣
║ SECTION A — IDENTITY                                         ║
║──────────────────────────────────────────────────────────────║
║ * Service Name:          [concise, client-facing name]       ║
║ * Solution Track:        [Activation Solutions | Market Dev] ║
║ * Layer / Pillar:        [L1|L2|L3 or P1|P2|P3]             ║
║ * Tagline:               [one sentence value proposition]    ║
║ * Target Segment:        [who buys this]                     ║
║   Version / Last Updated: [date]                             ║
║                                                              ║
║ SECTION B — VALUE PROPOSITION CANVAS (Lean)                  ║
║──────────────────────────────────────────────────────────────║
║ * Customer Jobs:         [what the customer is trying to do] ║
║ * Customer Pains:        [frustrations, risks, obstacles]    ║
║ * Customer Gains:        [desired outcomes, nice-to-haves]   ║
║ * VSON Pain Relievers:   [how we remove pains]               ║
║ * VSON Gain Creators:    [how we deliver gains]              ║
║                                                              ║
║ SECTION C — SCOPE & DELIVERABLES                             ║
║──────────────────────────────────────────────────────────────║
║ * Inclusions:            [what the client gets]              ║
║ * Exclusions:            [what is NOT included — critical]   ║
║ * Deliverables:          [tangible outputs]                  ║
║ * Typical Timeline:      [standard delivery window]          ║
║                                                              ║
║ SECTION D — PRICING & COMMERCIAL                             ║
║──────────────────────────────────────────────────────────────║
║ * Pricing Model:         [fixed | per-unit | retainer |      ║
║                           milestone | hybrid]                ║
║ * Price Range:           [floor — ceiling, or formula]       ║
║ * Payment Terms:         [standard milestone split]          ║
║ * Minimum Order / Engagement: [threshold to accept]          ║
║   MRA Eligible:          [Yes — Pillar X | No]               ║
║   MRA Cap:               [max claimable under this pillar]   ║
║                                                              ║
║ SECTION E — DELIVERY REQUIREMENTS (Internal)                 ║
║──────────────────────────────────────────────────────────────║
║ * People Required:       [roles and estimated effort]        ║
║ * Materials / Suppliers: [key inputs, lead times]            ║
║ * Partner Network:       [external partners needed]          ║
║ * Dependencies:          [what must be true to deliver]      ║
║ * Risk Flags:            [known risks for this offering]     ║
║                                                              ║
║ SECTION F — CROSS-REFERENCES                                 ║
║──────────────────────────────────────────────────────────────║
║   Case Studies:          [CS-XX references]                  ║
║   Related Service Cards: [other VS-SC-XXX cards]             ║
║   Upsell Opportunities:  [natural next offerings]            ║
║   Feeds into:            VS-B2B-Presales → VS-B2B-Contracting║
╚══════════════════════════════════════════════════════════════╝
```

> **Changes from v1.0:** "Offering Type" field replaced with "Solution Track" + "Layer /
> Pillar". Added MRA eligibility fields. Added "Case Studies" and "Partner Network" fields.

---

## Process: Creating or Updating a Service Card

### Step 1 — Identify the Track and Layer/Pillar

Determine which solution track this service belongs to:
- **Activation Solutions** → which layer(s)? L1 (Physical), L2 (Intelligence), L3 (Growth)
- **Market Development** → which pillar(s)? P1 (BD), P2 (Set-up), P3 (Promotion)

If the offering spans multiple layers/pillars, create one card per layer/pillar and
link them in Section F. Bundled packages get their own "wrapper" card that references
the component cards.

### Step 2 — Run the Value Proposition Canvas

For each new or updated offering, complete the VPC section:

1. **Customer Jobs:** What is the customer trying to accomplish?
   - Functional: "Run a national brand activation campaign in Vietnam"
   - Social: "Be seen as a market leader, not a newcomer"
   - Emotional: "Feel confident the Vietnam partner can actually deliver"

2. **Customer Pains:** What frustrates them?
3. **Customer Gains:** What would delight them?
4. **VSON Pain Relievers:** How does VSON address each pain?
5. **VSON Gain Creators:** How does VSON deliver each gain?

**Fit check:** Every pain must have a reliever. Every gain creator must map to a real
gain. Orphan pains or creators mean a gap in the offering.

### Step 3 — Define Scope and Pricing

Pricing principles by track:

**Activation Solutions:**
- Layer 1 (Merchandise): Per-unit with volume tiers. Quote = (unit cost × margin × quantity) + setup fee
- Layer 2 (Data Platform): Setup fee + monthly retainer, or milestone-based
- Layer 3 (Automation): Monthly retainer or performance-based
- Bundled (L1+L2+L3): Phased milestones with integrated pricing

**Market Development:**
- Per-pillar fixed fee, structured to align with MRA grant caps
- Pillar 1 (BD): Up to S$50,000 total (client pays 30%, MRA covers 70%)
- Pillar 2 (Set-up): Up to S$30,000 total
- Pillar 3 (Promotion): Up to S$20,000 total
- All-pillar bundle: Up to S$100,000 total engagement

### Step 4 — Define Delivery Requirements

- Who needs to be involved (founders, ops team, partner network?)
- Materials, suppliers, and their lead times
- Partner network dependencies (legal, compliance, logistics — for Market Dev)
- Known risks specific to this offering

### Step 5 — Review and Catalogue

1. Assign a Card ID: `VS-SC-[Track code][Layer/Pillar][sequential]`
   - Activation: VS-SC-A1-01 (Track A, Layer 1, card 01)
   - Market Dev: VS-SC-M1-01 (Track M, Pillar 1, card 01)
2. Add to the VSON Solutions Service Catalogue
3. Link relevant case studies in Section F
4. Flag cross-sell/upsell paths
5. Set review date (every 6 months or after any major deal)

---

## Service Catalogue Index

```
VSON SOLUTIONS SERVICE CATALOGUE — Master Index
Last updated: 2026-04-01

TRACK 1: ACTIVATION SOLUTIONS (for Brands)

  Layer 1 — Merchandise & Activation
    VS-SC-A1-01: Premium Branded Merchandise (Design + Production)
    VS-SC-A1-02: Corporate Gifting Programme
    VS-SC-A1-03: Retail & Event Activation
    VS-SC-A1-04: POSM & In-Store Display

  Layer 2 — Data & Campaign Platform
    VS-SC-A2-01: Campaign Intelligence Platform Setup
    VS-SC-A2-02: Consumer Data Capture & Profiling
    VS-SC-A2-03: Omni-channel Attribution Reporting

  Layer 3 — Marketing & Automation
    VS-SC-A3-01: CRM & Lifecycle Marketing Automation
    VS-SC-A3-02: Multi-channel Campaign Deployment
    VS-SC-A3-03: Performance Optimisation Retainer

  Bundles
    VS-SC-AB-01: Full Phygital Activation (L1+L2+L3)

TRACK 2: MARKET DEVELOPMENT (for Singapore Corporates)

  Pillar 1 — Overseas Business Development
    VS-SC-M1-01: Vietnam Partner Search & BD Strategy

  Pillar 2 — Overseas Market Set-up
    VS-SC-M2-01: Vietnam Entity Setup & Compliance (via partner network)

  Pillar 3 — Overseas Market Promotion
    VS-SC-M3-01: Vietnam Market Entry Campaign

  Bundles
    VS-SC-MB-01: Full MRA Market Entry Package (P1+P2+P3)
```

---

## Quality Gates

Before a Service Card is considered "active" in the catalogue:

| Gate | Check | Pass Criteria |
|------|-------|---------------|
| G1 — Completeness | All mandatory (*) fields filled | No blanks in Sections A-E |
| G2 — Fit Check | VPC pains ↔ relievers mapped | No orphan pains or creators |
| G3 — Pricing Sanity | Price range covers cost + target margin | Floor price > total cost |
| G4 — MRA Alignment | Market Dev cards align to MRA caps | Per-pillar pricing within grant limits |
| G5 — Deliverability | Founders confirm team can deliver | Dependencies are realistic |
| G6 — Case Study Link | At least one relevant case study referenced | Section F populated |

---

## Integration with Other VS- Skills

```
VS-B2B-Service-Design (this skill)
    ↓ Service Cards feed into...
VS-B2B-Presales (qualification + proposal generation, MRA structuring)
    ↓ Signed deals feed into...
VS-B2B-Contracting (standard terms + MRA-specific terms)
    ↓ Contracts trigger...
VS-B2B-Procurement (material sourcing per Service Card Section E)
    ↓ Materials ready, then...
VS-B2B-Project-Delivery (execute per Service Card scope)
    ↓ On completion...
VS-B2B-Finance (invoice per Service Card payment terms)
    ↓ Margin data feeds back to...
VS-B2B-Service-Design (pricing review, offering refinement)
```

**Key dependency:** vs-core v2.0 defines the brand architecture (VSON Solutions),
Phygital positioning, and domain structure that this skill references.

---

## When to Use This Skill

**Always trigger when:**
- Creating or reviewing any VSON Solutions service offering
- Packaging a new capability as a sellable service
- Preparing for a new brand partnership (what will we offer?)
- Responding to an MRA-related enquiry (what services map to which pillars?)
- Reviewing pricing after a completed project
- Onboarding a team member who needs to understand what VSON Solutions sells

**Do not use for:**
- Individual deal-level proposals (that's VS-B2B-Presales)
- Contract negotiation (that's VS-B2B-Contracting)
- B2C product listing or retail operations (that's VS-B2C-* skills under VSON Store)
- VSON Advisory offerings (that's vs-advisory-* skills — separate entity)

---

## References

- `references/pricing-models.md` — Detailed pricing architecture per track
- `references/vpc-examples.md` — Completed VPC examples for each track/layer
- `references/mra-grant-guide.md` — Enterprise Singapore MRA Grant details and compliance
- Case studies CS-01 through CS-05 on vson.vn
