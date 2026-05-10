---
noteId: 1778320497691
---

# How do Athena and AWS Glue Data Catalog relate?

---

- Athena and Glue share the same metadata catalog
- Tables created in Athena appear in the Glue Data Catalog
- Tables are metadata only — deleting a table does not delete underlying data in S3 or other sources
