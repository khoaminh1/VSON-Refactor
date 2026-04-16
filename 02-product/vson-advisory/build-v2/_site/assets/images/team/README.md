# Team headshots

Currently unused — leadership cards on home and brain-trust pages render
letter avatars (F, H, E, B) via `.leader__avatar` in
[sections.css](../../../components/css/sections.css).

## When real headshots are produced
1. Drop files here using the slug naming convention:
   - `frederick-dang.webp` (and `.jpg` fallback)
   - `henry-hung.webp`
   - `emily-vo.webp`
   - `hung-tran.webp`
   - `bernard-lim.webp`
2. Add `image` field to each leader object in
   [content/pages/home.json](../../../content/pages/home.json) and
   [content/pages/brain-trust.json](../../../content/pages/brain-trust.json):
   ```json
   { "initial": "F", "image": "/assets/images/team/frederick-dang.webp", "name": "Frederick Dang", ... }
   ```
3. Update `ui/LeaderCard.html` to render `<img>` when `image` exists, else
   fall back to the letter avatar.

## Specs
- Square crop, 400×400px minimum
- WebP primary, JPG fallback (per SHARED-STANDARDS.md)
- File size budget: <80KB per image
