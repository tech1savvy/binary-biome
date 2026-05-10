---
id: allow-any-origin
backward:
  - "[functionality](functionality.md)"
forward:
  - "[allow-multiple-origins-with-same-config](allow-multiple-origins-with-same-config.md)"
noteId: 1777823468321
---

How can you configure the `cors` middleware to allow requests from any origin?

---

- **Without credentials (simplest):**
  ```javascript
  app.use(cors()); // equivalent to origin: '*'
  ```
  or explicitly:
  ```javascript
  app.use(
    cors({
      origin: "*",
    }),
  );
  ```
- **With credentials (`credentials: true`):**
  You cannot use `'*'` for `origin` due to specification limitations. Instead, you must dynamically reflect the request's origin and set `credentials: true`.

---

When `credentials: true` is used, the `Access-Control-Allow-Origin` header must be set to a specific origin, not `'*'`. The `cors` middleware can be configured to dynamically echo the request's `Origin` header if it's in a whitelist, for example.
