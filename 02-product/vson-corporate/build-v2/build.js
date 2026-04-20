/* ============================================================
   VSON Corporate — minimal Handlebars build
   Reads: pages/*.html + content/*.json + components/** /*.html
   Writes: _site/*.html + _site/assets/** + _site/components/{css,js}
   ============================================================ */

const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const ROOT       = __dirname;
const CONTENT    = path.join(ROOT, 'content');
const COMPONENTS = path.join(ROOT, 'components');
const PAGES_DIR  = path.join(ROOT, 'pages');
const OUT        = path.join(ROOT, '_site');

/* ── Helpers ──────────────────────────────────────────────── */
Handlebars.registerHelper('eq', (a, b) => a === b);

/* ── Register every component/*.html as a named partial ──── */
function registerPartials(dir, prefix = '') {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      registerPartials(full, prefix + entry.name + '/');
    } else if (entry.name.endsWith('.html')) {
      const name = prefix + entry.name.replace('.html', '');
      Handlebars.registerPartial(name, fs.readFileSync(full, 'utf8'));
    }
  }
}
registerPartials(COMPONENTS);

/* ── Load site-wide data ──────────────────────────────────── */
const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const site   = readJson(path.join(CONTENT, 'site.json'));
const nav    = readJson(path.join(CONTENT, 'nav.json'));
const footer = readJson(path.join(CONTENT, 'footer.json'));

/* ── Fresh output dir ─────────────────────────────────────── */
if (fs.existsSync(OUT)) fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

/* ── Copy static folders (assets + css + js) ──────────────── */
function copyDir(src, dst) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}
copyDir(path.join(ROOT, 'assets'),           path.join(OUT, 'assets'));
copyDir(path.join(COMPONENTS, 'css'),        path.join(OUT, 'components/css'));
copyDir(path.join(COMPONENTS, 'js'),         path.join(OUT, 'components/js'));

/* ── Render each page ─────────────────────────────────────── */
let rendered = 0;
for (const file of fs.readdirSync(PAGES_DIR)) {
  if (!file.endsWith('.html')) continue;
  const pageName     = file.replace('.html', '');
  const pageDataPath = path.join(CONTENT, 'pages', pageName + '.json');
  const pageData     = fs.existsSync(pageDataPath) ? readJson(pageDataPath) : {};

  if (!fs.existsSync(pageDataPath)) {
    console.warn('  ⚠ Missing content file for ' + file + ' (expected ' + path.relative(ROOT, pageDataPath) + ')');
  }
  const tpl  = Handlebars.compile(fs.readFileSync(path.join(PAGES_DIR, file), 'utf8'));
  const html = tpl({ ...pageData, page: pageData, site, nav, footer });
  fs.writeFileSync(path.join(OUT, file), html);
  console.log('  ✓ ' + file);
  rendered++;
}

console.log('\nBuild complete → _site/ (' + rendered + ' pages)');