---
id: query-selector-all
noteId: 1777823473597
---

How to select all elements matching a CSS selector?

---

Use the `document.querySelectorAll()` method.

```js
let elements = document.querySelectorAll(".myClass");
```

---

- Returns a static `NodeList` containing all elements that match the specified selector.
- If no matches are found, an empty `NodeList` is returned.
