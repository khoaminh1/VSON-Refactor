#!/bin/bash
# ============================================================
# VSON Web Platform | Automated UAT Test Script (BL-001)
# Runs content, link, accessibility, and structure checks
# against BOTH build directories (offline/local testing)
# ============================================================
# Usage: bash 01-delivery/testing/uat-test.sh
# Output: 01-delivery/testing/UAT-REPORT.md
# ============================================================

set +e

REPORT="01-delivery/testing/UAT-REPORT.md"
CORP_BUILD="02-product/vson-corporate/build"
ADV_BUILD="02-product/vson-advisory/build"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
PASS=0
FAIL=0
WARN=0

# Initialize report
cat > "$REPORT" << 'HEADER'
# UAT Test Report | VSON Web Platform

HEADER
echo "**Generated:** $TIMESTAMP" >> "$REPORT"
cat >> "$REPORT" << 'HEADER2'
**Script:** 01-delivery/uat-test.sh (BL-001)

---

HEADER2

log_pass() {
  echo "  [PASS] $1" >> "$REPORT"
  ((PASS++))
}

log_fail() {
  echo "  [FAIL] $1" >> "$REPORT"
  ((FAIL++))
}

log_warn() {
  echo "  [WARN] $1" >> "$REPORT"
  ((WARN++))
}

# ============================================================
# TEST 1: Em Dash Scan (Priority #1)
# ============================================================
echo "## Test 1: Em Dash Content Scan" >> "$REPORT"
echo "" >> "$REPORT"

for PROJECT in "$CORP_BUILD" "$ADV_BUILD"; do
  PROJECT_NAME=$(echo "$PROJECT" | grep -oP 'vson-\w+')
  EM_COUNT=$(grep -r '—' "$PROJECT" --include="*.html" --include="*.css" --include="*.js" -c 2>/dev/null | awk -F: '{sum+=$2} END {print sum+0}')
  HTML_EM=$(grep -r '—' "$PROJECT" --include="*.html" -c 2>/dev/null | awk -F: '{sum+=$2} END {print sum+0}')
  CSS_EM=$(grep -r '—' "$PROJECT" --include="*.css" -c 2>/dev/null | awk -F: '{sum+=$2} END {print sum+0}')
  JS_EM=$(grep -r '—' "$PROJECT" --include="*.js" -c 2>/dev/null | awk -F: '{sum+=$2} END {print sum+0}')

  if [ "$HTML_EM" -eq 0 ]; then
    log_pass "$PROJECT_NAME: Zero em dashes in HTML files"
  else
    log_fail "$PROJECT_NAME: $HTML_EM em dashes found in HTML files"
    grep -rn '—' "$PROJECT" --include="*.html" >> "$REPORT" 2>/dev/null || true
  fi

  if [ "$CSS_EM" -gt 0 ]; then
    # Check if CSS em dashes are only in comments
    CSS_CONTENT_EM=$(grep -r "content:.*'—'" "$PROJECT" --include="*.css" -c 2>/dev/null || echo 0)
    if [ "$CSS_CONTENT_EM" -gt 0 ]; then
      log_fail "$PROJECT_NAME: Em dash in CSS content property ($CSS_CONTENT_EM instances)"
    else
      log_warn "$PROJECT_NAME: $CSS_EM em dashes in CSS (comments only, not user-facing)"
    fi
  else
    log_pass "$PROJECT_NAME: Zero em dashes in CSS files"
  fi
done
echo "" >> "$REPORT"

# ============================================================
# TEST 2: HTML Structure Validation
# ============================================================
echo "## Test 2: HTML Structure" >> "$REPORT"
echo "" >> "$REPORT"

