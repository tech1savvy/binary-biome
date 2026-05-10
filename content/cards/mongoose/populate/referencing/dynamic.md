---
id: dynamic
noteId: 1777823479822
---

How to link a document to different models and populate it (e.g., `Comment.parent -> Post|Photo`)?

---

- Use `refPath`: points to the field holding the model name.
- Syntax: `{ type: Schema.Types.ObjectId, refPath: 'parentModel' }` + store `'Post'|'Photo'` in `parentModel`.
- Populate: `.populate('parent')` resolves to the appropriate model per document.

---

```js
const commentSchema = new Schema({
  body: String,
  parent: { 
    type: Schema.Types.ObjectId, 
    refPath: 'parentModel' },
  parentModel: { 
    type: String, 
    enum: ['Post', 'Photo'], 
    required: true }
});

// Examples
// { body: 'nice!', parent: postId,  parentModel: 'Post' }
// { body: 'wow!',  parent: photoId, parentModel: 'Photo' }
```