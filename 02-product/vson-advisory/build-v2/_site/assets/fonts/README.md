# Fonts

Font loading is centralised in [`fonts.css`](fonts.css). Linked from `components/layout/base-head.html`.

## Current state
- **Inter** — weights 300–700 — loaded from Google Fonts CDN
- **Playfair Display** — weights 400/600/700 + italic — loaded from Google Fonts CDN

## To self-host
1. Download WOFF2 files from [rsms.me/inter](https://rsms.me/inter/) and [Google Fonts → Playfair Display](https://fonts.google.com/specimen/Playfair+Display).
2. Place into this folder:
   - `Inter-VariableFont.woff2`
   - `PlayfairDisplay-VariableFont.woff2`
   - `PlayfairDisplay-Italic.woff2`
3. In `fonts.css`: comment out the `@import` line, uncomment the `@font-face` block.
4. In `base-head.html`: remove the `preconnect` lines for `fonts.googleapis.com` / `fonts.gstatic.com`.

## Why a separate file
- `tokens.css` declares font *families* (`--font-sans`, `--font-serif`); font *loading* is an asset concern, not a design-token concern.
- Self-hosting later doesn't require changes to any component CSS.
