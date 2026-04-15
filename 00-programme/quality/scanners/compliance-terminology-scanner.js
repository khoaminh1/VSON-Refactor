#!/usr/bin/env node
/**
 * compliance-terminology-scanner.js
 * ---------------------------------
 * Programme-level quality scanner for VSON Advisory website content.
 *
 * Introduced in release v0.2 (2026-04-08) as a regression test for the
 * multi-jurisdiction compliance pass (SG SFA / US SEC / VN SSC).
 *
 * Usage:
 *   node compliance-terminology-scanner.js <file-or-glob> [<file> ...]
 *
 * Examples:
 *   node compliance-terminology-scanner.js 02-product/vson-advisory/specs/design-concept-v3.html
 *   node compliance-terminology-scanner.js 02-product/vson-advisory/build/*.html
 *
 * Exit codes:
 *   0  clean                           (no hard violations, all required text present)
 *   1  hard violations found           (compliance failure — blocks release)
 *   2  required-text missing           (e.g. SFA disclaimer not in footer)
 *   3  contextual warnings only        (manual review recommended, does not block)
 *
 * No runtime dependencies — pure Node stdlib.
 *
 * References:
 *   - 01-delivery/vson-advisory/COMPLIANCE-AUDIT-2026-04-07.md
 *   - 01-delivery/vson-advisory/releases/v0.2/SCOPE.md
 *   - 01-delivery/vson-advisory/releases/v0.2/PLANNING-INPUTS.md
 */

'use strict';

const fs = require('fs');
const path = require('path');

// ─────────────────────────────────────────────────────────────────────────────
// RULE CATEGORIES
// ─────────────────────────────────────────────────────────────────────────────

/**
 * HARD-FORBIDDEN
 * Phrases that MUST NOT appear anywhere in user-facing content.
 * Any match = compliance violation = exit 1.
 * Case-insensitive substring match.
 */
const HARD_FORBIDDEN = [
  { pattern: /fundraising/i,               id: 'SG-C2/C4',  jurisdictions: ['SG'],           note: 'SFA §82 — implies regulated capital-raising activity' },
  { pattern: /\bfundrais/i,                id: 'SG-stem',   jurisdictions: ['SG'],           note: 'stem form of "fundraise"' },
  { pattern: /capital raising/i,           id: 'SG-C3',     jurisdictions: ['SG', 'US'],     note: 'Implies corporate finance / broker-dealer activity' },
  { pattern: /raise capital/i,             id: 'SG-memo',   jurisdictions: ['SG', 'US'],     note: 'Explicitly forbidden by SG memo §5' },
  { pattern: /attract capital/i,           id: 'SG-H1',     jurisdictions: ['SG'],           note: 'Positions firm as fundraising intermediary' },
  { pattern: /international capital markets/i, id: 'SG-H2', jurisdictions: ['SG', 'US', 'VN'], note: 'Triple-convergent — SEC/FINRA broker-dealer + CFC/GILTI exposure for US partner' },
  { pattern: /institutional capital/i,     id: 'SG-H4',     jurisdictions: ['SG'],           note: 'Implies placement of institutional funds' },
  { pattern: /valuation narrative/i,       id: 'SG-H3',     jurisdictions: ['SG'],           note: 'SG memo DON\'T #4 — no company valuations' },
  { pattern: /find investors/i,            id: 'SG-memo',   jurisdictions: ['SG'],           note: 'Forbidden phrasing — SG memo §5' },
  { pattern: /investor[- ]ready/i,         id: 'SG-style',  jurisdictions: ['SG'],           note: 'Implies fundraising positioning — use "board-ready"' },
  { pattern: /broker[- ]dealer/i,          id: 'US-SEC',    jurisdictions: ['US'],           note: 'US Exchange Act §15 — triggers registration requirement' },
  { pattern: /facilitate the sale of (shares|securities)/i, id: 'SG-golden', jurisdictions: ['SG', 'US', 'VN'], note: 'Violates SG Golden Rule — except inside the disclaimer itself' },
  { pattern: /we value (your|the) (company|business)/i, id: 'SG-memo', jurisdictions: ['SG'], note: 'SG memo §5 — no company valuations' },
  { pattern: /we help .{0,30} raise/i,     id: 'SG-memo',   jurisdictions: ['SG'],           note: 'SG memo §5 example of forbidden phrasing' },
];

/**
 * CONTEXTUALLY FORBIDDEN
 * Phrases allowed ONLY in specific contexts. Any occurrence outside the
 * allow-list produces a warning (exit 3) but does not block release.
 */