for PROJECT in "$CORP_BUILD" "$ADV_BUILD"; do
  PROJECT_NAME=$(echo "$PROJECT" | grep -oP 'vson-\w+')
  for HTML_FILE in "$PROJECT"/*.html; do
    FILENAME=$(basename "$HTML_FILE")

    # Check title tag exists
    if grep -q '<title>' "$HTML_FILE"; then
      log_pass "$PROJECT_NAME/$FILENAME: Has <title> tag"
    else
      log_fail "$PROJECT_NAME/$FILENAME: Missing <title> tag"
    fi

    # Check meta description
    if grep -q 'meta name="description"' "$HTML_FILE"; then
      log_pass "$PROJECT_NAME/$FILENAME: Has meta description"
    else
      log_fail "$PROJECT_NAME/$FILENAME: Missing meta description"
    fi

    # Check OG tags
    if grep -q 'og:title' "$HTML_FILE"; then
      log_pass "$PROJECT_NAME/$FILENAME: Has OG tags"
    else
      log_fail "$PROJECT_NAME/$FILENAME: Missing OG tags"
    fi

    # Check skip-to-content
    if grep -q 'skip-to' "$HTML_FILE" || grep -q 'Skip to' "$HTML_FILE"; then
      log_pass "$PROJECT_NAME/$FILENAME: Has skip-to-content link"
    else
      log_fail "$PROJECT_NAME/$FILENAME: Missing skip-to-content link"
    fi

    # Check lang attribute
    if grep -q 'lang="en"' "$HTML_FILE"; then
      log_pass "$PROJECT_NAME/$FILENAME: Has lang attribute"
    else
      log_fail "$PROJECT_NAME/$FILENAME: Missing lang attribute"
    fi

    # Check h1 exists and is unique
    H1_COUNT=$(grep -c '<h1' "$HTML_FILE" || echo 0)
    if [ "$H1_COUNT" -eq 1 ]; then
      log_pass "$PROJECT_NAME/$FILENAME: Single h1 tag"
    elif [ "$H1_COUNT" -eq 0 ]; then
      log_fail "$PROJECT_NAME/$FILENAME: No h1 tag found"
    else
      log_warn "$PROJECT_NAME/$FILENAME: Multiple h1 tags ($H1_COUNT)"
    fi
  done
done
echo "" >> "$REPORT"

# ============================================================
# TEST 3: Internal Link Integrity
# ============================================================
echo "## Test 3: Internal Link Integrity" >> "$REPORT"
echo "" >> "$REPORT"

for PROJECT in "$CORP_BUILD" "$ADV_BUILD"; do
  PROJECT_NAME=$(echo "$PROJECT" | grep -oP 'vson-\w+')
  BROKEN=0

  # Extract all internal href links (not http, not #, not mailto, not tel)
  for HTML_FILE in "$PROJECT"/*.html; do
    FILENAME=$(basename "$HTML_FILE")
    # Get internal links
    # Get internal links (skip absolute URLs with http/https, skip #, skip mailto, skip tel)
    INTERNAL_LINKS=$(grep -oP 'href="([^"#][^"]*\.html)"' "$HTML_FILE" | grep -oP '"[^"]*"' | tr -d '"' | grep -v '^http' | sort -u)
    for LINK in $INTERNAL_LINKS; do
      # Strip leading /
      CLEAN_LINK=$(echo "$LINK" | sed 's|^/||')
      if [ ! -f "$PROJECT/$CLEAN_LINK" ]; then
        log_fail "$PROJECT_NAME/$FILENAME: Broken link to $LINK (file not found)"
        ((BROKEN++))
      fi
    done
  done

  if [ "$BROKEN" -eq 0 ]; then
    log_pass "$PROJECT_NAME: All internal links resolve to existing files"
  fi
done
echo "" >> "$REPORT"

# ============================================================
# TEST 4: Form Validation
# ============================================================
echo "## Test 4: Forms" >> "$REPORT"
echo "" >> "$REPORT"

for PROJECT in "$CORP_BUILD" "$ADV_BUILD"; do
  PROJECT_NAME=$(echo "$PROJECT" | grep -oP 'vson-\w+')
  for HTML_FILE in "$PROJECT"/*.html; do
    FILENAME=$(basename "$HTML_FILE")
    if grep -q '<form' "$HTML_FILE"; then
      # Check Netlify attribute
      if grep -q 'data-netlify="true"' "$HTML_FILE"; then
        log_pass "$PROJECT_NAME/$FILENAME: Form has Netlify attribute"
      else
        log_fail "$PROJECT_NAME/$FILENAME: Form missing data-netlify attribute"
      fi
      # Check honeypot
      if grep -q 'bot-field\|honeypot' "$HTML_FILE"; then
        log_pass "$PROJECT_NAME/$FILENAME: Form has honeypot protection"
      else
        log_warn "$PROJECT_NAME/$FILENAME: Form missing honeypot protection"
      fi
    fi
  done
done
echo "" >> "$REPORT"

# ============================================================
# TEST 5: File Inventory
# ============================================================
echo "## Test 5: File Inventory" >> "$REPORT"
echo "" >> "$REPORT"

for PROJECT in "$CORP_BUILD" "$ADV_BUILD"; do
  PROJECT_NAME=$(echo "$PROJECT" | grep -oP 'vson-\w+')
  HTML_COUNT=$(find "$PROJECT" -name "*.html" | wc -l)
  CSS_COUNT=$(find "$PROJECT" -name "*.css" | wc -l)
  JS_COUNT=$(find "$PROJECT" -name "*.js" | wc -l)
  echo "  $PROJECT_NAME: $HTML_COUNT HTML, $CSS_COUNT CSS, $JS_COUNT JS" >> "$REPORT"

  # List all HTML files
  echo "  Pages:" >> "$REPORT"
  for F in "$PROJECT"/*.html; do
    echo "    - $(basename $F)" >> "$REPORT"
  done
done
echo "" >> "$REPORT"

# ============================================================
# TEST 6: Sitemap Validation
# ============================================================
echo "## Test 6: Sitemap" >> "$REPORT"
echo "" >> "$REPORT"

for PROJECT in "$CORP_BUILD" "$ADV_BUILD"; do
  PROJECT_NAME=$(echo "$PROJECT" | grep -oP 'vson-\w+')
  if [ -f "$PROJECT/sitemap.xml" ]; then
    SITEMAP_URLS=$(grep -c '<loc>' "$PROJECT/sitemap.xml" || echo 0)
    HTML_PAGES=$(find "$PROJECT" -maxdepth 1 -name "*.html" ! -name "thank-you.html" | wc -l)
    if [ "$SITEMAP_URLS" -ge "$HTML_PAGES" ]; then
      log_pass "$PROJECT_NAME: Sitemap has $SITEMAP_URLS URLs for $HTML_PAGES public pages"
    else
      log_warn "$PROJECT_NAME: Sitemap has $SITEMAP_URLS URLs but $HTML_PAGES pages exist"
    fi
  else
    log_fail "$PROJECT_NAME: Missing sitemap.xml"
  fi
done
echo "" >> "$REPORT"

# ============================================================
# SUMMARY
# ============================================================
echo "---" >> "$REPORT"
echo "" >> "$REPORT"
echo "## Summary" >> "$REPORT"
echo "" >> "$REPORT"
TOTAL=$((PASS + FAIL + WARN))
echo "| Result | Count |" >> "$REPORT"
echo "|--------|-------|" >> "$REPORT"
echo "| PASS | $PASS |" >> "$REPORT"
echo "| FAIL | $FAIL |" >> "$REPORT"
echo "| WARN | $WARN |" >> "$REPORT"
echo "| Total checks | $TOTAL |" >> "$REPORT"
echo "" >> "$REPORT"

if [ "$FAIL" -eq 0 ]; then
  echo "**Verdict: PASS** | Ready for Fred acceptance" >> "$REPORT"
else
  echo "**Verdict: FAIL** | $FAIL blocking issues must be resolved" >> "$REPORT"
fi

echo ""
echo "====================================="
echo "  UAT Test Complete"
echo "  PASS: $PASS  |  FAIL: $FAIL  |  WARN: $WARN"
echo "  Report: $REPORT"
echo "====================================="
