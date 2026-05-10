---
id: functionality
backward:
  - "[setup](setup.md)"
forward:
  - "[allow-any-origin](allow-any-origin.md)"
  - "[allow-multiple-origins-with-same-config](allow-multiple-origins-with-same-config.md)"
noteId: 1777823468420
---

What are the most common configuration options for the `cors` middleware?

---

- `origin`: Configures the `Access-Control-Allow-Origin` header. Can be a string, boolean, array of strings, or a function for dynamic logic.
- `methods`: Configures the `Access-Control-Allow-Methods` header. Defaults to `GET,HEAD,PUT,PATCH,POST,DELETE`.
- `credentials`: Configures the `Access-Control-Allow-Credentials` header. Set to `true` to allow cookies to be sent with cross-origin requests.
- `allowedHeaders`: Configures the `Access-Control-Allow-Headers` header.

---

```javascript
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000", // Frontend origin
    credentials: true, // Allow cookies/auth headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  }),
);
```
