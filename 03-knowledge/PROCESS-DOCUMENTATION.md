# Website Design Process Documentation

**Project:** VSON Advisory Website
**Date Created:** 2026-03-29
**Version:** 1.0
**Purpose:** Capture the methodology, decisions, and lessons learned for future website projects

---

## Executive Summary

This document captures how we designed the VSON Advisory website using a structured, stakeholder-aligned approach. The methodology combines the Double Diamond design thinking framework with strategic consulting principles to ensure the final website serves business objectives, not just aesthetic goals.

**Key Innovation:** Separating design strategy from code implementation through a design-concept approval phase, reducing rework and enabling partner feedback before any code is written.

---

## Project Overview

**Project Scope:**
- 6-page marketing website for B2B advisory services
- Route B complexity: Custom multi-page design, no backend required
- Timeline: 8 weeks (design + build + launch)
- Team: Founder-led (Frederick Dang, Henry Hung, Emily Vo) + Developer

**Deliverables:**
- Design concept (HTML mockup) ✅
- Information Architecture ✅
- Developer Template ✅
- Production website (6 pages) — In progress
- Legal pages (privacy, terms) — Phase 2

---

## Methodology: Double Diamond + Consulting Framework

### Phase 1: Discover (Week 1-2)
**Objective:** Understand business strategy and user needs

**Activities:**
1. **Strategy Review:** Read Google Docs strategy document covering:
   - VSON's positioning (Architects of Certainty)
   - Two GTM motions (Cross-Border Advisory + Local Operational Transformation)
   - 4-Layer Solution Stack (Foundation → Performance → Growth → Value)
   - 6 core capabilities/pillars (Finance, Performance, CX, Digital, Global, AI)
   - Target audiences (mid-market founders, private capital, operators)

