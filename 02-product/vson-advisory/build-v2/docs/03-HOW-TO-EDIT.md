# How to edit

## Running locally

```bash
# First time only
cd 02-product/vson-advisory/build-v2
npm install

# Every time you want to see the site
npm run dev          # builds + serves at http://localhost:3000/

# OR separately:
npm run build        # regenerates _site/
npm run serve        # serves _site/ on :3000
```

---

## Common editing tasks

### Change text on a page

1. Open the matching JSON file:
   - Homepage → `content/pages/index.json`
   - Approach → `content/pages/approach.json`
   - Leadership → `content/pages/brain-trust.json`
   - (etc.)
2. Edit the relevant field
3. Run `npm run build`
4. Hard-refresh the browser (Ctrl+Shift+R)

**Example:** Change the hero headline on the homepage.

```jsonc
// content/pages/index.json
{
  "hero": {
    "heading": "We Don't Consult from a Distance.<br/>We Govern <em>Outcomes.</em>"
    //                    ↑ edit this string
  }
}
```

### Change a nav link

```jsonc
// content/nav.json
{
  "links": [
    { "label": "Contact", "href": "/contact.html" }
    //          ↑ edit this
  ]
}
```

Run `npm run build` — all 7 pages update automatically.

### Change footer copyright or legal text

```jsonc
// content/footer.json
{
  "legal": {
    "copyright": "© 2026 VSON Pte. Ltd. All Rights Reserved.",
    "disclaimer": "..."
  }
}
```

### Change a colour or other CSS token

```css
/* components/css/tokens.css */
:root {
  --vson-blue: #3b82f6;  /* ← edit this */
}
```

No build needed — just refresh the browser. (CSS is served directly.)

### Change the heading style on h1

```css
/* components/css/layout.css */
h1 {
  font-size: clamp(2.5rem, 5vw, var(--text-7xl));  /* ← edit this */
}
```

Refresh browser.

### Add a new section to a page

Two steps:

1. Create a new section template in `components/sections/` — e.g. `NewSection.html`
2. Add to the page shell:

```html
<!-- pages/index.html -->
<main id="main-content">
  {{> sections/Hero}}
  {{> sections/NewSection}}   <!-- ← add this line -->
  {{> sections/ValueChain}}
</main>
```

Also add matching data in `content/pages/index.json`:

```jsonc
{
  "new_section": {
    "heading": "…",
    "body": "…"
  }
}
```

Inside `NewSection.html`, reference the data with `{{new_section.heading}}`.

Run `npm run build`.

### Add a brand new page

1. Create `pages/new-page.html` (copy another page as a starting point)
2. Create `content/pages/new-page.json` with the page's text
3. Add to nav: edit `content/nav.json`, add a link
4. Run `npm run build`

**Important:** The JSON filename must match the HTML filename.
`pages/new-page.html` ↔ `content/pages/new-page.json`.

---

## Common mistakes

### "My changes don't show up in the browser"

You probably forgot to run `npm run build`. The browser reads from `_site/`
and that folder only updates when you build.

### "I edited `_site/index.html` directly and my changes disappeared"

`_site/` is regenerated every build. Never edit there. Edit the source in
`pages/`, `content/`, or `components/`.

### "The page renders with empty `<title>` / missing text"

Most likely the content JSON is missing or doesn't match the page name.
The build prints a warning when this happens:

```
⚠ Missing content file for new-page.html (expected content/pages/new-page.json)
```

Check that your JSON filename matches your HTML page filename exactly.

### "Nav link doesn't highlight on the current page"

This works automatically — `components/js/shared.js` → `useActiveNavLink`
adds `nav__link--active` based on the URL path. Nothing to configure.

---

## Where things live (quick reference)

| I want to change | I edit |
|---|---|
| Homepage text | `content/pages/index.json` |
| Approach page text | `content/pages/approach.json` |
| Leadership bios | `content/pages/brain-trust.json` |
| Nav labels / CTA | `content/nav.json` |
| Footer text | `content/footer.json` |
| Brand name, domain | `content/site.json` |
| Colours | `components/css/tokens.css` |
| Spacing, fonts | `components/css/tokens.css` or `layout.css` |
| Button styles | `components/css/ui.css` |
| Nav styles | `components/css/nav.css` |
| Footer styles | `components/css/footer.css` |
| Section styles (hero, etc.) | `components/css/sections.css` |
| JS behaviour | `components/js/shared.js` |
| Nav HTML structure | `components/layout/nav.html` |
| Footer HTML structure | `components/layout/footer.html` |
| `<head>` structure | `components/layout/base-head.html` |
| Hero section HTML | `components/sections/Hero.html` |
| (etc.) | `components/sections/*.html` |