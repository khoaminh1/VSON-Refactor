# How the build works

## The problem it solves

The 7 pages all share the same navigation bar. In the old `build/` folder,
each page had its own copy of the nav, so updating "Contact" → "Get in Touch"
meant editing 7 separate files. Miss one and the site becomes inconsistent.

The build system solves this: write the nav in ONE file, have the build
copy it into all 7 pages automatically.

---

## The mechanism in 3 steps

### Step 1 — You write SOURCE

Three kinds of source files:

```
components/layout/nav.html    ← the nav (written once)
content/pages/index.json       ← the homepage text
pages/index.html               ← a small shell: "use base-head, use nav,
                                  use Hero section, use footer"
```

### Step 2 — You run `npm run build`

`build.js` reads all source files and combines them:

```
pages/index.html (shell)
   + components/layout/base-head.html
   + components/layout/nav.html
   + components/sections/Hero.html
   + components/sections/ValueChain.html
   + … all other sections
   + components/layout/footer.html
   + content/pages/index.json (text)
   + content/site.json
   + content/nav.json
   + content/footer.json
     ↓
     ↓  [combine everything, fill in all the {{ }} placeholders]
     ↓
_site/index.html  (finished HTML, ~364 lines)
```

The same process runs for each of the 7 pages.

### Step 3 — Browser reads from `_site/`

```
_site/
├── index.html       ← rendered, ready for the browser
├── approach.html
├── brain-trust.html
├── capabilities.html
├── vault.html
├── contact.html
└── thank-you.html
```

When you visit `http://localhost:3000/`, the server sends `_site/index.html`
to your browser. The browser also loads CSS from `components/css/` and JS
from `components/js/` via `../` relative paths.

---

## Why a separate `_site/` folder

Short answer: **so the templates stay intact.**

If the build wrote the finished HTML back to `pages/index.html`, it would
overwrite the template. Next build → there's no template to fill in anymore.

Separating source from output:
- `pages/*.html` = your editable templates with `{{ }}` placeholders
- `_site/*.html` = generated output, wiped and recreated every build

You edit the first. The browser reads the second. They never get confused.

---

## What triggers a rebuild

Only HTML changes need `npm run build`:

| File changed | Needs rebuild? |
|---|---|
| `content/**/*.json` | Yes — text changed, HTML must regenerate |
| `components/layout/*.html` | Yes — nav/footer/head changed |
| `components/sections/*.html` | Yes — section markup changed |
| `components/ui/*.html` | Yes — atom markup changed |
| `pages/*.html` | Yes — page assembly changed |
| `components/css/*.css` | **No** — browser loads CSS directly; just refresh |
| `components/js/shared.js` | **No** — browser loads JS directly; just refresh |
| `assets/**` | **No** — served directly by the browser |

CSS and JS bypass the build entirely — they're served as-is from their
source location.

---

## What `build.js` does (code walkthrough)

`build.js` is ~60 lines. Here's what each section does:

```js
// 1. Register every components/**/*.html file as a named partial
//    Example: components/layout/nav.html → registered as "layout/nav"
registerPartials(COMPONENTS);

// 2. Load the 3 site-wide JSON files once
const site   = readJson('content/site.json');
const nav    = readJson('content/nav.json');
const footer = readJson('content/footer.json');

// 3. Wipe _site/ and make a fresh one
fs.rmSync(OUT); fs.mkdirSync(OUT);

// 4. For each page shell in pages/:
for (const file of readdirSync('pages/')) {
  //    a. Load the matching JSON (e.g. pages/index.html → content/pages/index.json)
  const pageData = readJson('content/pages/' + name + '.json');

  //    b. Compile the shell template, fill in all {{ }} placeholders
  //       using site + nav + footer + pageData
  const html = compile(shell)({ ...pageData, site, nav, footer });

  //    c. Write finished HTML to _site/
  fs.writeFileSync('_site/' + file, html);
}
```

That's the whole system. No frameworks, no magic — just Node + Handlebars
combining source files into finished HTML.

---

## Folder role summary

| Folder | Edit it? | Does the browser see it? |
|---|---|---|
| `components/` | Yes — source | CSS/JS yes; HTML partials no (they get inlined) |
| `content/` | Yes — source | No (text gets inlined into HTML) |
| `pages/` | Yes — source | No (shells get compiled) |
| `assets/` | Yes — source | Yes (served directly) |
| `_site/` | **Never** — output | Yes (browser reads these pages) |