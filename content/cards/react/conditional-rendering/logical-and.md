---
id: conditional-rendering-logical-and
forward:
  - "[conditional-rendering](conditional-rendering.md)"
noteId: 1777823481797
---

Which operator to use for conditional rendering in React when you only want to render something if a condition is true, without an "else" case?

---

Use the logical AND operator (`&&`).

- The expression `condition && <JSX />` evaluates to `<JSX />` if `condition` is true.
- If `condition` is false, the whole expression evaluates to `false`, which React ignores (renders nothing).

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      <h1>Hello!</h1>
      {isLoggedIn && <p>Welcome back to your dashboard.</p>}
    </div>
  );
}

function App() {
  return (
    <div>
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} />
    </div>
  );
}
```

---

**Important notes:**
- Be cautious of values that may be falsy but still render output unintentionally (like `0`, which renders as `0`). To avoid this, make sure conditions are strictly boolean or explicitly checked.
- If you need "else" rendering, use the ternary operator `condition ? <TrueComponent /> : <FalseComponent />`.
