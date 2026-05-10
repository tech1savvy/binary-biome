---
id: inline-styles
aliases: []
tags: []
backward:
  - "[css-stylesheet](css-stylesheet.md)"
forward:
  - "[css-modules](css-modules.md)"
noteId: 1777823481372
---

How can you apply inline styles to a React component?

---

- The `style` attribute in React expects a **JavaScript object**, not a CSS string.
- The outer curly braces `{}` are used to embed a JavaScript expression within JSX.
- The inner curly braces `{}` define the actual JavaScript object for the styles.
- CSS properties must be in `camelCase` (e.g., `backgroundColor` instead of `background-color`).
- Values for the properties are typically strings or numbers.

---

### Example

```jsx
<div style={{ backgroundColor: "blue", fontSize: 14 }}>Hello</div>
```

This approach allows for dynamic styling by using JavaScript variables, expressions, and component state to define styles.
