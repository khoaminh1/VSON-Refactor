# VSON Corporate — `build-v2/`

Refactored Corporate website (vson.vn). Old `build/` remains frozen and continues
to serve production until cutover.

## Run it

```bash
npm install       # once
npm run dev       # build + serve at http://localhost:3001/
```

## Folder map

```
build-v2/
├── components/   reusable HTML + CSS + JS (source)
│   ├── layout/       base-head, nav (with Solutions dropdown), footer
│   ├── ui/           Button, Eyebrow, LogoMark
│   ├── sections/     page-level sections (hero, pillars, CS cards, forms, …)
│   ├── css/          8 CSS files, split by concern
│   └── js/           shared.js (nav, dropdown, active link, CS filter)
├── content/      all text as JSON (edit here to change copy)
│   ├── site.json
│   ├── nav.json
│   ├── footer.json
│   └── pages/        one JSON per page (13 pages)
├── assets/       images, icons, fonts (binary files)
├── pages/        13 template shells (one per route)
├── _site/        rendered HTML (generated, gitignored)
├── build.js      compiles pages/ + content/ + components/ → _site/
├── package.json
└── docs/         full documentation — start here
```

## Documentation

All documentation is in [`docs/`](docs/README.md):

| File | Purpose |
|---|---|
| [docs/01-ARCHITECTURE.md](docs/01-ARCHITECTURE.md) | 3-layer structure explained |
| [docs/02-HOW-IT-WORKS.md](docs/02-HOW-IT-WORKS.md) | The build system, `_site/`, and the mechanism |
| [docs/03-HOW-TO-EDIT.md](docs/03-HOW-TO-EDIT.md) | Practical editing guide + common mistakes |
| [docs/04-DECISIONS.md](docs/04-DECISIONS.md) | Chronological log of design decisions |
| [docs/05-TESTING.md](docs/05-TESTING.md) | Playwright test setup |

## Quick rules

1. **Edit source, not `_site/`** — `_site/` is regenerated on every build
2. **Text goes in `content/*.json`** — never hardcoded in components
3. **JSON filename must match page filename** — `pages/index.html` ↔ `content/pages/index.json`
4. **CSS/JS don't need a rebuild** — browser loads them directly; refresh suffices