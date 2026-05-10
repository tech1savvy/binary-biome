---
id: clear-interval
aliases: []
tags: []
backward:
  - "[set-interval](javascript/bult-in-global-objects/timers/set-interval.md)"
noteId: 1777823473072
---

How to stop a `setInterval` timer?

---

Use the `clearInterval` function, which cancels a timed, repeating action which was previously established by a call to `setInterval`.

### Syntax

```javascript
clearInterval(timerId);
```

- `timerId`: The identifier of the repeating action you want to cancel. This ID is returned by `setInterval`.

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
