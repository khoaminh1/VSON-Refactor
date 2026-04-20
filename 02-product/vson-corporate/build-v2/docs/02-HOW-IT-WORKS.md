# How the build works

## One sentence

`build.js` reads `pages/*.html`, looks up matching `content/pages/*.json`,
composes Handlebars partials from `components/`, and writes finished HTML
to `_site/`.

## The steps, in order

1. **Register partials.** Every `components/**/*.html` becomes a Handlebars
   partial. Naming follows folder path: `components/layout/nav.html` →
   `{{> layout/nav}}`.

2. **Load site-wide data.** `content/site.json`, `nav.json`, and `footer.json`
   are loaded once and injected into every page render.

3. **Wipe and re-create `_site/`.** Every build starts clean.

4. **Copy static assets.** Contents of `assets/`, `components/css/`, and
   `components/js/` are copied verbatim into `_site/`.

5. **Render each page.** For every `pages/*.html`:
   - Read the matching `content/pages/<name>.json`
   - Spread its keys into the Handlebars context
   - Also pass `site`, `nav`, `footer` alongside
   - Write the output to `_site/<name>.html`

## Context model

Inside a page template, the following variables are always available:

| Variable | Source | Typical use |
|---|---|---|
| `site` | `content/site.json` | `{{site.name}}`, `{{site.domain}}` |
| `nav` | `content/nav.json` | `{{> layout/nav}}` reads it internally |
| `footer` | `content/footer.json` | `{{> layout/footer}}` reads it internally |
| `meta` | top-level in page JSON | `{{meta.title}}`, `{{meta.description}}` |
| (page keys) | rest of page JSON | `{{hero.heading}}`, `{{pillars.cards}}` |

## Why `_site/` and not in-place rendering?

Because components and content are **source**. The rendered HTML is a
derivative. Keeping them separate means:

- You never accidentally commit a rendering artefact as source.
- Rebuilds are idempotent (wipe + re-render).
- The file you open in a browser matches exactly what a static host would serve.

## Partial paths

Partials use their relative path from `components/` with the `.html` extension
stripped:

| File | Partial name |
|---|---|
| `components/layout/nav.html` | `layout/nav` |
| `components/ui/Button.html` | `ui/Button` |
| `components/sections/Hero.html` | `sections/Hero` |

Usage: `{{> layout/nav}}` — Handlebars looks up the partial by name.

## What is NOT rebuilt on refresh

CSS and JS are loaded directly by the browser from `_site/components/css/…`
and `_site/components/js/…`. Editing those files requires only a browser
refresh, not a rebuild. Editing content JSON, page shells, or component HTML
does require running `npm run build`.