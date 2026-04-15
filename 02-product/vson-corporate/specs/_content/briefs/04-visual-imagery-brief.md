# Visual Imagery Brief — VSON Corporate Website
**Project:** vson.vn · VSON Corporate
**Brief ref:** 04
**Owner:** Fred Dang
**Date:** 2026-04-01
**Status:** Inventory in progress

---

## Purpose

This brief lists every visual asset needed for the VSON Corporate website prototype.
For each asset: mark what you already have, what you need to collect from the team, and what needs to be sourced externally.

Drop assets into: `visual-imagery/_incoming/`
Fred reviews and moves approved assets to: `visual-imagery/_approved/`

---

## File Naming Convention

```
[zone]-[descriptor]-[version].[ext]

Examples:
  home-hero-v1.jpg
  about-team-photo-v1.jpg
  cs-01-thumbnail-v1.jpg
  store-torayvino-product-v1.jpg
```

---

## Technical Specs (apply to all photos unless noted)

| Spec | Requirement |
|---|---|
| Format | JPG (photos) · PNG (graphics with transparency) · SVG (illustrations) |
| Colour profile | sRGB |
| Minimum width | 1440px for hero/full-width · 800px for card thumbnails |
| Max file size | 500KB per image (compress before handing off) |
| Orientation | Landscape for heroes · Square or landscape for cards |

---

## Asset Inventory

### Zone 1 — Home Hero (Right Column)
**Page:** Home (`home.html`)
**Placement:** Right half of the split hero layout
**Priority:** HIGH — most visible asset on the site

| | |
|---|---|
| Dimensions | Min 800 × 900px (portrait crop) |
| Treatment options | A) Real photo — team, campaign moment, or product · B) Abstract graphic in brand colours · C) Product flatlay |
| Tone | Professional, modern, trustworthy — not stock-photo generic |

**Inventory checklist:**

- [ ] Do we have any existing campaign photos from past activations?
- [ ] Do we have any team/event photography?
- [ ] Do we have product shots of Torayvino or Zojirushi that look premium?
- [ ] If none of the above — decide: commission a shoot OR use a graphic treatment

**If using graphic treatment (no photo needed):**
- [ ] Confirm with designer to build abstract brand graphic as SVG/CSS

---

### Zone 2 — Page Hero Backgrounds
**Pages:** About, Activation Solutions, Market Development, Store, Case Studies, Contact
**Current state:** Dark green background with grid lines — this reads clean and may be the final treatment

**Decision needed per page:**

| Page | Keep dark green grid (no photo) | Add tinted photo overlay | Notes |
|---|---|---|---|
| About | [ ] | [ ] | Team photo could work here |
| Activation Solutions | [ ] | [ ] | Campaign / retail activation shot |
| Market Development | [ ] | [ ] | Vietnam market / trade context |
| Store | [ ] | [ ] | Product lifestyle |
| Case Studies | [ ] | [ ] | Probably keep graphic |
| Contact | [ ] | [ ] | Probably keep graphic |

**If adding photo overlay:**
- Dimensions: Min 1440 × 500px (wide landscape)
- Treatment: Photo will be darkened with CSS overlay — mid-tone or slightly underexposed photos work best
- Drop in: `visual-imagery/_incoming/[page]-hero-v1.jpg`

---

### Zone 3 — About Page: Company Story Section
**Page:** About (`about.html`)
**Placement:** Body section below the team grid

Two optional assets:

**3A — Team or office photo**
- [ ] Do we have an existing team photo (in-office or event)?
- [ ] Is it usable quality (min 1200px wide, good lighting)?
- Dimensions: 1200 × 700px landscape

**3B — Vietnam context visual**
- [ ] Do we have a Vietnam-context image (city, market, retail environment)?
- [ ] If not — stock photo or skip this zone?
- Dimensions: 1200 × 700px landscape

---

### Zone 4 — Case Study Card Thumbnails
**Page:** Case Studies (`case-studies.html`)
**Placement:** 3 cards in the case study grid

Each card needs one thumbnail image. Options per card:

**Option A — Campaign photo from the actual work**
- Best: real image from the activation, market entry, or campaign
- Dimensions: 800 × 500px landscape

**Option B — Abstract graphic (colour-coded by track)**
- If no real photo is available, the designer can create a CSS/SVG pattern
- Activation Solutions track: mint/green tones
- Market Development track: forest green/darker tones

| Card | Client ref | Real photo available? | Use graphic? | Photo file name |
|---|---|---|---|---|
| CS-01 | TBD | [ ] | [ ] | |
| CS-02 | TBD | [ ] | [ ] | |
| CS-03 | TBD | [ ] | [ ] | |

---

### Zone 5 — Store: Brand Product / Lifestyle Photos
**Page:** Store (`store.html`)
**Placement:** Brand cards in the store section
**Note:** Brand logos are tracked separately in `briefs/03-logo-approvals-brief.md`

These are optional product or lifestyle photos — one per brand if available.
Brand cards currently show logos only; a lifestyle photo can be added behind or below the logo.

| Brand | Product photo needed? | Do we have one? | Can the brand supply it? | File name |
|---|---|---|---|---|
| Torayvino | [ ] | [ ] | [ ] | |
| Zojirushi | [ ] | [ ] | [ ] | |
| Kingbag | [ ] | [ ] | [ ] | |
| Nepia | [ ] | [ ] | [ ] | |

---

## Sourcing Options

If assets cannot be collected from the team, here are the sourcing options in priority order:

### Option 1 — Request from brand partners
For Torayvino, Zojirushi, Kingbag, Nepia: contact brand representatives directly.
Most brand partners have a press/media kit with approved product photos you can use.

### Option 2 — Commission a photo shoot
If VSON needs team photos, office shots, or campaign documentation photography:
- Plan for 1 half-day shoot to capture: team portraits, office environment, any product staging
- Combine with headshot session (Leadership Brief 02) to save time and cost

### Option 3 — Licensed stock photography
Use only for background/context visuals (Vietnam cityscape, retail environment, market scenes).
Recommended sources: Unsplash (free), Pexels (free), Shutterstock (paid, higher quality).
**Do not use stock photos for team, leadership, or case study cards.**

### Option 4 — CSS/SVG graphic treatment (no photo)
For any zone where real photography is unavailable or unsuitable:
- Designer builds abstract brand graphic using design tokens
- Colours: `#1B4D3E` (forest green), `#2E8B57` (digital emerald), `#A7FFEB` (tech mint)
- This is a valid final-quality treatment — not a placeholder

---

## How to Return Assets

Upload all assets to the shared Google Drive folder:
**https://drive.google.com/drive/u/0/folders/1fWDdsmGZs_9jipB7QU1PKD6NmuO0rDRX**

1. Compress images to under 500KB (use [Squoosh](https://squoosh.app) — free, browser-based)
2. Rename files using the naming convention above
3. Upload to the Google Drive folder above
4. Reply to the briefing email to confirm what has been uploaded and flag anything that needs to be sourced

---

## Open Questions

- [ ] Does VSON have an existing photo library from past campaigns or activations?
- [ ] Is a team photo shoot feasible before the build deadline (2026-04-08)?
- [ ] For the home hero — photo or graphic treatment?
- [ ] For page heroes — keep the current dark green grid as final, or add photo overlays?
