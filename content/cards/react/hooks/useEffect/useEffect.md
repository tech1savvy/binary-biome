---
id: useEffect
aliases: []
tags: []
forward:
  - "[useEffect-cleanup](useEffect-cleanup.md)"
noteId: 1777823482622
---

What is the `useEffect` hook, and how do you control when it runs?

---

The `useEffect` hook lets you synchronize a component with an external system by running side effects after a component renders.

You control when the effect re-runs by providing a **dependency array** as the second argument.

**Syntax:** `useEffect(setup, dependencies?)`

- **Runs only once** (on mount) when given an empty array `[]`:

  ```jsx
  useEffect(() => {
    console.log("Component mounted");
  }, []);
  ```

- **Runs on every render** when the dependency array is omitted:

  ```jsx
  useEffect(() => {
    console.log("Component re-rendered");
  });
  ```

- **Runs when specific values change** when given a dependency array `[dep1, dep2]`:
  ```jsx
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(`'value' has changed to: ${value}`);
  - [!] }, [value]);
  ```

---

- The `setup` function can optionally return a `cleanup` function.
- Omitting the dependency array can easily cause infinite loops if the effect's logic updates state, as it will trigger a re-render and cause the effect to run again.
