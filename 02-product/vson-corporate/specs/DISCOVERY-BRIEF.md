# VSON Corporate Website — Discovery Brief

**Version:** 1.1 (English — confirmed)
**Date:** 2026-03-31
**Status:** ✅ Discovery confirmed — ready for design phase
**Phase:** Discovery → Design

---

## 1. Project Context

### What this site is
The official corporate website for **VSON** — the parent holding company.
It sits above both business lines and speaks on behalf of the full VSON ecosystem.

### What this site is NOT
- Not the VSON Store e-commerce site (that is a separate B2C build at `store.vson.vn`)
- Not a dedicated VSON Solutions microsite (future, separate build at `solutions.vson.vn`)

### Language strategy
- **Phase 1:** English only (this build) — `vson.vn` serves English by default
- **Phase 2:** Vietnamese version — `vson.vn/vi/` path, developed separately

---

## 2. Business Overview

**VSON** is a Vietnamese company with 20 years of heritage in commerce and solutions.
In 2026, VSON is repositioning as a **Phygital ecosystem** — bridging physical products and digital data infrastructure.

### Brand architecture

```
VSON  (Master / Parent Brand — public-facing name on corporate site)
├── VSON Store      — B2C Retail arm      (internal brand: An Gia)
└── VSON Solutions  — B2B Solutions arm   (internal brand: An Phú)
```

> **Note:** "An Gia" and "An Phú" are internal brand names. The English corporate website uses **VSON Store** and **VSON Solutions** exclusively. An Gia / An Phú remain in use on Vietnamese-language materials.

| | VSON Store (B2C) | VSON Solutions (B2B) |
|---|---|---|
| **Slogan** | An tâm từ chất lượng | An thịnh từ giải pháp |
| **Translation** | Peace of mind through quality | Prosperity through solutions |
| **Audience** | Households, end consumers | Corporates, brands, partners |
| **Logo** | House logo (4 orange windows) | Master V-icon (minimalist) |
| **Vibe** | Warm, safe, family-oriented | Professional, corporate, Phygital |

---

## 3. Target Audiences (Corporate Site)

All five audiences arrive via **referral or prior awareness** — they are verifying credibility, not discovering VSON for the first time. The site's primary job is to **build trust fast** and route each audience to the right next step.

| Audience | Primary need | Route on site |
|---|---|---|
| **Potential distributors / partners** | Understand VSON Store's distribution model | Home → Store → Contact |
| **Singapore corporates (MRA grant)** | Confirm VSON's credibility as Vietnam market partner | Home → Market Development → Contact |
| **Brands (merchandise / data platform)** | Understand Activation Solutions capabilities | Home → Activation Solutions → Contact |
| **Downstream activation agencies (referral)** | Understand partnership model | Home → Activation Solutions → Case Studies → Contact |
| **Procurement / brand teams (credibility check)** | Verify 20-year heritage and client roster | Home → About → Case Studies → Contact |

**Primary CTA across all audiences:** Start a conversation — "Request a Consultation"

---

## 4. Information Architecture

### Site map

```
vson.vn  (VSON Corporate Website)
│
├── Home
├── About
├── Solutions
│   ├── Activation Solutions
│   └── Market Development
├── Store
├── Case Studies
└── Contact
```

### Navigation bar

```
[ VSON logo ]   About   Solutions ▾   Store   Case Studies   Contact   [ Request a Consultation ]
                            ├── Activation Solutions
                            └── Market Development
```

### Domain structure

| URL | Purpose | Status |
|---|---|---|
| `vson.vn` | Corporate website — primary domain | ✅ Owned |
| `store.vson.vn` | VSON Store B2C site | 🔜 Future build |
| `solutions.vson.vn` | VSON Solutions dedicated site | 🔜 Future (optional) |

---

## 5. VSON Solutions — Two Solution Tracks

> **Strategic note:** Activation Solutions and Market Development serve fundamentally different buyers with different decision processes. They must be treated as separate pages with separate proof points, not bundled together.

### Track 1 — Activation Solutions (for Brands)

Target buyer: Brand marketing managers, CMOs, campaign agencies
Decision driver: Campaign ROI, data capability, activation execution

| Capability | Description |
|---|---|
| **Merchandise** | Branded corporate gifting and physical activation assets |
| **Data Platform** | Phygital data infrastructure — QR/NFC product identification, customer behaviour tracking |
| **Marketing Automation** | Automated campaign workflows connecting physical and digital touchpoints |
| **Campaign Intelligence** | Analytics and insights layer — campaign performance, audience segmentation |

> **Lead differentiators on this page:** Data Platform + Campaign Intelligence (these are harder to replicate; Merchandise is table stakes)

### Track 2 — Market Development (for Singapore Corporates)

Target buyer: Singapore SME CEOs, CFOs, strategy leads entering the Vietnam market
Decision driver: Local credibility, regulatory know-how, grant eligibility

**Context — Enterprise Singapore MRA Grant:**
VSON positions as the Vietnam-side partner for Singapore companies using the Market Readiness Assistance (MRA) grant to enter Vietnam.

| MRA Pillar | Grant Cap | How VSON delivers |
|---|---|---|
| Overseas Business Development | S$50,000 | Market entry strategy, business matching, partner search in Vietnam |
| Overseas Market Set-up | S$30,000 | Local entity formation, compliance, regulatory navigation |
| Overseas Marketing & PR | S$20,000 | Brand visibility and PR in the Vietnamese market |

