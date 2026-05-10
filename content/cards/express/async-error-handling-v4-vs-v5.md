---
id: async-error-handling-v4-vs-v5
aliases:
  - Express Async Error Handling (v4 vs v5)
tags: []
noteId: 1777823467947
---

# Express Async Error Handling (v4 vs v5)

---

## How does async error handling differ between Express 4 and Express 5, and what does the "Safety Wrapper" look like?

### Express 4 (Manual Handling Required)

- Express 4 does not "await" your route handlers. If an error occurs inside an async function, the promise rejects, but Express never hears about it.
- The request will stay open until it times out.

#### The "Safety Wrapper" Pattern:

```js
// You must manually catch the rejection and pass it to next()
app.post("/api/chirps", (req, res, next) => {
  Promise.resolve(handlerChirpsCreate(req, res)).catch(next); // This ensures the error reaches your error middleware
});
```

### Express 5 (Native Async Support)

- Express 5 natively handles promises returned from route handlers. If the function is async and it throws or rejects, Express 5 automatically calls next(err) for you.

#### The Clean Pattern:

```js
// No wrapper needed! Express 5 handles the promise rejection automatically.
app.post("/api/chirps", handlerChirpsCreate);
```

---

## Why use the wrapper in Express 5?

Even though Express 5 supports async, developers sometimes keep the wrapper (or use a library like express-async-errors) to:

1. Ensure Compatibility: If the codebase might be run on Express 4.
2. Explicit Intent: Making it very clear that errors are being piped to the global middlewareErrorHandler.
3. Complex Middleware: If using multiple middleware functions in a chain where some are sync and some are async.

## Global Error Middleware (Context):

In both versions, these patterns rely on having a global handler defined at the end of your middleware stack:

```js
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
```
