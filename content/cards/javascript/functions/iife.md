---
id: iife
forward:
  - "[Async IIFE](async-iife.md)"
backward:
  - "[Async Function](async-function.md)"
noteId: 1777823473896
---

What is an IIFE (Immediately Invoked Function Expression)?

---

- A JavaScript function that is executed as soon as it is defined.
- It is created by wrapping a function expression in parentheses `()` and then immediately calling it with a second set of parentheses.

---

The primary use case is to create a private scope for variables, preventing them from polluting the global scope.

```javascript
(function() {
  var message = "This is a private variable.";
  console.log(message); // "This is a private variable."
})();

// console.log(message); // Uncaught ReferenceError: message is not defined
```
