---
noteId: 1778320496864
forward:
  - "[[row-vs-columnar-storage]]"
---

# What are columnar data formats and why use them?

---

- Store data by column instead of by row (like transposing a spreadsheet)
- Reduces disk I/O when querying specific columns — faster, cheaper in pay-per-query models
- Common formats: Apache Parquet and ORC (both supported by AWS Glue)
