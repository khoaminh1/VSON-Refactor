# VSON Advisory | Content Replacement Copy
**Document ID:** VSA-RPT-20260401-001
**Date:** 2026-04-01
**Author:** Claude (drafted)
**Source of truth:** vs-advisory-core v1.0, references/team-profiles.md
**Status:** DECISIONS CONFIRMED by Fred 2026-04-01

All decisions are now locked:
- Hero headline: Option B | "We Don't Consult from a Distance. We Govern Outcomes."
- Why VSON heading: "From Risk to Performance to Exit Value."
- Team section name: "Leadership" (replacing "Brain Trust")
- Email domain: `@vsonadvisory.com`
- Pillar 6: "Investment Readiness & Exit Advisory" (vs-advisory-core takes precedence)

All replacement copy below is derived from approved content in the skill.
Nothing has been invented. Each section shows CURRENT → REPLACEMENT with rationale.

---

## 1. Hero Headline: Replace "Architects of Certainty"

**CURRENT:**
```
Architects of Certainty.
```

**PROBLEM:** "Certainty" is on the brand avoid list (capitalised abstraction). Fails the tone test. Sounds like a copywriter, not an operator.

**CONFIRMED REPLACEMENT:**
```
We Don't Consult from a Distance.
We Govern Outcomes.
```
Italic treatment on "Outcomes." matches the original italic on "Certainty."

Source: vs-advisory-core mandatory language: "We do not consult from a distance. We govern outcomes." Adapted to headline case.

---

## 2. Hero Sub-text and Body: Use approved positioning

**CURRENT sub-text:**
```
Operator-backed advisory connecting Vietnam, Singapore, and the USA through
governance, execution, and cross-border scaling.
```

**CURRENT body:**
```
VSON Advisory helps founders, operators, and investors move from operational
friction to institutional value. We work where deals, execution, and
cross-border growth require more than strategy slides.
```

**REPLACEMENT sub-text** (extracted from approved positioning statement):
```
Vietnam is one of Asia's most dynamic growth markets, and one of the most
difficult to navigate without the right partners on the ground. VSON Advisory
is a Singapore-headquartered boutique firm built specifically for this.
```

**REPLACEMENT body** (extracted from approved positioning statement):
```
We serve two complementary client groups: mid-market Vietnamese founders who
need governance, operational structure, and investment readiness to scale or
attract capital; and international investors and brands that need a trusted,
execution-capable presence to enter, transact, or grow in Vietnam.
```

Rationale: The approved Option E v2 positioning statement was written for the website About page and pitch decks. The hero is the first place a referred prospect reads; it should carry the strongest approved language.

---

## 3. "Brain Trust" → External-facing name

**CURRENT:** "Brain Trust" (nav, section heading, footer, CTAs)

**PROBLEM:** vs-advisory-core says "Brain Trust (internal use only, not external)."

**CONFIRMED REPLACEMENT:** "Leadership"

Applies to:
- Nav link: `Brain Trust` → `Leadership`
- Section eyebrow: `The Brain Trust` → `Leadership`
- Section heading: keep "Senior. Operator-Backed. Mandate-Focused." (passes tone test)
- Footer column: `Brain Trust` → `Leadership`
- CTA button: `Meet the Full Team →` → `Meet the Leadership →`
- Page filename: `brain-trust.html` → `leadership.html`

---

## 4. Emily Vo: Fix title from "Strategic Partner" to "Managing Partner"

**CURRENT (home page team card, line 664):**
```html
<div class="bt-role">Strategic Partner</div>
```

**CURRENT (contact page, line 915):**
```html
<div class="cd-sub" style="margin-top:2px;">Strategic Partner</div>
```

**REPLACEMENT (both locations):**
```html
<div class="bt-role">Managing Partner</div>
```
```html
<div class="cd-sub" style="margin-top:2px;">Managing Partner</div>
```

Source: team-profiles.md. "Emily Vo is a Managing Partner at VSON Advisory."

---

## 5. Partner Bios: Replace generic copy with approved short versions

### Frederick Dang

**CURRENT:**
```
Focus: Operations · Digital Transformation · Technology Architecture · Governance
Bio: Frederick works at the intersection of business structure, transformation
logic, and execution architecture across complex environments.
```

**REPLACEMENT:**
```
Focus: Digital Transformation · Deal Advisory · Firm Operations · Governance
Bio: Frederick has spent 16 years helping organisations across Southeast Asia
transform their operations through technology and structured advisory. He led
the deployment of a national digital portal serving over 300,000 households
and has advised on two M&A transactions in the IT consulting sector. At VSON,
Fred leads firm operations, client engagement, and digital transformation mandates.
```

Source: team-profiles.md, Frederick Dang SHORT VERSION.

### Henry Hung

