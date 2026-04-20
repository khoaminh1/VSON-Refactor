# Testing

Playwright drives the test suite.

## Run

```bash
npm install           # once
npm test              # run all tests headless
npm run test:headed   # run with visible browser
npm run test:ui       # interactive UI mode
npm run test:report   # open the last HTML report
```

The `webServer` block in `playwright.config.js` runs `npm run dev`
automatically before tests, so you do not need a running server.

## Layout

```
tests/
├── report/           HTML report output (gitignored)
└── *.spec.js         test files
```

## What to test

Useful starter suites (adapt from Advisory's `build-v2/tests/`):

- **smoke.spec.js** — every page returns 200 and renders without JS errors.
- **navigation.spec.js** — nav links on every page go to valid URLs;
  Solutions dropdown contains the two expected entries; primary CTA
  points at `/contact.html`.
- **content.spec.js** — key copy from `content/*.json` appears on the
  rendered page (catches build-pipeline breakage and stale JSON).
- **consistency.spec.js** — every page includes the shared nav + footer
  and the same favicon set.
- **assets.spec.js** — critical CSS and JS load with a 200.

## Ground rules

- Tests hit rendered HTML from `_site/` via the local dev server — no
  mocks, no component-level unit tests.
- Keep selectors semantic (roles, labels) rather than class names so
  re-skins do not break tests.
- When a test fails, `tests/report/` has a screenshot plus the trace for
  the failing run.