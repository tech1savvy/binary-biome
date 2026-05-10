---
id: use-ref
aliases: []
tags: []
noteId: 1777823482521
---

What is the `useRef` React Hook and when should you use it?

---

`useRef` is a React Hook that returns a **mutable ref object**. This object's `.current` property is initialized to the passed argument (`initialValue`).

The ref object persists for the entire lifetime of the component, and **updating its `.current` property does NOT trigger a re-render** of the component.

---

**Syntax:**
```javascript
const myRef = useRef(initialValue);
```

**Clarification on `useRef(null)` and `ref` prop:**
When you write `const inputRef = useRef(null);`, `inputRef` is an object like `{ current: null }`. When you then attach `ref={inputRef}` to a JSX element (e.g., `<input />`), React will automatically set `inputRef.current` to the actual DOM element (`<input>`) after it has been rendered to the screen. So, `null` is just the initial placeholder.

**When to use it:**

### 1. Accessing DOM Elements Directly:

- To interact with a DOM node (e.g., focusing an input, playing media, measuring dimensions).

```jsx
import { useref } from "react";

function myform() {
  const inputref = useref(null);

  function handleclick() {
    inputref.current.focus(); // directly access and focus the input
  }

  return (
    <>
      <input ref={inputref} /> {/* attach the ref to the dom element */}
      <button onclick={handleclick}>focus input</button>
    </>
  );
}
```

### 2. Storing Mutable Values that Don't Trigger Re-renders:

- To hold any value that needs to persist across renders but whose changes should not cause the component to re-render (e.g., a timer ID, a previous state value, a mutable object instance).

```jsx
import { useRef } from "react";

function Counter() {
  const countRef = useRef(0); // Stores a mutable count

  function handleClick() {
    countRef.current = countRef.current + 1;
    alert("You clicked " + countRef.current + " times!");
    // Alert shows updated count, but component doesn't re-render
  }

  return (
    <button onClick={handleClick}>
      Click me! (Count: {countRef.current}){" "}
      {/* This will not update on click */}
    </button>
  );
}
```
