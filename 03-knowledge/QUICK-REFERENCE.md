# Website Design Process — Quick Reference Guide

**For:** VSON Team & Future Website Projects
**Version:** 1.0
**Created:** 2026-03-29

---

## TL;DR: 4-Phase Website Design Process

```
WEEK 1-2: DISCOVER
├─ Read strategy docs
├─ Extract design inspiration
├─ Interview stakeholders
└─ Output: User personas, positioning statement

WEEK 2-3: DEFINE
├─ Map Information Architecture (site structure)
├─ Draft all content (page by page)
├─ Plan expansion roadmap
└─ Output: IA document, content outlines

WEEK 3-4: DEVELOP
├─ Create design system (colors, typography, components)
├─ Build design-concept.html (interactive mockup)
├─ Write Developer Template
└─ Output: design-concept.html, CSS, Developer Guide

WEEK 4+: DELIVER
├─ Partner review & feedback collection
├─ Design refinement
├─ Build production pages
├─ QA & launch
└─ Output: Live website
```

---

## Decision Tree: What to Build First

```
Client asks: "Can you build our website?"

   ├─ Do we understand the business strategy?
   │  ├─ NO → Read strategy docs, interview leadership
   │  └─ YES → Continue
   │
   ├─ Do we have a design reference?
   │  ├─ NO → Find 3 competitor/inspiration sites
   │  └─ YES → Extract colors, typography, components
   │
   ├─ Do we know what pages we need?
   │  ├─ NO → Create Information Architecture
   │  └─ YES → Validate it with stakeholders
   │
   ├─ Do we have visual design approved?
   │  ├─ NO → Build design-concept.html and collect feedback
   │  └─ YES → Start building production pages
   │
   └─ Always: Share Developer Template BEFORE coding starts
```

---

## 5 Rules for Website Design Success

### Rule 1: Design Strategy ≠ Visual Design
**Strategy** = What pages, what content, what navigation, what business goals
**Visual Design** = Colors, typography, layout, animations

Do strategy FIRST. Share with stakeholders. Get approval. THEN do visual design.

### Rule 2: One Source of Truth for Everything
**Design System** — Single CSS file with all colors, typography, components
**Developer Template** — Single guide for how developers should build pages
**Information Architecture** — Single roadmap for all pages and content
**Decision Log** — Single document explaining why each decision was made

If it's not documented in one of these, it doesn't exist.

### Rule 3: HTML Mockups > Figma Mockups
Why? Because:
- Stakeholders see it on actual devices (mobile, tablet, desktop)
- Responsive design issues get caught BEFORE code is written
- Interactive (nav works, animations show)
- No translation needed for developers (the mockup IS the spec)

### Rule 4: Partner Feedback Should Be Structured
Not: "Tell us what you think"
Yes:
```
SECTION: [e.g., Contact Page]
FEEDBACK CATEGORY: [Visual / Content / Strategy]
COMMENT: [Specific feedback]
PRIORITY: [Must-change / Nice-to-have]
OWNER: [Who should fix this?]
```

### Rule 5: Constraint = Creativity
Don't let developers use custom CSS. Force them to use the design system.
Why? Because:
- Pages look consistent
- Development is faster (no debates about styling)
- Future updates are easy (change the system, all pages update)

---

## Checklist: Launch Readiness

### Design Phase
- [ ] Strategy document reviewed and approved
- [ ] Information Architecture shared with stakeholders
- [ ] design-concept.html tested on mobile and desktop
- [ ] Partner feedback collected and incorporated
- [ ] Visual design approved before any code is written

### Development Phase
- [ ] Developer Template shared with dev team
- [ ] All pages built using page-template.html
- [ ] All styling uses design-system-tokens.css (zero custom CSS)
- [ ] Mobile responsive tested (375px, 768px, 1024px, 1920px)
- [ ] Accessibility audit passed (WCAG AA standard)

### Quality Assurance
- [ ] Lighthouse score ≥80 on all pages
- [ ] All links validated (no 404s)
- [ ] All images optimized (<200KB, with alt text)
- [ ] Contact form tested and working
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] iOS Safari and Android Chrome tested

