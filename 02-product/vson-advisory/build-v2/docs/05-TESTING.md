# Testing — Playwright

The site has an automated test suite in [`tests/`](../tests/) powered by Playwright.
Tests run in headless Chromium by default and auto-start the dev server.

---

## First-time setup

```bash
npm install                      # installs @playwright/test
npx playwright install chromium  # downloads the browser binary (~130 MB, one-time)
```

## Running tests

```bash
npm test                    # headless, all specs
npm run test:headed         # see the browser while tests run
npm run test:ui             # interactive UI mode — step through each test
npm run test:report         # open the HTML report from the last run
```

A single test file:
```bash
npx playwright test tests/smoke.spec.js
```

A single test by name:
```bash
npx playwright test -g "nav has all 6 links"
```

---

## What the suite covers

| Spec file | What it tests |
|---|---|
| [smoke.spec.js](../tests/smoke.spec.js) | All 7 pages return 200, have correct titles, render the expected H1, and contain no unresolved `{{ }}` placeholders |
| [consistency.spec.js](../tests/consistency.spec.js) | Nav and footer HTML identical across every page; active nav link highlights correctly |
| [content.spec.js](../tests/content.spec.js) | JSON-sourced content renders: hero paragraphs, 6 capabilities, 5 leaders, 5 vault articles, contact form fields |
| [navigation.spec.js](../tests/navigation.spec.js) | Nav link clicks work, mobile menu toggles, sticky-nav scroll class applies, skip-link present |
| [assets.spec.js](../tests/assets.spec.js) | All 8 CSS files + JS + font CSS load with 200; no console errors on any page; OG meta tags present |

**Total: ~70 test assertions across 5 spec files.**

---

## How the tests stay in sync with content

The test fixtures in [`tests/_fixtures.js`](../tests/_fixtures.js) define:
- The 7 page URLs with expected titles and H1 text
- The 6 nav links with labels and hrefs
- Footer copyright, registration, and disclaimer text

**When you edit content:** if you change a page title, nav label, or footer
legal text, update `_fixtures.js` to match. Only one file needs updating —
all tests read from it.

---

## CI usage

In CI the suite runs with:
- 1 worker (avoids port conflicts)
- 2 retries for flake resistance
- `reuseExistingServer: false` (fresh server per run)

See [`playwright.config.js`](../playwright.config.js) for the full config.

---

## What the suite intentionally does NOT test

- **Visual regression** — no pixel-diff screenshots. The site is text-heavy
  and the refactor preserves structure; visual diff would be noise.
- **Social-media preview rendering** — OG tags are asserted present, but
  whether LinkedIn/Facebook actually renders them correctly needs manual
  verification against their validators.
- **Cross-browser** — Chromium only by default. Add Firefox/WebKit to
  `playwright.config.js` → `projects[]` when cross-browser coverage is needed.
- **Actual form submission** — contact form structure is asserted, but the
  Netlify Forms submission is not simulated (would require a staging
  environment).

---

## Troubleshooting

**"browserType.launch: Executable doesn't exist"**
→ Run `npx playwright install chromium`.

**"Timeout waiting for http://localhost:3000"**
→ Something is holding port 3000. Stop the process or change the port in
both `package.json` `serve` script and `playwright.config.js` `baseURL`.

**Tests pass locally but fail in CI**
→ Most likely a timing issue. Add `await page.waitForLoadState('domcontentloaded')`
before the assertion, or increase the timeout in `playwright.config.js`.