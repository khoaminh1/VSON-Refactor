# VSON Web Platform | Programme Consolidation Report

**Document:** VS26-WEB-CONSOLIDATION-R1
**Date:** 2026-04-04
**Author:** Fred Dang, Programme Manager
**Distribution:** Henry Hung (Executive Sponsor), Emily Vo (Executive Sponsor), Duy Le (Product Owner), CX Reviewer (external)
**Status:** All sprints accepted. Pre go-live.

---

## 1. Programme Summary

### 1.1 What We Built

Two standalone websites for two separate VSON business entities, delivered across 3 sprints in a single monorepo.

| Property | VSON Corporate | VSON Advisory |
|----------|---------------|---------------|
| Domain | vson.vn | vsonadvisory.com |
| UAT URL | https://vs26-newcorp.netlify.app | https://vs26-advisory.netlify.app |
| Pages | 13 (12 public + thank-you) | 7 (6 public + thank-you) |
| Language | English (Vietnamese planned Phase 2) | English |
| Forms | Contact (Netlify) | Contact + Vault notify (Netlify) |
| Hosting | Netlify (static) | Netlify (static) |

### 1.2 Timeline

| Milestone | Planned | Actual |
|-----------|---------|--------|
| Sprint 1: Core structure | Apr 8-15 | Apr 4 (early) |
| Sprint 2: Remaining pages | Apr 15-22 | Apr 4 (early) |
| Sprint 3: Case studies + QA | Apr 22-29 | Apr 4 (early) |
| Buffer week | Apr 29 - May 1 | Pending |
| Go-live | May 1 | On track |

### 1.3 Team

| Role | Person | Responsibility |
|------|--------|---------------|
| Programme Manager | Fred Dang | Governance, acceptance, stakeholder comms |
| Executive Sponsors | Henry Hung, Emily Vo | Strategic review, brand sign-off |
| Product Owner | Duy Le | Content, UX priorities, page specs |
| Tech Lead | Thinh | Hosting, CI/CD, DNS, infrastructure |

### 1.4 Technology

Static HTML/CSS/JS sites hosted on Netlify. No backend, no CMS, no framework dependencies. Forms handled by Netlify Forms with honeypot spam protection. Monorepo on GitHub (TANPHUOCUS/VS26-New-Websites) with Netlify auto-deploy on push to main.

---

## 2. Sprint-by-Sprint Delivery Record

### Sprint 1 - Core Structure

**Scope:** Shared CSS, navigation, footer, and core pages for both sites.

| Stream | Pages Delivered |
|--------|----------------|
| Corporate | index.html (Home), about.html, contact.html, thank-you.html + shared CSS/nav/footer |
| Advisory | index.html (Home), approach.html, contact.html, thank-you.html + shared CSS/nav/footer |

