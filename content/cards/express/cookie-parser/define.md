---
id: define
forward:
  - "[setup](setup.md)"
noteId: 1777823468197
---

What is the purpose of the `cookie-parser` middleware in Express?

---

- It is a middleware that parses the `Cookie` header on incoming requests.
- It populates the `req.cookies` object with key-value pairs of the parsed cookies.

---

- It is a separate NPM package and has not been bundled with Express since Express 4.x.
- Without it, `req.cookies` will be `undefined`.
