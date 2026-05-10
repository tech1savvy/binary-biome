---
noteId: 1778320496941
---

###### How does row-based (CSV) vs columnar storage affect queries?

---

**Row-based (CSV)**: data stored sequentially by row. Querying one column still scans every row — millions of lines of I/O.

**Columnar (Parquet/ORC)**: data stored by column. Querying one column reads only that column's data. Drastically fewer I/O operations, faster queries, lower cost.
