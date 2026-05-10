---
id: functional-components
noteId: 1777823481696
---

What are functional components in React?

---

- JavaScript functions that accept `props` as an argument and return JSX elements to define the UI.
- They use **Hooks** (e.g., `useState`, `useEffect`) to manage state and handle side effects.
- They are the preferred and modern standard for writing React components.

---

- Functional components are generally more concise and easier to understand than class components because they do not require the `this` keyword or class syntax.

### Example

```jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```