### Pre-Launch
- [ ] All copy proofread and spell-checked
- [ ] All metadata filled in (titles, descriptions, OG tags)
- [ ] SEO keywords verified per page
- [ ] Analytics tracking installed
- [ ] Error monitoring configured
- [ ] Team trained on any manual processes

---

## When to Use Which Template

| Template | When to Use | Output |
|----------|-----------|--------|
| `page-template.html` | Starting any new web page | HTML boilerplate ready for content |
| `design-system-tokens.css` | Ensuring visual consistency | CSS file with 50+ reusable variables |
| `shared-interactions.js` | Adding common behaviors (nav, animations) | JS library for menu, scroll effects, etc. |
| `DEVELOPER-STYLE-GUIDE-TEMPLATE.md` | Briefing developers on standards | Developer guide tailored to your project |
| `INFORMATION-ARCHITECTURE.md` | Planning site structure and content | IA document with roadmap and taxonomy |
| `DOUBLE-DIAMOND-PROCESS.md` | Managing design project timeline | 4-phase project plan with gates |

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Start Coding Before Strategy is Locked
**Result:** Pages don't align with business goals; lots of rework

**Solution:** Spend weeks 1-3 on Discover/Define. Don't touch code until strategy is approved.

---

### ❌ Mistake 2: Let Stakeholders Approve Visual Design, Not Strategy
**Result:** Approve beautiful design that doesn't accomplish business goals

**Solution:** Get strategy approval FIRST (Information Architecture). Visual design comes after.

---

### ❌ Mistake 3: Custom CSS Everywhere ("It's Just a Small Change")
**Result:** Pages start looking different; design system breaks; future updates are hard

**Solution:** Enforce the rule: All styling must use the design system. No custom CSS.

---

### ❌ Mistake 4: Skip the Information Architecture
**Result:** Content doesn't fit into a coherent structure; internal linking is haphazard; future pages don't know where to go

**Solution:** Spend 3-5 days mapping out Information Architecture before designing a single page.

---

### ❌ Mistake 5: Assume Mobile Will Work Fine
**Result:** Mobile responsiveness is broken; site is unusable on phones

**Solution:** Test responsive design during Develop phase (not Launch phase). Use actual devices, not just DevTools.

---

## Rapid Prototyping Checklist (If You Have Less Time)

If you only have 4 weeks instead of 8:

**Week 1:**
- [ ] Strategy read & summarized
- [ ] 3-4 reference sites analyzed
- [ ] User personas defined
- [ ] Success metrics listed

**Week 2:**
- [ ] Information Architecture (site structure) designed
- [ ] Content outlines drafted for all pages
- [ ] Navigation structure finalized

**Week 3:**
- [ ] Design system created (colors, typography, components)
- [ ] design-concept.html built
- [ ] Developer Template created

**Week 4:**
- [ ] Rapid feedback collection
- [ ] Production pages built (use page-template.html)
- [ ] QA & launch

**Trade-offs:**
- Fewer rounds of feedback (1-2 instead of 3-4)
- Less time for performance optimization (aim for Lighthouse 70+ instead of 80+)
- Smaller MVP (maybe 4 pages instead of 6)
- Content expansion pushed to later (Phase 2)

---

## Scaling This Process

### For a Larger Team (3-4 developers)
- Assign one developer per 2 pages (parallel development)
- Use the Developer Template as the source of truth for consistency
- Daily standups to catch misalignment
- Central QA person who checks all pages

### For a Distributed Team
- All documents live in a shared space (Google Drive, GitHub, etc.)
- Design-concept.html is the single source of truth (not Figma or other tools)
- Developer Template is detailed and prescriptive (less room for interpretation)
- Weekly reviews to ensure alignment

### For Multiple Projects
- Keep reusable assets in a shared library (REUSABLE-ASSETS folder)
- Adapt them per project (colors, typography, content)
- Create a project-specific Information Architecture
- Maintain a decision log per project

