# How to edit

## Change a word on a live page

1. Open `content/pages/<page>.json`.
2. Find the text. Change it.
3. Run `npm run build` (or `npm run dev` to also serve).

## Change a nav link or the primary CTA

Edit `content/nav.json`. The `Solutions` dropdown lives under `links[i].children`.

## Change the footer

Edit `content/footer.json`. The three columns are `columns.company`,
`columns.solutions`, and `columns.legal`.

## Change a colour or font

Edit `components/css/tokens.css`. All other CSS files reference the tokens.

## Add a new page

1. Create `pages/<new-page>.html` (tiny shell — copy an existing one).
2. Create `content/pages/<new-page>.json` with the keys that shell expects.
3. Add a nav entry in `content/nav.json` if user-facing.
4. Run the build.

## Add a new section component

1. Drop a new file in `components/sections/<Name>.html`. Use `{{ }}` for
   every value — never hardcode copy.
2. Add any new styles to `components/css/sections.css`.
3. Reference it from a page shell: `{{> sections/Name}}`.
4. Add the matching data block to the page JSON.

## Common mistakes

- **Editing `_site/`** — it gets wiped on every build. Always edit source.
- **Hardcoding text in a component** — moves copy out of `content/`. Any
  future copy change has to chase it down in HTML.
- **Forgetting to rebuild** — JSON and partial edits require a build.
  Only CSS and JS edits are picked up by a simple refresh.
- **Mismatching JSON keys** — the partial expects `{{hero.heading}}`; your
  JSON has `hero.title`. Handlebars silently renders empty — sanity-check
  the page after edits.

## The golden rule

> If it's a word people read, it lives in `content/`. If it's a shape or
> a colour, it lives in `components/`. If it's an image or a font, it lives
> in `assets/`.