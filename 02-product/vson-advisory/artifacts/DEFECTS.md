# Defect Register — VSON Advisory (vsonadvisory.com)

**Last updated:** 2026-04-04
**Project:** VSON Advisory Website
**Owner:** Fred Dang (PM)

---

## Severity Guide

| Level | Definition |
|-------|-----------|
| Critical | Blocks launch or breaks core functionality |
| High | Visible quality issue, must fix before go-live |
| Medium | Noticeable but not blocking; fix during current sprint |
| Low | Minor polish; can defer to next sprint |

---

## Open Defects

| # | Page | Severity | Description | Found by | Sprint | Status |
|---|------|----------|-------------|----------|--------|--------|
| — | — | — | No open defects | — | — | — |

---

## Closed Defects

| # | Page | Severity | Description | Found by | Sprint | Fixed in | Resolution |
|---|------|----------|-------------|----------|--------|----------|-----------|
| D001 | index.html | Medium | Em dash in title tag: "VSON Advisory — Strategic Advisory" | QC | S1 | S1 | Replaced with pipe separator. Verified via grep. |
| D002 | approach.html | Medium | Em dash in title tag: "Our Approach — VSON Advisory" | QC | S1 | S1 | Replaced with pipe separator. Verified via grep. |
| D003 | approach.html | Low | Em dash in layer labels: "Layer 01 — Foundation" etc. (x4) | QC | S1 | S1 | Replaced with colon separator. Verified via grep. |
| D004 | thank-you.html | Medium | Em dash in title tag: "Thank You — VSON Advisory" | QC | S1 | S1 | Replaced with pipe separator. Verified via grep. |
| D005 | index.html | Medium | Residual em dashes in prose sections from design concept | QC | S1 | S1 | All prose rewritten with commas/periods. Verified via grep — zero em dashes remain. |
