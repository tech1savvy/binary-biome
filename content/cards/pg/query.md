---
id: query
aliases: []
tags: []
noteId: 1777823480520
---

Which option to use to run a query on a pool?

---

```javascript
async function getUserById(id) {
  const res = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  console.log("user:", res.rows[0]);
}
```

---

- The `pool.query` method can take a parameterized query and an array of values.
- `$1` refers to the first parameter in the array.
- The `res` object contains the query result, with `res.rows` being an array of the returned rows.
- `res.rows[0]` accesses the first row of the result.
