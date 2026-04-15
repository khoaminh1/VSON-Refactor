# VNV Service Product Design Canvas | Website Delivery Pod

```
Pod Name:         Website Delivery Pod (CX/MarTech)
Version:          v0.1 (Draft)
Status:           [x] Draft  [ ] Peer Review  [ ] Approved
PM:               Fred Dang (Director of Consulting)
Peer Reviewer:    TBD
Date:             2026-04-06
Cynefin Domain:   [ ] Clear (Standardised)  [x] Complicated (Expert)  [ ] Complex (Experimental)
```

---

## Section 1 — Problem Space

### 1.1 Job-to-be-Done (JTBD)

"When an enterprise CX/MarTech team needs to launch or refresh a corporate website, the CX Director needs a structured, quality-governed delivery methodology with reusable accelerators integrated into their existing developer team, so that the site ships performant (Lighthouse 95+), accessible (WCAG 2.1 AA), and on schedule instead of ad-hoc builds that miss quality targets and slip timelines."

### 1.2 Cost of Inaction (COI)

| Cost driver | Without this Pod | Estimated annual cost |
|---|---|---|
| Rework from no quality gates | Developer team ships pages that fail accessibility, performance, or security audits; rework cycle adds 2-4 weeks per project | $15K-40K per project in wasted developer hours |
| No reusable standards | Every website project starts CSS architecture, SEO setup, and QA checklists from scratch | $10K-20K duplication per project |
| No stage gate governance | Scope creep, unstructured stakeholder feedback loops delay launch by 4-8 weeks | $20K-50K in delayed time-to-market |
| Accessibility and compliance gaps | Sites fail WCAG, miss security headers; legal and reputational risk | $5K-100K+ depending on jurisdiction and sector |
| No IP accumulation | The 10th website is no faster than the 1st; team never builds institutional knowledge | Compounding inefficiency |

**Total COI range:** $50K-210K per website project depending on enterprise size and regulatory exposure.

### 1.3 Success Definition

This Pod is successful when:
- Client's developer team delivers a website scoring 95+ Lighthouse (Performance, Accessibility, Best Practices, SEO)
- Site is WCAG 2.1 AA compliant
- Delivery completes within the agreed sprint plan (no more than 1 sprint overrun)
- Client's team can reuse the governance framework and technical accelerators on their next project without Vinova involvement

Measured by: Lighthouse scores (automated), WCAG audit (automated + manual), sprint velocity (planned vs. actual), and client reuse rate (post-engagement survey at 6 months).

---

## Section 2 — Sense-Making (Cynefin and Delivery Model)

### 2.1 Domain Classification Rationale

**Complicated (Expert Pod).** The technology is proven (HTML/CSS/JS, Netlify/Vercel, accessibility standards are well-documented). However, applying these patterns to each client's brand identity, content structure, and information architecture requires expert judgment from:
- SA: architecture decisions, CSS design system, performance optimisation
- BSC/Lead Consultant: content quality, UX review, stakeholder alignment
- QC: automated and manual quality verification

Not Complex: the tech stack is mature and the delivery pattern is proven across 2 parallel projects (VS26 programme).
Not yet Clear: each client's IA, brand, and content is different enough to require senior involvement in discovery and design phases.

### 2.2 Delivery Model Selected

**[x] Expert-guided delivery (Complicated)** — Vinova overlays governance, SA, and QC onto the client's existing developer team. Vinova does not replace the client's team; Vinova makes their team deliver better and faster.

**Overlay model:**
- Vinova provides: SA (architecture + standards), QC (quality gates + automated testing), PM (sprint governance + stakeholder management)
- Client provides: Developers (execution), Content team (copy + assets), PO (requirements)
- Shared: Lead Dev review sits with whichever side has the stronger senior developer

### 2.3 Domain Migration Plan

After 5 Pod deliveries:
- Reassess Standard Core percentage (target: >80%)
- If Standard Core >80% and client teams consistently pass quality gates with minimal SA intervention, reclassify as Clear
- At Clear: fixed-price eligible, Rikkei execution team can replace client developers for smaller engagements
- Trigger: when the SA role reduces to a 1-day architecture review rather than ongoing sprint involvement