**CURRENT:**
```
Focus: Cross-border GTM · Operations · Commercial Execution · Growth
Bio: Henry brings practical exposure to business expansion and execution in
market-facing environments, anchoring strategy to commercial movement.
```

**REPLACEMENT:**
```
Focus: Technology Distribution · Market Entry · Operator Network · Cross-Border
Bio: Henry brings over 25 years of hands-on operating experience building
technology and consumer markets across Vietnam. As a senior leader at FPT,
he directed market entry and distribution of global brands including IBM, HP,
Dell, Cisco, Lenovo, ASUS, and OPPO. Now US-based, Henry serves as VSON's
bridge into international capital markets.
```

Source: team-profiles.md, Henry Hung SHORT VERSION (condensed for card format).

### Emily Vo

**CURRENT:**
```
Focus: CX & Brand Resonance · Revenue Growth · Market Adaptation
Bio: Emily positions CX as a measurable enterprise lever connecting customer
experience with retention, loyalty, revenue quality, and valuation.
```

**REPLACEMENT:**
```
Focus: Operational Transformation · Investment Readiness · CX & Revenue Growth
Bio: Emily brings 18 years of operating and leadership experience across F&B,
retail, beauty, education, healthcare, e-commerce, and hospitality. She has
served as CEO of multi-unit operations and personally led fundraising and exit
processes at both growth and exit stages.
```

Source: team-profiles.md, Emily Vo SHORT VERSION (condensed for card format).

---

## 6. Add Hung Tran and Bernard Lim: New team cards

The current site shows 3 people. The approved team has 5. Add two cards in a
"Strategic Advisors" sub-section below the Managing Partners.

### Hung Tran: Strategic Advisor

```html
<div class="bt-card">
  <div class="bt-initial">H</div>
  <div class="bt-name">Hung Tran</div>
  <div class="bt-role">Strategic Advisor: Finance & Investment</div>
  <div class="bt-focus">Strategic Finance · Deal Advisory · Manufacturing · FMCG · Healthcare</div>
  <div class="bt-body">Hung Tran brings 15 years of experience in strategic finance
  and investment across manufacturing, industrial, automotive, fintech, infrastructure,
  FMCG, F&B, and healthcare. Based in Vietnam, he brings deep local market knowledge
  and direct deal experience to VSON's transaction support and investment readiness
  mandates.</div>
</div>
```

Source: team-profiles.md, Hung Tran SHORT VERSION (verbatim).

### Bernard Lim: Strategic Advisor

```html
<div class="bt-card">
  <div class="bt-initial">B</div>
  <div class="bt-name">Bernard Lim</div>
  <div class="bt-role">Strategic Advisor: Data & Analytics</div>
  <div class="bt-focus">Data Governance · Analytics Infrastructure · Financial Data Systems</div>
  <div class="bt-body">Bernard Lim brings 16 years of data and analytics experience
  across financial services, consulting, and consumer sectors. He has worked with
  OCBC, Haier, PwC, Aberdeen, and Prudential. He has built expertise in data governance,
  financial data systems, and analytics frameworks. Currently based in Ho Chi Minh
  City, Bernard supports VSON's data infrastructure and governance mandates.</div>
</div>
```

Source: team-profiles.md, Bernard Lim SHORT VERSION (verbatim).

**Layout note:** The current `bt-grid` is a 3-column grid. With 5 people, use a
3+2 layout: three Managing Partners on row 1, two Strategic Advisors on row 2.
Add a visual distinction by using a smaller eyebrow label "Strategic Advisors" above row 2 to signal the role difference without creating a separate page section.

---

## 7. "Built Different. By Design." - Replace Why VSON heading

**CURRENT:**
```
Built Different. By Design.
```

**PROBLEM:** Fails tone test. Sounds like a startup tagline, not an operator. Already flagged as blocker B6.

**CONFIRMED REPLACEMENT:**
```
From Risk to Performance
to Exit Value.
```
Rationale: The hero now carries the "govern outcomes" line, so the value chain spine (the structural backbone of all VSON capability copy) anchors this section instead. Specific, evidence-based, passes the tone test.

---

## 8. Fix "platform" → "firm"

**CURRENT (line 562):**
```
We are not a generalist firm. We are a focused, senior-led platform built for
high-trust, high-stakes mandates where execution quality matches strategic intent.
```

**REPLACEMENT:**
```
We are not a generalist consultancy. We are a focused, senior-led firm built for
high-trust, high-stakes mandates where execution quality matches strategic intent.
```

Source: vs-advisory-core avoid list. "platform (when referring to the firm itself)."

---

## 9. Credibility Bar: Replace retail/distribution framing

**CURRENT (line 669):**
```
Our partners have managed premium Japanese brands (Torayvino, Zojirushi),
global tech OEMs (Dell, HP, ASUS), and over 20 years of hands-on retail and
distribution experience across Vietnam.
```

