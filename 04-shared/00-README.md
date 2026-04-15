# VSON Website — Reusable Assets for Future Projects

**Created:** 2026-03-29
**Version:** 1.0
**Purpose:** Standardized templates, design systems, and frameworks for future website projects

---

## Folder Contents

### 1. HTML Page Template (`page-template.html`)
**Use for:** Bootstrapping new pages or websites with consistent structure

**Includes:**
- Semantic HTML5 boilerplate
- Meta tags (title, description, OG tags, canonical)
- Font loading (Playfair Display + Inter)
- Navigation and footer structure
- Main content placeholder
- Accessibility attributes (alt text examples, heading hierarchy)

**How to use:**
1. Copy `page-template.html` to your new project
2. Replace `[PAGE TITLE]`, metadata, and content sections
3. Link to your `css/styles.css` and `js/main.js`

---

### 2. CSS Design System (`design-system-tokens.css`)
**Use for:** Consistent visual design across projects

**Includes:**
- Color palette (navy, slate, blue, grayscale)
- Typography scale (font families, sizes, weights)
- Spacing system (margins, padding, gaps)
- Component classes (.btn, .card, .grid, etc.)
- Responsive breakpoints (768px, 1024px)
- Animation/transition definitions

**How to use:**
1. Copy `design-system-tokens.css` to your new project's `css/` folder
2. Link in your HTML: `<link rel="stylesheet" href="css/design-system.css">`
3. Use CSS variables in your components: `background: var(--blue);`

**Customization:**
- Edit `:root { }` variables for brand colors
- Modify font families for different brands
- Adjust spacing scale if needed
- Keep component class names consistent

---

### 3. JavaScript Shared Library (`shared-interactions.js`)
**Use for:** Common interactive behaviors

**Includes:**
- Sticky navigation on scroll
- Mobile hamburger menu toggle
- Active link highlighting
- Fade-up animations on scroll (using `data-fade` attribute)
- Form submission UX (placeholder)

**How to use:**
1. Copy `shared-interactions.js` to your new project's `js/` folder
2. Link before closing `</body>`: `<script src="js/shared-interactions.js"></script>`
3. No additional configuration needed — behaviors activate automatically

---

### 4. Information Architecture Methodology (`IA-FRAMEWORK.md`)
**Use for:** Planning content structure and expansion strategy for any website

**Includes:**
- 6-step IA process (Content audit → Navigation design → Sitemap → Wireframes → Testing → Launch)
- Content taxonomy framework (pillars, tags, metadata)
- URL naming conventions (semantic, SEO-friendly)
- Internal linking strategy
- Content expansion roadmap template (4 phases)
- SEO metadata checklist
- Analytics tracking plan

**How to use:**
1. Follow the 6-step process for any new website project
2. Adapt the 4-phase expansion roadmap to your timeline
3. Use the content taxonomy to organize your domain knowledge
4. Apply the URL naming conventions to keep structure consistent

---

### 5. Developer Style Guide Template (`DEVELOPER-STYLE-GUIDE-TEMPLATE.md`)
**Use for:** Documenting standards for future developers

**Includes:**
- HTML page template with instructions
- CSS custom properties reference
- Reusable component patterns (buttons, cards, grids, etc.)
- Mobile responsiveness checklist
- Accessibility standards (WCAG AA)
- SEO best practices
- JavaScript usage guidelines
- Image optimization guidelines
- Form handling patterns
- Performance targets (Lighthouse scores)
- Deployment checklist
- Code snippet library
- Naming conventions (CSS, IDs, files)

**How to use:**
1. Copy and adapt this template for your new project
2. Replace VSON-specific references with your project details
3. Add/remove sections based on your tech stack
4. Share with developers before they start building

---

### 6. Double Diamond Design Process (`DOUBLE-DIAMOND-PROCESS.md`)
**Use for:** Structured approach to website design projects

**Includes:**
- Phase breakdown (Discover → Define → Develop → Deliver)
- Activities per phase
- Deliverables at each gate
- Quality checkpoints
- Stakeholder involvement at each stage
- Risk management approach
- Timeline and resource planning

**How to use:**
1. Use as your project management framework
2. Adapt timelines based on project scope
3. Ensure all quality gates are completed before proceeding
4. Document decisions at each gate for future reference

---

### 7. Content Pillar Framework (`CONTENT-PILLARS-TEMPLATE.xlsx`)
**Use for:** Organizing domain knowledge into teachable categories

