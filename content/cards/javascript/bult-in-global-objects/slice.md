---
id: slice
noteId: 1777823472996
---

How to extract a portion of an array or string?

---

Use the `.slice()` method, which returns a shallow copy of a portion of an array or string into a new array or string object selected from `start` to `end` (end not included). The original array/string will not be modified.

### Syntax

```javascript
slice()
slice(start)
slice(start, end)
```

- `start`: Zero-based index at which to start extraction.
- `end`: Zero-based index before which to end extraction. `slice` extracts up to but not including `end`.

---

### Array Example

```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]
```

### String Example

```javascript
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"
```
