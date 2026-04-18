// Cross-page consistency — the refactor's main promise.
// Nav and footer are written ONCE in components/layout/; every page must match.

const { test, expect } = require('@playwright/test');
const { PAGES, NAV_LINKS, FOOTER_TEXT } = require('./_fixtures');

test.describe('Nav — identical across every page', () => {
  for (const page of PAGES) {
    if (page.path === '/index.html') continue;
    test(`${page.path} nav has all 6 links`, async ({ page: pw }) => {
      await pw.goto(page.path);
      const navLinks = pw.locator('.nav__links .nav__link');
      await expect(navLinks).toHaveCount(NAV_LINKS.length);

      for (let i = 0; i < NAV_LINKS.length; i++) {
        const link = navLinks.nth(i);
        await expect(link).toHaveText(NAV_LINKS[i].label);
        await expect(link).toHaveAttribute('href', NAV_LINKS[i].href);
      }
    });

    test(`${page.path} nav has the CTA button`, async ({ page: pw }) => {
      await pw.goto(page.path);
      const cta = pw.locator('.nav__cta');
      await expect(cta).toHaveText('Request a Strategic Briefing');
      await expect(cta).toHaveAttribute('href', '/contact.html');
    });
  }
});

test.describe('Footer — identical across every page', () => {
  for (const page of PAGES) {
    if (page.path === '/index.html') continue;
    test(`${page.path} footer has legal + copyright`, async ({ page: pw }) => {
      await pw.goto(page.path);
      const footer = pw.locator('footer.footer');
      await expect(footer).toContainText(FOOTER_TEXT.copyright);
      await expect(footer).toContainText(FOOTER_TEXT.registration);
      await expect(footer).toContainText(FOOTER_TEXT.disclaimer);
    });

    test(`${page.path} footer has 3 link columns (Services, Company, Contact)`, async ({ page: pw }) => {
      await pw.goto(page.path);
      const headings = pw.locator('.footer__heading');
      await expect(headings).toHaveCount(3);
      await expect(headings.nth(0)).toHaveText('Services');
      await expect(headings.nth(1)).toHaveText('Company');
      await expect(headings.nth(2)).toHaveText('Contact');
    });
  }
});

test.describe('Active nav link highlights on current page', () => {
  const activeChecks = [
    { path: '/approach.html',      expectedActive: 'Approach' },
    { path: '/brain-trust.html',   expectedActive: 'Leadership' },
    { path: '/capabilities.html',  expectedActive: 'Capabilities' },
    { path: '/vault.html',         expectedActive: 'The Vault' },
    { path: '/contact.html',       expectedActive: 'Contact' },
  ];

  for (const check of activeChecks) {
    test(`${check.path} → "${check.expectedActive}" is active`, async ({ page: pw }) => {
      await pw.goto(check.path);
      const active = pw.locator('.nav__link.nav__link--active');
      await expect(active).toHaveText(check.expectedActive);
    });
  }
});