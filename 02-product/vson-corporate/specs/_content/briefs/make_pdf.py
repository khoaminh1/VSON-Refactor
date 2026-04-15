from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.enums import TA_LEFT, TA_CENTER

# ── Design tokens ──────────────────────────────────────────────────────────────
FOREST_GREEN    = colors.HexColor('#1B4D3E')
DIGITAL_EMERALD = colors.HexColor('#2E8B57')
TECH_MINT       = colors.HexColor('#A7FFEB')
MINT_WHITE      = colors.HexColor('#F1F8F6')
LIGHT_GREY      = colors.HexColor('#F5F5F5')
MID_GREY        = colors.HexColor('#666666')
BORDER          = colors.HexColor('#D4E8E0')

W, H = A4
MARGIN = 18 * mm

doc = SimpleDocTemplate(
    '/sessions/admiring-quirky-albattani/mnt/VS-Web-Dev/vson-corporate/_content/briefs/04-visual-imagery-brief.pdf',
    pagesize=A4,
    leftMargin=MARGIN, rightMargin=MARGIN,
    topMargin=MARGIN, bottomMargin=MARGIN
)

styles = getSampleStyleSheet()

# Custom styles
def S(name, **kw):
    return ParagraphStyle(name, **kw)

sTitle    = S('sTitle',    fontSize=22, textColor=FOREST_GREEN,    fontName='Helvetica-Bold',  spaceAfter=2*mm,  leading=28)
sMeta     = S('sMeta',     fontSize=9,  textColor=MID_GREY,        fontName='Helvetica',        spaceAfter=6*mm,  leading=14)
sH1       = S('sH1',       fontSize=14, textColor=FOREST_GREEN,    fontName='Helvetica-Bold',  spaceBefore=6*mm, spaceAfter=2*mm, leading=18)
sH2       = S('sH2',       fontSize=11, textColor=DIGITAL_EMERALD, fontName='Helvetica-Bold',  spaceBefore=4*mm, spaceAfter=1.5*mm, leading=15)
sH3       = S('sH3',       fontSize=10, textColor=FOREST_GREEN,    fontName='Helvetica-Bold',  spaceBefore=3*mm, spaceAfter=1*mm, leading=14)
sBody     = S('sBody',     fontSize=9,  textColor=colors.black,    fontName='Helvetica',        spaceAfter=2*mm,  leading=14)
sSmall    = S('sSmall',    fontSize=8,  textColor=MID_GREY,        fontName='Helvetica',        spaceAfter=1*mm,  leading=12)
sBullet   = S('sBullet',   fontSize=9,  textColor=colors.black,    fontName='Helvetica',        spaceAfter=1*mm,  leading=14, leftIndent=10*mm, firstLineIndent=-4*mm)
sCode     = S('sCode',     fontSize=8,  textColor=FOREST_GREEN,    fontName='Helvetica-Oblique',spaceAfter=1*mm,  leading=12, leftIndent=6*mm)
sLabel    = S('sLabel',    fontSize=7,  textColor=colors.white,    fontName='Helvetica-Bold',  leading=10, alignment=TA_CENTER)
sNote     = S('sNote',     fontSize=8,  textColor=MID_GREY,        fontName='Helvetica-Oblique',spaceAfter=2*mm,  leading=12)

story = []

# ── Header banner ─────────────────────────────────────────────────────────────
header_data = [[
    Paragraph('VSON Corporate Website', S('', fontSize=10, textColor=colors.white, fontName='Helvetica-Bold', leading=13)),
    Paragraph('Visual Imagery Brief — 04', S('', fontSize=10, textColor=TECH_MINT, fontName='Helvetica-Bold', leading=13, alignment=1)),
]]
header_table = Table(header_data, colWidths=[(W - 2*MARGIN)*0.6, (W - 2*MARGIN)*0.4])
header_table.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), FOREST_GREEN),
    ('TOPPADDING',    (0,0), (-1,-1), 5*mm),
    ('BOTTOMPADDING', (0,0), (-1,-1), 5*mm),
    ('LEFTPADDING',   (0,0), (0,0),  4*mm),
    ('RIGHTPADDING',  (-1,0), (-1,-1), 4*mm),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
]))
story.append(header_table)
story.append(Spacer(1, 3*mm))

# ── Title + meta ──────────────────────────────────────────────────────────────
story.append(Paragraph('Visual Imagery Brief', sTitle))
story.append(Paragraph('Project: vson.vn · VSON Corporate &nbsp;&nbsp;|&nbsp;&nbsp; Owner: Fred Dang &nbsp;&nbsp;|&nbsp;&nbsp; Date: 2026-04-01 &nbsp;&nbsp;|&nbsp;&nbsp; Status: Inventory in progress', sMeta))
story.append(HRFlowable(width='100%', thickness=1, color=BORDER, spaceAfter=4*mm))

