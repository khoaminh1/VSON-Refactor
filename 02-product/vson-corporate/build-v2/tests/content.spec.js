// Content tests — verify JSON-sourced copy actually appears on rendered pages.
// If a JSON key is removed or a component stops rendering it, these catch it.

const { test, expect } = require('@playwright/test');

test.describe('Homepage — hero + pillars + ecosystem + heritage', () => {
  test('hero sub-copy renders', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.hero')).toContainText(
      '20 years connecting world-class brands to Vietnamese households'
    );
  });

  test('pillars section shows Store and Solutions cards', async ({ page }) => {
    await page.goto('/');
    const pillars = page.locator('.pillars');
    await expect(pillars).toContainText('VSON Store');
    await expect(pillars).toContainText('VSON Solutions');
    await expect(pillars).toContainText('Activation Solutions');
    await expect(pillars).toContainText('Market Development');
  });

  test('ecosystem has 3 items (Reach / Activate / Grow)', async ({ page }) => {
    await page.goto('/');
    const items = page.locator('.ecosystem .eco-item');
    await expect(items).toHaveCount(3);
    await expect(items.nth(0)).toContainText('Reach');
    await expect(items.nth(1)).toContainText('Activate');
    await expect(items.nth(2)).toContainText('Grow');
  });

  test('heritage section lists distributed brands + client logos', async ({ page }) => {
    await page.goto('/');
    const heritage = page.locator('.heritage');
    for (const chip of ['Torayvino', 'Zojirushi', 'Kingbag', 'Nepia', 'Dell', 'HP', 'Lenovo', 'ASUS']) {
      await expect(heritage).toContainText(chip);
    }
  });
});

test.describe('About page — story + 4 leaders', () => {
  test('all 4 leader cards render', async ({ page }) => {
    await page.goto('/about.html');
    const cards = page.locator('.leader-card');
    await expect(cards).toHaveCount(4);
    for (const name of ['Frederick Dang', 'Henry Hung', 'Emily Vo', 'Duy Le']) {
      await expect(page.locator('main')).toContainText(name);
    }
  });

  test('Việt Sing bridge paragraph renders', async ({ page }) => {
    await page.goto('/about.html');
    await expect(page.locator('main')).toContainText('Việt Sing');
  });
});

test.describe('Activation Solutions — three layer rows', () => {
  test('all three layer names appear', async ({ page }) => {
    await page.goto('/activation-solutions.html');
    const rows = page.locator('.layer-row');
    await expect(rows).toHaveCount(3);
    await expect(rows.nth(0)).toContainText('Merchandise & Activation');
    await expect(rows.nth(1)).toContainText('Data & Campaign Platform');
    await expect(rows.nth(2)).toContainText('Marketing & Automation');
  });
});

test.describe('Market Development — MRA pillars + 5 signals + 4 steps', () => {
  test('MRA card shows all three pillars', async ({ page }) => {
    await page.goto('/market-development.html');
    const mra = page.locator('.page-hero__mra');
    await expect(mra).toContainText('Overseas Business Development');
    await expect(mra).toContainText('Overseas Market Set-up');
    await expect(mra).toContainText('Overseas Market Promotion');
  });

  test('5 Why-VSON signal items', async ({ page }) => {
    await page.goto('/market-development.html');
    const items = page.locator('.signal-item');
    await expect(items).toHaveCount(5);
  });

  test('4 how-it-works steps', async ({ page }) => {
    await page.goto('/market-development.html');
    const steps = page.locator('.step');
    await expect(steps).toHaveCount(4);
  });
});

