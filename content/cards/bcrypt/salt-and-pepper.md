---
id: salt-and-pepper
aliases: []
tags: []
noteId: 1777823456746
---

What is the difference between a salt and a pepper in password hashing?

---

- **Salt**:
  - A unique, random value combined with each password before hashing.
  - Stored in the database alongside the user's hashed password.
  - **Purpose**: Prevents rainbow table attacks by ensuring identical passwords have different hashes.
- **Pepper**:
  - A single, static secret key added to every password before hashing.
  - **Not** stored in the database; kept separate and secure.
  - **Purpose**: Protects against database breaches, as an attacker needs the pepper to crack stolen hashes.

---

A pepper is implemented at the application level before calling the hashing function.

```javascript
// 1. Combine password with a secret pepper
const pepper = process.env.PASSWORD_PEPPER;
const passwordWithPepper = password + pepper;

// 2. Hash the combined string with unique salt
const saltRounds = await bcrypt.genSalth(10);
const hash = await bcrypt.hash(passwordWithPepper, saltRounds);
```
