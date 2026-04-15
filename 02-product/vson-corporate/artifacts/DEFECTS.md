# Defect Register — VSON Corporate (vson.vn)

**Last updated:** 2026-04-04
**Project:** VSON Corporate Website
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
_(None)_

---

## Closed Defects

| # | Page | Severity | Description | Found by | Sprint | Fixed in | Resolution |
|---|------|----------|-------------|----------|--------|----------|-----------|
| D001 | index.html | High | Em dash in title tag | QC | S1 | S1 | Replaced with pipe separator. Verified via grep. |
| D002 | index.html | High | Em dash in hero prose | QC | S1 | S1 | Prose rewritten with period. Verified via grep. |
| D003 | index.html | High | Em dash in Activation Solutions blurb | QC | S1 | S1 | Prose rewritten with period. Verified via grep. |
| D004 | index.html | High | Em dash in Heritage section | QC | S1 | S1 | Prose rewritten with period. Verified via grep. |
| D005 | index.html | Medium | Em dash in case study placeholders (x2) | QC | S1 | S1 | Removed. Verified via grep. |
| D006 | index.html | High | Em dash in final CTA | QC | S1 | S1 | Prose rewritten with comma. Verified via grep. |
| D007 | about.html | High | Em dash in title tag | QC | S1 | S1 | Replaced with pipe separator. Verified via grep. |
| D008 | about.html | High | Em dash in hero subline | QC | S1 | S1 | Prose rewritten. Verified via grep. |
| D009 | about.html | High | Em dashes in company story prose (5+ instances) | QC | S1 | S1 | All prose rewritten with commas/periods. Verified via grep. |
| D010 | about.html | High | Em dashes in leader bios (Frederick, Emily) | QC | S1 | S1 | Bios rewritten. Verified via grep. |
| D011 | contact.html | High | Em dash in title tag | QC | S1 | S1 | Replaced with pipe separator. Verified via grep. |
| D012 | contact.html | High | Em dash in hero subline | QC | S1 | S1 | Prose rewritten. Verified via grep. |
| D013 | contact.html | Medium | Em dash in form select placeholder | QC | S1 | S1 | Changed to "Select one". Verified via grep. |
| D015 | css/styles.css | Medium | Em dash used as CSS decorative bullet in footer contact items (`content: '—'`) | QC | S1 | S1 | Replaced with right single guillemet (`›`). Verified via grep. |
| D014 | All pages | Low | Nav links to Sprint 2 pages (solutions, store, case studies) use anchor placeholders | QC | S1 | S3 | All nav links now point to real pages. Verified by UAT link checker. |
| D016 | All pages | High | Solutions dropdown menu impossible to reach: 16px CSS gap causes hover to break, menu vanishes before click | Fred | S3 | S3 | Removed gap, added invisible bridge via padding-top on menu wrapper, added fade transition. Inner wrapper separates visual box from hover zone. All 13 pages updated. |
