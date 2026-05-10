---
noteId: 1778320495715
---

###### What is the Lake Formation permissions workflow?

---

1. **Get metadata** — user submits query to integrated engine; engine requests table metadata from the Data Catalog
2. **Check permissions** — Data Catalog checks user's LF permissions; if authorized, returns visible metadata
3. **Get credentials** — if the table is LF-managed, the engine requests temporary credentials from Lake Formation
4. **Get data** — engine uses temporary credentials to fetch filtered data (column/row/cell level) from S3 and returns results

If the table is NOT LF-managed, the engine calls S3 directly and IAM/bucket policies are evaluated instead.
