---
id: events-in-react
aliases: []
tags: []
noteId: 1777823482121
---

What are events in React and how are they handled?

---

- Events in React are user actions like clicking, typing, or hovering.
- React uses a synthetic event system for cross-browser consistency.
- Event handlers are written in `camelCase` (e.g., `onClick`).
- Handlers are passed as functions within curly braces in JSX (e.g., `<button onClick={handleClick}>`).

---

### Passing a function reference to a event

```jsx
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  };

  return <button onClick={shoot}>Take the shot!</button>;
}
```

### Passing a arrow function to a event

```jsx
function Football() {
  return (
    <button
      onClick={() => {
        alert("Great Shot!");
      }}
    >
      Take the shot!
    </button>
  );
}
```

- Common React events include `onClick`, `onChange`, `onSubmit`, `onKeyDown`, `onKeyUp`, and `onMouseEnter`.
