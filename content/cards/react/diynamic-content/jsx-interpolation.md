---
id: displaying-variables-in-jsx
aliases: []
tags: []
noteId: 1777823482022
---

What syntax is used to render a variable's value inside JSX in a React component?

---

Wrap the variable or JavaScript expression in curly braces `{}`.

```jsx
function Greeting() {
  const name = "Alice";
  return <h1>Hello, {name}!</h1>; // Renders "Hello, Alice!"
}
```

---

- This feature is called **JSX Expression Interpolation**.
- Any valid JavaScript expression can be placed inside the curly braces, including function calls and conditional logic.
- It is the standard way to render dynamic content in React.

```jsx
// Example with a conditional (ternary) operator
function UserStatus({ isLoggedIn }) {
  return <div>{isLoggedIn ? "Welcome back!" : "Please log in."}</div>;
}
```