const CONTEXTUAL_RULES = [
  {
    pattern: /Managing Partner/,
    id: 'IN-04-NEW-01',
    note: 'Per De-linked Partnership Model, ONLY Fred Dang (SG) may use this title. Henry and Emily must use "Strategic Partner".',
    allowIfLineContains: [
      'Frederick',
      'Fred Dang',
      '(SG)',
      'Singapore — Vson Advisory',
      'Managing Partner (SG)',
      'a Managing Partner in Singapore',
      '1 Managing Partner',
    ],
    allowIfWindowContains: [ // check ±6 lines around the match
      'Frederick Dang',
      'Singapore — Vson Advisory',
    ],
    window: 6,
  },
  {
    pattern: /\binvestors?\b/i,
    id: 'style',
    note: 'Word "investor" is contextually sensitive — prefer "strategic partners" or "institutional partners" unless referring to generic market context',
    allowIfLineContains: [
      'Securities and Futures Act',
      'do not',
    ],
    allowIfWindowContains: [],
    window: 0,
  },
];

/**
 * REQUIRED PRESENCES
 * Strings that MUST appear at least once in the file.
 * Missing = exit 2.
 */
const REQUIRED_PRESENCES = [
  {
    pattern: /Singapore Securities and Futures Act/,
    id: 'SG-C1',
    note: 'Mandatory SFA disclaimer (memo Section 6)',
  },
  {
    pattern: /Vson Advisory Pte\. Ltd\./,
    id: 'NEW-03',
    note: 'SG entity identification required',
  },
  {
    pattern: /management consultancy/i,
    id: 'SG-safe-harbor',
    note: 'Required positioning per memo Section 3 (safe harbor language)',
  },
];

/**
 * EXCLUSION ZONES
 * Regions of each file where rules are suspended.
 * Used for the Hung Tran advisor card which Fred explicitly froze.
 */
