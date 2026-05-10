---
id: compare
aliases: []
tags: []
noteId: 1777823456671
---

How do you securely compare a password with a hash using bcrypt?

---

Use the asynchronous `bcrypt.compare()` function, which returns a promise.

**1. Syntax:**

```javascript
bcrypt.compare(password, hash);
```

- **`password`**: The plaintext password to test.
- **`hash`**: The stored hash to compare against.

**2. Usage (`async/await`):**
The function returns a `Promise<boolean>` which is `true` if the password matches and `false` if not.

```javascript
await bcrypt.compare(candidatePassword, hashedPassword);
```

---

### How `compare()` Works
- The salt and cost factor are encoded directly into the hash string itself (e.g., `"$2b$10$<salt><hash>"`).
- `bcrypt.compare()` automatically parses the stored hash to extract the salt and cost.
- It then re-hashes the candidate password using the extracted information and securely compares the results.
- This is why you don't need to pass the salt separately.

**Synchronous Alternative:**

- You can use `bcrypt.compareSync(password, hash)`.
- It performs the same comparison but blocks execution until finished and directly returns `true` or `false`. Avoid using it in the main thread of a web server.