**PROBLEM:** Makes VSON sound like a distribution company. The approved positioning emphasises governance, deal execution, and operator credibility, not product brands. Torayvino and Zojirushi are VSON Corporate (B2C retail) brands, not VSON Advisory credentials. Mixing the two contradicts the workspace rule that these are separate entities.

**REPLACEMENT:**
```
Our managing partners have collectively operated across technology distribution at
FPT, CEO-level roles across seven consumer sectors, national-scale digital
infrastructure projects, and M&A transactions spanning Vietnam, Singapore, and
the United States.
```

Source: Aggregated from approved team-profiles.md proof points:
- Henry → FPT, technology distribution
- Emily → CEO across 7 sectors, fundraising/exit
- Fred → national digital platform, M&A transactions
- Geographic span from all three profiles

---

## 10. Capability Pillar 6: Resolve conflict

**CURRENT on website:**
```
Pillar 6: Applied AI & Automation
"We apply AI only where it delivers practical business outcomes: better
forecasting, sharper segmentation, and leaner operations."
```

**vs-advisory-core says:**
```
Pillar 6: Investment Readiness & Exit Advisory
Lead: Emily + Hung Tran
Skill: vs-advisory-investment-readiness
```

**INFORMATION-ARCHITECTURE.md says:**
```
Pillar 6: Applied AI & Automation - Practical AI for business outcomes
```

**CONFLICT:** Two approved documents disagree. vs-advisory-core is the firm identity source of truth and should take precedence over the IA document.

**RECOMMENDATION:** Replace Pillar 6 on the website with the vs-advisory-core version:

```html
<div class="cap-card">
  <div class="cap-num">06</div>
  <div class="cap-title">Investment Readiness &amp; Exit Advisory</div>
  <div class="cap-body">We prepare businesses for capital raising, M&amp;A positioning, and exit execution by structuring the governance, financials, and valuation narrative that institutional investors require.</div>
</div>
```

**CONFIRMED:** vs-advisory-core takes precedence. Update `INFORMATION-ARCHITECTURE.md`
Pillar 6 from "Applied AI & Automation" to "Investment Readiness & Exit Advisory"
to match. Applied AI can be referenced as a cross-cutting enabler within other
pillars (e.g., Digital Infrastructure & Data) but is not a standalone pillar.

---

## 11. CTA Standardisation

Per PROJECT.md fix F2, all CTAs should use: **"Request a Strategic Briefing"**

**Current variations to fix:**
- Design system button: "Request Strategic Conversation" → "Request a Strategic Briefing"
- Hero CTA area: Remove competing "For Local Enterprises" / "For Global Capital" /
  "Join the Expert Network" as primary buttons. These belong in the Audience
  Pathways section, not the hero. The hero should have one clear CTA:
  "Request a Strategic Briefing"
- Keep "For Local Enterprises" and "For Global Capital" as secondary ghost buttons
  only in the Audience Pathways section cards.

---

## 12. Domain: Confirm email addresses

**vs-advisory-core says:** Website domain is `vson-advisory.global`
**Contact page emails:** `fred@vson.global`, `henry@vson.global`, `emily@vson.global`

**CONFIRMED:** Email domain is `@vsonadvisory.com`. Update all three:
- `fred@vson.global` → `fred@vsonadvisory.com`
- `henry@vson.global` → `henry@vsonadvisory.com`
- `emily@vson.global` → `emily@vsonadvisory.com`

Also update vs-advisory-core SKILL.md field "Website" from `vson-advisory.global`
to `vsonadvisory.com`.

---

## 13. Vault Pillar Tags: Align to official names

Per PROJECT.md fix F4, Vault article tags should use the 6 official IA pillar names.

**Current tags and status:**
- "Performance Transformation" - correct
- "Digital Infrastructure & Data" - correct
- "Global Gateway & Franchise" - correct
- "CX as a Profit Multiplier" - correct (matches IA: "CX: The Profit Multiplier")
- "Strategic Finance & M&A Integrity" - correct

All 5 Vault tags appear to match IA pillar names. No change needed unless Pillar 6
is resolved differently (see #10).

---

## Summary: All Decisions Confirmed

| # | Decision | Confirmed |
|---|----------|-----------|
| 1 | Hero headline | "We Don't Consult from a Distance. We Govern Outcomes." |
| 7 | Why VSON heading | "From Risk to Performance to Exit Value." |
| 10 | Pillar 6 | Investment Readiness & Exit Advisory (vs-advisory-core wins) |
| 12 | Email domain | `@vsonadvisory.com` |
| 3 | "Brain Trust" rename | "Leadership" |

All 13 replacements are now confirmed and ready for implementation at build time
(2026-04-08). No further Fred decisions needed on content copy.

---

*End of document. This file should be reviewed alongside `PROJECT.md` blockers
B1–B6 and build-time fixes F1–F10.*
