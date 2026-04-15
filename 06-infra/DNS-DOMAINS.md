# DNS & Domain Management — VSON Web Platform

**Owner:** Thinh (Tech Lead) + Fred (PM)
**Last Updated:** 2026-04-02
**Status:** 🟡 Pending — Thinh to configure after Netlify account setup (by 2026-04-05)

---

## Domains

| Domain | Project | Points To | SSL | Status |
|--------|---------|-----------|-----|--------|
| vsonadvisory.com | VSON Advisory | Netlify | Auto (Let's Encrypt) | TODO — configure after Netlify setup |
| vson.vn | VSON Corporate | Netlify | Auto (Let's Encrypt) | TODO — configure after Netlify setup |
| store.vson.vn | B2C Store | Haravan | Haravan-managed | TODO — CNAME to Haravan |

---

## DNS Records Required

### vsonadvisory.com → Netlify

| Type | Name | Value | Notes |
|------|------|-------|-------|
| ALIAS/ANAME | @ | apex-loadbalancer.netlify.com | Root domain |
| CNAME | www | [site-name].netlify.app | www redirect |

### vson.vn → Netlify

| Type | Name | Value | Notes |
|------|------|-------|-------|
| ALIAS/ANAME | @ | apex-loadbalancer.netlify.com | Root domain |
| CNAME | www | [site-name].netlify.app | www redirect |
| CNAME | store | [haravan-cname-value] | Points to Haravan for store.vson.vn |

### Email Records (both domains)

| Type | Name | Value | Purpose |
|------|------|-------|---------|
| TXT | @ | `v=spf1 ...` | SPF — authorise email senders |
| TXT | _dkim.* | [provider-specific] | DKIM — email authentication |
| TXT | _dmarc | `v=DMARC1; p=quarantine; ...` | DMARC — email policy |

---

## Checklist

- [ ] Netlify team account created (Thinh, by 2026-04-04)
- [ ] vsonadvisory.com DNS records configured
- [ ] vson.vn DNS records configured
- [ ] store.vson.vn CNAME to Haravan configured
- [ ] HTTPS verified on both domains
- [ ] DNSSEC enabled (if registrar supports)
- [ ] SPF/DKIM/DMARC configured for @vsonadvisory.com
- [ ] SPF/DKIM/DMARC configured for @vson.vn
- [ ] Google Search Console TXT verification records added
