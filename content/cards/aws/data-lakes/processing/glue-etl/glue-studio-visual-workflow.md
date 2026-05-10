###### What does a typical Glue Studio visual ETL flow look like?

---

1. **Source node** — S3 bucket (CSV, JSON, etc.) with inline data preview
2. **Transform nodes** — e.g. Detect PII → Redact → Change Schema (drag-and-drop, no code)
3. **Target node** — S3 bucket with format selection (JSON, Parquet, etc.) and optional Data Catalog table update

Each visual change auto-generates the equivalent Spark/Python script visible in the Script tab.
