---
id: allow-multiple-origins-with-different-config
aliases: []
tags: []
backward:
  - "[allow-multiple-origins-with-same-config](allow-multiple-origins-with-same-config.md)"
noteId: 1777823468347
---

How can you configure the `cors` middleware to allow requests from multiple specific origins with different settings for each?

---

To handle different CORS settings for different origins, you need to use a function for the `cors` middleware configuration. This function receives the request `origin` and a `callback`. Inside this function, you can check which origin is making the request and then pass a different configuration object to the `callback`.

```javascript
const cors = require("cors");

const corsOptionsDelegate = function (req, next) {
  const origin = req.header("Origin");
  let corsOptions;
  if (origin === "http://localhost:3000") {
    // For localhost, allow all methods
    corsOptions = { origin: true, methods: ["GET", "POST", "PUT", "DELETE"] };
  } else if (origin === "https://your-frontend.com") {
    // For the production frontend, block DELETE
    corsOptions = { origin: true, methods: ["GET", "POST", "PUT"] };
  } else {
    // For other origins, disallow CORS
    corsOptions = { origin: false };
  }
  next(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));
```

---

This dynamic approach provides granular control over your CORS policy, allowing you to enforce different rules for different clients.
