---
noteId: 1778320496664
forward:
  - "[[cost-comparison]]"
---

# What is schema-on-write vs schema-on-read?

---

- **Schema-on-write** (data warehouse): define the data format before loading. Upside: you don't have to figure it out later.
- **Schema-on-read** (data lake): store raw data, apply structure at analysis time. Upside: can ingest anything from any source.

---

- Data warehouse = plan first, store later.
- Data lake = store first, plan later.
