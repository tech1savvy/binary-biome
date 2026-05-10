---
id: use-memo-vs-use-callback
backward:
  - "[useMemo](use-memo.md)"
forward:
  - "[useCallback](use-callback.md)"
noteId: 1777823482446
---

What is the key difference between `useMemo` and `useCallback` React Hooks?

---

-   **`useMemo`** memoizes a **value**. It runs a function and remembers its return value.
-   **`useCallback`** memoizes a **function**. It remembers the function definition itself.

---

Both hooks are used for performance optimization by preventing unnecessary re-renders.

-   You use `useMemo` when you want to avoid re-calculating an expensive value on every render if its dependencies haven't changed.
-   You use `useCallback` when you want to prevent a function from being re-created on every render, which is especially useful when passing callback functions as props to optimized child components (e.g., components wrapped in `React.memo`).
