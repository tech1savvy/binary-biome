---
id: previous-state
aliases: []
tags: []
backward:
  - "[useState](useState.md)"
noteId: 1777823482697
---

How do you update state in React based on the previous state?

---

You pass an **updater function** to the state setter. This is the recommended way to update state when the new state depends on the previous one.

- **What it is:** Instead of passing the new state value directly, you pass a function.
- **How it works:** React calls your updater function with the pending state as its only argument. The value your function returns is then set as the new state.

For example, to safely add a new item to an array in state:

```jsx
const [items, setItems] = useState([]);

function addItem(newItem) {
  // Pass a function to the setter
  setItems((prevItems) => {
    // `prevItems` is the guaranteed latest state
    return [...prevItems, newItem];
  });
}
```

---

This pattern is crucial because state updates in React can be asynchronous and batched for performance. If you compute the next state using the state variable directly, you might be referencing a stale value. The updater function ensures your update is always based on the most recent state in the queue.
