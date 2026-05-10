---
noteId: 1777823474596
---

# What is the best practice for naming the request parameter in an Express route handler if it is unused?

- Use an underscore `_` as the parameter name to explicitly indicate the request object is intentionally unused, improving code clarity and avoiding linting warnings.

- Example:

```js
route.get("/path", (_, res) => {
  res.send("No request object used here");
});
```

- If the request object is needed, use `req` as the parameter name instead.
