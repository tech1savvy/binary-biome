---
id: spreading
noteId: 1777823480172
---

Why does spreading a Mongoose document (`...doc`) in `res.json()` include internal fields like `$__`, `$isNew`, `_doc`?

---

**Problem**: Mongoose documents are complex objects with internal properties that get spread along with the data.

```js
// BAD: Includes Mongoose internals
res.json({ ...doc, message: "Updated" });
// Output: { name: "John", age: 30, $__: {...}, $isNew: false, _doc: {...}, message: "Updated" }
```

**Solution**: Convert to plain object first:
```js
// GOOD: Clean output
res.json({ ...doc.toObject(), message: "Updated" });
// Output: { name: "John", age: 30, message: "Updated" }
```

---

- `toObject()` converts Mongoose document to plain JS object
- Excludes Mongoose internals (`$__`, `$isNew`, `_doc`, etc.)
- Ensures clean JSON output in API responses
- Alternative: `toJSON()` method also works