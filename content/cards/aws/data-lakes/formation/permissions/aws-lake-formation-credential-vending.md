---
noteId: 1778320495539
forward:
  - "[[aws-lake-formation-security]]"
---

# What is credential vending in Lake Formation?

---

- The process where Lake Formation provides temporary credentials to analytical engines (Athena, EMR, Glue, Redshift Spectrum) so they can access S3 data.
- The engine never gets permanent credentials — only temporary access for the query duration.
