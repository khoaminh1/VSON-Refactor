// Content tests — verify JSON-sourced copy actually appears on rendered pages.
// If a JSON key is removed or a component stops rendering it, these catch it.

const { test, expect } = require('@playwright/test');

test.describe('Homepage — hero + value chain + capabilities', () => {
  test('hero paragraphs render', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.hero')).toContainText(
      "Vietnam is one of Asia's most dynamic growth markets"
    );
    await expect(page.locator('.hero')).toContainText('two complementary client groups');
  });

  test('value chain has 3 cards: Risk, Performance, Exit Value', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('.grid-3').first().locator('.card');
    await expect(cards).toHaveCount(3);
    await expect(cards.nth(0)).toContainText('Risk');
    await expect(cards.nth(1)).toContainText('Performance');
    await expect(cards.nth(2)).toContainText('Exit Value');
  });

  test('6 capability titles appear', async ({ page }) => {
    await page.goto('/');
    const expectedCapabilities = [
      'Strategic Finance',
      'Performance Transformation',
      'CX as a Profit Multiplier',
      'Digital Infrastructure',
      'Global Gateway',
      'Investment Readiness',
    ];
    const capabilitySection = page.locator('.section--dark');
    for (const title of expectedCapabilities) {
      await expect(capabilitySection).toContainText(title);
    }
  });

  test('3 leadership names appear', async ({ page }) => {
    await page.goto('/');
    for (const name of ['Frederick Dang', 'Henry Hung', 'Emily Vo']) {
      await expect(page.locator('main')).toContainText(name);
    }
  });
});

test.describe('Leadership page — 5 leaders total', () => {
  test('3 partners + 2 advisors, all named', async ({ page }) => {
    await page.goto('/brain-trust.html');
    const names = ['Frederick Dang', 'Henry Hung', 'Emily Vo', 'Hung Tran', 'Bernard Lim'];
    for (const name of names) {
      await expect(page.locator('main')).toContainText(name);
    }
  });
});

test.describe('Approach page — 4 solution stack layers', () => {
  test('Govern, Improve, Scale, Position headings exist', async ({ page }) => {
    await page.goto('/approach.html');
    const layers = ['Govern First', 'Improve What Exists', 'Scale What Works', 'Position for Exit'];
    for (const heading of layers) {
      await expect(page.locator('main')).toContainText(heading);
    }
  });
});

test.describe('Vault page — 5 article previews', () => {
  test('all 5 article titles render', async ({ page }) => {
    await page.goto('/vault.html');
    const articles = [
      'Why Mid-Market Companies Stall Before Institutional Scale',
      'The Hidden Valuation Cost of Fragmented Data',
      'Cross-Border Expansion Fails When Governance Arrives Too Late',
      'Why CX Should Be Treated as a Revenue System',
      'What Institutional Partners Evaluate Beyond the Pitch Deck',
    ];
    for (const title of articles) {
      await expect(page.locator('main')).toContainText(title);
    }
  });
});

test.describe('Contact page — form structure', () => {
  test('form has all required fields', async ({ page }) => {
    await page.goto('/contact.html');
    // Required form fields
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="company"]')).toBeVisible();
    await expect(page.locator('input[name="role"]')).toBeVisible();
    await expect(page.locator('input[name="country"]')).toBeVisible();
    await expect(page.locator('select[name="situation"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test('4 inquiry-type radio options present', async ({ page }) => {
    await page.goto('/contact.html');
    const radios = page.locator('input[name="inquiry-type"]');
    await expect(radios).toHaveCount(4);
  });

  test('3 regional contact blocks (SG, US, HCMC)', async ({ page }) => {
    await page.goto('/contact.html');
    const regional = page.locator('.contact__regional');
    await expect(regional).toContainText('Singapore');
    await expect(regional).toContainText('United States');
    await expect(regional).toContainText('Ho Chi Minh City');
  });

  test('submit button has correct label', async ({ page }) => {
    await page.goto('/contact.html');
    await expect(page.locator('button[type="submit"]')).toHaveText('Request a Strategic Briefing');
  });
});