---
id: array-from
aliases: []
tags: []
noteId: 1777823472672
---

What does `Array.from()` do in JavaScript?

---

The `Array.from()` static method creates a **new, shallow-copied `Array` instance** from an **array-like** or **iterable** object.

---

**Common Use Cases:**

- **Converting Array-like Objects to Arrays:**

  ```javascript
  // Example: Converting a NodeList (from DOM) to an Array
  const divs = document.querySelectorAll("div");
  const divArray = Array.from(divs);
  console.log(divArray instanceof Array); // true
  ```

- **Converting Iterables to Arrays:**

  ```javascript
  // From a String
  console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']

  // From a Set
  const mySet = new Set(["a", "b", "c"]);
  console.log(Array.from(mySet)); // ['a', 'b', 'c']
  ```

- **Using a Mapping Function:**
  ```javascript
  // Create an array from a range of numbers
  const numbers = Array.from({ length: 5 }, (value, index) => index + 1);
  console.log(numbers); // [1, 2, 3, 4, 5]
  ```
