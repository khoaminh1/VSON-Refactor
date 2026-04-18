# Decision Log

Chronological record of architectural decisions made during the refactor,
including decisions that were reversed. This is deliberately honest — the
code looks the way it does because of these choices, and knowing the
reasoning makes future changes easier.

---

## 1. Three-layer architecture: `components/` + `content/` + `assets/`

**Date:** 2026-04-15
**Decision:** Split the codebase into three layers with strict responsibilities.

**Reasoning:**
- Old `build/` mixed structure, styling, and copy in the same HTML files.
  Editing text required navigating 200–400 line files full of inline styles.
- Separating content into JSON means a non-developer (or AI agent) can update
  copy without ever opening an HTML file.
- Three folders give three edit cadences: content changes often, components
  change occasionally, assets change rarely.

**Alternatives considered:**
- **Stay flat** (like old `build/`) — rejected; duplication problems remain.
- **React/Next.js** — rejected; overkill for 7 static pages, contradicts
  ADR-002 (vanilla stack decision).
- **Markdown + frontmatter** for content — rejected; JSON is cleaner for
  programmatic editing and has no parser ambiguity.

---

## 2. Build tool: Handlebars + custom `build.js` (not 11ty / Astro)

**Date:** 2026-04-15
**Decision:** Write a ~60-line Node script using the Handlebars template engine.

**Reasoning:**
- 11ty and Astro work, but add framework weight and configuration.
- The whole build system is visible in one file. No magic, no plugins.
- Handlebars syntax (`{{ }}`, `{{> partial}}`) is widely known and stable.
- Easy to adapt or replace if the project's needs change.

**Alternatives considered:**
- **11ty** — rejected; more features than needed, hides the build logic.
- **Astro** — rejected; introduces JavaScript framework concepts unnecessarily.
- **Pure string concatenation** (no template engine) — rejected; becomes
  unreadable for nested partials and `{{#each}}` loops.

---

## 3. Separate source files from build output (`_site/`)

**Date:** 2026-04-16
**Decision:** Rendered HTML goes into `_site/`, not the same location as templates.

**Reasoning:**
- If the build overwrote `pages/index.html`, the template would be lost.
- Clear separation: edit `pages/` + `content/`, browser reads `_site/`.

**Iteration:** We briefly tried writing rendered HTML to the project root
(no `_site/` folder). It worked technically, but the project root became
cluttered — rendered `index.html` sat next to `package.json`, `build.js`,
`README.md`. Hard to tell source from output. Reverted to `_site/`.

---

## 4. CSS and JS live in `components/`, not `assets/`

**Date:** 2026-04-16
**Decision:** `components/css/` and `components/js/shared.js` are source code
under `components/`. `assets/` holds only images, icons, and fonts.

**Reasoning:**
- CSS and JS are code that defines components. They belong where the
  components live.
- `assets/` is reserved for binary files served to the browser — images,
  icons, fonts. Keeping the definition tight prevents drift.

**Iteration:** We briefly moved CSS/JS into `assets/css/` and `assets/js/`.
Rolled back — user preference for CSS to stay with components reinforced
the conceptual separation: code vs. binaries.

---

## 5. Image paths are flat (no sub-folders for hero/og/team)

**Date:** 2026-04-16
**Decision:** All images live directly under `assets/images/` with
prefix-based naming: `og-home.png`, `team-frederick-dang.webp`, `hero-01.webp`.

**Reasoning:**
- Three sub-folders (`og/`, `team/`, `hero/`) added navigational overhead
  without semantic benefit — each held at most a few files.
- The Advisory hero folder was completely empty (design uses no hero image).
- Prefix-based naming keeps purpose visible in the filename, which is what
  matters when editing JSON references.

---

## 6. Handlebars partial invocations: no hash parameters

**Date:** 2026-04-17
**Decision:** Page templates invoke partials without hash parameters
(`{{> sections/Hero}}`, not `{{> sections/Hero hero=page.hero}}`).

