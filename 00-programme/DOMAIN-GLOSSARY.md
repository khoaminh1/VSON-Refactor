# Domain Glossary — VSON Web Platform

**Owner:** Fred (PM) + Duy (PO)
**Last Updated:** 2026-04-02
**Source:** vnv-delivery-program-manager (cross-project language consistency)

> One shared language across both projects. If a term means different things
> in different projects, this glossary resolves the conflict.

---

## Entity Definitions

| Term | Definition | Applies To | Do NOT Confuse With |
|------|-----------|-----------|---------------------|
| **VSON Advisory** | Independent advisory firm (vsonadvisory.com). Separate legal entity. | Advisory project only | VSON Corporate |
| **VSON / VSON Corporate** | VSON parent company in Vietnam (vson.vn). Multi-business entity. | Corporate project only | VSON Advisory |
| **Programme** | The coordinated delivery of both website projects under shared governance | Both | Individual project |

## Role Terms

| Term | Definition | Person |
|------|-----------|--------|
| **PM / Programme Manager** | Coordinates both projects, owns governance | Fred Dang |
| **PO / Product Owner** | Owns backlog, content, and acceptance criteria | Duy Le |
| **TL / Tech Lead** | Owns architecture, code quality, infrastructure | Thinh |
| **Sponsor** | Strategic direction and approval authority | Henry Hung, Emily Vo |

## Delivery Terms

| Term | Definition | Where Documented |
|------|-----------|-----------------|
| **DoR** | Definition of Ready — task entry criteria | `01-delivery/DEFINITION-OF-READY.md` |
| **DoD** | Definition of Done — task completion criteria | `01-delivery/DEFINITION-OF-DONE.md` |
| **Stage Gate** | Checklist that must pass before moving to next phase | `01-delivery/STAGE-GATES.md` |
| **RAID** | Risks, Assumptions, Issues, Dependencies log | `01-delivery/[project]/RAID.md` |
| **Sprint** | Time-boxed delivery cycle (1-2 weeks) | `01-delivery/[project]/sprints/` |
| **Preview URL** | Netlify branch deploy for stakeholder review | `06-infra/ENVIRONMENT-PLAN.md` |
| **Go/No-Go** | Pre-launch sign-off by PM + sponsors | `01-delivery/RELEASE-PROTOCOL.md` |

## Technical Terms

| Term | Definition | Where Documented |
|------|-----------|-----------------|
| **Shared Standards** | CSS/JS patterns both projects must follow | `04-shared/SHARED-STANDARDS.md` |
| **ADR** | Architecture Decision Record | `06-infra/ADR-*.md` |
| **CSP** | Content Security Policy (security header) | `06-infra/CI-CD-PIPELINE.md` |
| **Core Web Vitals** | Google performance metrics (LCP, FID, CLS) | `00-programme/quality/PERFORMANCE-BUDGET.md` |
| **DORA** | DevOps metrics (deploy frequency, lead time, failure rate, MTTR) | `06-infra/CI-CD-PIPELINE.md` |
