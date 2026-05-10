---
id: memo-components
aliases: []
tags: []
noteId: 1777823481722
---

What is `React.memo` and how does it work with functional components?

---

- `React.memo` is a Higher-Order Component (HOC) that provides a performance optimization for functional components, similar to what `PureComponent` does for class components. Though it only works for props unlike `PureComponent`, which works for both props and state.

- It "memoizes" the component, _preventing_ it from _re-rendering if_ its _props_ have _not changed_.
- It performs a shallow comparison of props by default.

---

### Example:

- This component will only re-render when its `count` prop changes.

```jsx
import React, { useState, memo } from "react";

// Memoized child component
const MemoizedCounter = memo(({ count }) => {
  console.log("MemoizedCounter rendered");
  return <p>Count: {count}</p>;
});

// Parent component that controls the props
function CounterParent() {
  const [count, setCount] = useState(0);
  const [unrelatedState, setUnrelatedState] = useState(0);

  console.log("CounterParent rendered");

  return (
    <div>
      {/* This will cause MemoizedCounter to re-render */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      {/* This will NOT cause MemoizedCounter to re-render */}
      <button onClick={() => setCount(count)}>Pass Same Count</button>

      {/* This will re-render the parent, but NOT MemoizedCounter */}
      <button onClick={() => setUnrelatedState(unrelatedState + 1)}>
        Re-render Parent
      </button>

      <MemoizedCounter count={count} />
      <p>Parent's unrelated state: {unrelatedState}</p>
    </div>
  );
}
```

In this example:

- `MemoizedCounter` only re-renders when the `count` prop changes.
- Clicking "Re-render Parent" will not cause `MemoizedCounter` to re-render because its `count` prop remains the same, demonstrating the effect of `React.memo`.
