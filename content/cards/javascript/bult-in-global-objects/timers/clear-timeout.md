---
id: clear-timeout
aliases: []
tags: []
backward:
  - "[set-timeout](javascript/bult-in-global-objects/timers/set-timeout.md)"
noteId: 1777823473097
---

How to stop a `setTimeout` timer?

---

Use the `clearTimeout` function, which cancels a timeout previously established by calling `setTimeout()`.

### Syntax

```javascript
clearTimeout(timerId);
```

- `timerId`: The identifier of the timeout you want to cancel. This ID is returned by `setTimeout`.

---

### Example

```javascript
let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)
```
