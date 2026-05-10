---
id: javascript-set
aliases: []
tags: []
noteId: 1777823472971
---

What is a `Set` in JavaScript and when would you use it?

---

A `Set` is a built-in JavaScript object that lets you store **unique values** of any type, whether primitive values or object references.

**Key Characteristics:**

- **Unique Values:** A `Set` can only contain unique values. Duplicate values are ignored.
- **No Order:** Elements in a `Set` do not have a specific order.
- **Iterable:** `Set` objects are iterable, meaning you can loop over their elements (e.g., with `for...of` or `forEach`).

---

**Common Methods & Use Cases:**

- **`new Set()`**: Creates a new Set. Can optionally take an iterable (like an Array) to initialize it.
  ```javascript
  const mySet = new Set();
  const uniqueNumbers = new Set([1, 2, 2, 3, 4]); // Set(4) {1, 2, 3, 4}
  ```
- **`add(value)`**: Adds a new element to the Set. Returns the Set object.
  ```javascript
  mySet.add(1); // mySet is now Set(1) {1}
  mySet.add(1); // mySet is still Set(1) {1} (duplicate ignored)
  ```
- **`has(value)`**: Returns `true` if the value is in the Set, `false` otherwise.
  ```javascript
  mySet.has(1); // true
  mySet.has(2); // false
  ```
- **`delete(value)`**: Removes an element from the Set. Returns `true` if the element was present and removed, `false` otherwise.
  ```javascript
  mySet.delete(1); // true, mySet is now Set(0) {}
  ```
- **`clear()`**: Removes all elements from the Set.
- **`size`**: A property that returns the number of unique elements in the Set.

**When to use it:**

- To quickly remove duplicate items from an array.
- To efficiently check for the presence of an item in a collection.
- To manage a list of unique tags, IDs, or other identifiers.
