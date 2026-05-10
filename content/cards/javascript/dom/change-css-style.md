---
id: change-css-style
noteId: 1777823473222
---

How to change the CSS of an HTML element using JavaScript?

---

To change the CSS of an HTML element, you can directly manipulate the element's `style` properties.

```js
document.getElementById("elementId").style.propertyName = "value";
```

---

- CSS property names in JavaScript are written in camelCase rather than hyphenated form (e.g., `backgroundColor` instead of `background-color`).
- This method adds inline styles directly to the element, which override external CSS unless otherwise specified.
