---
id: update
noteId: 1777823479997
---

How do you update documents in Mongoose?

---

**Method 1: `findByIdAndUpdate()`**
```js
const doc = await Model.findByIdAndUpdate(id, { field: newValue });
```

**Method 2: `findOneAndUpdate()`**
```js
const doc = await Model.findOneAndUpdate(filter, { field: newValue });
```

**Method 3: `updateOne()` / `updateMany()`**
```js
await Model.updateOne(filter, { field: newValue });
await Model.updateMany(filter, { field: newValue });
```

---

- `findByIdAndUpdate()` updates by document ID
- `findOneAndUpdate()` updates first matching document
- `updateOne()` updates first match, `updateMany()` updates all matches
- **filter**: MongoDB query object to specify which document(s) to update (e.g., `{ name: 'John' }`, `{ age: { $gte: 18 } }`)
- All methods return the updated document(s) by default