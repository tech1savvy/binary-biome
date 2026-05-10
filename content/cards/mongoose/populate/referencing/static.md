---
id: static
noteId: 1777823479847
---

How to link a document to a specific model and populate it (e.g., `Post.author -> User`)?

---

- Use a static reference: `ref` to a single model.
- Syntax: `{ type: Schema.Types.ObjectId, ref: 'ModelName' }` (model name must match).
- Populate with `.populate('<field>')` to resolve the referenced doc.

---

```js
const postSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' }
});
// author always references 'User'
```

- Use when the target model never varies (else use `refPath`).
