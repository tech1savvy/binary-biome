---
noteId: 1778320497016
forward:
  - "[[encryption-s3]]"
---

# What is data compaction?

---

- Merges many small files into fewer, larger files
- Too many tiny files → excessive S3 API calls, slow queries
- Glue ETL jobs can automate compaction
