// Shared test data derived from content/ JSON.
// All tests use these constants so a content change only needs one update.

const PAGES = [
  { path: '/',                                file: 'index.html',                    title: "VSON | Vietnam's Phygital Commerce Ecosystem",     heading: 'Phygital' },
  { path: '/index.html',                      file: 'index.html',                    title: "VSON | Vietnam's Phygital Commerce Ecosystem",     heading: 'Phygital' },
  { path: '/about.html',                      file: 'about.html',                    title: 'VSON | About Our Company',                         heading: '20 years' },
  { path: '/activation-solutions.html',       file: 'activation-solutions.html',     title: 'VSON | Activation Solutions',                      heading: 'Activate your brand' },
  { path: '/market-development.html',         file: 'market-development.html',       title: 'VSON | Market Development',                        heading: 'Enter Vietnam' },
  { path: '/store.html',                      file: 'store.html',                    title: 'VSON | Store',                                     heading: 'Premium brands' },
  { path: '/case-studies.html',               file: 'case-studies.html',             title: 'VSON | Case Studies',                              heading: 'Real work' },
  { path: '/contact.html',                    file: 'contact.html',                  title: 'VSON | Contact Us',                                heading: "Let's talk" },
  { path: '/thank-you.html',                  file: 'thank-you.html',                title: 'VSON | Thank You',                                 heading: 'Thank you' },
  { path: '/cs-01-electronics-retail.html',   file: 'cs-01-electronics-retail.html', title: 'VSON | Case Study: Electronics Retail Chain',      heading: '250% growth' },
  { path: '/cs-02-education.html',            file: 'cs-02-education.html',          title: 'VSON | Case Study: National English Education Network', heading: 'ready to enrol' },
  { path: '/cs-03-fashion-retail.html',       file: 'cs-03-fashion-retail.html',     title: 'VSON | Case Study: Fast-Growing Fashion Retailer', heading: '25% of total revenue' },
  { path: '/cs-04-oem-merchandise.html',      file: 'cs-04-oem-merchandise.html',    title: 'VSON | Case Study: OEM Corporate Merchandise',     heading: '5,000+ branded units' },
  { path: '/cs-05-ict-distribution.html',     file: 'cs-05-ict-distribution.html',   title: 'VSON | Case Study: ICT Distribution Channel Expansion', heading: '80 active reseller partners' },
];

// Top-level nav labels that must appear on every page (from content/nav.json).
// "Solutions" is a dropdown — its children tested separately.
const NAV_LABELS = ['About', 'Solutions', 'Store', 'Case Studies', 'Contact'];

const DROPDOWN_CHILDREN = [
  { label: 'Activation Solutions', href: '/activation-solutions.html' },
  { label: 'Market Development',   href: '/market-development.html' },
];

const CTA = {
  label: 'Request a Consultation',
  href: '/contact.html',
};

// Footer content that must appear on every page (from content/footer.json)
const FOOTER_TEXT = {
  copyright:    '© 2026 VSON. All rights reserved.',
  legal_name:   'Việt Sing',
  registration: 'MST: 0313403180',
  column_headings: ['Company', 'Solutions', 'Legal'],
};

module.exports = { PAGES, NAV_LABELS, DROPDOWN_CHILDREN, CTA, FOOTER_TEXT };
