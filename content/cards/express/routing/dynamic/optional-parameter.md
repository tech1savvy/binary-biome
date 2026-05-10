---
id: single-parameter
noteId: 1777823468547
---

How to create a dynamic route with a single parameter in Express?

---

- Use colon prefix: `:parameterName` in the route path.
- Access captured value via `req.params.parameterName`.
- Route matches any value in that position.

---

```js
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});
```

- Route `/users/:userId` matches `/users/123`, `/users/abc`, etc.
- Parameter acts as placeholder that captures value from URL.