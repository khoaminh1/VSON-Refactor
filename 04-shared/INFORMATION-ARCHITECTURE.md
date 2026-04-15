# VSON Advisory — Information Architecture & Content Strategy

**Document Version**: 1.0
**Date**: 2026-03-29
**Status**: For Review

---

## 1. Current Site Structure (6 Pages)

### Primary Content Pages

| Page | URL | Purpose | Audience | Key Sections |
|------|-----|---------|----------|--------------|
| **Home** | `/index.html` | Primary entry point; brand narrative and capability showcase | All audiences | Hero · Value Chain · Audience Pathways · Why VSON · Capability Snapshot · Brain Trust Preview · Vault Preview · Final CTA |
| **Approach** | `/approach.html` | Engagement philosophy and methodology | Prospects deciding whether to engage | 4-Layer Solution Stack · Engagement Steps |
| **Brain Trust** | `/brain-trust.html` | Full team bios and focus areas (expansion of preview) | All audiences; decision confirmation | Full profiles of 3+ team members · Expertise matrix · Track record |
| **Vault** | `/vault.html` | Boardroom-level insights and thought leadership | Founders, operators, capital partners | Full article list · Category filter by pillar · Search |
| **Contact** | `/contact.html` | Lead qualification and regional contact information | Prospects ready to engage | Qualification form · 3 regional contact cards · Contact logic |
| **Footer** | All pages | Legal, compliance, and navigation anchor | Legal/compliance teams | Privacy Policy · Terms of Service · Legal entity info (UEN, address) |

---

## 2. Navigation Architecture

### Primary Navigation (Header)

```
VSON ADVISORY (logomark + wordmark)
├─ Approach        → /approach.html
├─ Brain Trust     → /brain-trust.html
├─ The Vault       → /vault.html
├─ Contact         → /contact.html
└─ CTA Button: "Request a Conversation"
```

### Footer Navigation (Cross-Page)

```
Services Column          Company Column          Contact Column
├─ Strategic Finance     ├─ Approach              ├─ fred@vson.global
├─ Performance           ├─ Brain Trust           ├─ +65 8048 8548
├─ CX & Revenue          ├─ The Vault             └─ LinkedIn
├─ Digital Infrastructure└─ Contact
├─ Global Gateway
└─ Applied AI
```

### Internal Linking Strategy

**From Home Page:**
- Hero CTA → /approach.html (or /contact.html depending on button variant)
- "Brain Trust Preview" section → /brain-trust.html
- "The Vault Preview" section → /vault.html
- Final CTA banner → /contact.html
- Footer → All pages via navigation

**From Approach Page:**
- Final CTA → /contact.html
- Brain Trust reference (if any) → /brain-trust.html

**From Brain Trust Page:**
- Footer CTAs → /contact.html or /approach.html

**From Vault Page:**
- Article reads → Stay on /vault.html or link to future blog/article pages
- Final CTA → /contact.html

**From Contact Page:**
- Post-submission CTA → Thank you message with links to /approach.html or /vault.html

---

## 3. Content Expansion Plan (Future Pages)

### Phase 1: Foundation (Months 1-2)

These pages are required for legal compliance and credibility:

| Page | URL | Priority | Owner | Status |
|------|-----|----------|-------|--------|
| **Privacy Policy** | `/legal/privacy.html` | CRITICAL | Emily Vo (Legal) | Not started; must be live at launch |
| **Terms of Service** | `/legal/terms.html` | CRITICAL | Emily Vo (Legal) | Not started; must be live at launch |

**Content Guidelines:**
- Privacy Policy: PDPA compliance (how personal data collected from contact form is handled)
- Terms of Service: Engagement terms, confidentiality, IP, liability

---

### Phase 2: Content & Authority (Months 2-4)

These pages build thought leadership and improve SEO:

| Page | URL | Priority | Owner | Content Type | Estimated Length |
|------|-----|----------|-------|--------------|------------------|
| **Blog/Insights** | `/insights/` or `/blog/` | HIGH | Content team | Index of all articles (Vault articles + new pieces) | Dynamic list |
| **Case Study (Sample)** | `/case-studies/[slug].html` | HIGH | Frederick Dang | Real-world outcome story; 4-layer mapping | 1500-2000 words |
| **Team Member Bios** | `/team/[name].html` | MEDIUM | Each partner | Extended background, book recommendations, LinkedIn | 800-1200 words each |

**Content Guidelines:**
- Case studies map to the 4-Layer Solution Stack; show diagnostic → outcome journey
- Blog articles position VSON expertise against specific challenges (mid-market, cross-border, CX-as-leverage)
- Team bios link back to Brain Trust overview page

---

### Phase 3: Engagement & Conversion (Months 4-6)

