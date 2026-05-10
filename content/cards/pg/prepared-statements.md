---
id: prepared-statements
aliases: []
tags: []
noteId: 1777823480496
---

What are prepared statements in node-postgres?

---

- Prepared statements cache the query execution plan on the PostgreSQL server per connection.
- This means the query is parsed and planned only once per connection.
- Use prepared statements for very complex queries with many joins and advanced operations that are executed frequently.
- Avoid premature optimization; most queries won't benefit significantly.

---

```javascript
const query = {
  name: "fetch-user", // giving the query a name, registers it as a prepared-statement
  text: "SELECT * FROM user WHERE id = $1",
  values: [1],
};
```
