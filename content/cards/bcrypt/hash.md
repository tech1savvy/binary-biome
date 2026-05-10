---
id: hash
backward:
  - "[gen-salt](gen-salt.md)"
noteId: 1777823456721
---

How do you hash a password with a salt using `bcrypt`?

---

```javascript
const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
```

- `bcrypt.hash()` combines the plaintext password with the generated salt.
- It applies the Blowfish cipher through multiple rounds defined by the salt's work factor to produce a secure, fixed-length hash.

---

- This two-step process (generating a unique salt for each password and then hashing) is crucial for security.
- Unique salts prevent rainbow table attacks, while the work factor defends against brute-force attempts.
