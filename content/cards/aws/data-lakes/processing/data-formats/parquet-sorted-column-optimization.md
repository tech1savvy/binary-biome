---
noteId: 1778320496915
forward:
  - "[[partitioning]]"
---

# How does Parquet optimize queries on sorted columns?

---

- Parquet stores min/max values per data block (first and last record)
- On sorted data, queries skip blocks outside the matching range
- Example: names sorted A-Z, `WHERE name = 'Alex'` scans only A-F blocks, not the full table
