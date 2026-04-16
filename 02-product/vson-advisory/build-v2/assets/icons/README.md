# Icons

Files referenced by [`base-head.html`](../../components/layout/base-head.html).

## Required files (per SHARED-STANDARDS.md)
| File | Size / Format | Used for |
|---|---|---|
| `favicon.ico` | 32×32 ICO | Browser tab icon (legacy) |
| `icon.svg` | SVG, square | Modern browsers (sharper) |
| `apple-touch-icon.png` | 180×180 PNG | iOS home-screen bookmark |

## Status
**None of these files exist yet.** The old `build/` referenced `/favicon.ico`
but the file was never produced — references resolved to 404 in production.

## Action required
Designer needs to produce all three files from the VSON Advisory navy "V" mark
(see `nav__logo-mark` in [nav.css](../../components/css/nav.css)). Drop them
into this folder; the paths in `base-head.html` are already wired.
