/**
 * SFA Compliance Regression Test
 * VSON Advisory Website — v0.2+
 *
 * Purpose: Automated guard against SFA-regulated language creeping back
 *          into the VSON Advisory website build files.
 *
 * Reference: COMPLIANCE-AUDIT-2026-04-07.md (12 findings)
 * Memo:      VS26/Advisory/Operation/Restriction v1.0 (2023-10-24)
 *
 * Run:  node tests/sfa-compliance.test.js
 *        — exit code 0 = all clear
 *        — exit code 1 = violations found
 */

const fs = require('fs');
const path = require('path');

// ── Configuration ──────────────────────────────────────────────────

const BUILD_DIR = path.resolve(__dirname, '..', 'build');

const PAGES = [
  'index.html',
  'approach.html',
  'brain-trust.html',
  'capabilities.html',
  'vault.html',
  'contact.html',
  'thank-you.html',
];

// ── Banned Phrases (from Compliance Memo DON'Ts) ───────────────────
// Each entry: { id, severity, pattern (regex), description, pages (optional — default all) }

const BANNED_PHRASES = [
  // CRITICAL
  {
    id: 'C2',
    severity: 'CRITICAL',
    pattern: /fundraising\s+readiness/gi,
    description: 'DON\'T #2 — "fundraising readiness" implies regulated capital-raising activity',
  },
  {
    id: 'C3a',
    severity: 'CRITICAL',
    pattern: /capital\s+raising/gi,
    description: 'DON\'T #2 — "capital raising" implies regulated fundraising',
  },
  {
    id: 'C4',
    severity: 'CRITICAL',
    pattern: /led\s+multiple\s+fundraising\s+rounds/gi,
    description: 'DON\'T #2 — biographical fundraising claim positions firm as having fundraising capability',
  },
  // HIGH
  {
    id: 'H1',
    severity: 'HIGH',
    pattern: /attract\s+capital/gi,
    description: 'DON\'T #2 — "attract capital" implies regulated activity',
  },
  {
    id: 'H2',
    severity: 'HIGH',
    pattern: /international\s+capital\s+markets/gi,
    description: 'DON\'T #2 — "capital markets" implies securities activity',
  },
  {
    id: 'H3',
    severity: 'HIGH',
    pattern: /valuation\s+narrative/gi,
    description: 'DON\'T #4 — "valuation narrative" implies company valuation services',
  },
  {
    id: 'H4',
    severity: 'HIGH',
    pattern: /institutional\s+capital\s+or\s+exit/gi,
    description: 'DON\'T #2 — "institutional capital" implies regulated capital facilitation',
  },
  {
    id: 'H5',
    severity: 'HIGH',
    pattern: /investment\s+readiness\s+mandates/gi,
    description: '"mandates" implies a regulated advisory mandate',
  },
  // MEDIUM
  {
    id: 'M1',
    severity: 'MEDIUM',
    pattern: /Institutional\s+Investor\s+or\s+Capital\s+Partner/g,
    description: 'Contact form radio option implies investor-facing services',
  },
  {
    id: 'M3',
    severity: 'MEDIUM',
    pattern: /What\s+Investors\s+Look\s+For\s+Beyond/gi,
    description: 'Article title implies investor advisory content',
  },
];

// ── Required Elements ──────────────────────────────────────────────
// Things that MUST be present on every page

const SFA_DISCLAIMER_PATTERN = /management\s+consultancy\s+firm[\s\S]{0,200}Securities\s+and\s+Futures\s+Act/i;

// ── Test Runner ────────────────────────────────────────────────────

let totalViolations = 0;
let totalPasses = 0;
const results = [];

function log(icon, msg) {
  results.push(`${icon} ${msg}`);
}

// Check each page exists
console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║  SFA Compliance Regression Test — VSON Advisory             ║');
console.log('║  Reference: COMPLIANCE-AUDIT-2026-04-07.md                  ║');
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log('');

for (const page of PAGES) {
  const filePath = path.join(BUILD_DIR, page);

  if (!fs.existsSync(filePath)) {
    log('⚠️ ', `SKIP — ${page} not found at ${filePath}`);
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  console.log(`── ${page} ──`);

  // 1. Check for banned phrases
  for (const rule of BANNED_PHRASES) {
    const matches = content.match(rule.pattern);
    if (matches) {
      totalViolations++;
      log('FAIL', `[${rule.id}] [${rule.severity}] ${page}: Found "${matches[0]}" — ${rule.description}`);

      // Find approximate line number
      const idx = content.indexOf(matches[0]);
      const lineNum = content.substring(0, idx).split('\n').length;
      log('    ', `  → Line ~${lineNum}`);
    } else {
      totalPasses++;
      log('PASS', `[${rule.id}] ${page}: No "${rule.pattern.source}" found`);
    }
  }

  // 2. Check SFA disclaimer is present (C1)
  if (SFA_DISCLAIMER_PATTERN.test(content)) {
    totalPasses++;
    log('PASS', `[C1] ${page}: SFA disclaimer present`);
  } else {
    totalViolations++;
    log('FAIL', `[C1] [CRITICAL] ${page}: SFA disclaimer MISSING — mandatory per Memo Section 6`);
  }

  console.log('');
}

// ── Summary ────────────────────────────────────────────────────────

console.log('');
console.log('════════════════════════════════════════════════════════════════');
console.log('  RESULTS');
console.log('════════════════════════════════════════════════════════════════');
console.log('');

for (const r of results) {
  console.log(`  ${r}`);
}

console.log('');
console.log('────────────────────────────────────────────────────────────────');
console.log(`  PASS: ${totalPasses}   FAIL: ${totalViolations}`);

if (totalViolations > 0) {
  console.log('');
  console.log('  ❌ COMPLIANCE CHECK FAILED — fix all violations before release');
  console.log('────────────────────────────────────────────────────────────────');
  process.exit(1);
} else {
  console.log('');
  console.log('  ✅ ALL CLEAR — no SFA compliance violations detected');
  console.log('────────────────────────────────────────────────────────────────');
  process.exit(0);
}
