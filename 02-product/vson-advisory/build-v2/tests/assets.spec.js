// Asset + SEO tests — verify CSS loads, no console errors, meta tags present.

const { test, expect } = require('@playwright/test');
const { PAGES } = require('./_fixtures');

// 8 CSS files that must load on every page
const REQUIRED_CSS = [
  '/components/css/tokens.css',
  '/components/css/reset.css',
  '/components/css/utilities.css',
  '/components/css/layout.css',
  '/components/css/ui.css',
  '/components/css/nav.css',
  '/components/css/footer.css',
  '/components/css/sections.css',
];

test.describe('Required CSS files load without 404', () => {
  for (const css of REQUIRED_CSS) {
    test(`${css} → 200`, async ({ request }) => {
      const response = await request.get(css);
      expect(response.status(), `Status for ${css}`).toBe(200);
      expect(response.headers()['content-type']).toContain('text/css');
    });
  }

  test('/components/js/shared.js → 200', async ({ request }) => {
    const response = await request.get('/components/js/shared.js');
    expect(response.status()).toBe(200);
  });

  test('/assets/fonts/fonts.css → 200', async ({ request }) => {
    const response = await request.get('/assets/fonts/fonts.css');
    expect(response.status()).toBe(200);
  });
});

test.describe('No console errors on any page', () => {
  for (const page of PAGES) {
    if (page.path === '/index.html') continue;
    test(`${page.path} — no JS errors`, async ({ page: pw }) => {
      const errors = [];
      pw.on('pageerror', (err) => errors.push(err.message));
      pw.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text());
      });
      await pw.goto(page.path);
      // Wait a beat for shared.js modules to initialise
      await pw.waitForLoadState('domcontentloaded');
      expect(errors, `Console errors on ${page.path}`).toEqual([]);
    });
  }
});

test.describe('SEO meta tags', () => {
  for (const page of PAGES) {
    if (page.path === '/index.html') continue;
    test(`${page.path} has og:title, og:description, canonical`, async ({ page: pw }) => {
      await pw.goto(page.path);

      const ogTitle = await pw.locator('meta[property="og:title"]').getAttribute('content');
      expect(ogTitle, `og:title missing on ${page.path}`).toBeTruthy();
      expect(ogTitle?.length).toBeGreaterThan(5);

      const ogDesc = await pw.locator('meta[property="og:description"]').getAttribute('content');
      expect(ogDesc, `og:description missing on ${page.path}`).toBeTruthy();

      const canonical = await pw.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical, `canonical missing on ${page.path}`).toBeTruthy();
      expect(canonical).toMatch(/^https?:\/\//);
    });
  }
});

test.describe('Favicon and icon set', () => {
  test('homepage references favicon.ico, icon.svg, apple-touch-icon', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('link[rel="icon"][href*="favicon"]')).toHaveCount(1);
    await expect(page.locator('link[rel="icon"][type="image/svg+xml"]')).toHaveCount(1);
    await expect(page.locator('link[rel="apple-touch-icon"]')).toHaveCount(1);
  });

  test('theme-color meta present', async ({ page }) => {
    await page.goto('/');
    const themeColor = await page.locator('meta[name="theme-color"]').getAttribute('content');
    expect(themeColor).toBe('#0f172a');
  });
});