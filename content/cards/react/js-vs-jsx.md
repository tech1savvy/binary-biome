---
id: js-vs-jsx
aliases: []
tags: []
noteId: 1777823482747
---

What is the difference between using a `.js` and `.jsx` file extension for React components?

---

- The primary difference is **convention and tooling clarity**.
- The `.jsx` extension explicitly signals that a file contains JSX syntax (HTML-like tags in JavaScript).
- Functionally, there is no difference if the build setup (e.g., Babel) is configured to process JSX in both `.js` and `.jsx` files.

---

```jsx
// Example.jsx (using .jsx extension because it contains JSX syntax)
function Hello() {
  return <h1>Hello, JSX!</h1>;
}
export default Hello;
```

```js
// Example.js (using .js extension, also contains JSX but just a .js file)
function Hello() {
  return <h1>Hello, JS!</h1>;
}
export default Hello;
```

