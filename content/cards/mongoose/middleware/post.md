---
id: post-middleware
backward:
  - "[pre-middleware](pre.md)"
forward:
  - "[middleware-definition](define.md)"
noteId: 1777823479721
---

What is `post` middleware in Mongoose, when is it used, and how is it defined?

---

- **What**: Functions that run **after** a specified operation has completed on the database.
- **When**: For logging, notifications, or post-processing after save, update, or delete actions.
- **How**: `schema.post('operation', function(doc, next) { ... })`
