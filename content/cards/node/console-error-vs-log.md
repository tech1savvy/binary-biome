---
id: console-error-vs-log
aliases: []
tags: []
noteId: 1777823480322
---

In a Node.js environment, when should you use `console.error()` instead of `console.log()`?

---

Always use `console.error()` for logging errors and exceptions.

Key Differences in Node.js:

- **Stream:** `console.error()` writes to the standard error (`stderr`) stream, while `console.log()` writes to standard output (`stdout`).
- **Stack Trace:** When passed an `Error` object, `console.error()` includes the full stack trace.
- **Formatting:** In many terminals (and browsers), `console.error()` messages are displayed in red.

---

Using separate `stdout` and `stderr` streams is critical in production for redirecting output. This allows you to capture normal logs and error logs in different files, making debugging much easier.

**Production Example:**

```sh
# Sends stdout to app.log and stderr to errors.log
node app.js > app.log 2> errors.log
```

**Error Object Example:**

```javascript
const err = new Error("Something went wrong");

// Logs only the error message to stdout
console.log(err);

// Logs the error message and stack trace to stderr
console.error(err);
```
