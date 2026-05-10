---
id: for-of-loop
noteId: 1777823474147
---

What is the `for...of` loop in JavaScript and when should you use it?

---

The `for...of` loop is a statement that creates a loop iterating over **iterable objects**, such as:
-   `Array`
-   `String`
-   `Map`
-   `Set`
-   `NodeList` (from the DOM)
-   `arguments` object

It directly iterates over the **values** of the iterable, making it a concise and readable way to access each element.

---

### Why use `for...of`?

-   **Simplicity:** Provides a cleaner syntax than a traditional `for` loop when you only need the values.
-   **Direct Access to Values:** You get the actual value of each element directly, without needing to access it via an index.
-   **Works with all Iterables:** Designed to work with any object that implements the iterable protocol.

### Example

```javascript
const fruits = ['apple', 'banana', 'cherry'];

// Iterating over an Array
for (const fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, cherry

// Iterating over a String
const greeting = 'hello';
for (const char of greeting) {
  console.log(char);
}
// Output: h, e, l, l, o
```

### `for...of` vs. `for...in`

-   **`for...of`**: Iterates over the **values** of iterable properties.
-   **`for...in`**: Iterates over the **keys (property names)** of an object. It's generally not recommended for arrays.
