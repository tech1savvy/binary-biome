---
noteId: 1778392186171
forward:
  - "[[glue-studio-pii-detection-transforms]]"
---

# What does a typical Glue Studio visual ETL flow look like?

---

- **Source node** — S3 bucket (CSV, JSON, etc.) with inline data preview
- **Transform nodes** — drag-and-drop operations (Detect PII → Redact → Change Schema)
- **Target node** — S3 output with format selection plus optional Data Catalog table update
- Every visual change auto-generates the equivalent Spark/Python script
