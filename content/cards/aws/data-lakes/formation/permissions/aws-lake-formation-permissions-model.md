---
noteId: 1778320495690
forward:
  - "[[aws-lake-formation-fine-grained-acl]]"
---

# What is the Lake Formation permissions model?

---

- Augments IAM with an RDBMS-like grant/revoke mechanism for fine-grained access control. Enables granular controls at column, row, and cell-level across Athena, QuickSight, Redshift Spectrum, EMR, and Glue.
- Permissions are enforced via a simple grant or revoke mechanism, much like a relational database.
