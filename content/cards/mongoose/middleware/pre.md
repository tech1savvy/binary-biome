---
id: pre-middleware
forward:
  - "[post-middleware](post.md)"
noteId: 1777823479746
---

What is `pre` middleware in Mongoose, when is it used, and how is it defined?

---

- **What**: Functions that run **before** a specified operation (e.g., `save`, `update`).
- **When**: To validate, modify, or perform actions _before_ saving, updating, or removing documents.
- **How**: `schema.pre('operation', function(next) { ... })`
