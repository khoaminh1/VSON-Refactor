// Navigation tests — verify behaviours from components/js/shared.js work.

const { test, expect } = require('@playwright/test');

test.describe('Nav link navigation', () => {
  // Accept both /approach and /approach.html — `serve` strips extensions,
  // Netlify may or may not depending on config. The title check confirms
  // we landed on the right page regardless of URL form.
  test('clicking Approach lands on the Approach page', async ({ page }) => {
    await page.goto('/');
    await page.locator('.nav__links .nav__link', { hasText: 'Approach' }).click();
    await expect(page).toHaveURL(/\/approach(\.html)?$/);
    await expect(page).toHaveTitle(/Our Approach/);
  });

  test('clicking Leadership lands on the brain-trust page', async ({ page }) => {
    await page.goto('/');
    await page.locator('.nav__links .nav__link', { hasText: 'Leadership' }).click();
    await expect(page).toHaveURL(/\/brain-trust(\.html)?$/);
    await expect(page).toHaveTitle(/Leadership/);
  });

  test('nav CTA lands on the contact page', async ({ page }) => {
    await page.goto('/');
    await page.locator('.nav__cta').click();
    await expect(page).toHaveURL(/\/contact(\.html)?$/);
    await expect(page).toHaveTitle(/Contact/);
  });
});

test.describe('Mobile menu (at 640px width)', () => {
  test.use({ viewport: { width: 500, height: 800 } });

  test('burger is visible, desktop links hidden', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.nav__burger')).toBeVisible();
    await expect(page.locator('.nav__links')).toBeHidden();
  });

  test('clicking burger opens drawer with all 6 links', async ({ page }) => {
    await page.goto('/');
    await page.locator('.nav__burger').click();
    const mobileDrawer = page.locator('.nav__mobile');
    await expect(mobileDrawer).toHaveClass(/open/);
    await expect(mobileDrawer.locator('a')).toHaveCount(6);
  });

  test('burger toggles aria-expanded', async ({ page }) => {
    await page.goto('/');
    const burger = page.locator('.nav__burger');
    await expect(burger).toHaveAttribute('aria-expanded', 'false');
    await burger.click();
    await expect(burger).toHaveAttribute('aria-expanded', 'true');
    await burger.click();
    await expect(burger).toHaveAttribute('aria-expanded', 'false');
  });

  test('clicking a drawer link navigates away (and drawer closes)', async ({ page }) => {
    await page.goto('/');
    await page.locator('.nav__burger').click();
    await expect(page.locator('.nav__mobile')).toHaveClass(/open/);
    // Click a link inside the drawer
    await page.locator('.nav__mobile a', { hasText: 'Approach' }).click();
    await expect(page).toHaveURL(/\/approach(\.html)?$/);
  });
});

test.describe('Sticky nav on scroll', () => {
  test('nav gains .nav--scrolled class after scrolling', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav.nav');
    // At top of page — no scrolled class
    await expect(nav).not.toHaveClass(/nav--scrolled/);
    // Scroll down > 20px
    await page.evaluate(() => window.scrollTo(0, 100));
    await expect(nav).toHaveClass(/nav--scrolled/);
  });
});

test.describe('Skip-to-content accessibility link', () => {
  test('first focusable element is the skip link', async ({ page }) => {
    await page.goto('/');
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toHaveCount(1);
    await expect(skipLink).toHaveText('Skip to main content');
  });
});