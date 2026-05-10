---
noteId: 1777823468123
---

# How to parse form data in express?

---

```js
app.use(express.urlencoded({ extend: true }));
```

- This middleware parses incoming requests with URL-encoded payloads (such as form submissions) and also populates `req.body`.

---

## Why add pass `{extend:true}`?

- It determines how URL-encoded form data is parsed:

- `extended: true` → Use `qs` library, supports nested objects and arrays in URL-encoded data.
  - ex: `{ user: { name: 'John', age: 30 } }`
  - `qs` is available as a third-party npm package.
- `extended: false` → Use `querystring` library, supports simple key-value pairs only.
  - `querystring` is available as a builtin nodejs module.
