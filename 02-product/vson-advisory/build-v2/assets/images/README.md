# Images

All image binaries for VSON Advisory live flat in this folder. Filename prefix
indicates purpose (`og-`, `team-`, `hero-`), not a subfolder.

Referenced from:
- `components/layout/base-head.html` (OG images)
- `content/pages/*.json` (OG images via `meta.og.image`)
- `components/ui/LeaderCard.html` (team headshots — wiring pending, see §2)

---

## 1. Open Graph images (`og-*.png`)

One 1200×630 PNG per page, shown when the page is shared on LinkedIn, Facebook,
Slack, etc. Path lives in `content/pages/{page}.json` → `meta.og.image`.

| File | Used by page |
|---|---|
| `og-home.png` | `content/pages/index.json` |
| `og-approach.png` | `content/pages/approach.json` |
| `og-leadership.png` | `content/pages/brain-trust.json` |
| `og-capabilities.png` | `content/pages/capabilities.json` |
| `og-vault.png` | `content/pages/vault.json` |
| `og-contact.png` | `content/pages/contact.json` |
| `og-thank-you.png` | `content/pages/thank-you.json` |

**Status:** None produced yet. JSON currently stores absolute URLs
(`https://vsonadvisory.com/og-*.png`) — when the binary files exist locally,
switch the JSON values to relative paths (`/assets/images/og-*.png`) so dev
and staging previews also work.

---

## 2. Team headshots (`team-*.webp`)

Currently **unused** — the LeaderCard component renders letter avatars (F / H /
E / B) via `.leader__avatar` in `components/css/sections.css`.

### Wiring headshots in (when produced)

1. Drop files here using slugged names:
   - `team-frederick-dang.webp` (primary) + `.jpg` fallback
   - `team-henry-hung.webp`
   - `team-emily-vo.webp`
   - `team-hung-tran.webp`
   - `team-bernard-lim.webp`

2. Add an `image` field to each leader object in
   `content/pages/index.json` → `leadership.members[]` and
   `content/pages/brain-trust.json` → `leadership_full.{partners,advisors}[]`:
   ```json
   {
     "initial": "F",
     "image": "/assets/images/team-frederick-dang.webp",
     "name": "Frederick Dang",
     ...
   }
   ```

3. Update `components/ui/LeaderCard.html` to render `<img>` when `image`
   exists, otherwise fall back to the letter avatar.

### Specs

- Square crop, 400×400px minimum
- WebP primary + JPG fallback (per `04-shared/SHARED-STANDARDS.md`)
- ≤ 80KB per image

---

## 3. Hero images (`hero-*.webp`) — currently none

The Advisory hero is text-only on a navy background (see `.hero` in
`components/css/sections.css`). No hero image is needed today.

If a future redesign adds one, use the prefix `hero-` and reference the path
directly in `content/pages/index.json` → `hero.image` (field to be added),
with matching `<img>` markup in `components/sections/Hero.html`.

---

## 4. Naming conventions

- Lowercase, hyphen-separated
- Prefix by purpose: `og-`, `team-`, `hero-`
- WebP primary format for photographs; PNG acceptable for OG cards/graphics
- No spaces, no diacritics, no uppercase
- One image = one file; produce fallback variants (`.jpg`) alongside, same prefix
