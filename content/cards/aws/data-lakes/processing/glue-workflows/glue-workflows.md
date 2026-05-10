---
noteId: 1778320497590
---

###### What is an AWS Glue workflow?

---

Chains multiple Glue jobs (and crawlers) together into a visual pipeline. Steps can run sequentially or in parallel.

Example: S3 trigger → deduplicate job + format-fix job (parallel) → catalog results → done.
