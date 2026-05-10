---
id: hosting
aliases: []
tags: []
noteId: 1777823474047
---

Hoisting is a behavior in javascript where **declarations** (not initializations) of variables, functions, and classes are moved to the **top of their scope** during the compilation phase, before code execution.

```js
console.log(x); // undefined
var x = 5; // Declaration hoisted, =5 stays put
```

---

# Examples:

## Function

### Function Declaration Hoisting

```js
setUser(user); // ✅ Works - entire function is hoisted

function setUser(user) {
  // Declaration moved to top
  console.log(user);
}
```

**Full function** (name + body) is hoisted, making it callable from anywhere in the scope.[3][4]

### Arrow/Const Function Expression (Not Hoisted)

```js
getUser(token); // ❌ Error: Cannot access before initialization

const getUser = (token) => {
  // Only variable name hoisted as undefined
  console.log(token);
};
```