| Page | URL | Priority | Owner | Content Type |
|------|-----|----------|-------|--------------|
| **Service Deep-Dive Pages** | `/services/[pillar].html` | MEDIUM | Emily Vo | One page per capability pillar (6 total) |
| **FAQ / Resource Library** | `/resources/` | LOW | Content team | Downloadable resources, frameworks, templates |
| **About VSON** | `/about.html` | MEDIUM | Frederick Dang | Company origin story, vision, values, partner ecosystem |
| **Partner Ecosystem** | `/partners/` | LOW | Henry Hung | Logos + brief of key partner integrations (AWS, etc.) |

**Content Guidelines:**
- Service pages: Problem statement → VSON approach → Expected outcomes (per pillar)
- Resources: Downloadable templates for DIY operators; lead magnets for inbound marketing

---

### Phase 4: Community & Network (Months 6+)

| Page | URL | Priority | Owner | Content Type |
|------|-----|----------|-------|--------------|
| **Expert Network** | `/network/` | LOW | Network lead (TBD) | Directory of vetted advisors, integrations partners |
| **Events / Webinars** | `/events/` | LOW | Marketing | Upcoming webinars, roundtables, workshops |
| **Podcast / Video** | `/media/` | OPTIONAL | Content team | Video clips, podcast episodes, thought leadership |

---

## 4. Content Taxonomy & Organization

### Content Pillars (6 Primary Themes)

All content is tagged with one or more pillar to enable filtering and cross-linking:

1. **Strategic Finance & M&A Integrity** — Deal diligence, structure, investment readiness
2. **Performance Transformation** — Operational improvement, cost, efficiency
3. **CX — The Profit Multiplier** — Customer experience as a business lever
4. **Digital Infrastructure & Data** — CDP, BI, governance, reporting
5. **Global Gateway & Franchise** — Cross-border expansion, local execution
6. **Investment Readiness & Exit Advisory** — Capital raising, M&A positioning, exit execution

### Article/Content Tagging

```
Article Title
├─ Pillar: [Primary pillar + secondary pillars]
├─ Target Audience: [Business Owner | Investor | Technical Partner]
├─ Challenge: [Specific business problem article solves]
├─ Internal Link: [3-4 related articles or service pages]
└─ CTA: [Contact | Download Resource | Read Related Article]
```

**Example:**
> Title: "Why Mid-Market Companies Stall Before Institutional Scale"
> Pillar: Strategic Finance & M&A Integrity (primary) + Performance Transformation (secondary)
> Audience: Founder / Operator of $5M–$50M business
> Challenge: Scaling chaos, governance gaps, valuation readiness
> Internal Links: /services/strategic-finance, /case-studies/[example], /approach
> CTA: Request Strategic Briefing

---

## 5. URL Naming Convention

### Pattern Rules

```
/[section]/[page-slug].html

Section Examples:
├─ / (root)           — Home, Approach, Brain Trust, Contact
├─ /services/         — Service pillar deep-dives
├─ /insights/         — Blog articles, thought leadership
├─ /case-studies/     — Real client stories
├─ /team/             — Individual team member bios
├─ /resources/        — Downloadable assets
├─ /legal/            — Privacy, Terms
└─ /media/            — Video, podcast, events
```

### Naming Examples

**Blog Article:**
`/insights/mid-market-scaling-trap.html`

**Case Study:**
`/case-studies/cross-border-expansion-vietnam-to-usa.html`

**Team Bio:**
`/team/frederick-dang.html`

**Service Pillar:**
`/services/strategic-finance-and-mna.html`

---

## 6. SEO & Metadata Strategy

### Page Metadata Template

Every page should include:

```html
<title>[Page Title] — VSON Advisory</title>
<meta name="description" content="[120-160 character summary]">
<meta name="keywords" content="[3-5 primary keywords relevant to pillar + challenge]">
<meta property="og:title" content="[Title]">
<meta property="og:description" content="[Summary]">
<meta property="og:image" content="/assets/og-[page-slug].png">
<meta property="og:url" content="https://vson.global[/path]">
<link rel="canonical" href="https://vson.global[/path]">
```

### Keyword Strategy by Pillar

| Pillar | Primary Keywords | Long-Tail Keywords |
|--------|-----------------|-------------------|
| **Strategic Finance & M&A** | investment readiness, M&A preparation, deal diligence, valuation | how to prepare for acquisition, pre-IPO checklist |
| **Performance Transformation** | operational efficiency, cost optimization, turnaround | improve business operations, stabilize underperforming business |
| **CX — Profit Multiplier** | customer experience strategy, CX ROI, customer retention | how to measure CX impact on revenue |
| **Digital Infrastructure & Data** | CDP, business intelligence, data governance | customer data platform, BI for SMB |
| **Global Gateway & Franchise** | cross-border expansion, franchising, market entry | how to expand to new markets, franchise model development |
| **Applied AI & Automation** | AI for business, automation ROI, process optimization | practical AI use cases, RPA for SMB |

---

## 7. Content Calendar & Publishing Schedule

### Launch Phase (Month 1)
- All 6 primary pages live
- Privacy Policy + Terms of Service live
- Blog/Insights index page live (empty or with 1-2 placeholder articles)

