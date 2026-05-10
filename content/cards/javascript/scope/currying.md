---
id: currying
backward:
  - "[Closures](closures.md)"
noteId: 1777823474522
---

What is currying in JavaScript?

---

Currying is a functional programming technique that transforms a function with multiple arguments into a sequence of nested functions, each taking a single argument.

Instead of `f(a, b, c)`, a curried function is called like `f(a)(b)(c)`. This process relies on **closures** to remember the arguments from the outer functions.

---

The main benefit is **partial application**, where you can "pre-load" a function with arguments to create specialized, reusable functions.

**Standard Function:**
```javascript
function multiply(a, b) {
  return a * b;
}
```

**Curried Version:**
```javascript
const curriedMultiply = a => b => a * b;

// Partially apply the first argument
const multiplyByTen = curriedMultiply(10);

// Reuse the new function
console.log(multiplyByTen(5)); // 50
```
