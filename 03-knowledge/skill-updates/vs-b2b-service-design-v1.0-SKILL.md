---
name: vs-b2b-service-design
description: >
  VSON internal skill for designing, packaging, and maintaining the company's service catalogue
  across all four offering types: corporate gifting/brand activation, omni-channel distribution,
  CX consulting (PangoCDP), and B2C retail. Trigger on: service design, offering design,
  service catalogue, service card, what do we sell, pricing model, packaging an offering,
  new service line, value proposition, service portfolio, offering review. Also trigger on:
  "create a service card", "design a new offering", "review the service catalogue",
  "package this as a service", "what should we charge for", "how do we productise this",
  or "update the catalogue". Always load for any work involving VSON service portfolio,
  pricing architecture, or offering standardisation. This is a VSON internal standard (VS- prefix)
  designed for a lean, founder-led team.
---

# VS-B2B-Service-Design v1.0

## Purpose

This skill ensures VSON has a **standardised, reusable service catalogue** so the founder
and team can move from opportunity to proposal without reinventing the offering each time.
Every service VSON sells — whether a 500-unit branded backpack order for Dell or a PangoCDP
implementation for a retail chain — should have a pre-defined Service Card that feeds directly
into VS-B2B-Presales for proposal generation.

**Core problem solved:** Without standardised offerings, every deal starts from scratch.
The founder's time is wasted on scoping and pricing that could be templated. This skill
eliminates that waste.

---

## Theoretical Foundation

### Value Proposition Canvas (Osterwalder, 2014)

The primary framework. Each VSON offering maps customer jobs, pains, and gains to VSON's
pain relievers and gain creators. This ensures every service is designed from the customer's
perspective, not from VSON's internal capability list.

**Why this framework:** It's the most efficient bridge between "what we can do" and
"what the customer will pay for." At VSON's scale, we don't need a full Business Model Canvas
for each offering — the VPC slice is sufficient because the delivery model and cost structure
are relatively stable across offering types.

**Adaptation for VSON:** We extend VPC with a "Delivery Requirements" section that captures
what VSON needs internally to fulfil the offering (people, materials, timeline, dependencies).
This connects directly to VS-B2B-Procurement and VS-B2B-Project-Delivery downstream.

### Service Card Format (VSON Internal Standard)

A one-page template per offering. Think of it as a "product spec sheet" but for services.
It standardises what each offering includes, excludes, costs, and requires — making it
directly reusable in proposals, quotations, and client presentations.

**Design principle:** Any team member should be able to pick up a Service Card and explain
the offering to a client without the founder's involvement. This is the #1 scalability
lever for a founder-dependent business.

---

## VSON Offering Taxonomy

VSON operates four distinct offering types. Each has different delivery mechanics,
cost structures, and client profiles. The Service Card format is the same across all four,
but the content differs.

```
VSON OFFERING TYPES
├── OT-1: Corporate Gifting & Brand Activation (B2B — primary revenue)
│   └── Physical product customisation → production → delivery
├── OT-2: Omni-channel Distribution Services (B2B)
│   └── Market entry management → channel setup → ongoing distribution
├── OT-3: CX Consulting with PangoCDP (B2B — emerging, highest differentiation)
│   └── Discovery → CX strategy → CDP implementation → optimisation
└── OT-4: B2C Retail (DTC eCommerce)
    └── Brand portfolio management → listing → marketing → fulfilment
```

---

## Service Card Template

Every offering in VSON's catalogue must have a completed Service Card. The template below
is the VSON internal standard. Fields marked with * are mandatory.

```
╔══════════════════════════════════════════════════════════════╗
║                    VSON SERVICE CARD                         ║
║                    [Card ID: VS-SC-XXX]                      ║
╠══════════════════════════════════════════════════════════════╣
║ SECTION A — IDENTITY                                         ║
║──────────────────────────────────────────────────────────────║
║ * Service Name:          [concise, client-facing name]       ║
║ * Offering Type:         [OT-1 | OT-2 | OT-3 | OT-4]       ║
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
║                                                              ║
║ SECTION E — DELIVERY REQUIREMENTS (Internal)                 ║
║──────────────────────────────────────────────────────────────║
║ * People Required:       [roles and estimated effort]        ║
║ * Materials / Suppliers: [key inputs, lead times]            ║
║ * Dependencies:          [what must be true to deliver]      ║
║ * Risk Flags:            [known risks for this offering]     ║
║                                                              ║
║ SECTION F — CROSS-REFERENCES                                 ║
║──────────────────────────────────────────────────────────────║
║   Related Service Cards: [other VS-SC-XXX cards]             ║
║   Upsell Opportunities:  [natural next offerings]            ║
║   Feeds into:            VS-B2B-Presales → VS-B2B-Contracting        ║
╚══════════════════════════════════════════════════════════════╝
```

---

## Process: Creating or Updating a Service Card

### Step 1 — Identify the Offering Type

Determine which of the four offering types (OT-1 through OT-4) this service belongs to.
If it spans multiple types (e.g., a bundled gifting + CX engagement), create separate
Service Cards for each component and link them in Section F.

### Step 2 — Run the Value Proposition Canvas

For each new or updated offering, complete the VPC section by answering:

