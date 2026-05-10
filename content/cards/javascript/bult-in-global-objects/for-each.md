---
id: for-each
noteId: 1777823472897
---

How to execute a function for each element of an array, set, or map?

---

Use the `.forEach()` method, which executes a provided function once for each element.

### Syntax for Array and Set

```javascript
forEach((element, index, array) => { /* … */ })
```

- `element`: The current element being processed.
- `index`: The index of the current element.
- `array`: The array `forEach()` was called upon.

### Syntax for Map

```javascript
forEach((value, key, map) => { /* … */ })
```

- `value`: The value of the current element.
- `key`: The key of the current element.
- `map`: The map `forEach()` was called upon.

---

### Array Example

```javascript
const items = ['item1', 'item2', 'item3'];
const copyItems = [];

items.forEach((item) => {
  copyItems.push(item);
});
```

### Set Example

```javascript
const set = new Set(["oranges", "apples", "bananas"]);

set.forEach((value, valueAgain, set) => {
  console.log(value);
});
```

### Map Example

```javascript
const map = new Map([
  ['name', 'John'],
  ['age', 30]
]);

map.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});
```
