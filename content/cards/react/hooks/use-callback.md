---
id: use-callback
aliases: []
tags: []
backward:
  - "[useMemo vs useCallback](use-memo-vs-use-callback.md)"
forward: []
noteId: 1777823482422
---

What is the useCallback React Hook and when should you use it?

---

- `useCallback` is a React Hook that lets you cache a **function definition** between re-renders.

You should use it for performance optimization, especially when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g., components wrapped in `React.memo`).

---

### Syntax

```javascript
const cachedFn = useCallback(fn, dependencies);
```

-   `fn`: The function definition that you want to cache. React will return this function during the initial render. On subsequent renders, React will return the same function instance if the `dependencies` have not changed.
-   `dependencies`: An array of all reactive values referenced inside the `fn` code. If any of these dependencies change, `useCallback` will return a new function instance.

### Example: Preventing unnecessary re-renders

When you pass a function as a prop to a memoized child component, `useCallback` ensures that the child component doesn't re-render if the function hasn't changed.

In this example, `MyButton` is a memoized component that will only re-render if its props change. The `handleClick` function is wrapped in `useCallback` so that it is not recreated on every render of `MyComponent`.

```jsx
import { useCallback, useState, memo } from "react";

// Child component wrapped in React.memo
const MyButton = memo(({ onClick, children }) => {
  console.log("MyButton re-rendered");
  return <button onClick={onClick}>{children}</button>;
});

function MyComponent() {
  const [count, setCount] = useState(0);

  // `handleClick` is memoized and will not be a new function on every render
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
    // You can use dependencies to access component state, e.g. [count]
  }, []); // Empty dependency array means the function is created only once

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <MyButton onClick={handleClick}>Click Me</MyButton>
    </div>
  );
}
```

Without `useCallback`, a new `handleClick` function would be created every time `MyComponent` re-renders (e.g., when the `count` state changes). This would cause `MyButton` to re-render every time, even though its `onClick` prop does the same thing.

### `useCallback` vs `useMemo`

`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.

-   Use `useCallback` when you want to memoize a **function**.
-   Use `useMemo` when you want to memoize a **value** that is the result of a function's execution.