**Total MRA support:** Up to S$100,000 per market at **70% funding** (from 1 April 2026)
**No pre-approved vendor list** — Singapore companies can engage VSON directly

---

## 6. Homepage Content Structure

**1. Hero**
- Headline: *VSON: Creating Real Value*
- Sub-headline: A pioneering ecosystem connecting household quality standards with enterprise growth solutions through seamless Phygital experiences.
- Visual: Art direction showing the intersection of physical product + digital data layer

**2. Two Strategic Pillars**
- Left — **VSON Store**
  - Message: International-standard health and household products (Torayvino, Zojirushi…) trusted by 500,000+ Vietnamese households.
  - CTA: Visit VSON Store
- Right — **VSON Solutions**
  - Message: Brand activation and market development solutions powered by 20 years of on-the-ground expertise and Phygital technology.
  - CTA: Explore Solutions

**3. Phygital Evolution**
- Headline: *Leading the Phygital era in Vietnam.*
- Three touchpoints:
  1. **Touch** — Physical products, world-class standards
  2. **Activate** — QR/NFC technology triggering instant digital interaction
  3. **Seamless** — End-to-end data enabling personalisation at scale

**4. Heritage & Trust**
- Headline: *20 years of partnership in growth.*
- Key figures: 20+ MNCs served · 500,000+ households reached · Nationwide distribution
- Partner logo strip

**5. Case Studies preview**
- Two featured stories: one Activation, one Market Development

**6. Footer**
- Office address, hotline, business email
- LinkedIn (B2B), Facebook (B2C), Zalo OA
- Tagline: *VSON — Building a Phygital ecosystem that endures.*

---

## 7. Brand Design System

### Colour palette — Master Brand (corporate site)

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary | Forest Green | `#1B4D3E` | Logo, headings, primary backgrounds |
| Secondary | Digital Emerald | `#2E8B57` | CTAs, growth indicators |
| Accent | Tech Mint | `#A7FFEB` | Data touchpoints, hover states, Phygital elements |
| Neutral | Mint White | `#F1F8F6` | Page backgrounds |
| Text (dark bg) | Clean White | `#FFFFFF` | Body text on dark backgrounds |
| Text (light bg) | Neutral Grey | `#333333` | Body copy on light backgrounds |

### Reference colours (for Store section only)

| Role | Name | Hex |
|---|---|---|
| Store primary | Retail Green | `#2AA84E` |
| Store accent | Warm Orange | `#ED7D28` |

### Typography

| Use | Font | Weight |
|---|---|---|
| Headlines | Montserrat | Bold / ExtraBold |
| Body text | Inter | Regular / Medium |

Both fonts support Vietnamese diacritics (required for Phase 2).

### Logo rules

- Corporate site: **Master V-icon** only (Forest Green on white; White/Tech Mint on dark)
- No drop shadows, no 3D effects — minimalism only
- Safe space = height of the "V" character
- **Never use orange** on the corporate canvas (orange = VSON Store only)
- **Never use gold or deep blue** — green ecosystem only

### Visual language

- Thin lines + circular nodes → data flow and Phygital connectivity
- Negative space used intentionally
- Grid-based layouts → precision and corporate authority

---

## 8. Tone of Voice

| Context | Tone |
|---|---|
| Corporate / Solutions | Decisive, professional, insightful |
| Store references | Sincere, warm, trustworthy |
| Brand statement | *"We don't just sell products — we engineer peace of mind and prosperity."* |

---

## 9. Design Directives (Strict Rules)

- ✅ Monochromatic green palette for all corporate and Solutions touchpoints
- ✅ Tech Mint reserved for Phygital / data / digital accents only
- ✅ Orange permitted only within the VSON Store section/page
- ❌ No orange on corporate, Solutions, or Market Development canvas
- ❌ No gold, no deep blue anywhere
- ✅ High-key lifestyle photography for Store references
- ✅ Data dashboard aesthetic for Solutions/Activation references
- ✅ Mobile-first layout
- ✅ Vietnamese diacritics-safe font stack (Montserrat + Inter)

---

## 10. Open Items (TODO)

- [ ] Confirm exact office address and contact details for footer
- [ ] Confirm partner logo list (which brands approved for display)
- [ ] Confirm case study examples — one Activation story, one Market Development story
- [ ] Confirm key figures (20+ MNCs, 500,000+ households — verify before publishing)
- [ ] Language toggle UI decision for Phase 2 (toggle vs. `/vi/` path)
- [ ] Hosting setup for vson.vn

---

## 11. Related Projects

### Within VSON ecosystem (same parent company)

| Project | Domain | Folder | Status |
|---|---|---|---|
| VSON Store (B2C retail site) | `store.vson.vn` | TBD | Planned (separate project) |
| VSON Solutions (B2B site) | `solutions.vson.vn` | TBD | Planned (future, optional) |

### Separate entity (same workspace, different business)

| Project | Domain | Folder | Note |
|---|---|---|---|
| VSON Advisory | `vsonadvisory.com` | `../vson-advisory/` | Completely separate business and brand — not part of the VSON parent ecosystem |

---

*Sources: Google Doc "Xây dựng Brand Guidelines VSON" (fetched 2026-03-31) · Enterprise Singapore MRA Grant research · Discovery conversation with Fred Dang (2026-03-31)*