---

## Section 3 — Pod Composition

### 3.1 Technical Proof (C4 Patterns)

**C4 Level 1 (System Context):**
- System: Corporate website (static HTML/CSS/JS, hosted on Netlify/Vercel)
- External actors: Website visitors, CMS (if applicable), Analytics (GA4), Form handler (Netlify Forms / third-party), DNS provider
- Boundaries: No backend application server; all dynamic behaviour via third-party services or client-side JS

**C4 Level 2 (Container):**
- Container 1: HTML pages (semantic, accessible, responsive)
- Container 2: CSS design system (single-file, custom properties for tokens)
- Container 3: JS interaction layer (vanilla, no framework dependency)
- Container 4: Netlify/Vercel platform (hosting, forms, redirects, security headers)
- Container 5: CI/CD (git-based deploy, preview URLs per branch)

**Architectural pattern:** Static site with design token architecture. No framework overhead. Progressive enhancement. Scores 95+ Lighthouse by design.

**Pre-built IP accelerators (from Pod 1):**
- BDL-05: CSS Architecture Starter (token system, HTML template, developer guide, JS library)
- BDL-06: Netlify Deployment Kit (netlify.toml, robots.txt, sitemap.xml)
- BDL-04: Quality Gate Suite (11-point checklist, 3 quality policies, UAT script)

Technical Proof validated by: Evidenced in VS26 programme (2 sites, 18 pages, 132 PASS / 0 FAIL UAT)

### 3.2 Pod Roles

```
VINOVA OVERLAY (governance + quality):
  Solution Architect (SA)     Senior    Rikkei-eligible: No
    Architecture decisions, CSS design system, standards enforcement, sprint scope review
  QC Engineer                 Mid       Rikkei-eligible: Yes
    Lighthouse audit, accessibility audit, responsive testing, automated UAT
  Programme/Project Manager   Senior    Rikkei-eligible: No
    Sprint governance, stage gates, stakeholder management, RAID, acceptance

CLIENT TEAM (execution):
  Developers (2-5)            Client staff
    Page builds from design specs using Vinova's Standard Core accelerators
  Content/PO                  Client staff
    Copy, images, requirements, acceptance criteria
  Lead Developer              Client or Vinova (whoever has the stronger senior dev)
    Code review, cross-page consistency, integration checks

SHARED SUPPORT:
  TPM/Scrum Master            Rikkei-eligible: Yes
    Sprint cadence, DORA metrics, impediment tracking
```

**Minimum Viable Pod (budget-constrained or small site):**
- SA (part-time, 1 day/sprint) + QC (part-time, 1.5 days/sprint) + Client developers
- Condition: Standard Core >= 80%; site scope <= 6 pages; single sprint

### 3.3 Mitosis Readiness

- [ ] Standard Core >= 80% — Currently ~70% after Pod 1; needs 2-3 more deliveries
- [ ] Second qualified SA exists and certified — Not yet; requires 1 supervised delivery
- [ ] Canvas SOP allows new SA onboarding in <= 3 days — Partially; Developer Guide exists but SA-specific onboarding doc needed
- [ ] >= 2 prior Pod deliveries at target margin — Pod 1 only (internal, no commercial margin data)

**Mitosis status: Not yet ready.** Gap: need 2+ commercial deliveries and a second certified SA.

---

## Section 4 — IP and Reuse Engine (Standard Core / Custom Edge)

### 4.1 Standard Core (estimated ~70% of delivery scope)

Sourced from VS26 IP Harvest Log (`03-knowledge/ip-harvest/IP-HARVEST-LOG.md`):

