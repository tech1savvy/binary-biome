---
id: useState
aliases: []
tags: []
forward:
  - "[useEffect](useEffect.md)"
noteId: 1777823482722
---

What is the `useState` hook in React?

---

- `useState` is a hook that allows you to add state to functional components.
- It returns an array with two elements: the current state value and a function to update it.
- When the update function is called, React re-renders the component with the new state.

---

### Example

```jsx
import { useState } from "react";

function Counter() {
  // The array [count, setCount] is destructured from the useState() call.
  const [count, setCount] = useState(0); // 0 is the initial state

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- The state update function is typically named with a `set` prefix (e.g., `setCount`).

