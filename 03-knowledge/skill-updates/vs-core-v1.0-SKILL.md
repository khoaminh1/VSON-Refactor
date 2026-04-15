---
name: vs-core
description: >
  VSON internal foundation skill: shared naming conventions, document ID standards,
  numbering systems, Vietnamese regulatory compliance framework (PDPA, VAS, commercial law),
  brand identity guidelines, internal communication standards, and the master skill registry.
  Trigger on: naming convention, document standard, numbering system, compliance, PDPA,
  data privacy, brand guidelines, VSON branding, logo usage, internal standard, skill
  registry, skill map, VS prefix, document ID, file naming. Also trigger on: "what is the
  naming convention", "how do we number documents", "compliance requirements", "brand
  guidelines", "show me all skills", "skill registry", "VSON internal standards", or
  "what VS skills exist". Always load when any other VS- skill references shared standards,
  or when creating new internal documents. VSON internal standard (VS- prefix).
---

# VS-Core v1.0

## Purpose

This is the foundation layer that all other VS- skills reference. It defines the shared
conventions, compliance requirements, and brand standards that keep VSON's internal
operations consistent. Without this layer, each skill would define its own naming,
numbering, and formatting — creating inconsistency as the team grows.

**Core problem solved:** As VSON builds more processes and brings on team members,
there's no single source of truth for "how we do things here" at the basic level —
how to name files, how to number documents, what compliance rules apply, and how to
represent the VSON brand. This skill is that source of truth.

---

## 1. VSON Skill Registry — Master Index

The complete operating system. All skills use the VS- prefix to differentiate from
external or third-party skills.

```
VSON SKILL REGISTRY — v1.0

LAYER 1 — STRATEGY (Annual / Quarterly Planning)
  vs-strategy-business-plan     Vision, mission, 3-year roadmap, OKRs, competitive analysis
  vs-strategy-financial-plan    P&L forecast, cash flow, break-even, scenarios, budgeting
  vs-strategy-marketing-plan    Brand positioning, channel strategy, CAC/LTV, campaign roadmap
  vs-strategy-operations-plan   Value chain, technology roadmap, SOPs, PDCA improvement
  vs-strategy-hr-plan           Org design, hiring roadmap, onboarding, performance framework
  vs-strategy-delivery-plan     Service standards, SLAs, capacity planning, quality framework

LAYER 2 — B2C RETAIL OPERATIONS (Daily / Weekly)
  vs-b2c-sourcing               Import planning, stock monitoring, reorder points, landed cost
  vs-b2c-listing                Product content, channel distribution, pricing sync, SEO
  vs-b2c-marketing              Content calendar, promotions, social media, CRM retention
  vs-b2c-finance                Revenue by channel, margin analysis, reconciliation, VAT

LAYER 3 — B2B DEAL LIFECYCLE (Per Deal / Per Project)
  vs-b2b-service-design         Service catalogue, VPC, Service Cards, pricing models
  vs-b2b-presales               MEDDIC-lite qualification, proposals, quotations
  vs-b2b-contracting            BATNA/ZOPA negotiation, contract templates, clause library
  vs-b2b-procurement            Supplier scorecard, PO process, goods receipt, QC
  vs-b2b-project-delivery       Dual-track Kanban, RAID log, stage gates, closure
  vs-b2b-finance                Milestone invoicing, ageing report, margin analysis, tax

FOUNDATION
  vs-core (this skill)          Naming, numbering, compliance, brand, skill registry
```

### Skill Lifecycle

| Status | Meaning |
|--------|---------|
| Active | In use, maintained, referenced by other skills |
| Draft | Under development, not yet approved for use |
| Retired | Replaced or no longer relevant — archived, not deleted |

All 17 skills are currently **Active** as of initial release.

---

## 2. Naming Conventions

### Document IDs

Every formal VSON document gets a structured ID. This makes retrieval, cross-referencing,
and auditing possible as the company grows.

```
FORMAT: VS-[TYPE]-[YYYYMMDD]-[SEQ]

Where:
  VS     = VSON standard prefix (always)
  TYPE   = Document type code (see table below)
  YYYYMMDD = Date created
  SEQ    = Sequential number (001, 002, etc.) within that date

EXAMPLES:
  VS-DQ-20260321-001    Deal Qualification scorecard
  VS-SC-101             Service Card (OT-1, card #01)
  VS-PRO-20260321-001   Proposal document
  VS-QUO-20260321-001   Quotation document
  VS-CT-20260321-001    Contract
  VS-PO-20260321-001    Purchase Order
  VS-INV-20260321-001   Invoice
  VS-GR-20260321-001    Goods Receipt
  VS-SOP-001            Standard Operating Procedure
```

### Document Type Codes

