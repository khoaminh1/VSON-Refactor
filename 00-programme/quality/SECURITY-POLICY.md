# Security Policy — VSON Web Platform Programme

**Owner:** Thinh (Tech Lead)
**Reviewer:** Fred (PM)
**Last Updated:** 2026-04-02
**Status:** Draft — to be completed before first deploy

---

## Scope

This policy applies to both vsonadvisory.com and vson.vn. All security standards are shared across the programme.

---

## OWASP Top 10 Review Checklist

| # | OWASP Category | Applies? | Mitigation | Status |
|---|---------------|----------|------------|--------|
| A01 | Broken Access Control | TODO | | |
| A02 | Cryptographic Failures | TODO | | |
| A03 | Injection | TODO | | |
| A04 | Insecure Design | TODO | | |
| A05 | Security Misconfiguration | TODO | | |
| A06 | Vulnerable & Outdated Components | TODO | | |
| A07 | Identification & Authentication Failures | TODO | | |
| A08 | Software & Data Integrity Failures | TODO | | |
| A09 | Security Logging & Monitoring Failures | TODO | | |
| A10 | Server-Side Request Forgery (SSRF) | TODO | | |

---

## Threat Model

TODO: Complete after hosting environment is decided (see 06-infra/HOSTING-STRATEGY.md)

### Attack Surface
- Static site content delivery
- Contact forms (if any)
- Third-party script integrations
- DNS/domain configuration

---

## Data Handling & PDPA Compliance

| Data Type | Collected? | Storage | Retention | Legal Basis |
|-----------|-----------|---------|-----------|-------------|
| Contact form submissions | TODO | | | |
| Analytics (cookies/tracking) | TODO | | | |
| Email addresses | TODO | | | |

---

## Security Standards

- [ ] HTTPS enforced on all pages (HSTS header)
- [ ] Content Security Policy (CSP) headers configured
- [ ] X-Frame-Options set
- [ ] Dependencies audited (no known CVEs)
- [ ] Third-party scripts reviewed and approved
- [ ] Contact form: input validation + CSRF protection
- [ ] Cookie consent banner (if analytics used)
- [ ] DNS: DNSSEC enabled, SPF/DKIM/DMARC for email

---

## Review Cadence

- Pre-launch: Full OWASP review
- Post-launch: Quarterly dependency audit
- On change: Security review for any new third-party integration