const EXCLUSION_ZONES = [
  {
    name: 'Hung Tran advisor card (frozen — v0.2 defer)',
    // Start: opening bt-card that contains Hung Tran (we back up by scanning for Hung Tran and extending backwards inside the engine)
    startPattern: /<div class="bt-name">Hung Tran<\/div>/,
    // End: the line that introduces the next advisor (Bernard Lim) or closes the advisors grid
    endPattern: /<div class="bt-name">Bernard Lim<\/div>|<\/div>\s*<\/div>\s*<div style="margin-top:40px/,
    lookback: 3, // lines to include before the startPattern (to cover bt-initial + bt-card opener)
    lookahead: 0,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SCANNER IMPLEMENTATION
// ─────────────────────────────────────────────────────────────────────────────

function scanFile(filePath) {
  const absPath = path.resolve(filePath);
  if (!fs.existsSync(absPath)) {
    return { filePath, error: `File not found: ${absPath}` };
  }
  const raw = fs.readFileSync(absPath, 'utf8');
  const lines = raw.split(/\r?\n/);

  // Build exclusion line ranges
  const excluded = new Set();
  for (const zone of EXCLUSION_ZONES) {
    const lookback = zone.lookback || 0;
    let start = -1;
    for (let i = 0; i < lines.length; i++) {
      if (start === -1 && zone.startPattern.test(lines[i])) {
        start = Math.max(0, i - lookback);
        continue;
      }
      if (start !== -1 && zone.endPattern.test(lines[i])) {
        // Exclude up to but NOT including the end line (end marks next section)
        for (let j = start; j < i; j++) excluded.add(j);
        start = -1;
      }
    }
    // Warn if zone never closed
    if (start !== -1) {
      console.error(`  ⚠  Exclusion zone "${zone.name}" opened at line ${start + 1} but no end pattern matched — check scanner config`);
    }
  }

  const hardViolations = [];
  const contextualWarnings = [];
  const missingRequired = [];

  // Pass 1: Hard-forbidden
  for (let i = 0; i < lines.length; i++) {
    if (excluded.has(i)) continue;
    const line = lines[i];
    for (const rule of HARD_FORBIDDEN) {
      if (rule.pattern.test(line)) {
        // Skip if the match is inside the SFA disclaimer itself
        if (/Securities and Futures Act|do not (provide|facilitate)/.test(line)) continue;
        hardViolations.push({
          line: i + 1,
          rule: rule.id,
          jurisdictions: rule.jurisdictions.join('/'),
          note: rule.note,
          match: line.match(rule.pattern)?.[0] || '',
          snippet: line.trim().slice(0, 140),
        });
      }
    }
  }

  // Pass 2: Contextual
  for (let i = 0; i < lines.length; i++) {
    if (excluded.has(i)) continue;
    const line = lines[i];
    for (const rule of CONTEXTUAL_RULES) {
      if (rule.pattern.test(line)) {
        const lineAllowed = rule.allowIfLineContains.some(ok => line.includes(ok));
        let windowAllowed = false;
        if (!lineAllowed && rule.window && rule.allowIfWindowContains.length) {
          const from = Math.max(0, i - rule.window);
          const to = Math.min(lines.length - 1, i + rule.window);
          const windowText = lines.slice(from, to + 1).join('\n');
          windowAllowed = rule.allowIfWindowContains.some(ok => windowText.includes(ok));
        }
        if (!lineAllowed && !windowAllowed) {
          contextualWarnings.push({
            line: i + 1,
            rule: rule.id,
            note: rule.note,
            match: line.match(rule.pattern)?.[0] || '',
            snippet: line.trim().slice(0, 140),
          });
        }
      }
    }
  }

  // Pass 3: Required presences
  for (const req of REQUIRED_PRESENCES) {
    if (!req.pattern.test(raw)) {
      missingRequired.push({
        rule: req.id,
        note: req.note,
        pattern: req.pattern.toString(),
      });
    }
  }

  return {
    filePath,
    totalLines: lines.length,
    excludedLines: excluded.size,
    hardViolations,
    contextualWarnings,
    missingRequired,
  };
}

function formatReport(result) {
  const out = [];
  out.push('');
  out.push('━'.repeat(72));
  out.push(`File: ${result.filePath}`);
  out.push(`Total lines: ${result.totalLines}  ·  Excluded (frozen zones): ${result.excludedLines}`);
  out.push('━'.repeat(72));

  if (result.error) {
    out.push(`  ERROR: ${result.error}`);
    return out.join('\n');
  }

  // Hard violations
  out.push('');
  if (result.hardViolations.length === 0) {
    out.push('  [HARD-FORBIDDEN]    ✓ clean');
  } else {
    out.push(`  [HARD-FORBIDDEN]    ✗ ${result.hardViolations.length} violation(s)`);
    for (const v of result.hardViolations) {
      out.push(`    L${v.line}  [${v.rule}] ${v.jurisdictions}  match: "${v.match}"`);
      out.push(`          ${v.note}`);
      out.push(`          ${v.snippet}`);
    }
  }

  // Required
  out.push('');
  if (result.missingRequired.length === 0) {
    out.push('  [REQUIRED]          ✓ all required text present');
  } else {
    out.push(`  [REQUIRED]          ✗ ${result.missingRequired.length} missing`);
    for (const m of result.missingRequired) {
      out.push(`    [${m.rule}] ${m.note}`);
    }
  }

  // Contextual
  out.push('');
  if (result.contextualWarnings.length === 0) {
    out.push('  [CONTEXTUAL]        ✓ no warnings');
  } else {
    out.push(`  [CONTEXTUAL]        ⚠ ${result.contextualWarnings.length} warning(s) — manual review`);
    for (const w of result.contextualWarnings) {
      out.push(`    L${w.line}  [${w.rule}]  match: "${w.match}"`);
      out.push(`          ${w.note}`);
      out.push(`          ${w.snippet}`);
    }
  }

  return out.join('\n');
}

function main(argv) {
  const files = argv.slice(2);
  if (files.length === 0) {
    console.error('Usage: node compliance-terminology-scanner.js <file> [<file> ...]');
    process.exit(64);
  }

  let hardTotal = 0;
  let missingTotal = 0;
  let contextualTotal = 0;
  const results = [];

  for (const f of files) {
    const r = scanFile(f);
    results.push(r);
    console.log(formatReport(r));
    if (!r.error) {
      hardTotal += r.hardViolations.length;
      missingTotal += r.missingRequired.length;
      contextualTotal += r.contextualWarnings.length;
    }
  }

  console.log('');
  console.log('━'.repeat(72));
  console.log('SUMMARY');
  console.log('━'.repeat(72));
  console.log(`  Files scanned:        ${files.length}`);
  console.log(`  Hard violations:      ${hardTotal}`);
  console.log(`  Required missing:     ${missingTotal}`);
  console.log(`  Contextual warnings:  ${contextualTotal}`);
  console.log('');

  if (hardTotal > 0) {
    console.log('  RESULT: FAIL — hard compliance violations (exit 1)');
    process.exit(1);
  }
  if (missingTotal > 0) {
    console.log('  RESULT: FAIL — required text missing (exit 2)');
    process.exit(2);
  }
  if (contextualTotal > 0) {
    console.log('  RESULT: PASS-WITH-WARNINGS — contextual review needed (exit 3)');
    process.exit(3);
  }
  console.log('  RESULT: CLEAN (exit 0)');
  process.exit(0);
}

main(process.argv);
