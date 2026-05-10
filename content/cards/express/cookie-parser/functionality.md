---
id: functionality
backward:
  - "[setup](setup.md)"
noteId: 1777823468222
---

Which cookie-related methods are built into Express versus provided by `cookie-parser`?

---

- **`cookie-parser` provides:**
  - `req.cookies`: Reading/parsing cookies from the request.

- **Express has built-in:**
  - `res.cookie()`: Setting a cookie on the response.
  - `res.clearCookie()`: Clearing a cookie on the response.

---

You only need `cookie-parser` to read incoming cookies. Setting outgoing cookies is a built-in feature of the Express response object.
