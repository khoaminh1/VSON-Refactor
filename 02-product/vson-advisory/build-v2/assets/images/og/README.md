# Open Graph Images

One 1200×630px image per page, referenced by `meta.og.image` in each
[`content/pages/*.json`](../../../content/pages/) file.

## Required files
| File | Used by page |
|---|---|
| `og-home.png` | content/pages/home.json |
| `og-approach.png` | content/pages/approach.json |
| `og-leadership.png` | content/pages/brain-trust.json |
| `og-capabilities.png` | content/pages/capabilities.json |
| `og-vault.png` | content/pages/vault.json |
| `og-contact.png` | content/pages/contact.json |
| `og-thank-you.png` | content/pages/thank-you.json |

## Path convention
JSON now stores **relative paths** (`/assets/images/og/og-home.png`), not
absolute URLs. The build step concatenates `site.domain + meta.og.image`
when emitting the final `<meta property="og:image">` tag.

This means:
- Dev/staging deployments see correct OG images (no broken `vsonadvisory.com` URLs)
- Production switches simply by changing `site.domain` in [content/site.json](../../../content/site.json)

## Status
**None of these files exist yet.** Old `build/` hardcoded absolute URLs to
`https://vsonadvisory.com/og-*.png` — the files were never produced.

## Action required
Designer to produce 7 OG images at 1200×630px PNG with VSON branding.
