---
id: set-timeout
aliases: []
tags: []
forward:
  - "[clear-timeout](javascript/bult-in-global-objects/timers/clear-timeout.md)"
noteId: 1777823473147
---

How to execute a function once after a given delay?

---

Use the `setTimeout` function, which sets a timer which executes a function or specified piece of code once the timer expires.

### Syntax

```javascript
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...);
```

- `func|code`: Function or string of code to execute.
- `delay`: The delay in milliseconds (1000ms = 1 second). The default is 0.
- `arg1`, `arg2`, ...: Arguments to pass to the function.

---

### Example

```javascript
function sayHi(phrase, who) {
  alert(phrase + ", " + who);
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
```
