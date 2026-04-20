# Images

Put binary image assets here. Keep the folder organised by purpose:

```
images/
├── og/              Open Graph share images (1200×630 recommended)
│   ├── og-home.png
│   ├── og-about.png
│   └── og-case-studies.png
├── team/            Leadership headshots (square, 800×800)
│   ├── frederick-dang.jpg
│   ├── henry-hung.jpg
│   ├── emily-vo.jpg
│   └── duy-le.jpg
├── brands/          Distributed brand logos (Torayvino, Zojirushi, Kingbag, Nepia)
├── clients/         Client logos (Dell, HP, Lenovo, ASUS, …)
└── case-studies/    Per-case-study imagery (optional)
```

## Rules

- **WebP preferred**, fall back to JPEG/PNG only for compatibility.
- Strip EXIF + optimise before committing (e.g. Squoosh).
- Reference images via `/assets/images/...` in JSON so the build copies them.
