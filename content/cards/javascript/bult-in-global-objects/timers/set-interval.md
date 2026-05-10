---
id: set-interval
aliases: []
tags: []
forward:
  - "[clear-interval](javascript/bult-in-global-objects/timers/clear-interval.md)"
noteId: 1777823473122
---

How to execute a function repeatedly at a given interval?

---

Use the `setInterval` function, which repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

### Syntax

```javascript
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...);
```

- `func|code`: Function or string of code to execute.
- `delay`: The interval in milliseconds (1000ms = 1 second). The default is 0.
- `arg1`, `arg2`, ...: Arguments to pass to the function.

---

### Example

```javascript
// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert("tick"), 2000);

// after 5 seconds stop
setTimeout(() => {
  clearInterval(timerId);
  alert("stop");
}, 5000);
```