1. **Customer Jobs:** What is the customer trying to accomplish? Be specific.
   - Functional jobs (e.g., "distribute 2,000 branded backpacks to channel partners")
   - Social jobs (e.g., "be seen as a premium, thoughtful brand")
   - Emotional jobs (e.g., "feel confident the vendor can deliver on time")

2. **Customer Pains:** What frustrates them about current alternatives?
   - e.g., "Previous vendor delivered inconsistent quality across batches"
   - e.g., "No visibility into production status"
   - e.g., "Took 3 months last time, need it in 6 weeks"

3. **Customer Gains:** What would delight them beyond the basic requirement?
   - e.g., "Real-time production tracking dashboard"
   - e.g., "Design consultation included in the price"

4. **VSON Pain Relievers:** How does VSON specifically address each pain?
5. **VSON Gain Creators:** How does VSON deliver each gain?

**Fit check:** Every pain must have a reliever. Every gain creator must map to a real
gain. If there are orphan pains (no reliever) or orphan creators (no gain), the offering
has a gap — either fill it or explicitly exclude it in Section C.

### Step 3 — Define Scope and Pricing

Use the reference file `references/pricing-models.md` for guidance on pricing architecture
per offering type. Key principles:

- **OT-1 (Gifting):** Per-unit pricing with volume tiers. Quote = (unit cost × margin × quantity) + setup fee.
- **OT-2 (Distribution):** Retainer or commission model. Monthly management fee + % of sales.
- **OT-3 (CX Consulting):** Milestone-based or time & materials. Discovery → Strategy → Implementation phases.
- **OT-4 (B2C Retail):** Not a "service" in the traditional sense — margin is built into product pricing.

### Step 4 — Define Delivery Requirements

This section is critical because it connects to VS-B2B-Procurement and VS-B2B-Project-Delivery.
For each offering, specify:

- Who needs to be involved (founder only? or delegatable?)
- What materials or suppliers are needed and their lead times
- What must be true before we can start (client provides assets, approves designs, etc.)
- Known risks specific to this offering type

### Step 5 — Review and Catalogue

Once the Service Card is complete:
1. Assign a Card ID (format: VS-SC-[OT number][sequential], e.g., VS-SC-101, VS-SC-301)
2. Add to the VSON Service Catalogue (a master index of all active Service Cards)
3. Flag any cross-sell or upsell links in Section F
4. Set a review date (recommend: every 6 months or after any major deal)

---

## Service Catalogue Index

The master catalogue is a simple index. Start with this structure and populate as
Service Cards are created:

```
VSON SERVICE CATALOGUE — Master Index
Last updated: [date]

OT-1: Corporate Gifting & Brand Activation
  VS-SC-101: Custom Branded Backpacks (Kingbag)
  VS-SC-102: Corporate Apparel Programme (T5C/Hasary)
  VS-SC-103: Tech Accessories & Gift Bundles
  VS-SC-104: Full Brand Activation Campaign

OT-2: Omni-channel Distribution
  VS-SC-201: Vietnam Market Entry Package
  VS-SC-202: Ongoing Distribution Management

OT-3: CX Consulting (PangoCDP)
  VS-SC-301: CX Discovery & Strategy Workshop
  VS-SC-302: PangoCDP Implementation
  VS-SC-303: CX Optimisation Retainer

OT-4: B2C Retail
  VS-SC-401: Torayvino Product Range
  VS-SC-402: Zojirushi Product Range
  VS-SC-403: Kingbag Product Range
  VS-SC-404: Nepia Product Range
```

---

## Quality Gates

Before a Service Card is considered "active" in the catalogue:

| Gate | Check | Pass Criteria |
|------|-------|---------------|
| G1 — Completeness | All mandatory (*) fields filled | No blanks in Sections A-E |
| G2 — Fit Check | VPC pains ↔ relievers mapped | No orphan pains or creators |
| G3 — Pricing Sanity | Price range covers cost + target margin | Floor price > total cost |
| G4 — Deliverability | Founder confirms team can deliver | Dependencies are realistic |

---

## Integration with Other VS- Skills

```
VS-B2B-Service-Design (this skill)
    ↓ Service Cards feed into...
VS-B2B-Presales (MEDDIC-lite qualification + proposal generation)
    ↓ Signed deals feed into...
VS-B2B-Contracting (standard terms + negotiation)
    ↓ Contracts trigger...
VS-B2B-Procurement (material sourcing per Service Card Section E)
    ↓ Materials ready, then...
VS-B2B-Project-Delivery (execute per Service Card scope)
    ↓ On completion...
VS-B2B-Finance (invoice per Service Card payment terms)
    ↓ Margin data feeds back to...
VS-B2B-Service-Design (pricing review, offering refinement)
```

---

## When to Use This Skill

**Always trigger when:**
- Creating or reviewing any VSON service offering
- Packaging a new capability as a sellable service
- Preparing for a new brand partnership (what will we offer?)
- Reviewing pricing after a completed project
- Onboarding a new team member who needs to understand what VSON sells

**Do not use for:**
- Individual deal-level proposals (that's VS-B2B-Presales)
- Contract negotiation (that's VS-B2B-Contracting)
- Day-to-day B2C product listing (that's VS-Listing)

---

## References

- `references/pricing-models.md` — Detailed pricing architecture per offering type
- `references/vpc-examples.md` — Completed VPC examples for each offering type
