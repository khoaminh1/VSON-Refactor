// Asset tests — verify CSS + JS + font sheet load with 200 on the homepage.

const { test, expect } = require('@playwright/test');

const CSS_FILES = [
  '/components/css/tokens.css',
  '/components/css/reset.css',
  '/components/css/utilities.css',
  '/components/css/layout.css',
  '/components/css/ui.css',
  '/components/css/nav.css',
  '/components/css/footer.css',
  '/components/css/sections.css',
];

test.describe('CSS — every stylesheet loads 200', () => {
  for (const href of CSS_FILES) {
    test(`${href} → 200`, async ({ request }) => {
      const res = await request.get(href);
      expect(res.status()).toBe(200);
    });
  }
});

test.describe('JS + font loader', () => {
  test('shared.js loads 200', async ({ request }) => {
    const res = await request.get('/components/js/shared.js');
    expect(res.status()).toBe(200);
  });

  test('fonts.css loads 200', async ({ request }) => {
    const res = await request.get('/assets/fonts/fonts.css');
    expect(res.status()).toBe(200);
  });
});
