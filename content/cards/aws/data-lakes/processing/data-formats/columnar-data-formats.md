---
noteId: 1778320496864
---

###### What are columnar data formats and why use them?

---

Columnar formats store data by column instead of by row (like transposing a spreadsheet). This reduces disk I/O when querying specific columns, making queries faster and cheaper in pay-per-query models.

Apache Parquet and ORC are common columnar formats supported by AWS Glue.
