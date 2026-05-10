---
id: lexical-scoping
forward:
  - "[Closures](closures.md)"
noteId: 1777823474546
---

What is lexical scoping in JavaScript?

---

Lexical scoping means that a function's ability to access variables is determined by where that function is **physically located (i.e., written)** in the code.

An inner function can access variables from its outer (parent) function's scope.

---

```javascript
function outer() {
  const outerVariable = "I am from the outside!";

  function inner() {
    // Because of lexical scoping, 'inner' can see 'outerVariable'.
    console.log(outerVariable);
  }

  inner();
}

outer(); // Logs: "I am from the outside!"
```