# ── Purpose ───────────────────────────────────────────────────────────────────
story.append(Paragraph('Purpose', sH1))
story.append(Paragraph(
    'This brief lists every visual asset needed for the VSON Corporate website. '
    'For each asset, mark what you already have, what needs to be collected from the team, '
    'and what needs to be sourced externally.',
    sBody))
story.append(Paragraph(
    'Upload all assets to the shared Google Drive folder:', sBody))
story.append(Paragraph(
    'https://drive.google.com/drive/u/0/folders/1fWDdsmGZs_9jipB7QU1PKD6NmuO0rDRX',
    sCode))
story.append(HRFlowable(width='100%', thickness=0.5, color=BORDER, spaceBefore=4*mm, spaceAfter=4*mm))

# ── File naming ───────────────────────────────────────────────────────────────
story.append(Paragraph('File Naming Convention', sH1))
story.append(Paragraph('[zone]-[descriptor]-[version].[ext]', sCode))
naming_examples = [
    ['home-hero-v1.jpg', 'about-team-photo-v1.jpg'],
    ['cs-01-thumbnail-v1.jpg', 'store-torayvino-product-v1.jpg'],
]
for row in naming_examples:
    story.append(Paragraph('&nbsp;&nbsp;&nbsp;' + ' &nbsp;&nbsp;·&nbsp;&nbsp; '.join(row), sSmall))

story.append(HRFlowable(width='100%', thickness=0.5, color=BORDER, spaceBefore=4*mm, spaceAfter=4*mm))

# ── Technical specs ────────────────────────────────────────────────────────────
story.append(Paragraph('Technical Specs (all photos unless noted)', sH1))
specs = [
    ['Spec', 'Requirement'],
    ['Format', 'JPG (photos)  ·  PNG (graphics with transparency)  ·  SVG (illustrations)'],
    ['Colour profile', 'sRGB'],
    ['Min width', '1440px for heroes/full-width  ·  800px for card thumbnails'],
    ['Max file size', '500KB per image — compress before handing off'],
    ['Orientation', 'Landscape for heroes  ·  Square or landscape for cards'],
]
spec_table = Table(specs, colWidths=[(W-2*MARGIN)*0.22, (W-2*MARGIN)*0.78])
spec_table.setStyle(TableStyle([
    ('BACKGROUND',    (0,0), (-1,0),  FOREST_GREEN),
    ('TEXTCOLOR',     (0,0), (-1,0),  colors.white),
    ('FONTNAME',      (0,0), (-1,0),  'Helvetica-Bold'),
    ('FONTSIZE',      (0,0), (-1,-1), 8),
    ('BACKGROUND',    (0,1), (-1,-1), MINT_WHITE),
    ('ROWBACKGROUNDS',(0,1), (-1,-1), [colors.white, MINT_WHITE]),
    ('FONTNAME',      (0,1), (-1,-1), 'Helvetica'),
    ('TOPPADDING',    (0,0), (-1,-1), 3*mm),
    ('BOTTOMPADDING', (0,0), (-1,-1), 3*mm),
    ('LEFTPADDING',   (0,0), (-1,-1), 3*mm),
    ('GRID',          (0,0), (-1,-1), 0.5, BORDER),
    ('VALIGN',        (0,0), (-1,-1), 'MIDDLE'),
]))
story.append(spec_table)
story.append(HRFlowable(width='100%', thickness=0.5, color=BORDER, spaceBefore=5*mm, spaceAfter=4*mm))

# ── Helper: zone section header ───────────────────────────────────────────────
def zone_header(number, title, page, priority=None):
    badge = f'Zone {number}'
    cells = [
        [Paragraph(badge, S('', fontSize=8, textColor=colors.white, fontName='Helvetica-Bold', leading=11))],
        [Paragraph(f'{title} — <i>{page}</i>', S('', fontSize=10, textColor=FOREST_GREEN, fontName='Helvetica-Bold', leading=14))],
    ]
    if priority:
        cells[0].append(Paragraph(priority, S('', fontSize=7, textColor=TECH_MINT, fontName='Helvetica', leading=10)))
    t = Table([[
        Table([[c] for c in cells[0]], colWidths=[18*mm]),
        Paragraph(f'Zone {number} — {title} &nbsp;<font color="#888888" size="8">({page})</font>',
                  S('', fontSize=11, textColor=FOREST_GREEN, fontName='Helvetica-Bold', leading=15)),
    ]], colWidths=[22*mm, (W-2*MARGIN)-22*mm])
    t.setStyle(TableStyle([
        ('BACKGROUND',   (0,0), (0,0), DIGITAL_EMERALD),
        ('BACKGROUND',   (1,0), (1,0), MINT_WHITE),
        ('TOPPADDING',   (0,0), (-1,-1), 3*mm),
        ('BOTTOMPADDING',(0,0), (-1,-1), 3*mm),
        ('LEFTPADDING',  (0,0), (-1,-1), 3*mm),
        ('VALIGN',       (0,0), (-1,-1), 'MIDDLE'),
        ('BOX',          (0,0), (-1,-1), 0.5, BORDER),
    ]))
    return t

