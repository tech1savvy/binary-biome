---
id: use-memo
aliases: []
tags: []
forward:
  - "[useMemo vs useCallback](use-memo-vs-use-callback.md)"
noteId: 1777823482471
---

What is the useMemo React Hook and when should you use it?

---

- useMemo is a React Hook that lets you cache (memoize) the result of a calculation between re-renders.

You should use it for performance optimization to prevent unnecessary recalculations of values that don't need to change, especially when the calculation is expensive or has noticeable side effects.

---

**Syntax:**

```javascript
const cachedValue = useMemo(calculateValue, dependencies);
```

- `calculateValue`: A function that performs the calculation and returns the value to be cached. It should be pure and take no arguments.
- `dependencies`: An array of values. If these values haven't changed since the last render, useMemo will return the previously cached `cachedValue` without re-running `calculateValue`.

**Example: Caching an expensive calculation**

If you have an expensive function (e.g., `generateWordList`) that you only want to re-run when specific inputs change, `useMemo` can prevent unnecessary recalculations on every re-render.

```jsx
import { useMemo } from "react";

function MyComponent({ wordLimit, dictionary }) {
  // `generateWordList` will only be called again if `wordLimit` or `dictionary` changes.
  const selectedWords = useMemo(() => {
    return generateWordList(wordLimit, dictionary);
  }, [wordLimit, dictionary]);

  return (
    <div>
      {/* Render your word list */}
      {selectedWords.map((word, index) => (
        <span key={index}>{word} </span>
      ))}
    </div>
  );
}
```

**Important:** Do not use `useMemo` for side effects (like data fetching or DOM manipulation). For side effects, use `useEffect`.
