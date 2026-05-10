---
id: allow-multiple-origins-with-same-config
backward:
  - "[allow-any-origin](allow-any-origin.md)"
forward:
  - "[allow-multiple-origins-with-different-config](allow-multiple-origins-with-different-config.md)"
noteId: 1777823468371
---

How can you configure the `cors` middleware to allow requests from multiple specific origins?

---

You can provide an array of allowed origins to the `origin` option.

```javascript
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000", "https://your-frontend.com"],
    credentials: true,
  }),
);
```

---

This method is suitable when you have a fixed set of allowed origins.
