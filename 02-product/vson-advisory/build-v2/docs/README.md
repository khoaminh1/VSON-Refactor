# VSON Advisory — `build-v2/` Documentation

This folder contains all documentation for the refactored Advisory website.
Start with the doc that matches your situation:

| I want to... | Read |
|---|---|
| Understand the overall structure | [01-ARCHITECTURE.md](01-ARCHITECTURE.md) |
| Understand how the build works and why `_site/` exists | [02-HOW-IT-WORKS.md](02-HOW-IT-WORKS.md) |
| Edit text, add a page, or change the nav | [03-HOW-TO-EDIT.md](03-HOW-TO-EDIT.md) |
| Know why the code looks the way it does | [04-DECISIONS.md](04-DECISIONS.md) |
| Run or write tests | [05-TESTING.md](05-TESTING.md) |

## Quick orientation

```
build-v2/
├── components/      ← reusable HTML + CSS + JS (source, never served directly)
├── content/         ← all text as JSON
├── pages/           ← 25-line page templates
├── assets/          ← images, icons, fonts
├── _site/           ← rendered HTML (generated, gitignored)
├── build.js         ← the build script
├── package.json
└── docs/            ← you are here
```

## Run the site

```
npm install          # once
npm run dev          # build + serve at http://localhost:3000/
```

See [03-HOW-TO-EDIT.md](03-HOW-TO-EDIT.md) for the full editing workflow.