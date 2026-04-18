// Smoke tests — proves the build system works end-to-end.
// If any of these fail, the site is fundamentally broken.

const { test, expect } = require('@playwright/test');
const { PAGES } = require('./_fixtures');

test.describe('Smoke — every page loads with correct title', () => {
  for (const page of PAGES) {
    test(`${page.path} → 200 + title "${page.title.slice(0, 40)}…"`, async ({ page: pw }) => {
      const response = await pw.goto(page.path);
      expect(response?.status(), `HTTP status for ${page.path}`).toBe(200);
      await expect(pw).toHaveTitle(page.title);
    });
  }
});

test.describe('Smoke — main heading renders on each page', () => {
  for (const page of PAGES) {
    if (page.path === '/index.html') continue; // duplicate of '/'
    test(`${page.path} shows "${page.heading}"`, async ({ page: pw }) => {
      await pw.goto(page.path);
      // Match heading text anywhere inside an h1 (may contain <em> or <br>)
      const h1 = pw.locator('h1').first();
      await expect(h1).toContainText(page.heading);
    });
  }
});

test.describe('Build regression — no unresolved Handlebars placeholders', () => {
  for (const page of PAGES) {
    if (page.path === '/index.html') continue;
    test(`${page.path} contains no {{ }} placeholders`, async ({ page: pw }) => {
      await pw.goto(page.path);
      const html = await pw.content();
      // Check for unresolved Handlebars expressions like {{foo}} or {{> partial}}
      // Exclude {{ inside <script> or <style> blocks (unlikely but possible).
      const unresolved = html.match(/\{\{[^}]*\}\}/g) || [];
      expect(unresolved, `Found unresolved placeholders on ${page.path}`).toEqual([]);
    });
  }
});