**Includes:**
- Pillar definition (what expertise/domain it covers)
- Target audience per pillar
- Sample content articles (5-10 per pillar)
- SEO keywords per pillar
- Internal linking strategy
- Blog publishing calendar
- Success metrics (views, engagement, conversions)

**How to use:**
1. Open the template in Excel or Google Sheets
2. Replace the 6 VSON pillars with your domain's core areas
3. List sample articles and keywords
4. Use as editorial calendar for your blog/insights
5. Track performance metrics per pillar

---

### 8. Design-to-Code Workflow (`DESIGN-TO-CODE-WORKFLOW.md`)
**Use for:** Process documentation on translating designs into code

**Includes:**
- Approval gates (design approval before code)
- Design system extraction (tokens, components)
- HTML/CSS/JS structure
- Component library patterns
- Testing checklist (responsive, accessibility, performance)
- Deployment process
- Feedback loops (code review, QA, launch)

**How to use:**
1. Follow this workflow for all future website projects
2. Document design decisions before coding
3. Maintain design-to-code alignment through gates
4. Use QA checklist before launch

---

## Quick Start for New Projects

### Scenario 1: Building a New Website from Scratch

1. **Week 1:** Use `DOUBLE-DIAMOND-PROCESS.md` to plan discovery
2. **Week 2:** Use `IA-FRAMEWORK.md` to create sitemap and content strategy
3. **Week 3-4:** Design & approve using design system tokens from `design-system-tokens.css`
4. **Week 5:** Use `page-template.html` to build pages
5. **Week 6:** Share `DEVELOPER-STYLE-GUIDE-TEMPLATE.md` with dev team
6. **Week 7-8:** Develop all pages using the style guide
7. **Week 9:** QA & launch

---

### Scenario 2: Extending an Existing Website

1. Use `IA-FRAMEWORK.md` Phase 4 (expansion roadmap)
2. Use `page-template.html` for new page boilerplate
3. Reference `design-system-tokens.css` to match existing brand
4. Follow `DEVELOPER-STYLE-GUIDE-TEMPLATE.md` for consistency
5. Maintain the same `shared-interactions.js` across all pages

---

### Scenario 3: Brand Refresh / Redesign

1. Update colors and typography in `design-system-tokens.css`
2. Refine components in `DEVELOPER-STYLE-GUIDE-TEMPLATE.md`
3. Update `page-template.html` if structure changes
4. Re-run all pages through accessibility and performance checks
5. Update `CONTENT-PILLARS-TEMPLATE.xlsx` if positioning changes

---

## File References

| File | Purpose | Update Frequency |
|------|---------|-----------------|
| `page-template.html` | Boilerplate HTML structure | Quarterly or per brand change |
| `design-system-tokens.css` | Visual consistency | Per brand/project |
| `shared-interactions.js` | Common behaviors | As new features needed |
| `IA-FRAMEWORK.md` | Content structure process | Rarely (core methodology) |
| `DEVELOPER-STYLE-GUIDE-TEMPLATE.md` | Development standards | Per tech stack update |
| `DOUBLE-DIAMOND-PROCESS.md` | Project methodology | Rarely (core process) |
| `CONTENT-PILLARS-TEMPLATE.xlsx` | Content organization | Per project |
| `DESIGN-TO-CODE-WORKFLOW.md` | Workflow documentation | Per tool/process change |

---

## Customization Checklist for New Projects

When starting a new project, adapt these assets:

- [ ] Replace `VSON Advisory` with your company name
- [ ] Update color palette in `design-system-tokens.css`
- [ ] Update font families (or keep Playfair + Inter)
- [ ] Replace content pillars with your domain's expertise areas
- [ ] Update URL structure in IA framework
- [ ] Customize target audiences in style guide
- [ ] Adjust timeline in Double Diamond process
- [ ] Update performance targets (based on project scope)
- [ ] Replace sample content with your domain knowledge

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-29 | Initial asset library created from VSON Advisory project |

---

## Related Documents

- `../DEVELOPER-TEMPLATE.md` — Full developer style guide (project-specific)
- `../INFORMATION-ARCHITECTURE.md` — Full IA for VSON Advisory project
- `../DESIGN-CONCEPT.html` — Visual reference for design system
- `KNOWLEDGE-CAPTURE/PROCESS-DOCUMENTATION.md` — Detailed process notes

---

**Last Updated:** 2026-03-29
**Maintained by:** VSON Advisory — Web Development
**License:** Internal use only
