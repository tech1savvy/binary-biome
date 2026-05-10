---
id: css-modules
backward:
  - "[inline-styles](inline-styles.md)"
noteId: 1777823481322
---

How can you use CSS Modules to style a React component?

---

- CSS Modules are CSS files where all class names and animation names are scoped locally by default.
- They help solve the problem of global scope in CSS, preventing naming conflicts and style overrides between components.

**How to use:**
1.  Create a file with a `.module.css` extension (e.g., `MyComponent.module.css`).
2.  Import the styles as an object from the CSS module file.
3.  Use the imported style object to apply class names, which are scoped locally to the component.

---

```css
/* MyComponent.module.css */
.title {
  color: green;
  font-weight: bold;
}
```

```jsx
// MyComponent.js
import styles from './MyComponent.module.css';

function MyComponent() {
  return <h1 className={styles.title}>Hello</h1>;
}
```