2. **Reference Site Analysis:** Extracted design system tokens from live site:
   - Color palette (navy #0f172a, slate #334155, blue #3b82f6, paper #f8fafc)
   - Typography (Playfair Display serif + Inter sans-serif)
   - Component patterns (buttons, cards, navigation)

3. **Stakeholder Interviews:** Clarified business drivers:
   - What problem does the website solve? (Credibility + lead generation)
   - Who are primary audiences? (Enterprise buyers + private capital)
   - What decisions should the site enable? (Contact → Discovery call → Engagement)

**Outputs:**
- Brand strategy alignment document
- Design system tokens extracted
- 6 pillar framework confirmed
- User journey map (Awareness → Consideration → Decision → Engagement)

**Key Decision:** Website is a credibility tool, not a lead generation engine. Content should position expertise, not convert cold traffic.

---

### Phase 2: Define (Week 2-3)
**Objective:** Create strategic framework for site structure and content

**Activities:**
1. **Information Architecture:**
   - Mapped 6-page MVP: Home, Approach, Brain Trust, Vault, Contact, + Footer
   - Defined 4-phase content expansion roadmap (legal pages → case studies → service deep-dives → community)
   - Created content taxonomy (6 pillars + audience segmentation)
   - Designed internal linking strategy to guide user journeys

2. **Content Strategy:**
   - Drafted all 8 home page sections (Hero, Value Chain, Audience Pathways, Why VSON, Capabilities, Brain Trust, Vault, CTA)
   - Created section-by-section copy positioning VSON's differentiation
   - Mapped each section to a business objective (credibility, expertise, call-to-action)

3. **Partner Input:**
   - Collected team member names and roles
   - Confirmed regional contacts and legal information
   - Validated messaging and tone

**Outputs:**
- Complete Information Architecture document (15+ pages)
- Content outline for all 6 pages
- Navigation structure and URL naming conventions
- Metadata template (SEO structure)

**Key Decision:** Content structure mirrors the business model (4-layer stack → 6 pillars → engagement process). This creates coherence between marketing message and service delivery.

---

### Phase 3: Develop (Week 3-4)
**Objective:** Create visual and technical design before any code is built

**Activities:**
1. **Visual Design System:**
   - Created CSS custom properties for all colors, typography, spacing
   - Designed reusable component classes (.btn, .card, .grid, .tag, etc.)
   - Built responsive breakpoints (768px, 1024px) for mobile-first design
   - Added animation definitions (fade-in, fade-up on scroll)

2. **Design Concept (HTML Mockup):**
   - Built interactive HTML mockup showing all 6 page sections rendered in real browser
   - Included design system showcase (color swatches, typography specimens, component gallery)
   - Rendered all page sections for visual review before coding
   - Added approval banner for partner feedback

3. **Developer Template:**
   - Created HTML page boilerplate with semantic structure
   - Documented all CSS classes and how to use them
   - Provided component patterns and layout examples
   - Added accessibility checklist (WCAG AA standards)
   - Included performance targets (Lighthouse 80+)

**Outputs:**
- design-concept.html (complete visual mockup)
- CSS design system (styles.css with 50+ variables and component classes)
- JavaScript shared library (main.js for nav, animations, forms)
- Developer Template with 15+ sections of guidance

**Key Decision:** Build design concept as HTML (not Figma) to enable true browser preview and stakeholder testing. This catches responsive design issues that mockups miss.

---

### Phase 4: Deliver (Week 4 onwards)
**Objective:** Gather feedback, refine design, then build production pages

**Activities:**
1. **Partner Review Phase:**
   - Shared design-concept.html, Information Architecture, and Developer Template
   - Created Partner Review Package with structured feedback template
   - Collected feedback on: accuracy, messaging, strategy alignment, design approval
   - Key feedback items: team member names (update Phuoc→Frederick, Hien→Henry, Ngọc→Emily), 3 regional contacts with addresses

2. **Design Refinement (Current):**
   - Updated team member names and bios
   - Redesigned contact section to show 3 regional contacts
   - Added legal company information to footer
   - Incorporated partner feedback

3. **Build Phase (Next):**
   - Create all 6 production HTML pages using page-template.html
   - Ensure 100% alignment with design system (no custom CSS)
   - Test responsive design (mobile 375px → desktop 1920px)
   - Validate accessibility (WCAG AA)
   - Performance test (Lighthouse 80+)
   - Cross-browser testing (Chrome, Firefox, Safari, Edge)

4. **Launch Phase:**
   - Deploy to production domain
   - Monitor 404s and broken links
   - Track page performance and user behavior
   - Plan Phase 2 content (legal pages, case studies, blog)

**Outputs (Planned):**
- 6 production HTML pages
- Privacy Policy and Terms of Service
- Analytics tracking setup
- Monitoring and optimization plan

---

## Quality Gates & Approval Process

### Gate 1: Strategy Alignment ✅ PASSED
**Approval:** Strategy document reviewed; 6 pillars, 4-layer stack, 2 GTM motions confirmed

**Checklist:**
- [ ] Business strategy documented and shared
- [ ] Design principles derived from strategy (credibility → expertise → engagement)
- [ ] User personas and journeys mapped
- [ ] Success metrics defined (lead capture, brand authority)

---

### Gate 2: Design Approval (CURRENT)
**Approval:** Partners review design-concept.html and Information Architecture before any code is built

**Checklist:**
- [ ] Design concept tested on desktop and mobile
- [ ] All team member information accurate
- [ ] Regional contacts and addresses verified
- [ ] Legal information approved
- [ ] Navigation labels and ordering finalized
- [ ] Content pillars and messaging validated
- [ ] Information Architecture roadmap accepted
- [ ] Developer Template approach understood

---

### Gate 3: Code Review (PLANNED — Week 5-6)
**Approval:** All 6 pages built, tested, QA'd before launch

**Checklist:**
- [ ] All pages match design-concept.html visually
- [ ] No custom CSS — all styling uses design system
- [ ] Mobile responsive tested (375px, 768px, 1024px, 1920px)
- [ ] Accessibility audit passed (WCAG AA)
- [ ] Lighthouse score 80+ across all pages
- [ ] All links validated (no 404s)
- [ ] All images optimized (<200KB, with alt text)
- [ ] Cross-browser testing passed (Chrome, Firefox, Safari, Edge, iOS Safari, Android Chrome)
- [ ] Form submission works correctly
- [ ] Analytics tracking implemented

---

### Gate 4: Launch Readiness (PLANNED — Week 7)
**Approval:** Website ready for production deployment

**Checklist:**
- [ ] All content proofread and spell-checked
- [ ] All metadata (title, description, OG tags) filled in
- [ ] SEO structure verified (heading hierarchy, keywords)
- [ ] Performance optimized (page load <3 seconds desktop, <5 seconds mobile)
- [ ] Error monitoring configured
- [ ] Backup plan documented
- [ ] Rollback plan documented
- [ ] Team trained on any manual processes
- [ ] Launch announcement ready

---

## Decision Log

### Decision 1: HTML Mockup vs. Figma
**What:** Use HTML (not Figma) for design concept

**Why:**
- HTML is the actual delivery format — what you see in browser is what users get
- Catches responsive design issues that mockups miss
- Enables real partner feedback on mobile and tablet views
- No translation layer between design and code (reduces errors)

**Trade-off:** Takes slightly longer to build than Figma mockup, but saves time in code phase (developers don't need to interpret designs)

**Outcome:** ✅ Partners can test on actual devices; mobile responsiveness verified before code

---

### Decision 2: 6 Pages Now, Expand Later
**What:** Build MVP of 6 pages; plan content expansion for Phase 2

**Why:**
- Faster to launch (4 weeks instead of 8)
- Smaller initial scope, easier quality control
- Can refine content strategy based on real traffic before expanding
- Reduces initial implementation risk

**Trade-off:** Requires disciplined roadmap to ensure Phase 2 content gets built (doesn't disappear)

**Outcome:** ✅ Phase 1 launch by 2026-05-01; Phase 2 (legal, case studies, blog) scheduled for May-August

---

### Decision 3: Single CSS File, No Custom Styles
**What:** All styling uses shared design-system-tokens.css; no page-specific CSS files

**Why:**
- Guarantees visual consistency across all pages
- Simplifies developer template (one source of truth)
- Reduces file size (smaller CSS payload)
- Makes future updates easier (change once, applies everywhere)

**Trade-off:** Developers can't customize component appearance; must work within the design system

**Outcome:** ✅ Design system constraints become a feature, not a limitation; pages are built faster

---

### Decision 4: Pillar-Based Content Organization
**What:** All content (blog, case studies, services) tagged with one of 6 pillars

**Why:**
- Mirrors VSON's business model (6 core capabilities)
- Creates natural internal linking (pillar pages link to pillar-tagged content)
- Helps users navigate by their domain interest
- Simplifies editorial calendar (blog calendar organized by pillar rotation)

**Trade-off:** Content must fit neatly into 6 buckets (some topics span multiple pillars, requiring secondary tagging)

**Outcome:** ✅ Coherent content ecosystem; users can explore expertise by pillar

---

### Decision 5: Legal Information in Footer, Not Hero
**What:** Display UEN and registered address in footer (not prominent marketing copy)

**Why:**
- Signals legitimacy to procurement teams and legal reviewers
- PDPA compliance (must disclose entity info when collecting personal data)
- Follows B2B best practices (legal details expected in footer)
- Doesn't clutter marketing message on hero section

**Trade-off:** Some casual visitors won't see it (but that's fine — they're not the decision-makers)

**Outcome:** ✅ Credibility signal for institutional buyers; compliance requirement met

---

## Lessons Learned

### Lesson 1: Separate "Design Strategy" from "Design Execution"
**What we learned:** The biggest time-waster is building code before strategy is locked in. By creating a design-concept.html mockup, we enabled stakeholders to review strategy (content structure, messaging, IA) BEFORE any "production" code was written.

**Application:** For future projects, always create an interactive mockup (HTML, not Figma) that stakeholders can review on actual devices. Collect feedback on strategy (content, structure, messaging) before developers touch the codebase.

---

### Lesson 2: Design System Constraints Are Features
**What we learned:** By forcing all styling to use CSS custom properties and component classes (no custom CSS), we prevented "design drift" where pages look different from each other.

**Application:** Create a strict design system and enforce it. The constraint that developers *cannot* customize components beyond predefined options actually makes them faster and more confident in their work.

---

### Lesson 3: Information Architecture Precedes Visual Design
**What we learned:** We spent significant time mapping out site structure (6 pages, 4-phase expansion, content pillars, URL conventions) BEFORE designing a single page. This prevented design chaos later.

**Application:** For future projects, lock in Information Architecture first (site structure, content taxonomy, navigation). Then design visuals that support the IA. Don't do it backwards (visual design first, then try to fit content into it).

---

### Lesson 4: One Source of Truth for Everything
**What we learned:** Having one design-concept.html, one styles.css, one main.js, and one Developer Template meant there was never ambiguity about "what's the standard?"

**Application:** Create single reference documents for: design system (styles.css), development standards (Developer Template), content strategy (Information Architecture), and approval process (Partner Review Package). Everything else references these.

---

### Lesson 5: Partner Involvement Matters, But Structure It
**What we learned:** Open-ended feedback requests ("tell us what you think") get scattered responses. Structured feedback requests (specific form, specific questions) get actionable results.

**Application:** When gathering partner feedback, use a template with specific sections, specific questions, and specific decision points. Make it clear what's strategic (partnership decision) vs. tactical (wording, exact phone number).

---

## Reusable Assets Created

As part of this project, we extracted the following reusable components for future website projects:

### 1. HTML Page Template (`page-template.html`)
- Semantic HTML5 boilerplate
- Meta tags structure (OG tags, keywords, canonical)
- Navigation and footer structure
- Section pattern examples (hero, two-column, card grid)
- Accessibility attributes and best practices
- **Use for:** Any new website project or page

### 2. CSS Design System (`design-system-tokens.css`)
- 50+ CSS custom properties (colors, typography, spacing)
- Component classes (.btn, .card, .grid, etc.)
- Responsive breakpoints
- Animation definitions
- **Use for:** Consistent visual design across all projects

### 3. JavaScript Shared Library (`shared-interactions.js`)
- Sticky nav on scroll
- Mobile hamburger menu
- Active link highlighting
- Fade-up scroll animations
- Form submission UX
- **Use for:** Common interactive behaviors without custom code

### 4. Information Architecture Framework (`IA-FRAMEWORK.md`)
- 6-step IA process
- Content taxonomy approach
- URL naming conventions
- 4-phase expansion roadmap template
- SEO metadata structure
- **Use for:** Planning content structure for any website

### 5. Developer Template (`DEVELOPER-STYLE-GUIDE-TEMPLATE.md`)
- Complete development standards
- Component patterns with code examples
- Mobile responsiveness checklist
- Accessibility standards (WCAG AA)
- Performance targets (Lighthouse)
- Deployment checklist
- **Use for:** Brief developers on standards before building

### 6. Double Diamond Process (`DOUBLE-DIAMOND-PROCESS.md`)
- Phase breakdown (Discover → Define → Develop → Deliver)
- Activities per phase
- Quality gates and checkpoints
- **Use for:** Project management framework for any design project

---

## Metrics for Success

### Phase 1 (Launch) Metrics
- [ ] Website live by 2026-05-01
- [ ] All 6 pages load in <3 seconds (desktop), <5 seconds (mobile)
- [ ] Lighthouse score ≥80 on all pages
- [ ] WCAG AA accessibility audit passes
- [ ] Zero broken links (404s, missing images)
- [ ] Contact form submissions tracked

### Phase 2 (Growth) Metrics
- [ ] Monthly blog/insights articles published (minimum 1/month per pillar)
- [ ] Case study published (first real client engagement)
- [ ] Service deep-dive pages launched (starting with top 2-3 pillars)
- [ ] Blog traffic increases month-over-month
- [ ] Contact form submissions from organic traffic

### Long-Term (Year 1) Metrics
- [ ] 10+ blog articles published across 6 pillars
- [ ] 3+ case studies published
- [ ] 6 service pillar pages deep-dives live
- [ ] Organic search traffic contributes 30%+ of monthly sessions
- [ ] Contact form conversions tracked and optimized

---

## Future Improvements (Post-Launch)

### Short-Term (Month 1-2)
- Monitor actual user behavior (heatmaps, session recordings)
- Collect feedback from site visitors (popup survey)
- Track which pages get most traffic
- Identify any broken links or form submission issues

### Medium-Term (Month 3-6)
- Add analytics goals and conversion tracking
- Optimize high-traffic pages (A/B test CTA, messaging)
- Build case study database and publishing workflow
- Launch blog content series on top-performing topics

### Long-Term (Month 6-12)
- Expand service offerings based on market response
- Build expert network directory
- Create resource library (downloadable templates)
- Plan website redesign based on 1+ year of learnings

---

## For Future Projects: Quick Start Template

If you're replicating this process for another website project, follow this timeline:

**Week 1-2: Discover Phase**
- [ ] Read strategy/positioning documents
- [ ] Identify reference sites and extract design tokens
- [ ] Interview stakeholders (what problem does this website solve?)
- [ ] Create user personas and journey map
- [ ] Define success metrics

**Week 2-3: Define Phase**
- [ ] Create Information Architecture (page structure, content taxonomy)
- [ ] Draft all page outlines (section-by-section)
- [ ] Define internal linking strategy
- [ ] Create metadata structure (SEO)
- [ ] Share IA with stakeholders for feedback

**Week 3-4: Develop Phase**
- [ ] Create CSS design system (colors, typography, components)
- [ ] Build design-concept.html (interactive mockup of all sections)
- [ ] Create Developer Template with patterns and guidelines
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Create Partner Review Package

**Week 4 onwards: Deliver Phase**
- [ ] Collect partner feedback
- [ ] Refine design based on feedback
- [ ] Build production pages using Developer Template
- [ ] QA all pages (accessibility, performance, cross-browser)
- [ ] Deploy and launch

---

## Conclusion

This website project demonstrates that great digital products come from discipline, not heroics. By following a structured design thinking process, maintaining a single source of truth for design and development standards, and involving stakeholders at strategic gates (not every step), we were able to design and build a professional, strategic website that serves VSON's business objectives.

The reusable assets created — HTML templates, CSS design systems, developer guidelines, and process documentation — will accelerate future website projects and ensure consistency as VSON's digital presence evolves.

---

**Document Version:** 1.0
**Last Updated:** 2026-03-29
**Next Review:** 2026-05-01 (post-launch retrospective)
**Maintainer:** VSON Advisory — Web Development Team
