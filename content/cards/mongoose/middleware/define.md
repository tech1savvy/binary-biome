---
id: middleware-definition
backward:
  - "[post-middleware](post.md)"
noteId: 1777823479697
---

What is middleware in Mongoose?

---

- Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions.
- Mongoose has 4 types of middleware: document middleware, model middleware, aggregate middleware, and query middleware.

---

- **Compilation**: Middleware **will not** run if it's defined after the model is compiled. Always define middleware before compiling the model.