| Bundle | Components | Rikkei-deliverable? |
|---|---|---|
| BDL-01: Sprint Governance Kit | DoR, DoD, Sprint Template, Agent Workflow, Retro Template | Yes (execution) |
| BDL-02: Stage Gate Suite | Stage Gates B1-B6, Build-Ready Checklist, Release Protocol, Acceptance Review | Yes (with PM oversight) |
| BDL-03: Programme Tracker Pack | Build Tracker, Impediment Backlog, Programme Charter, RAID Log | Yes (with PM oversight) |
| BDL-04: Quality Gate Suite | 11-Point Standards, 3 Quality Policies, UAT Script, UAT Report | Yes |
| BDL-05: CSS Architecture Starter | CSS Pattern, HTML Template, Developer Guide, JS Library, Token Methodology | Yes |
| BDL-06: Netlify Deployment Kit | netlify.toml, SEO files, ADR format | Yes |
| BDL-07: Discovery and Design Kit | IA Methodology, Design Spec, Content Review, Discovery Brief, Wireframe Workflow | No (requires SA/BSC judgment) |
| BDL-08: Content Pattern Library | Case Study Pattern | Yes |

Standard Core as % of total delivery scope: **~70%**
- [ ] >= 80% — Fixed-price eligible
- [x] 60-79% — Phase-gated fixed-price eligible
- [ ] < 60% — Time-and-materials only

### 4.2 Custom Edge (~30%)

| Component | Why it cannot be standardised | Handled by |
|---|---|---|
| Client brand identity (colors, typography, visual language) | Every client's brand is unique | SA + Client design team |
| Information architecture (page structure, nav, user journeys) | Varies by client's service offering and audience | SA + BSC |
| Content (copy, images, bios, case studies) | Client-owned, client-authored | Client content team |
| Discovery and stakeholder alignment | Each client's decision-making structure is different | PM + BSC |
| Domain-specific compliance overlay | Varies by sector (BFSI, healthcare, public sector) | SA + Compliance |

---

## Section 5 — Commercial Truth

### 5.1 Value Unit

**[x] Man-hours (early-stage Pod)** — for the first 3-5 commercial deliveries while the Standard Core matures.

Migration path:
- Pod 1-5: Man-hours with phase gates (current)
- Pod 6-10: Outcome-linked fixed-fee (when Standard Core >= 80%)
- Pod 11+: Assess Outcome-as-a-Service for retainer-based website maintenance

### 5.2 Margin Analysis (Placeholder Rates)

**Scenario: 12-page corporate website, 3 sprints, overlay model**

| Role | Hours | Rate (placeholder) | Cost |
|---|---|---|---|
| SA (Vinova onshore) | 27 hrs | $100/hr | $2,700 |
| PM (Vinova onshore) | 27 hrs | $100/hr | $2,700 |
| QC (Rikkei offshore) | 27 hrs | $35/hr | $945 |
| TPM (Rikkei offshore) | 12 hrs | $30/hr | $360 |
| **Vinova total cost** | **93 hrs** | | **$6,705** |

Note: Client developers are client-funded. Vinova only costs the overlay team.

| Revenue model | Revenue | Gross margin |
|---|---|---|
| At $120/hr blended (93 hrs) | $11,160 | $4,455 (40%) |
| At $100/hr blended (93 hrs) | $9,300 | $2,595 (28%) |
| At $140/hr blended (93 hrs) | $13,020 | $6,315 (49%) |

**[ ] Gross Margin >= 35% at $120/hr blended — PASSES**
**[x] Gross Margin < 35% at $100/hr — BLOCKED: requires repricing or scope adjustment**

Minimum viable blended rate for 35% margin: ~$110/hr

### 5.3 Pricing Strategy

| Tier | Description | Price range | Duration |
|---|---|---|---|
| Pilot | SA architecture review + QC audit of client's existing site | $3K-5K | 1 week |
| Standard (overlay, 6-12 pages) | Full 3-sprint governance overlay | $10K-15K | 3-4 weeks |
| Enterprise (overlay, 12-30 pages, multi-stream) | Programme-level governance, dual-stream | $15K-25K | 4-8 weeks |

### 5.4 SC Handoff Package

- Fixed-cost components (Standard Core): governance setup + QC automation = ~$3K (not negotiable)
- Variable components (Custom Edge): SA days for discovery/design = $100-140/hr depending on complexity
- Approved discount ceiling: 10% — requires PM/HoS approval to exceed
- Lead time to staff: 1-2 weeks (SA availability dependent)

---

## Section 6 — IP Harvest Plan

### 6.1 Accelerator Harvest Schedule

