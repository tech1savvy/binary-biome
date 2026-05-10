---
id: semicolons
aliases: []
tags: []
noteId: 1777823474021
---

When should semicolons be used in JavaScript statements?

---

- Semicolons can often be omitted when a line break exists, due to Automatic Semicolon Insertion (ASI).
- However, ASI does not always insert semicolons correctly.
- It is recommended to explicitly use semicolons between statements to prevent potential errors that are hard to debug.

---

**Example of ASI failure:**

```javascript
alert("Hello")[(1, 2)].forEach(alert); // Without semicolon, JavaScript interprets this as alert("Hello")[1, 2]...
```

This results in an error because `alert("Hello")` returns `undefined`, which cannot be indexed like an array. Explicitly adding a semicolon after `alert("Hello")` resolves the issue.
