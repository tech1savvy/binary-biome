---
noteId: 1778320496941
forward:
  - "[[convert-to-columnar-glue]]"
---

# How does row-based (CSV) vs columnar storage affect queries?

---

- **Row-based (CSV)**: data stored by row — querying one column scans all rows (high I/O)
- **Columnar (Parquet/ORC)**: data stored by column — querying one column reads only that column
- Columnar = fewer I/O ops, faster queries, lower cost
