# VS-New-Website — Collaboration Guide (for Claude)

This workspace is a **programme-level delivery workspace** containing two website projects
managed by Fred Dang (Programme Manager).

Claude must follow the orientation routine below at the start of every session.

---

## 0. Orientation Routine (Do This First)

Before any work, Claude must:
1. Read `WORKSPACE.md` — identifies programme state, team, and active projects
2. Read `01-delivery/[project]/PROJECT.md` — loads project-specific delivery context
3. For quality/infra questions, also read `00-programme/quality/` or `06-infra/`
4. Only then begin responding or making changes

---

## 1. Programme Structure (7 Layers)

| # | Folder | Owner | Purpose |
|---|--------|-------|---------|
| 00 | programme/ | Fred + Henry & Emily | Programme governance, quality standards |
| 01 | delivery/ | Fred + Duy + Thinh | RAID, sprints, stage gates, quality results |
| 02 | product/ | Duy + Thinh + devs | Website code, wireframes, content, design specs |
| 03 | knowledge/ | Fred | Lessons learned, process docs, retrospectives |
| 04 | shared/ | All | Reusable templates, design tokens, JS library |
| 05 | comms/ | Fred → external | Partner reviews, emails, stakeholder updates |
| 06 | infra/ | Thinh + Fred | Hosting, CI/CD, environments, DNS, monitoring |

---

## 2. Team & Roles

| Role | Person | Primary Folders |
|------|--------|----------------|
| Programme Manager | Fred Dang | 00, 01, 03, 05 |
| Executive Sponsor | Henry Hung, Emily Vo | 00 (review), 05 (receive) |
| Product Owner | Duy Le | 01, 02 |
| Tech Lead | Thinh | 02, 06, 01 (quality-results) |

---

## 3. Active Projects

| Project | Product | Delivery | Domain |
|---------|---------|----------|--------|
| VSON Advisory | 02-product/vson-advisory/ | 01-delivery/vson-advisory/ | vsonadvisory.com |
| VSON Corporate | 02-product/vson-corporate/ | 01-delivery/vson-corporate/ | vson.vn |

> These are two separate business entities. Do not conflate them.

---

## 4. Universal Working Loop

All projects follow this loop:

```
Discovery → Design → Dev → Review → Deploy
```

1. **Discovery** — gather requirements, outline content structure, user journeys
2. **Design** — wireframes, mockups, branding (colors, typography, tone)
3. **Development** — HTML/CSS/JS, incremental commits, follow Developer Guide
4. **Review** — accessibility, responsiveness, QA checklist (against 00-programme/quality/)
5. **Deployment** — staging → production (via 06-infra/ pipeline)

---

## 5. Bilingual Projects (VSON Corporate)

When working on vson-corporate (Vietnamese + English):
- Always consider both language versions for every content decision
- Use Vietnamese-compatible font stacks (e.g. Be Vietnam Pro, Nunito)
- Confirm URL strategy before building: toggle vs. /vi/ + /en/ paths
- Label all content placeholders as [VI] and [EN]

---

## 6. Document Conventions

- `WORKSPACE.md` — master programme index (update when status changes)
- `PROJECT.md` (in 01-delivery/) — project brief, phase status, key decisions
- `RAID.md` (in 01-delivery/) — risks, assumptions, issues, dependencies
- Quality standards in `00-programme/quality/` — apply to all projects
- Infra decisions in `06-infra/` — apply to all projects
- Tag unresolved items with `TODO`

---

## 7. Behaviour Rules for Claude

- Always map requests to the Discovery → Design → Dev → Review → Deploy loop
- Route work to the correct layer (don't put code in delivery, don't put RAID in product)
- Keep output concise with actionable code and file names
- For any ambiguous request, ask exactly **one** clarifying question
- After completing a phase or major decision, update `01-delivery/[project]/PROJECT.md`
- After a status change, update `WORKSPACE.md`
- Never work across two projects in the same response without clearly labelling which
- Reference `00-programme/quality/` when reviewing code for security, performance, accessibility
