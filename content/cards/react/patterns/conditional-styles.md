---
id: conditional-styles-with-state
aliases: []
tags: []
forward: []
noteId: 1777823482821
---

React components can dynamically apply CSS classes based on their internal state, offering a powerful way to manage conditional styling. This example demonstrates how to use the `useState` hook to toggle a CSS class, which in turn changes the visual appearance of a component.

## Example: Toggling a CSS Class

In this example, a `Key` component changes its style when clicked, by adding or removing a `pressed` CSS class.

```jsx
import React, { useState } from "react";

const Key = () => {
  const [isPressed, setIsPressed] = useState(false);

  // Dynamically build the class name with template literal
  const computedClassName = `key${isPressed ? " pressed" : ""}`;

  return (
    <div className={computedClassName} onClick={() => setIsPressed(!isPressed)}>
      Click me to toggle style
    </div>
  );
};

export default Key;
```

## Example with CSS Modules

```jsx
import { useState } from "react";
import styles from "./Key.module.css"; // Import the CSS module

const Key = () => {
  const [isPressed, setIsPressed] = useState(false);

  // Build the class name using the styles object
  const computedClassName = `${styles.key} ${isPressed ? styles.pressed : ""}`;

  return (
    <div className={computedClassName} onClick={() => setIsPressed(!isPressed)}>
      Click me for modular style toggle
    </div>
  );
};

export default Key;
```

```css key.module.css
.key {
}
.pressed {
}
```