# ── Helper: checklist table ────────────────────────────────────────────────────
def checklist(headers, rows):
    col_count = len(headers)
    available_w = W - 2*MARGIN
    first_col = available_w * 0.38
    rest = (available_w - first_col) / max(col_count - 1, 1)
    col_widths = [first_col] + [rest] * (col_count - 1)

    data = [headers] + rows
    t = Table(data, colWidths=col_widths)
    ts = [
        ('BACKGROUND',    (0,0), (-1,0),  FOREST_GREEN),
        ('TEXTCOLOR',     (0,0), (-1,0),  colors.white),
        ('FONTNAME',      (0,0), (-1,0),  'Helvetica-Bold'),
        ('FONTSIZE',      (0,0), (-1,-1), 8),
        ('FONTNAME',      (0,1), (-1,-1), 'Helvetica'),
        ('ROWBACKGROUNDS',(0,1), (-1,-1), [colors.white, MINT_WHITE]),
        ('TOPPADDING',    (0,0), (-1,-1), 2.5*mm),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5*mm),
        ('LEFTPADDING',   (0,0), (-1,-1), 3*mm),
        ('GRID',          (0,0), (-1,-1), 0.5, BORDER),
        ('VALIGN',        (0,0), (-1,-1), 'MIDDLE'),
        ('ALIGN',         (1,0), (-1,-1), 'CENTER'),
    ]
    t.setStyle(TableStyle(ts))
    return t

CB = '[ ]'  # checkbox

# ── Zone 1: Home Hero ─────────────────────────────────────────────────────────
story.append(zone_header(1, 'Home Hero — Right Column', 'home.html', 'HIGH PRIORITY'))
story.append(Spacer(1, 2*mm))
story.append(Paragraph('Strongest visual on the site. Minimum 800 × 900px (portrait crop).', sNote))
story.append(Paragraph('Treatment options:', sH3))
for opt in [
    'A) Real photo — team, campaign moment, or product shot',
    'B) Abstract graphic in brand colours (no photography needed)',
    'C) Product flatlay — Torayvino or Zojirushi hero shot',
]:
    story.append(Paragraph('• ' + opt, sBullet))
story.append(Spacer(1, 2*mm))
story.append(checklist(
    ['Asset', 'Have it?', 'Source needed', 'Direction decided', 'File in Drive'],
    [['Home hero — right column visual', CB, CB, CB, CB]]
))
story.append(Spacer(1, 2*mm))
story.append(Paragraph('Inventory questions:', sH3))
for q in [
    'Do we have existing campaign photos from past activations?',
    'Do we have team or event photography?',
    'Do we have premium product shots of Torayvino or Zojirushi?',
    'If none — commission a shoot OR use a graphic treatment?',
]:
    story.append(Paragraph('[ ]  ' + q, sBullet))
story.append(HRFlowable(width='100%', thickness=0.5, color=BORDER, spaceBefore=4*mm, spaceAfter=4*mm))

# ── Zone 2: Page Hero Backgrounds ────────────────────────────────────────────
story.append(zone_header(2, 'Page Hero Backgrounds', 'All pages'))
story.append(Spacer(1, 2*mm))
story.append(Paragraph(
    'Current treatment: dark green background with grid lines — reads clean and may be the final treatment. '
    'Decision needed: keep graphic OR add a tinted photo overlay. Min 1440 × 500px if adding photo.',
    sNote))
story.append(Spacer(1, 2*mm))
story.append(checklist(
    ['Page', 'Keep graphic (no photo)', 'Add photo overlay', 'Photo received', 'In prototype'],
    [
        ['About', CB, CB, CB, CB],
        ['Activation Solutions', CB, CB, CB, CB],
        ['Market Development', CB, CB, CB, CB],
        ['Store', CB, CB, CB, CB],
        ['Case Studies', CB, CB, CB, CB],
        ['Contact', CB, CB, CB, CB],
    ]
))
story.append(HRFlowable(width='100%', thickness=0.5, color=BORDER, spaceBefore=4*mm, spaceAfter=4*mm))

