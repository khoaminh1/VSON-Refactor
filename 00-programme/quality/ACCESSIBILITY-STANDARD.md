# Accessibility Standard — VSON Web Platform Programme

**Owner:** Duy Le (PO) + Thinh (Tech Lead)
**Reviewer:** Fred (PM)
**Last Updated:** 2026-04-02
**Status:** Draft

---

## Target Level

**WCAG 2.1 Level AA** for both vsonadvisory.com and vson.vn.

---

## Key Requirements

### Perceivable
- [ ] All images have meaningful alt text
- [ ] Sufficient colour contrast (4.5:1 for normal text, 3:1 for large text)
- [ ] Text resizable to 200% without loss of content
- [ ] No content conveyed by colour alone

### Operable
- [ ] All interactive elements keyboard accessible
- [ ] Visible focus indicators on all focusable elements
- [ ] No keyboard traps
- [ ] Skip navigation link on all pages

### Understandable
- [ ] Language attribute set on HTML element (lang="en" / lang="vi")
- [ ] Form labels associated with inputs
- [ ] Error messages descriptive and adjacent to field
- [ ] Consistent navigation across pages

### Robust
- [ ] Valid semantic HTML
- [ ] ARIA used correctly where needed
- [ ] Tested with screen reader (NVDA or VoiceOver)

---

## Testing Plan

- **During build:** axe-core browser extension on each page
- **Pre-launch:** Manual screen reader test + keyboard-only navigation
- **Post-launch:** Annual accessibility audit
- Results logged in: `01-delivery/*/quality-results/`
