---
id: pool
aliases: []
tags: []
forward:
  - "[query](query.md)"
noteId: 1777823480471
---

How do you create a database connection pool using the `pg` library?

---

You create a `Pool` instance and provide it with connection details.

```javascript
const { Pool } = require("pg");

const pool = new Pool({
  user: "your_username",
  host: "your_host",
  database: "your_database",
  password: "your_password",
  port: 5432,
});
```

---

- It is recommended to create a single `Pool` instance for your entire application and reuse it.
- The pool manages a set of client connections, handling acquisition and release automatically.
