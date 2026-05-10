---
id: closures
aliases: []
tags: []
backward:
  - "[Lexical Scoping](lexical-scoping.md)"
forward:
  - "[Nested Function Trade-offs](nested-function-tradeoffs.md)"
noteId: 1777823474497
---

What is a closure in JavaScript?

---

A closure is the **combination of a function and the lexical environment** within which that function was declared.

This means a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created.

---

The inner function "closes over" the variables of its parent, remembering them even after the parent function has finished executing.

**Classic Example: A Counter**

```javascript
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = makeCounter(); // 'counter' is now a closure.

counter(); // Logs: 1
counter(); // Logs: 2
// The inner function remembers the 'count' variable.
```

- Another use-case include [currying](cards/javascript/scope/currying.md)
