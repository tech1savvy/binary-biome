---
id: all
noteId: 1777823479922
---

How to query all documents in a Mongoose collection?

---

- Use `Model.find({})` or `Model.find()` with no filters to get all documents.
- Wrap in `async/await` with `try/catch` for proper error handling.
- Returns an array of all documents in the collection.

---

```js
async function getAllDocuments() {
  try {
    const documents = await Model.find({});
    return documents; // Array of all documents
  } catch (err) {
    console.error(err);
  }
}
```

- `await` ensures the function waits for the query to complete before proceeding.