test.describe('Store — 4 brands + 4 channels + partner form', () => {
  test('4 brand cards', async ({ page }) => {
    await page.goto('/store.html');
    const cards = page.locator('.brand-card');
    await expect(cards).toHaveCount(4);
    for (const name of ['Torayvino', 'Zojirushi', 'Kingbag', 'Nepia']) {
      await expect(page.locator('.brands')).toContainText(name);
    }
  });

  test('4 where-to-buy channel cards', async ({ page }) => {
    await page.goto('/store.html');
    await expect(page.locator('.channel-card')).toHaveCount(4);
  });

  test('partner form has brand name input and store-orange submit', async ({ page }) => {
    await page.goto('/store.html');
    const form = page.locator('.partner__form');
    await expect(form.locator('input[name="brand_name"]')).toBeVisible();
    await expect(form.locator('button.btn--store')).toBeVisible();
  });
});

test.describe('Case Studies index — 5 cards + filter bar + taxonomy', () => {
  test('all 5 cards render with filter data-attributes', async ({ page }) => {
    await page.goto('/case-studies.html');
    const cards = page.locator('.cs-card');
    await expect(cards).toHaveCount(5);
  });

  test('filter bar has All + 2 filter buttons', async ({ page }) => {
    await page.goto('/case-studies.html');
    const buttons = page.locator('.filter-bar .filter-btn');
    await expect(buttons).toHaveCount(3);
    await expect(buttons.nth(0)).toHaveClass(/active/);
  });

  test('clicking "Market Development" filter hides activation cards', async ({ page }) => {
    await page.goto('/case-studies.html');
    await page.locator('.filter-btn', { hasText: 'Market Development' }).click();
    // Activation cards should be hidden
    const activation = page.locator('.cs-card[data-filter="activation"]').first();
    await expect(activation).toBeHidden();
    // Market cards should be visible
    const market = page.locator('.cs-card[data-filter="market"]').first();
    await expect(market).toBeVisible();
  });

  test('taxonomy has 3 groups', async ({ page }) => {
    await page.goto('/case-studies.html');
    await expect(page.locator('.taxonomy-group')).toHaveCount(3);
  });
});

test.describe('Case Study detail (CS-01) — snapshot + body + outcomes', () => {
  test('4 snapshot stats render', async ({ page }) => {
    await page.goto('/cs-01-electronics-retail.html');
    await expect(page.locator('.snapshot__stat')).toHaveCount(4);
  });

  test('sidebar shows project snapshot + services used', async ({ page }) => {
    await page.goto('/cs-01-electronics-retail.html');
    const sidebar = page.locator('.cs-sidebar');
    await expect(sidebar).toContainText('Project snapshot');
    await expect(sidebar).toContainText('Services used');
  });

  test('3 outcome cards render', async ({ page }) => {
    await page.goto('/cs-01-electronics-retail.html');
    await expect(page.locator('.outcome-card')).toHaveCount(3);
  });

  test('prev/next nav exists', async ({ page }) => {
    await page.goto('/cs-01-electronics-retail.html');
    await expect(page.locator('.cs-nav__link')).toHaveCount(2);
  });
});

test.describe('Contact page — form + routing card', () => {
  test('required form fields render', async ({ page }) => {
    await page.goto('/contact.html');
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('select[name="enquiry-type"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test('routing card shows 4 enquiry types', async ({ page }) => {
    await page.goto('/contact.html');
    const routing = page.locator('.routing-card');
    await expect(routing.locator('.routing-item')).toHaveCount(4);
    await expect(routing).toContainText('solutions@vson.vn');
    await expect(routing).toContainText('hello@vson.vn');
  });

  test('submit button carries the right label', async ({ page }) => {
    await page.goto('/contact.html');
    await expect(page.locator('button[type="submit"]')).toContainText('Send Message');
  });
});

test.describe('Footer — present on every page', () => {
  const checkPages = ['/', '/about.html', '/contact.html', '/cs-03-fashion-retail.html'];
  for (const path of checkPages) {
    test(`${path} has the 3 footer column headings + copyright`, async ({ page }) => {
      await page.goto(path);
      const footer = page.locator('footer.footer');
      await expect(footer).toContainText('Company');
      await expect(footer).toContainText('Solutions');
      await expect(footer).toContainText('Legal');
      await expect(footer).toContainText('© 2026 VSON');
    });
  }
});
