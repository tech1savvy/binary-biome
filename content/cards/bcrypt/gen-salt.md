---
id: gen-salt
forward:
  - "[hash](hash.md)"
noteId: 1777823456696
---

How do you generate a salt for password hashing using `bcrypt`?

---

```javascript
const salt = await bcrypt.genSalt(10);
```

- `bcrypt.genSalt(10)` generates a random salt with a specified cost factor.
- The cost factor (or work factor), here `10`, determines the computational effort for hashing.

---

- A higher cost factor enhances security by making the hash slower to compute, but it also increases the time required for password verification.
- The number of hashing rounds is 2 to the power of the cost factor (e.g., 2^10 = 1024 iterations).
