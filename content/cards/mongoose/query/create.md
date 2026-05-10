---
id: create
noteId: 1777823479946
---

How do you create a document in Mongoose using a model?

---

**Method 1: `create()` method**
```js
const doc = await Model.create({ field1: value1, field2: value2 });
```

**Method 2: `new` + `save()`**
```js
const doc = new Model({ field1: value1, field2: value2 });
await doc.save();
```

---

- Both approaches create and save the document to MongoDB
- `create()` is a convenient shortcut that internally uses `new` + `save()`
- `create()` supports creating multiple documents by passing an array of objects
- Example: `const newUser = await User.create({ name: 'Alice', age: 30 });`