**Key decisions:**
- Design tokens established (Forest Green #1B4D3E, Tech Mint #A7FFEB, Digital Emerald #2E8B57)
- Montserrat for headings, Inter for body
- Mobile-first responsive breakpoints: 640, 768, 1024, 1280px
- Netlify Forms pattern with honeypot spam protection
- Accessibility baseline: skip-to-content, aria labels, single h1 per page, lang attribute

**Defects found:** 15 (D001-D013 em dash contamination from wireframe sources, D014 nav placeholder links, D015 CSS em dash). All closed.

**Quality action:** Established Standard #11 (zero em dash tolerance) as permanent QC gate. Cleaned 325 em dashes from wireframe source files.

**Acceptance:** Conditionally accepted by Fred (2026-04-04). Condition: add automated UAT test in Sprint 2.

---

### Sprint 2 - Remaining Pages

**Scope:** Service pages for Corporate, capability pages for Advisory, plus automated testing.

| Stream | Pages Delivered |
|--------|----------------|
| Corporate | activation-solutions.html, market-development.html, store.html |
| Advisory | brain-trust.html, capabilities.html, vault.html (Coming Soon with notify form) |

**Key decisions:**
- Capabilities page added to Advisory nav across all pages
- Vault uses Netlify form for email collection (pre-launch)
- Store page links to external store.vson.vn (Haravan)
- Automated UAT test script created (BL-001): 6 suites covering em dash scan, HTML structure, link integrity, forms, file inventory, sitemap

**Defects found during build:** 4 QC blocking issues (case-studies 404 in nav, h4 heading hierarchy skip, capabilities orphaned from nav, vault form missing Netlify attributes). All resolved before acceptance.

**Acceptance:** Accepted by Fred (2026-04-04). UAT: 96 PASS, 0 FAIL, 2 WARN.

---

### Sprint 3 - Case Studies + Full QA

**Scope:** Corporate case study section (6 pages), Advisory full QA polish.

| Stream | Pages Delivered |
|--------|----------------|
| Corporate | case-studies.html (index with filter bar), cs-01-electronics-retail.html, cs-02-education.html, cs-03-fashion-retail.html, cs-04-oem-merchandise.html, cs-05-ict-distribution.html |
| Advisory | QA fixes: footer nav links corrected on 4 pages, separator standardized |

**Additional work:**
- All 7 existing Corporate pages: Case Studies nav link updated from `#` to `case-studies.html`
- Corporate sitemap.xml updated with 6 new URLs (total: 12)
- D016 found and fixed: Solutions dropdown menu had 16px CSS dead zone making it impossible to reach sub-items. Fixed with invisible hover bridge and inner wrapper.

**Defects found:** D016 (High, dropdown dead zone). Closed same day.

**Acceptance:** Accepted by Fred (2026-04-04). UAT: 132 PASS, 0 FAIL, 2 WARN.

---

## 3. Acceptance Record

### 3.1 Sprint Acceptance Summary

| Sprint | Corporate | Advisory | UAT Result | Accepted By | Date |
|--------|-----------|----------|------------|-------------|------|
| S1 | Conditional | Conditional | Manual review | Fred Dang | 2026-04-04 |
| S2 | Accepted | Accepted | 96 PASS, 0 FAIL | Fred Dang | 2026-04-04 |
| S3 | Accepted | Accepted | 132 PASS, 0 FAIL | Fred Dang | 2026-04-04 |

### 3.2 Defect Summary

| Metric | Count |
|--------|-------|
| Total defects raised | 16 |
| Closed | 16 |
| Open | 0 |
| Critical | 0 |
| High (closed) | 12 |
| Medium (closed) | 3 |
| Low (closed) | 1 |

### 3.3 Automated UAT Coverage (Final Run)

| Suite | Checks | Result |
|-------|--------|--------|
| Em dash content scan | 4 | 2 PASS, 2 WARN (CSS comments only) |
| HTML structure (title, meta, OG, skip-to-content, lang, h1) | 120 | 120 PASS |
| Internal link integrity | 2 | 2 PASS |
| Forms (Netlify + honeypot) | 6 | 6 PASS |
| File inventory | 2 | 2 PASS |
| Sitemap validation | 2 | 2 PASS |
| **Total** | **134** | **132 PASS, 0 FAIL, 2 WARN** |

### 3.4 Formal Acceptance Documents

Full acceptance review documents are available at:
- `01-delivery/acceptance/ACCEPTANCE-REVIEW-S2.md`
- `01-delivery/acceptance/ACCEPTANCE-REVIEW-S3.md`

---

## 4. User Testing Instructions

> **For:** Emily, Henry, Duy, and invited reviewers
> **Important:** The websites are functionally complete but content assets (photos, headshots, logos) are still placeholder. Please focus on structure, navigation, flow, and messaging - not missing images.

### 4.1 How to Access

| Site | URL |
|------|-----|
| VSON Corporate | https://vs26-newcorp.netlify.app |
| VSON Advisory | https://vs26-advisory.netlify.app |

Open on both desktop browser and mobile phone. These are the staging (UAT) environments - they are live and publicly accessible via these URLs.

### 4.2 How to Report Issues

For each issue, note the following:

1. **Which site** - Corporate or Advisory
2. **Which page** - the page name or URL
3. **What you see** - describe the problem or screenshot it
4. **What you expected** - what should it look like or say

Send to Fred via your preferred channel (email, Slack, Zalo). Fred will log it in the defect register.

### 4.3 Test Scenarios - VSON Corporate (vson.vn)

Please walk through each scenario on both desktop and mobile.

**Scenario C1: First Impression**
1. Open the Home page
2. Read the hero section: is the headline clear? Does it communicate what VSON does?
3. Scroll down: do the service cards make sense? Is the language natural?
4. Does the page feel professional and trustworthy?

**Scenario C2: Learn About VSON**
1. Click "About" in the nav
2. Read the company story: is it accurate? Anything missing?
3. Review the leadership bios: any corrections needed?
4. Does the page give you confidence in the team?

**Scenario C3: Explore Solutions**
1. Hover over "Solutions" in the nav
2. Click "Activation Solutions" - does the dropdown work smoothly?
3. Read the page: does it explain the service clearly?
4. Go back and try "Market Development" - same questions
5. Check the "Store" page: is the link to store.vson.vn clear?

**Scenario C4: Case Studies**
1. Click "Case Studies" in the nav
2. Try the industry filter buttons: do they work?
3. Click into one case study detail page
4. Is the story structure clear (challenge, approach, result)?
5. Does the "Back to Case Studies" link work?

**Scenario C5: Make Contact**
1. Click "Contact" or "Request a Consultation"
2. Fill in the form with test data
3. Submit - do you reach the thank-you page?
4. Is the form easy to use? Any confusing fields?

**Scenario C6: Navigation & Footer**
1. From any page, check the nav: can you reach every section?
2. Scroll to footer: is the company info correct?
3. Note: social media links and legal links are placeholder (#) - these are known content gaps

### 4.4 Test Scenarios - VSON Advisory (vsonadvisory.com)

**Scenario A1: First Impression**
1. Open the Home page
2. Does the tone feel different from Corporate? (It should - Advisory is boutique, executive, restrained)
3. Is the value proposition clear from the hero?

**Scenario A2: Understand the Approach**
1. Click "Approach" in the nav
2. Read the methodology: does it reflect how VSON Advisory actually works?
3. Is the language appropriate for C-suite / investor audience?

**Scenario A3: Meet the Team**
1. Click "Brain Trust" in the nav
2. Review each partner bio: accuracy, tone, positioning
3. **Emily:** please review your bio specifically for sign-off

**Scenario A4: Review Capabilities**
1. Click "Capabilities" in the nav
2. Are the six capability areas correctly described?
3. Does the framing match what Advisory actually delivers?

**Scenario A5: Vault (Coming Soon)**
1. Click "Vault" in the nav
2. Is the coming-soon message clear?
3. Enter a test email and submit - does it work?

**Scenario A6: Make Contact**
1. Click "Start a Conversation"
2. Fill in the form with test data
3. Submit - do you reach the thank-you page?

**Scenario A7: Footer & Navigation**
1. Check footer on any page: company details, partner names, locations
2. Note: service line links, LinkedIn, and legal links are placeholder (#) - known content gaps

---

## 5. Content Gap Map

> **Status key:** `#` = link points to placeholder (nowhere), `[placeholder]` = visual/text placeholder, `[missing]` = asset not yet supplied

### 5.1 VSON Corporate - Page-by-Page

#### index.html (Home)
| Location | Type | What's Needed |
|----------|------|---------------|
| Hero section | `[placeholder]` | Hero visual - brand lifestyle image or illustration |
| Case study snippet 1 | `[placeholder]` | Outcome one-liner for activation campaign result |
| Case study snippet 2 | `[placeholder]` | Outcome one-liner for market entry result |
| Footer: Privacy Policy | `#` link | Privacy Policy page or content |
| Footer: Terms of Use | `#` link | Terms of Use page or content |
| Footer: LinkedIn | `#` link | VSON LinkedIn URL |
| Footer: Facebook | `#` link | VSON Facebook URL |
| Footer: Zalo | `#` link | VSON Zalo URL or OA link |

#### about.html
| Location | Type | What's Needed |
|----------|------|---------------|
| Leadership section | `[missing]` | Headshot photos x4 (Frederick, Emily, Henry, Hung) |
| Footer: Privacy, Terms, Social | `#` links | Same as Home |

#### activation-solutions.html
| Location | Type | What's Needed |
|----------|------|---------------|
| Footer: Case Studies link | `#` link | Should link to case-studies.html (fix needed) |
| Footer: Privacy, Terms, Social | `#` links | Same as Home |

#### market-development.html
| Location | Type | What's Needed |
|----------|------|---------------|
| Footer: Case Studies link | `#` link | Should link to case-studies.html (fix needed) |
| Footer: Privacy, Terms, Social | `#` links | Same as Home |

#### store.html
| Location | Type | What's Needed |
|----------|------|---------------|
| "Shop at store.vson.vn" button | `#` link | Actual store.vson.vn URL (pending DNS - Thinh) |
| Channel cards (Shopee, Lazada, TikTok, Zalo) | `#` links | Actual marketplace store URLs |
| Footer: Case Studies link | `#` link | Should link to case-studies.html (fix needed) |
| Footer: Privacy, Terms, Social | `#` links | Same as Home |

#### case-studies.html (index)
| Location | Type | What's Needed |
|----------|------|---------------|
| Footer: Privacy, Terms, Social | `#` links | Same as Home |

#### cs-01 through cs-05 (5 detail pages)
| Location | Type | What's Needed |
|----------|------|---------------|
| Footer: Privacy, Terms, Social | `#` links | Same as Home |

#### contact.html
| Location | Type | What's Needed |
|----------|------|---------------|
| Footer: Privacy, Terms, Social | `#` links | Same as Home |

#### thank-you.html
| Location | Type | What's Needed |
|----------|------|---------------|
| Footer: Privacy, Terms, Social | `#` links | Same as Home |

### 5.2 VSON Advisory - Page-by-Page

> **Note:** Advisory footer has 6 service line links and a LinkedIn link, all pointing to `#`. These appear on every page.

#### Global Footer (all 7 pages)
| Location | Type | What's Needed |
|----------|------|---------------|
| Footer: Strategic Finance & M&A | `#` link | Future capability page or section anchor |
| Footer: Performance Transformation | `#` link | Future capability page or section anchor |
| Footer: CX & Revenue Growth | `#` link | Future capability page or section anchor |
| Footer: Digital Infrastructure | `#` link | Future capability page or section anchor |
| Footer: Global Gateway | `#` link | Future capability page or section anchor |
| Footer: Investment Readiness | `#` link | Future capability page or section anchor |
| Footer: LinkedIn | `#` link | VSON Advisory LinkedIn URL |
| Footer: Privacy Policy | `#` link | Privacy Policy page or content |
| Footer: Terms of Service | `#` link | Terms of Service page or content |

#### index.html (Home)
| Location | Type | What's Needed |
|----------|------|---------------|
| No page-specific gaps | - | Footer items above apply |

#### approach.html
| Location | Type | What's Needed |
|----------|------|---------------|
| No page-specific gaps | - | Footer items above apply |

#### brain-trust.html
| Location | Type | What's Needed |
|----------|------|---------------|
| Emily Vo bio | `[pending sign-off]` | Emily to confirm bio text is accurate |

#### capabilities.html
| Location | Type | What's Needed |
|----------|------|---------------|
| No page-specific gaps | - | Footer items above apply |

#### vault.html
| Location | Type | What's Needed |
|----------|------|---------------|
| No page-specific gaps | - | Coming Soon by design |

#### contact.html / thank-you.html
| Location | Type | What's Needed |
|----------|------|---------------|
| No page-specific gaps | - | Footer items above apply |

### 5.3 Content Gap Summary

| Category | Count | Owner | Priority |
|----------|-------|-------|----------|
| Headshot photos | 4 | Fred / team | Must-have for go-live |
| Hero imagery | 1 | Fred / team | Must-have for go-live |
| Case study snippets (Home) | 2 | Duy | Should-have |
| Social media URLs | 3 (Corporate) + 1 (Advisory) | Fred | Must-have for go-live |
| Privacy Policy content | 2 pages (1 per site) | Fred / legal | Must-have for go-live |
| Terms of Use/Service | 2 pages (1 per site) | Fred / legal | Must-have for go-live |
| Store/marketplace URLs | 5 | Fred + Thinh | Must-have for go-live |
| Advisory service line links | 6 | Fred / Duy | Can defer (link to capabilities.html or anchor) |
| Footer Case Studies links | 3 pages | Dev (quick fix) | Quick fix |
| Emily bio sign-off | 1 | Emily | Must-have for go-live |

---

## Appendix A: Internal CX Review (Completed by Programme Team)

> **Reviewer:** Programme team (code-level review of all HTML/CSS/JS)
> **Date:** 2026-04-04
> **Method:** Nielsen heuristic evaluation + code audit of all 20 pages

### A1. Heuristic Scorecard - VSON Corporate

| # | Heuristic | Score | Findings |
|---|-----------|-------|----------|
| H1 | Visibility of system status | 3 | Page titles clear. No active nav state on current page. Breadcrumbs on service pages but not on Home/About/Contact. User can lose orientation. |
| H2 | Match between system and real world | 4 | Language natural for target audience (brand managers, distributors). No jargon. Service names clear (Activation Solutions, Market Development). |
| H3 | User control and freedom | 4 | Nav accessible from every page. Logo links to Home. Back navigation via browser works. Form has no reset/clear button (minor). |
| H4 | Consistency and standards | 3 | Button styles consistent. Typography consistent. Footer heading levels inconsistent (h3 on some pages, h4 on others). Eyebrow/breadcrumb treatment varies. |
| H5 | Error prevention | 2 | Contact form has HTML5 `required` attributes but no client-side validation UI. No error messages displayed. Users only see browser default validation. |
| H6 | Recognition over recall | 4 | Information architecture intuitive. Nav labels match page content. Solutions dropdown groups related pages logically. |
| H7 | Flexibility and efficiency | 4 | CTA ("Request a Consultation") visible on every page via nav. Fast path to contact: max 2 clicks from any page. |
| H8 | Aesthetic and minimalist design | 4 | Clean visual hierarchy. Forest green palette professional. No clutter. Good use of whitespace. Logo chips are text-only (awaiting actual logos). |
| H9 | Error recovery | 2 | No form error states implemented. No 404 page. Thank-you page exists and works. Form missing `action="/thank-you.html"` redirect attribute. |
| H10 | Help and documentation | 4 | Value proposition clear within 5 seconds on Home. Three service areas identifiable. CTA prominent. |
| | **Average** | **3.4** | |

### A2. Heuristic Scorecard - VSON Advisory

| # | Heuristic | Score | Findings |
|---|-----------|-------|----------|
| H1 | Visibility of system status | 3 | Active nav state present on Brain Trust and Vault pages. Missing on Home page. Inconsistent orientation signal. |
| H2 | Match between system and real world | 5 | Language precisely tuned for C-suite/PE investors. "We Govern Outcomes" is compelling. Operator-backed proof points authentic. No buzzword contamination. |
| H3 | User control and freedom | 4 | Clean navigation. "Start a Conversation" accessible from every page. Vault form is simple. No dead ends. |
| H4 | Consistency and standards | 4 | Visual patterns consistent across all 7 pages. Playfair + Inter font pairing maintained. Card components reused. Footer identical on all pages. |
| H5 | Error prevention | 3 | Contact form labels correct. Required fields marked. Radio buttons for self-identification good. But no fieldset/legend grouping, no client-side validation UI. |
| H6 | Recognition over recall | 4 | 6-item nav is digestible. Page names match mental model (Approach, Leadership, Capabilities). |
| H7 | Flexibility and efficiency | 4 | CTA in nav on every page. Multiple entry points to contact. Vault offers low-commitment engagement path. |
| H8 | Aesthetic and minimalist design | 5 | Premium feel achieved through restraint. Navy palette with Playfair serif signals editorial quality. No decoration for decoration's sake. Whitespace used intentionally. |
| H9 | Error recovery | 2 | Same form issue as Corporate. No error states. Thank-you page works. Vault form lacks confirmation feedback. |
| H10 | Help and documentation | 4 | Clear within 5 seconds: boutique advisory for founders/investors. "Selective, senior-led, mandate-focused" establishes positioning immediately. |
| | **Average** | **3.8** | |

### A3. Cross-Site Comparison

| Dimension | Corporate | Advisory | Assessment |
|-----------|-----------|----------|------------|
| Brand differentiation | Green/mint palette, Montserrat/Inter, operational tone | Navy/blue palette, Playfair/Inter, premium boutique tone | Clearly distinct. No confusion between brands. |
| Audience match | Speaks to operators, brand managers, distributors | Speaks to founders, PE investors, C-suite | Correctly differentiated. |
| Visual hierarchy | Clear but slightly busy on service pages | Restrained, confident, premium spacing | Both effective for their audience. |
| Mobile experience | Responsive breakpoints at 640/768/1024/1280. Dropdown needs mobile-specific CSS. | Responsive breakpoints adequate. Burger menu works. | Corporate dropdown is the main mobile gap. |
| Trust signals | Heritage section, logo chips (text), case studies | Partner bios with proof points, operator credentials | Advisory stronger on trust. Corporate needs logos and imagery. |

### A4. Critical Findings (Prioritised)

#### Must Fix Before Go-Live

| # | Site | Severity | Issue | Fix Effort |
|---|------|----------|-------|------------|
| F1 | Corporate | Critical | Solutions dropdown broken on mobile/keyboard. CSS hover-only; no JS click handler; no `aria-expanded`. Mobile users cannot reach Activation Solutions or Market Development. | 2-3 hrs (JS + CSS) |
| F2 | Corporate | Critical | Contact form has no client-side validation UI. Error CSS classes exist in stylesheet but are never applied. No error messages rendered. | 2-4 hrs (JS) |
| F3 | Corporate | High | Case study filter buttons non-functional. HTML and CSS exist but no JS filtering logic. Buttons do nothing when clicked. | 1-2 hrs (JS) |
| F4 | Corporate | High | Home page case study cards link to `#case-studies` instead of actual detail pages (cs-01, cs-02, etc.). | 15 min |
| F5 | Corporate | High | Footer heading levels inconsistent: h3 on about.html and contact.html, h4 on other pages. Screen reader heading lists vary by page. | 10 min |
| F6 | Corporate | High | Form missing `action="/thank-you.html"`. Netlify may not redirect to thank-you page on submit. | 5 min |
| F7 | Advisory | High | Home page hero CTA links to `#contact` anchor which does not exist on the page. Primary conversion path broken. Should link to `/contact.html`. | 10 min |
| F8 | Advisory | High | Home page nav link missing `nav__link--active` class. Users cannot confirm they are on Home. | 5 min |
| F9 | Advisory | High | Form input focus states only change border color. No outline or box-shadow. Does not meet WCAG 2.1 AA (2.4.7 Focus Visible). | 15 min (CSS) |
| F10 | Advisory | High | Mobile burger button lacks `:focus-visible` styling. Keyboard users on mobile cannot see focus. | 5 min (CSS) |

#### Should Fix (Pre-Launch or Buffer Week)

| # | Site | Severity | Issue | Fix Effort |
|---|------|----------|-------|------------|
| F11 | Corporate | Medium | Home page "Visit VSON Store" button links to `#store` anchor that doesn't exist. Should link to `store.html`. | 5 min |
| F12 | Corporate | Medium | Logo chips section shows text instead of actual brand logos. Content gap but design weakness. | Depends on assets |
| F13 | Corporate | Medium | Hero placeholder needs `role="img"` and `aria-label` for when real image is added. | 10 min |
| F14 | Advisory | Medium | Vault preview items styled with hover transition CSS but no actual `:hover` state defined. Look clickable but don't respond. | 15 min (CSS) |
| F15 | Advisory | Medium | Contact form Country field is free text input. Should be dropdown for data quality with C-suite audience. | 30 min |
| F16 | Advisory | Medium | Vault email form lacks privacy notice ("We respect your privacy. No spam."). | 5 min |
| F17 | Both | Medium | No colour contrast audit documented. Spot checks pass but no formal axe-core results logged. | 30 min (testing) |

### A5. Strengths

**Corporate:**
1. Typography hierarchy (Montserrat + Inter + clamp scaling) is professional and responsive
2. Colour palette (forest green family) builds trust for distribution/B2B audience
3. Accessibility fundamentals in place: skip-to-content, sr-only utility, semantic HTML, focus-visible on links
4. Case study section well-structured (challenge/approach/result pattern)
5. Footer comprehensive: address, registration, email, phone, all expected for Vietnamese business

**Advisory:**
1. Premium positioning achieved through restraint, not decoration. Feels like a real boutique firm, not a template.
2. Operator-backed proof points (water metering portal, 1000+ partners, CEO of multi-unit ops) are specific and credible
3. Playfair Display serif for headings creates editorial quality signal
4. Card system with subtle hover animations provides polished interaction
5. "We Govern Outcomes" hero is a strong differentiator from generic consulting language

### A6. Go-Live Readiness Assessment

| Dimension | Corporate | Advisory |
|-----------|-----------|----------|
| Overall UX score | 3.4 / 5 | 3.8 / 5 |
| Go-live ready? | Ready with conditions | Ready with conditions |
| Blocking items | F1 (dropdown mobile), F2 (form validation), F3 (filter JS) | F7 (broken CTA anchor), F9 (focus states) |
| Estimated fix time | 5-9 hrs development | 1-2 hrs development |

**Verdict:** Both sites are structurally sound and content-appropriate for their audiences. Corporate has more technical debt (3 Critical/High items requiring JS work). Advisory is closer to launch-ready with mostly CSS-level fixes. Recommend fixing all Critical + High items during the buffer week (Apr 29 - May 1) before go-live.

---

## Appendix B: CX Expert Review Template (For External Reviewer)

> **For:** [CX Consultant Name]
> **Context:** You are reviewing two pre-launch websites for VSON Group. The sites are functionally complete but have placeholder content (photos, some links). Please focus on user experience, not missing images.
>
> **Sites:**
> - VSON Corporate: https://vs26-newcorp.netlify.app (13 pages, target: brand managers, distributors, B2B partners in APAC)
> - VSON Advisory: https://vs26-advisory.netlify.app (7 pages, target: founders, PE investors, C-suite)
>
> **Time needed:** 60-90 minutes
> **Please return to:** Fred Dang (tanphuocus@gmail.com)

### B1. Heuristic Scorecard

Score each criterion 1-5 per site. Add notes on specific issues found.

**Scoring:**
| Score | Meaning |
|-------|---------|
| 1 | Severe usability problem - blocks task completion |
| 2 | Major problem - causes significant confusion or frustration |
| 3 | Acceptable - works but has room for improvement |
| 4 | Good - clear and easy with minor polish opportunities |
| 5 | Excellent - intuitive, delightful, no friction |

#### VSON Corporate (vson.vn)

| # | Heuristic | Score (1-5) | Notes |
|---|-----------|-------------|-------|
| H1 | Visibility of system status: Do you always know where you are? | | |
| H2 | Match between system and real world: Does the language feel natural for B2B/distribution audience? | | |
| H3 | User control and freedom: Can you navigate freely, go back, exit forms? | | |
| H4 | Consistency and standards: Are patterns (nav, buttons, typography) consistent across pages? | | |
| H5 | Error prevention: Are forms clear? Required fields obvious? | | |
| H6 | Recognition over recall: Can you find things without memorising the site structure? | | |
| H7 | Flexibility and efficiency: Is there a fast path to contact? | | |
| H8 | Aesthetic and minimalist design: Is the visual hierarchy clear? Any clutter? | | |
| H9 | Error recovery: What happens when you submit incomplete forms? | | |
| H10 | Help and documentation: Within 5 seconds, can you tell what VSON does? | | |

#### VSON Advisory (vsonadvisory.com)

| # | Heuristic | Score (1-5) | Notes |
|---|-----------|-------------|-------|
| H1 | Visibility of system status: Do you always know where you are? | | |
| H2 | Match between system and real world: Is the language right for founders/investors? | | |
| H3 | User control and freedom: Can you navigate freely? | | |
| H4 | Consistency and standards: Visual consistency across all pages? | | |
| H5 | Error prevention: Forms clear and well-labelled? | | |
| H6 | Recognition over recall: Intuitive information architecture? | | |
| H7 | Flexibility and efficiency: Fast path to "Start a Conversation"? | | |
| H8 | Aesthetic and minimalist design: Does it feel premium boutique? | | |
| H9 | Error recovery: Form error handling adequate? | | |
| H10 | Help and documentation: Clear who Advisory serves and what they do? | | |

### B2. Guided Walkthrough

Complete each task on desktop and mobile. Note friction, confusion, or delight.

#### Task 1: Understand the Business (Corporate)
1. Open the Corporate site. Do NOT scroll.
2. What does VSON do? Who is it for?
3. Now scroll the full Home page. Name the 3 service areas.

| Question | Your Answer |
|----------|-------------|
| What does VSON do? (from hero only) | |
| Who is VSON for? | |
| Name the 3 service areas | |
| Confidence level (1-5) | |

#### Task 2: Find a Specific Service (Corporate)
1. From Home, find the Market Development page.

| Question | Your Answer |
|----------|-------------|
| How did you find it? (nav, scroll, footer?) | |
| Was the dropdown menu easy to use? | |
| Clicks/taps to reach it? | |

#### Task 3: Review a Case Study (Corporate)
1. Go to Case Studies. Try the filter. Click into a detail page.

| Question | Your Answer |
|----------|-------------|
| Did the filter work? | |
| Story structure clear (challenge/approach/result)? | |
| Easy to navigate back? | |
| Would this build trust with a prospective client? | |

#### Task 4: Make Contact (Corporate)
1. Find and submit the contact form (test data). Time yourself.

| Question | Your Answer |
|----------|-------------|
| Time to complete (seconds) | |
| CTA easy to find? | |
| Form fields clear? | |
| Reached thank-you page? | |
| Any friction? | |

#### Task 5: First Impression (Advisory)
1. Open the Advisory site. Spend 30 seconds without clicking.

| Question | Your Answer |
|----------|-------------|
| Emotional tone? (corporate / warm / premium / cold) | |
| Feels different from Corporate? | |
| Value proposition clear? | |
| Who is the target audience? | |

#### Task 6: Evaluate Trust (Advisory)
1. Read the Brain Trust page partner bios.

| Question | Your Answer |
|----------|-------------|
| Bios feel authentic and credible? | |
| Team positioning clear? | |
| Would an investor trust this team? | |
| Any bio that needs work? | |

#### Task 7: Understand Capabilities (Advisory)
1. Read the Capabilities page.

| Question | Your Answer |
|----------|-------------|
| 6 capabilities clearly differentiated? | |
| Language appropriate? | |
| Any capability unclear? | |

#### Task 8: Complete the Journey (Advisory)
1. From Capabilities, find Contact. Submit form. Then try Vault sign-up.

| Question | Your Answer |
|----------|-------------|
| Path from Capabilities to Contact intuitive? | |
| Contact form friction? | |
| Vault Coming Soon message clear? | |
| Email sign-up work? | |

#### Task 9: Mobile Experience (Both Sites)
1. Open both sites on your phone. Navigate 3+ pages each. Try a form.

| Question | Corporate | Advisory |
|----------|-----------|----------|
| Nav works on mobile? | | |
| Text readable without zoom? | | |
| Tap targets large enough? | | |
| Form works on mobile? | | |
| Layout issues? | | |

### B3. Cross-Site Comparison

| Dimension | Corporate | Advisory | Notes |
|-----------|-----------|----------|-------|
| Brand differentiation - do they feel like distinct brands? | | | |
| Audience match - right language for each audience? | | | |
| Visual hierarchy - information architecture intuitive? | | | |
| Mobile experience - degrades gracefully? | | | |
| Trust signals - builds credibility? | | | |

### B4. Your Summary

1. **Top 3 strengths** (across both sites):
   -
   -
   -

2. **Top 3 friction points** (fix before go-live):
   -
   -
   -

3. **Top 3 opportunities** (post-launch iteration):
   -
   -
   -

4. **Overall verdict:**

| Site | UX Score (1-5) | Go-live ready? | Top priority fix |
|------|----------------|----------------|------------------|
| Corporate | | Ready / Conditions / Not ready | |
| Advisory | | Ready / Conditions / Not ready | |

5. **Any other observations:**

---

*End of report. Supporting documents: ACCEPTANCE-REVIEW-S2.md, ACCEPTANCE-REVIEW-S3.md, UAT-REPORT.md, DEFECTS.md (Corporate), DEFECTS.md (Advisory).*
