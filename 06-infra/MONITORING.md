# Monitoring — VSON Web Platform

**Owner:** Thinh (Tech Lead)
**Last Updated:** 2026-04-02
**Status:** TODO — set up post-launch

---

## Monitoring Requirements

| What | Tool | Alert Threshold |
|------|------|----------------|
| Uptime | TODO (UptimeRobot / Pingdom) | Down > 1 min |
| Performance (Core Web Vitals) | Google Search Console + Lighthouse CI | LCP > 2.5s |
| SSL expiry | TODO | < 14 days before expiry |
| Error tracking | TODO (Sentry / LogRocket) | Any 5xx error |
| Analytics | TODO (GA4 / Plausible / Umami) | — |

---

## Incident Response

For website incidents, follow the escalation path:
1. Thinh (Tech Lead) — first responder
2. Fred (PM) — if client-facing impact
3. Henry / Emily — if reputational impact
