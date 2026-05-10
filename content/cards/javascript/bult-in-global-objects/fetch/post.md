---
id: fetch-post
aliases: []
tags: []
noteId: 1777823472872
---

How to perform a `POST` request using Fetch API in JavaScript?

---

To perform a `POST` request with the Fetch API, provide an options object as the second argument to `fetch()`. This object must specify the `method` as `"POST"`, define `headers` (e.g., `"Content-Type": "application/json"`), and include the data payload in the `body` (typically `JSON.stringify()` for JSON data).

### Basic Syntax

```javascript
fetch("/api/endpoint", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ key: "value" }),
});
```

### Required Options

- `method`: Set to `"POST"` (default is GET).
- `headers`: An object for metadata, typically `{ "Content-Type": "application/json" }`.
- `body`: The data payload, which can be a String, Blob, FormData, or URLSearchParams. For JSON, use `JSON.stringify()`.

### Common Patterns

- Parse responses using `.then(response => response.json())`.
- Include `credentials: "include"` if you need to send cookies with the request.

### Error Handling

- Chain `.catch()` for network failures.
- Check `response.ok` (a boolean indicating if the HTTP status code is in the 200-299 range) before parsing the response.
- For cleaner asynchronous code, wrap `fetch` calls in `try-catch` blocks when using `async/await`.