| Code | Type | Used By |
|------|------|---------|
| DQ | Deal Qualification | VS-B2B-Presales |
| SC | Service Card | VS-B2B-Service-Design |
| PRO | Proposal | VS-B2B-Presales |
| QUO | Quotation | VS-B2B-Presales |
| CT | Contract / Agreement | VS-B2B-Contracting |
| PO | Purchase Order | VS-B2B-Procurement, VS-B2C-Sourcing |
| INV | Invoice | VS-B2B-Finance, VS-B2C-Finance |
| GR | Goods Receipt | VS-B2B-Procurement, VS-B2C-Sourcing |
| SOP | Standard Operating Procedure | VS-Strategy-Operations-Plan |
| MKT | Marketing Brief / Campaign | VS-B2C-Marketing |
| RPT | Report (financial, performance, etc.) | Multiple skills |

### File Naming Convention

All VSON files follow this format:

```
VSON_[TYPE]_[Subject]_[YYYYMMDD].[ext]

EXAMPLES:
  VSON_PRO_Dell_AnnualGifting_20260321.pdf
  VSON_QUO_HP_Backpacks500u_20260321.pdf
  VSON_CT_RetailChainX_CXConsulting_20260321.pdf
  VSON_INV_Dell_Phase1_20260321.pdf
  VSON_RPT_MonthlyB2CRevenue_202603.xlsx
  VSON_MKT_TetCampaign_202601.pdf

RULES:
  - No spaces (use underscores)
  - No Vietnamese diacritics in filenames (use unaccented)
  - Date format always YYYYMMDD
  - Keep subject portion concise (3-5 words max)
  - Extension matches actual format (.pdf, .xlsx, .docx, .pptx)
```

---

## 3. Vietnamese Regulatory Compliance Framework

### 3.1 Data Privacy — PDPD (Personal Data Protection Decree)

Vietnam's Decree 13/2023/ND-CP on personal data protection came into effect July 2023.
VSON handles customer data through B2C eCommerce and B2B client engagements, making
compliance mandatory.

**VSON obligations:**

| Requirement | VSON Application | Action |
|------------|-----------------|--------|
| Consent before collection | Collect customer data only with consent (checkout forms, Zalo opt-in) | Privacy notice on vson.vn, consent checkbox |
| Purpose limitation | Use data only for stated purpose (order fulfilment, marketing if opted in) | Don't share customer lists with third parties |
| Data minimisation | Collect only what's needed | Don't ask for ID numbers unless legally required |
| Storage security | Protect data from unauthorised access | Secure Haravan account, strong passwords, 2FA |
| Breach notification | Notify authorities within 72 hours of breach | Incident response plan (simple: founder contacts MOIT) |
| Cross-border transfer | Consent needed to transfer data outside Vietnam | Relevant if using international tools/platforms |

**Practical checklist:**
- [ ] Privacy policy published on vson.vn
- [ ] Consent mechanism on all data collection forms
- [ ] Customer data stored only in secured, access-controlled systems
- [ ] Team trained: don't share customer data via personal email or unsecured channels
- [ ] Data retention: delete customer data when no longer needed (or per policy period)

### 3.2 Accounting — Vietnamese Accounting Standards (VAS)

VSON operates under VAS. Key compliance points embedded in VS-B2B-Finance and VS-B2C-Finance:

| Requirement | Standard | VSON Implementation |
|------------|---------|-------------------|
| Chart of accounts | Circular 200 (SME) or 133 (micro) | Confirm with accountant which applies |
| E-invoicing | Decree 123/2020/ND-CP | Issue e-invoices through authorised provider |
| VAT filing | Monthly by 20th | Monthly data handover to accountant |
| CIT filing | Quarterly provisional, annual final | Quarterly estimates, annual return |
| Document retention | 5-10 years per type | All invoices, contracts, financial records stored |

### 3.3 Commercial Law

Key provisions affecting VSON's B2B contracts (referenced by VS-B2B-Contracting):

| Law | Key Relevance to VSON |
|-----|----------------------|
| Civil Code 2015 | General contract formation, validity, remedies |
| Commercial Law 2005 | Commercial contract specifics, penalties, trade promotion |
| Consumer Protection Law 2023 | B2C terms, return policies, product warranties |
| Investment Law 2020 | Relevant if seeking external investment |
| Labour Code 2019 | Employment contracts, social insurance, working conditions |
| IP Law (as amended 2022) | Trademark protection for distributed brands, VSON IP |

**Practical rule:** For deals under 500M VND using VSON standard templates, the founder
can manage directly. For anything above 500M VND, cross-border, or involving unusual
terms (exclusivity, IP licensing), engage external legal counsel.

### 3.4 Import Compliance

For Torayvino, Zojirushi, and Nepia imports:

| Requirement | Action |
|------------|--------|
| Import licence / registration | Verify product registration requirements per category |
| Customs declaration | Work with licensed customs broker |
| Vietnamese labelling | All imported consumer goods must have Vietnamese language labels |
| Quality certification | Some categories require conformity assessment (check per product) |
| Country of origin | Correctly declared on customs documents |

