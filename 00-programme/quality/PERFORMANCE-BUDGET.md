# Performance Budget — VSON Web Platform Programme

**Owner:** Thinh (Tech Lead)
**Reviewer:** Fred (PM)
**Last Updated:** 2026-04-02
**Status:** Draft — targets to be confirmed before build

---

## Core Web Vitals Targets

| Metric | Target | Tool |
|--------|--------|------|
| Largest Contentful Paint (LCP) | < 2.5s | Lighthouse / PageSpeed Insights |
| First Input Delay (FID) | < 100ms | Lighthouse |
| Cumulative Layout Shift (CLS) | < 0.1 | Lighthouse |
| First Contentful Paint (FCP) | < 1.8s | Lighthouse |
| Time to Interactive (TTI) | < 3.5s | Lighthouse |
| Total Blocking Time (TBT) | < 200ms | Lighthouse |

---

## Page Weight Budget

| Resource Type | Max Size | Notes |
|--------------|----------|-------|
| HTML | 50 KB | Gzipped |
| CSS (total) | 60 KB | Gzipped, includes design tokens |
| JavaScript (total) | 100 KB | Gzipped, minimal JS for static sites |
| Images (per page) | 500 KB | WebP/AVIF preferred, lazy-loaded below fold |
| Fonts | 150 KB | Subset to used characters, WOFF2 format |
| **Total page weight** | **< 860 KB** | Target for initial page load |

---

## Lighthouse Score Targets

| Category | Minimum Score |
|----------|--------------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 95+ |

---

## Performance Testing Cadence

- **During build:** Lighthouse audit on every sprint review
- **Pre-launch:** Full audit on staging environment
- **Post-launch:** Monthly automated audit
- Results logged in: `01-delivery/*/quality-results/performance-test-log.md`

---

## CDN & Delivery Strategy

TODO: Define after hosting decision (see 06-infra/HOSTING-STRATEGY.md)
- Static asset caching policy
- Image CDN / optimisation pipeline
- Font loading strategy (preload vs. swap)
