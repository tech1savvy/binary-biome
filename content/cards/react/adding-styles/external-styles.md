---
id: external-styles
aliases: []
tags: []
forward:
  - "[inline-styles](inline-styles.md)"
noteId: 1777823481347
---

How can you add styles to a React component using an external CSS stylesheet?

---

1.  Create a `.css` file (e.g., `MyComponent.css`).
2.  Import it into your component file: `import './MyComponent.css';`
3.  Use the `className` prop to assign styles.

---

```css
/* MyComponent.css */
title {
  color: blue;
  font-size: 24px;
}
```

```jsx
// MyComponent.js
import "./MyComponent.css";

function MyComponent() {
  return <h1 className="title">Hello</h1>;
}
```