---

## 4. VSON Brand Identity Standards

### Brand Elements

| Element | Specification |
|---------|-------------|
| Company name (formal) | CÔNG TY TNHH ĐẦU TƯ CÔNG NGHỆ VIỆT SING |
| Company name (English) | VIET SING TECHNOLOGY INVESTMENT COMPANY LIMITED |
| Abbreviation | VSON CO., LTD |
| Tagline | "An Gia An Phú" |
| Website | vson.vn |
| Email (business) | vson.store@gmail.com |
| Hotline | 0902.964.858 |
| HQ Address | 58 Đường 24A, Phường An Phú, TP. Thủ Đức, TP. Hồ Chí Minh |

### Brand Voice

| Context | Tone | Example |
|---------|------|---------|
| B2C customer-facing | Warm, caring, family-focused, trustworthy | "Bảo vệ sức khỏe gia đình bạn" |
| B2B client-facing | Professional, consultative, confident, strategic | "Your Brand Solution Consultant for Vietnam" |
| Internal team | Direct, clear, action-oriented | Use VS- skill language and process names |

### Brand Hierarchy Rules

- **B2C communications:** Lead with product brand (Torayvino, Zojirushi, Kingbag, Nepia).
  VSON appears as endorser ("distributed by VSON" or "VSON Store")
- **B2B communications:** Lead with VSON corporate brand. Product brands are
  proof points of capability, not the headline
- **Never:** Use the VSON logo alongside competitor brands or in contexts that
  could imply VSON endorses products it doesn't distribute

---

## 5. Internal Communication Standards

### Response Time Standards (Internal)

| Communication Type | Expected Response |
|-------------------|------------------|
| Urgent (marked urgent or critical) | Within 1 hour during business hours |
| Normal business message (Zalo/email) | Within 4 business hours |
| Non-urgent (FYI, informational) | Within 1 business day |
| Client-facing (any channel) | Per delivery promise in VS-Strategy-Delivery-Plan |

### Meeting Cadence (Recommended)

| Meeting | Frequency | Duration | Attendees | Purpose |
|---------|-----------|----------|-----------|---------|
| Daily standup | Daily (if team > 3) | 10 min | All | What I did, what I'll do, blockers |
| Weekly ops review | Weekly | 30 min | Founder + ops | B2C orders, B2B project status, issues |
| Pipeline review | Weekly | 15 min | Founder | Review VS-B2B-Presales deal tracker |
| Monthly review | Monthly | 60 min | All | Financial review, marketing review, team check-in |
| Quarterly strategy | Quarterly | 2-3 hrs | Founder + key team | VS-Strategy skill reviews, OKR scoring |

---

## 6. Skill Maintenance and Governance

### Version Control

All VS- skills follow semantic versioning: **v[Major].[Minor]**

| Change Type | Version Bump | Example |
|------------|-------------|---------|
| New section, framework change, structural redesign | Major (v1.0 → v2.0) | Adding a new delivery track |
| Template update, wording improvement, new examples | Minor (v1.0 → v1.1) | Updating pricing ranges |
| Typo fix, formatting | No version change | Fixing a spelling error |

### Review Cadence

| Skill Layer | Review Frequency | Reviewer |
|-------------|-----------------|----------|
| VS-Strategy-* | Annually (during strategic planning) | Founder |
| VS-B2B-* | After every 5 completed projects or annually | Founder |
| VS-B2C-* | Quarterly (aligned to marketing review) | Founder + team |
| VS-Core | Annually or when regulations change | Founder |

### Improvement Process

When a skill doesn't match reality (process step is wrong, template is missing info,
framework doesn't fit):

1. Note the gap during daily work (don't stop working to fix it)
2. Add to the next relevant review (weekly ops or quarterly strategy)
3. Update the skill file with the improvement
4. Increment minor version
5. Notify team of the change

---

## Integration with Other VS- Skills

```
VS-Core (this skill)
  Naming conventions  → used by ALL skills for document IDs
  Compliance framework → referenced by VS-B2B-Contracting, VS-B2B-Finance, VS-B2C-Finance
  Brand standards     → referenced by VS-B2C-Marketing, VS-B2C-Listing, VS-B2B-Presales
  Skill registry      → master index of all VS- skills
        ↑
  ALL other VS- skills reference VS-Core for shared standards
```

---

## When to Use This Skill

**Always trigger when:**
- Creating any new internal document (need ID format)
- Naming files (need naming convention)
- Checking compliance requirements (privacy, tax, import)
- Brand usage questions (logo, messaging, voice)
- Looking up which VS- skill covers a topic
- Onboarding new team members (start here for overall orientation)
- Creating or updating any VS- skill (follow governance standards)
- Setting up internal communication norms

**Do not use for:**
- Operational tasks (use the specific B2B or B2C skill)
- Strategic planning (use the specific strategy skill)
- This skill is reference material, not an action workflow