**Reasoning:**
- Hash partial parameters with dotted-path RHS (e.g. `hero=page.hero`) did
  not reliably bind in Handlebars 4.7.8 — partials would receive undefined values.
- Instead, the build script spreads page JSON keys into the root template
  context: `{ ...pageData, site, nav, footer }`.
- Partials then inherit the root context and reach their data via normal
  variable lookup (`{{hero.eyebrow}}`, `{{meta.title}}`).
- Simpler, more reliable, and less verbose.

**Tradeoff:** Components rely on the caller providing certain top-level
keys (e.g. Hero expects `hero` to exist in context). This is documented
in each component's header comment.

---

## 7. Content JSON filename must match page HTML filename

**Date:** 2026-04-17
**Decision:** `pages/index.html` ↔ `content/pages/index.json`.
`pages/approach.html` ↔ `content/pages/approach.json`.

**Reasoning:**
- The build script derives the content path from the page filename. Mismatched
  names silently produce empty pages (real bug we hit — `home.json` vs
  `index.json`).
- Added a `⚠ Missing content file` warning in build.js so this can't happen
  silently again.

---

## 8. Assets referenced via `../` relative paths

**Date:** 2026-04-17
**Decision:** HTML references CSS/JS/assets with relative paths from `_site/`
upward: `../components/css/tokens.css`, `../assets/fonts/fonts.css`.

**Reasoning:**
- With absolute paths (`/components/css/...`), the server would need to
  serve from the project root. But then page URLs become `/_site/index.html`,
  which is ugly.
- Relative paths let the server run inside `_site/` with clean URLs
  (`/index.html`), and `../` hops up to find shared assets.
- No extra config file needed (no `serve.json`, no rewrites).

**Tradeoff:** Paths are harder to reason about on Netlify deployment, where
the publish dir setup will differ. To be addressed at cutover time.

---

## 9. `_site/` contains ONLY HTML — no duplicated `components/` or `assets/`

**Date:** 2026-04-17
**Decision:** `_site/` is just 7 rendered HTML files. CSS, JS, images,
fonts, icons are served directly from their source folders via `../` paths.

**Reasoning:**
- Previously the build copied `components/css/`, `components/js/`, and
  `assets/` into `_site/` so browsers could find them. This created two
  copies of everything — source vs. output — which confused readers.
- Since HTML uses `../` paths now, no copy is needed. One copy of each file.

---

## 10. Brand separation: no shared code between Advisory and Corporate

**Date:** Inherited from ADR-003 (2026-04-02)
**Decision:** `build-v2/` is Advisory-only. Corporate will have its own
independent `build-v2/` with its own tokens, nav structure, and content.

**Reasoning:**
- Advisory uses Playfair Display + navy. Corporate uses Montserrat + forest
  green. Forcing shared CSS would create constant overrides.
- Per ADR-003: share conventions (standards doc), not code files.

---

## 11. `pages/` contains only 7 files

**Date:** 2026-04-17 (corrective action)
**Decision:** `pages/` holds the 7 template shells. `components/layout/`
holds only 3 files: `base-head.html`, `nav.html`, `footer.html`.

**Context:** During an intermediate refactor, 7 page files ended up
duplicated into `components/layout/`. Removed the duplicates — layout
partials are a distinct concept from page shells.

---

## Outstanding decisions

These are deferred and will need resolution before production cutover:

1. **Netlify deploy strategy** — does publish dir become `build-v2/` (and
   Netlify runs `npm run build`), or just `build-v2/_site/` (and we pre-build)?
2. **Absolute vs. relative asset paths for production** — current `../`
   relative paths work locally but may need adjustment for Netlify.
3. **Self-hosted fonts** — scaffold exists in `assets/fonts/fonts.css`.
   Decision: self-host or keep Google Fonts CDN? (Performance vs. dependency.)
4. **Binary asset production** — designer to produce favicon set + 7 OG images.