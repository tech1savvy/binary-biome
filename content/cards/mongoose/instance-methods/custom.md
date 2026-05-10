---
id: custom
aliases: []
tags: []
forward:
  - "[isModified](isModified.md)"
noteId: 1777823479596
---

What are instance methods in Mongoose and how are they defined?

---

- In Mongoose, instance methods are functions defined on a schema that become available on individual document instances.
- They are defined by assigning functions to the `schema.methods` object, allowing you to encapsulate logic directly within the document model.

```javascript
// Example
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};
```

---

- Instance methods (`.methods`) are called on individual documents (e.g., `user.comparePassword(...)`).
- Static methods (`.statics`) are called on the Model itself (e.g., `User.findByEmail(...)`).