# ── Zone 3: About Company Story ───────────────────────────────────────────────
story.append(zone_header(3, 'About — Company Story Section', 'about.html'))
story.append(Spacer(1, 2*mm))
story.append(Paragraph('Two optional assets for the body section below the team grid. Min 1200 × 700px.', sNote))
story.append(Spacer(1, 2*mm))
story.append(checklist(
    ['Asset', 'Have it?', 'Usable quality?', 'Source needed', 'In Drive'],
    [
        ['Team or office photo (1200 × 700px)', CB, CB, CB, CB],
        ['Vietnam context visual (city / retail / market)', CB, CB, CB, CB],
    ]
))
story.append(HRFlowable(width='100%', thickness=0.5, color=BORDER, spaceBefore=4*mm, spaceAfter=4*mm))

# ── Zone 4: Case Study Thumbnails ────────────────────────────────────────────
story.append(zone_header(4, 'Case Study Card Thumbnails', 'case-studies.html'))
story.append(Spacer(1, 2*mm))
story.append(Paragraph(
    'One thumbnail per card. Option A: real campaign photo (800 × 500px). '
    'Option B: abstract CSS/SVG graphic if no photo is available.',
    sNote))
story.append(Spacer(1, 2*mm))
story.append(checklist(
    ['Card', 'Client ref', 'Real photo available?', 'Use graphic?', 'Asset received'],
    [
        ['CS-01', 'TBD', CB, CB, CB],
        ['CS-02', 'TBD', CB, CB, CB],
        ['CS-03', 'TBD', CB, CB, CB],
    ]
))
story.append(HRFlowable(width='100%', thickness=0.5, color=BORDER, spaceBefore=4*mm, spaceAfter=4*mm))

# ── Zone 5: Store Brand Photos ────────────────────────────────────────────────
story.append(zone_header(5, 'Store — Brand Product / Lifestyle Photos', 'store.html'))
story.append(Spacer(1, 2*mm))
story.append(Paragraph(
    'Optional product or lifestyle photo per brand. Brand logos are tracked separately in Brief 03. '
    'Most brand partners have a press/media kit — request directly.',
    sNote))
story.append(Spacer(1, 2*mm))
story.append(checklist(
    ['Brand', 'Photo needed?', 'Do we have one?', 'Brand can supply?', 'File in Drive'],
    [
        ['Torayvino', CB, CB, CB, CB],
        ['Zojirushi', CB, CB, CB, CB],
        ['Kingbag', CB, CB, CB, CB],
        ['Nepia', CB, CB, CB, CB],
    ]
))
story.append(HRFlowable(width='100%', thickness=0.5, color=BORDER, spaceBefore=4*mm, spaceAfter=4*mm))

# ── Sourcing options ──────────────────────────────────────────────────────────
story.append(Paragraph('Sourcing Options (Priority Order)', sH1))
sourcing = [
    ('1. Request from brand partners',
     'Contact Torayvino, Zojirushi, Kingbag, Nepia reps directly. Most have a press/media kit with approved product photos.'),
    ('2. Commission a photo shoot',
     'Plan a half-day shoot for team portraits, office environment, product staging. Combine with headshot session (Brief 02) to save cost.'),
    ('3. Licensed stock photography',
     'For background/context visuals only (Vietnam cityscape, retail, market scenes). Use Unsplash (free) or Shutterstock (paid). Do NOT use stock for team or case study cards.'),
    ('4. CSS/SVG graphic treatment',
     'For any zone where real photography is unavailable. Designer builds an abstract brand graphic using the design tokens. This is a valid final-quality treatment — not a placeholder.'),
]
for title, body in sourcing:
    story.append(Paragraph(title, sH3))
    story.append(Paragraph(body, sBody))

story.append(HRFlowable(width='100%', thickness=0.5, color=BORDER, spaceBefore=4*mm, spaceAfter=4*mm))

# ── How to return assets ──────────────────────────────────────────────────────
story.append(Paragraph('How to Return Assets', sH1))
for step in [
    'Compress images to under 500KB — use Squoosh (squoosh.app), free and browser-based.',
    'Rename files using the naming convention on page 1.',
    'Upload to the Google Drive folder: drive.google.com/drive/u/0/folders/1fWDdsmGZs_9jipB7QU1PKD6NmuO0rDRX',
    'Reply to the briefing email confirming what was uploaded and flagging anything that needs sourcing.',
]:
    story.append(Paragraph(f'• {step}', sBullet))

story.append(Spacer(1, 4*mm))

# ── Open questions ─────────────────────────────────────────────────────────────
story.append(Paragraph('Open Questions', sH1))
for q in [
    'Does VSON have an existing photo library from past campaigns or activations?',
    'Is a team photo shoot feasible before the build deadline (2026-04-08)?',
    'Home hero — photo or graphic treatment?',
    'Page heroes — keep dark green grid as final, or add photo overlays?',
]:
    story.append(Paragraph('[ ]  ' + q, sBullet))

# ── Build ─────────────────────────────────────────────────────────────────────
doc.build(story)
print("PDF created successfully.")
