---
id: default-values
noteId: 1777823480072
---

How do you add a default value to a property in a Mongoose schema?

---

- Use the `default` option in the schema definition for the property
- It can be a literal value or a function that returns a value

```js
const userSchema = new mongoose.Schema({
  role: { type: String, default: 'user' },      // default is 'user'
  createdAt: { type: Date, default: Date.now }  // default is current date/time
});
```

---

- The default is applied only if the value is `undefined` when creating/saving the document
- Pass functions like `Date.now` without parentheses so they execute at document creation, and not when the shema is defined