// Navigation tests — verify behaviours from components/js/shared.js work.

const { test, expect } = require('@playwright/test');
const { NAV_LABELS, DROPDOWN_CHILDREN, CTA } = require('./_fixtures');

test.describe('Nav — rendering', () => {
  test('every top-level label appears', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav.nav');
    for (const label of NAV_LABELS) {
      await expect(nav).toContainText(label);
    }
  });

  test('primary CTA points at contact', async ({ page }) => {
    await page.goto('/');
    const cta = page.locator('.nav__cta');
    await expect(cta).toHaveText(CTA.label);
    await expect(cta).toHaveAttribute('href', CTA.href);
  });
});

test.describe('Nav — Solutions dropdown', () => {
  test('dropdown exposes both children in the DOM', async ({ page }) => {
    await page.goto('/');
    const dropdown = page.locator('.nav__dropdown-menu-inner');
    for (const child of DROPDOWN_CHILDREN) {
      const link = dropdown.locator('a', { hasText: child.label });
      await expect(link).toHaveAttribute('href', child.href);
    }
  });
});

test.describe('Nav — link navigation', () => {
  test('clicking About lands on the About page', async ({ page }) => {
    await page.goto('/');
    await page.locator('.nav__links a', { hasText: 'About' }).first().click();
    await expect(page).toHaveURL(/\/about(\.html)?$/);
    await expect(page).toHaveTitle(/About Our Company/);
  });

  test('clicking Store lands on the Store page', async ({ page }) => {
    await page.goto('/');
    await page.locator('.nav__links a', { hasText: 'Store' }).first().click();
    await expect(page).toHaveURL(/\/store(\.html)?$/);
    await expect(page).toHaveTitle(/VSON \| Store/);
  });

  test('clicking Activation Solutions from the dropdown lands correctly', async ({ page }) => {
    await page.goto('/');
    // Dropdown menu is hidden until hover/focus — hover the toggle first
    await page.locator('.nav__dropdown-toggle').hover();
    await page.locator('.nav__dropdown-menu-inner a', { hasText: 'Activation Solutions' }).click();
    await expect(page).toHaveURL(/\/activation-solutions(\.html)?$/);
    await expect(page).toHaveTitle(/Activation Solutions/);
  });

  test('nav CTA lands on the contact page', async ({ page }) => {
    await page.goto('/');
    await page.locator('.nav__cta').click();
    await expect(page).toHaveURL(/\/contact(\.html)?$/);
    await expect(page).toHaveTitle(/Contact Us/);
  });
});

test.describe('Mobile menu (below 768px)', () => {
  test.use({ viewport: { width: 500, height: 800 } });

  test('hamburger is visible, desktop links hidden until opened', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.nav__hamburger')).toBeVisible();
    // The <ul> is still in the DOM but not visible until .active is added
    await expect(page.locator('.nav__links')).not.toHaveClass(/active/);
  });

  test('clicking hamburger adds .active and toggles aria-expanded', async ({ page }) => {
    await page.goto('/');
    const burger = page.locator('.nav__hamburger');
    const menu   = page.locator('.nav__links');

    await expect(burger).toHaveAttribute('aria-expanded', 'false');
    await burger.click();
    await expect(burger).toHaveAttribute('aria-expanded', 'true');
    await expect(menu).toHaveClass(/active/);

    await burger.click();
    await expect(burger).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).not.toHaveClass(/active/);
  });
});

test.describe('Skip-to-content accessibility link', () => {
  test('every page has a skip link pointing at #main-content', async ({ page }) => {
    await page.goto('/');
    const skipLink = page.locator('a.skip-link[href="#main-content"]');
    await expect(skipLink).toHaveCount(1);
    await expect(skipLink).toHaveText('Skip to main content');
  });
});
