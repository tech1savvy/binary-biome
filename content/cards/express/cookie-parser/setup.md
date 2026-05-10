---
id: setup
backward:
  - "[define](define.md)"
forward:
  - "[functionality](functionality.md)"
noteId: 1777823468247
---

How do you install and use `cookie-parser`?

---

1.  **Install the package:**
    ```bash
    npm install cookie-parser
    ```

2.  **Mount it as middleware:**
    ```javascript
    const cookieParser = require('cookie-parser');
    app.use(cookieParser());
    ```

---

The middleware should be used before any route that needs to access the `req.cookies` object.
