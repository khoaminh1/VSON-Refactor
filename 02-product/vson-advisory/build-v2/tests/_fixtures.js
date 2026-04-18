// Shared test data derived from content/ JSON.
// All tests use these constants so a content change only needs one update.

const PAGES = [
  { path: '/',                      file: 'index.html',        title: 'VSON Advisory | Strategic Advisory for Cross-Border Scaling', heading: "We Don't Consult from a Distance." },
  { path: '/index.html',            file: 'index.html',        title: 'VSON Advisory | Strategic Advisory for Cross-Border Scaling', heading: "We Don't Consult from a Distance." },
  { path: '/approach.html',         file: 'approach.html',     title: 'Our Approach | VSON Advisory',                                heading: 'Our Approach' },
  { path: '/brain-trust.html',      file: 'brain-trust.html',  title: 'Leadership | VSON Advisory',                                  heading: 'Leadership' },
  { path: '/capabilities.html',     file: 'capabilities.html', title: 'Capabilities | VSON Advisory',                                heading: 'Six Pillars of Enterprise Value' },
  { path: '/vault.html',            file: 'vault.html',        title: 'The Vault | VSON Advisory',                                   heading: 'The Vault' },
  { path: '/contact.html',          file: 'contact.html',      title: 'Contact | VSON Advisory',                                     heading: 'Get in Touch' },
  { path: '/thank-you.html',        file: 'thank-you.html',    title: 'Thank You | VSON Advisory',                                   heading: 'Thank You' },
];

// Nav items that must appear on every page (from content/nav.json)
const NAV_LINKS = [
  { label: 'Home',         href: '/' },
  { label: 'Approach',     href: '/approach.html' },
  { label: 'Leadership',   href: '/brain-trust.html' },
  { label: 'Capabilities', href: '/capabilities.html' },
  { label: 'The Vault',    href: '/vault.html' },
  { label: 'Contact',      href: '/contact.html' },
];

// Footer content that must appear on every page (from content/footer.json)
const FOOTER_TEXT = {
  copyright:   '© 2026 VSON Pte. Ltd. All Rights Reserved.',
  registration:'UEN 202601234M',
  disclaimer:  'Vson Advisory Pte. Ltd. is a management consultancy firm',
};

module.exports = { PAGES, NAV_LINKS, FOOTER_TEXT };