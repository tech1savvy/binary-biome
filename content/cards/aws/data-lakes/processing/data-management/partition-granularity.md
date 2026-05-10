---
noteId: 1778320497115
forward:
  - "[[compression]]"
---

# What is the coffee grinding analogy for partitioning and compaction?

---

- Like coffee grind size for different brews — partition granularity should match query patterns
- Too coarse: scan unnecessary data
- Too fine: too many tiny files, excessive S3 API calls
- Medium granularity is ideal
