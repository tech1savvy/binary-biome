---
noteId: 1778320496915
---

###### How does Parquet optimize queries on sorted columns?

---

Parquet stores the first and last record of each data block. If data is sorted (e.g. names A-Z) and you query a specific value (e.g. `WHERE name = 'Alex'`), Parquet can skip blocks that don't fall in the matching range — only scanning blocks A-F instead of the entire table.