### Growth Phase (Months 2-4)
- Case study #1 published
- 4 blog articles published (1 per month, rotating between pillars)
- Service pillar pages published (1 per month)
- Team bio pages live

### Authority Phase (Months 5+)
- Weekly blog/insights published
- Monthly webinar/event page updated
- Resource library populated with 5-10 downloadable templates

---

## 8. Sitemap Overview

```
VSON Advisory Sitemap
├─ / (home)
├─ /approach
├─ /brain-trust
├─ /vault
├─ /contact
├─ /services/
│  ├─ strategic-finance.html
│  ├─ performance-transformation.html
│  ├─ cx-profit-multiplier.html
│  ├─ digital-infrastructure.html
│  ├─ global-gateway.html
│  └─ applied-ai.html
├─ /insights/
│  ├─ (index)
│  ├─ mid-market-scaling-trap.html
│  ├─ hidden-valuation-cost.html
│  └─ [future articles]
├─ /case-studies/
│  └─ [sample case studies]
├─ /team/
│  ├─ frederick-dang.html
│  ├─ henry-hung.html
│  └─ emily-vo.html
├─ /resources/
│  └─ [downloadable templates]
├─ /legal/
│  ├─ privacy.html
│  └─ terms.html
└─ /media/
   └─ [videos, podcasts, events]
```

---

## 9. Content Management & Governance

### Content Ownership

| Section | Owner | Approval | Update Frequency |
|---------|-------|----------|------------------|
| Home, Approach, Contact | Frederick Dang (PM) | Emily Vo (QA) | Quarterly review |
| Brain Trust | Frederick Dang | — | As-needed (staff changes) |
| Vault articles | Emily Vo (Editor) | Frederick Dang | Monthly min. |
| Case studies | Frederick Dang | Emily Vo | Per engagement |
| Service pillars | Emily Vo | Frederick Dang | Quarterly review |
| Privacy / Terms | Emily Vo | Legal counsel (external) | As-needed (compliance) |

### Content Review Checklist

Before publishing any new content page:

- [ ] **Pillar alignment** — Explicitly stated which of the 6 pillars the page supports
- [ ] **Audience clarity** — Written for a specific buyer persona (founder, operator, investor)
- [ ] **SEO metadata** — Title, description, keywords, OG tags completed
- [ ] **Internal linking** — Minimum 3 links to related pages or CTAs
- [ ] **Tone & brand** — Aligns with VSON voice (serious, operator-backed, pattern-driven)
- [ ] **Mobile responsiveness** — Tested on mobile; images optimized
- [ ] **Accessibility** — Headings hierarchy correct, alt text on images, contrast meets WCAG AA
- [ ] **Link validation** — No broken internal or external links

---

## 10. Future Expansion Triggers

### When to Add New Pages

**Case Study Page:**
- When a signed engagement is complete + client grants permission
- Must map to 4-Layer Solution Stack; show diagnostic → outcome journey

**Blog Article:**
- When VSON team generates IP (framework, insight, pattern)
- Minimum 1 per quarter per pillar (6/year)
- Can be repurposed from client engagements, talks, advisor conversations

**Service Deep-Dive Page:**
- When a pillar has enough substantive thinking to warrant dedicated page
- Should include problem statement, VSON approach, expected outcomes, sample 4-layer mapping

**Team Bio Page:**
- When a new advisor/partner joins the network
- Should include background, focus areas, book recommendations, LinkedIn

---

## 11. Analytics & Reporting

### Key Metrics to Track

- **Page views** by pillar and audience segment
- **Time on page** (engagement signal)
- **Bounce rate** (content relevance signal)
- **Internal link clicks** (content discovery signal)
- **Contact form submissions** by source page (conversion signal)
- **Blog article dwell time** (thought leadership credibility)

### Monthly Content Reporting

Template:

```
Page Traffic & Engagement (Month X)
├─ Top 5 pages by views
├─ Bounce rate by pillar
├─ Contact form submissions by source
├─ New content published: [X articles]
└─ Recommended next actions: [prioritized list]
```

---

## Summary: Content Expansion Roadmap

| Phase | Timeline | Key Deliverables | Owner |
|-------|----------|------------------|-------|
| **Phase 0: Launch** | Week 1-2 | 6 pages live + Privacy/Terms | Frederick Dang + Emily Vo |
| **Phase 1: Foundation** | Month 1-2 | Legal pages fully compliant | Emily Vo |
| **Phase 2: Authority** | Month 2-4 | 1 case study + 4 blog articles + Service pages | Emily Vo (content) + Frederick (strategy) |
| **Phase 3: Conversion** | Month 4-6 | Service pillars, FAQ, Resources, About | Emily Vo + team |
| **Phase 4: Community** | Month 6+ | Expert network, events, media | Henry Hung (GTM lead) |

---

**Next Step:** Once this Information Architecture is approved, the Developer Template/Style Guide will provide code patterns for implementing all pages consistently.
