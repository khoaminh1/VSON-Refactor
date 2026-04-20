# Fonts

`fonts.css` currently loads **Montserrat** (headings) and **Inter** (body) from
Google Fonts CDN. This is the quickest path to a working site and works fine
for launch.

## Why self-host later

- **Performance** — CDN request adds a round-trip; self-hosting shaves it.
- **Privacy** — some regions flag Google Fonts CDN as a PII concern.
- **Offline / restricted networks** — self-hosted files work anywhere.

## How to self-host

1. Download the weights actually used (check `tokens.css` + this file):
   - Montserrat: 400, 600, 700, 800
   - Inter: 300, 400, 500, 600
2. Drop the `.woff2` files into this folder.
3. Replace the contents of `fonts.css` with local `@font-face` rules, e.g.:

```css
@font-face {
  font-family: 'Montserrat';
  src: url('./Montserrat-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```

4. `base-head.html` already points at `/assets/fonts/fonts.css` — no edits needed.