---

## Knowledge Base Links

| Document | Purpose |
|----------|---------|
| `PROCESS-DOCUMENTATION.md` | Full case study of VSON website project |
| `REUSABLE-ASSETS/00-README.md` | Guide to reusable templates and systems |
| `REUSABLE-ASSETS/page-template.html` | HTML boilerplate for any page |
| `REUSABLE-ASSETS/design-system-tokens.css` | CSS design system (colors, typography, components) |
| `../INFORMATION-ARCHITECTURE.md` | Full IA for VSON project (adapt for your project) |
| `../DEVELOPER-TEMPLATE.md` | Full developer guide for VSON project (adapt for your project) |
| `../PARTNER-REVIEW-PACKAGE.md` | How to structure feedback collection |

---

## Next Steps for VSON

**Immediate (This Week):**
- [ ] Share PARTNER-REVIEW-PACKAGE.md with Frederick, Henry, Emily
- [ ] Collect feedback on design-concept.html
- [ ] Collect feedback on Information Architecture roadmap
- [ ] Confirm regional contacts and legal information

**Next Week:**
- [ ] Incorporate feedback into design-concept.html
- [ ] Finalize design approval
- [ ] Start building production pages

**Week 3:**
- [ ] All 6 pages coded
- [ ] QA & testing
- [ ] Final approval

**Week 4:**
- [ ] Deploy to production
- [ ] Launch announcement

---

## Pro Tips

### Tip 1: Use Design Concept as Your Spec
Instead of writing a 50-page design specification document, use design-concept.html as the spec. Developers can see exactly how the site should look and behave.

### Tip 2: Create a "Design Decision Log"
For every major decision (why 6 pages instead of 3, why these colors, why this navigation structure), write it down. Future you will appreciate it.

### Tip 3: Test Mobile First
Design for mobile (375px), then enhance for tablet (768px), then enhance for desktop (1024px+). Not the other way around.

### Tip 4: Make the Information Architecture Visual
Don't just write out the sitemap. Create a visual diagram showing how pages relate to each other and how content flows.

### Tip 5: Build the Reusable Assets
Even if you only need them for this project, build them as if you'll use them in 10 more projects. Good templates pay dividends.

---

## Questions? Common FAQ

**Q: How long does this process take?**
A: 8 weeks for a standard 6-page marketing website. Can be compressed to 4 weeks with smaller scope and less feedback rounds.

**Q: Do we really need Information Architecture?**
A: Yes. It prevents content chaos and makes it clear where future pages fit. Even small websites benefit from a 1-page IA.

**Q: Can we skip the design-concept.html?**
A: Not recommended. It's the communication tool between designers, developers, and stakeholders. Saves rework later.

**Q: Should we use Figma or HTML for the mockup?**
A: HTML mockup (design-concept.html). You get real responsive behavior, stakeholders see it on actual devices, and developers use it as the spec.

**Q: How do we maintain consistency if developers are remote?**
A: Developer Template + design-system-tokens.css + strict code review. The template is prescriptive, not advisory.

---

## Final Checklist: Before Your Next Website Project

- [ ] Read PROCESS-DOCUMENTATION.md (learn from VSON project)
- [ ] Bookmark REUSABLE-ASSETS folder (use templates for your project)
- [ ] Copy page-template.html to your new project
- [ ] Copy design-system-tokens.css and adapt colors/typography
- [ ] Use INFORMATION-ARCHITECTURE framework to plan your site structure
- [ ] Use DOUBLE-DIAMOND-PROCESS to manage timeline and gates
- [ ] Create a design-concept.html BEFORE any production code
- [ ] Share PARTNER-REVIEW-PACKAGE template with stakeholders
- [ ] Brief developers using DEVELOPER-STYLE-GUIDE-TEMPLATE
- [ ] Track decisions in a Decision Log (like we did for VSON)

---

**Last Updated:** 2026-03-29
**Version:** 1.0
**Next Review:** 2026-05-01 (post-launch retrospective)
