---
id: multiple-parameter
noteId: 1777823468522
---

How to create a dynamic route with multiple parameters in Express?

---

- Use multiple colon prefixes: `:param1/:param2` in the route path.
- Access captured values via `req.params.param1` and `req.params.param2`.
- Use destructuring for cleaner code: `const { param1, param2 } = req.params`.

---

```js
app.get('/products/:category/:productId', (req, res) => {
  const { category, productId } = req.params;
  res.send(`Category: ${category}, Product ID: ${productId}`);
});
```

- Route `/products/:category/:productId` matches `/products/electronics/123`.
- All parameters are required for the route to match.
