# VSON Corporate `build-v2/` — Documentation

Start here if you are new to this folder.

## The five docs

| File | You want to… |
|---|---|
| [01-ARCHITECTURE.md](01-ARCHITECTURE.md) | Understand the folder structure and the 3-layer model |
| [02-HOW-IT-WORKS.md](02-HOW-IT-WORKS.md) | Learn how the build system turns source → `_site/` |
| [03-HOW-TO-EDIT.md](03-HOW-TO-EDIT.md) | Change a word, add a page, or tweak a component |
| [04-DECISIONS.md](04-DECISIONS.md) | Know why a given choice was made |
| [05-TESTING.md](05-TESTING.md) | Run or add Playwright tests |

## One-paragraph summary

Templates (`pages/`) + copy (`content/`) + partials (`components/`) are combined
by `build.js` using Handlebars to produce 13 finished HTML files in `_site/`.
You edit source files; the browser loads the output.