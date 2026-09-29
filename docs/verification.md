# Verification

- Production client and server-rendering builds pass.
- All 139 original page routes produce complete rendered HTML, with a separate 404 page.
- Original local asset files were compared using SHA-256: all 419 image, font and brochure files match the supplied archive.
- Text from all source page bodies was checked against the generated HTML. Original blog-card descriptions and per-article supplemental content are retained.
- Local image sources and internal page links were checked in generated pages.
- Contact and career submission were checked against a local email stub, including valid data, résumé attachment, invalid fields, invalid file content and unconfigured SMTP. No live emails were sent.
- Phone, tablet and desktop layouts were reviewed using the live app. The blog grid changes from one to two to three columns. Mobile navigation, hero controls and career dialogs were checked.
- Full manual pixel comparison of every one of the 139 routes is not claimed. Representative pages were reviewed and the original styling is retained outside the blog redesign.
- Live SMTP delivery and third-party services such as the Google map and WhatsApp are not validated by local integration checks.

Source defects and the six missing image references are documented in the migration manifest and README.