| Component to harvest | Form | Target completion | Owner |
|---|---|---|---|
| CMS integration pattern (WordPress, Contentful, Strapi) | ADR + IaC template | After Pod 2 (first client with CMS) | SA |
| Multi-language site pattern (i18n URL strategy, font subsetting) | Architecture pattern + checklist | After Pod 3 (first bilingual client) | SA |
| E-commerce gateway pattern (Shopify/WooCommerce integration) | ADR + HTML template | After Pod 4 | SA |
| Client developer onboarding playbook | Guide (1-day onboarding) | After Pod 2 | PM |
| Industry-specific compliance overlays (BFSI, healthcare, gov) | Checklist per sector | After Pod 3-5 | BSC |

### 6.2 Efficiency Improvement Tracking

| Pod | Senior hrs/page | Execution hrs/page | Total hrs/page | vs. Pod 1 |
|---|---|---|---|---|
| Pod 1 (VS26 baseline) | 9 hrs | 9 hrs | 18 hrs | -- |
| Pod 5 target | 7.5 hrs | 7.5 hrs | 15 hrs | -17% |
| Pod 11 target | 7.2 hrs | 7.2 hrs | 14.4 hrs | -20% |

Source: `03-knowledge/ip-harvest/EFFICIENCY-BASELINE.md`

### 6.3 IP Ownership and Access

All harvested IP is Vinova-owned. Client receives a licence to use deliverables (governance templates, quality checklists) for their own ongoing use, but not the underlying accelerator library or Canvas methodology. This must be stated in the client engagement contract.

IP access: `03-knowledge/ip-harvest/IP-HARVEST-LOG.md` (8 bundles, 31 entries from Pod 1)

---

## Section 7 — Singapore Compliance Gate

### 7.1 Data and Privacy

- [x] PDPA — Website Pod handles contact form submissions (personal data: name, email, message). Privacy by Design: Netlify Forms with honeypot spam protection, no client-side analytics PII, privacy policy link in footer. Standard Core includes form pattern with PDPA-compliant data handling.
- [ ] MTCS SS 584 — Not applicable for standard corporate websites. Flag if client is government or regulated entity.
- [ ] TR 92 — Not applicable (no data pipeline).

### 7.2 AI Governance

- [ ] AI Verify — Not applicable for Pod v1.0 (no AI components in standard website delivery)
- [ ] ISO 42001 — Not applicable
- [ ] LLM evaluation — Not applicable
- [ ] Hallucination control — Not applicable

Note: If future Pod iterations include AI-generated content or chatbot integration, revisit this section.

### 7.3 Sector-specific

- [ ] MAS TRM — Flag if client is BFSI. Add MAS TRM checklist to Custom Edge.
- [ ] FHIR / HIPS — Flag if client is healthcare. Add data sovereignty checks.
- [x] GDS principles — Standard Core already includes WCAG 2.1 AA. If client is public sector, add non-digital fallback documentation to Custom Edge.

**Compliance Gate sign-off:**
- [x] All applicable checks PASSED for standard corporate website scope
- [ ] Exceptions documented: sector-specific overlays deferred to Custom Edge per engagement
- Signed by: Fred Dang    Date: 2026-04-06 (draft, pending peer review)

---

## Canvas Sign-Off

```
PM:                Fred Dang       Date: 2026-04-06    Status: Draft
Peer Reviewer:     TBD             Date: TBD           Status: Pending
Head of Solutions: TBD             Date: TBD           Status: Pending
```

Canvas status after sign-off:
- [ ] Added to Service Product Catalog
- [ ] SC team briefed on Commercial Truth (Section 5.4)
- [ ] Portfolio Manager informed of Pod staffing requirements (Section 3.2)

---

## Cross-Reference

- IP Harvest Log: `03-knowledge/ip-harvest/IP-HARVEST-LOG.md`
- Standard Core Inventory: `03-knowledge/ip-harvest/STANDARD-CORE-INVENTORY.md`
- Efficiency Baseline: `03-knowledge/ip-harvest/EFFICIENCY-BASELINE.md`
- Catalog Entry: `03-knowledge/website-pod/CATALOG-ENTRY.md`
- Pod Composition detail: `03-knowledge/website-pod/POD-COMPOSITION.md`
