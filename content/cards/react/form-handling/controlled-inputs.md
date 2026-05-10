---
id: controlled-inputs
aliases: []
tags: []
noteId: 1777823482197
---

What are controlled inputs in React?

---

- Input elements whose values are controlled by the React component's state.
- The React state is the single source of truth for the input's value.
- `value` prop is set by a state variable.
- `onChange` handlers update the state when the user types.

```jsx
const [value, setValue] = useState("");
const handleChange = (event) => setValue(event.target.value);
return <input value={value} onChange={handleChange} />;
```

---

- **Benefits**: Better control over form data, validation, dynamic input behavior, easy access to input values.
- **Contrast with Uncontrolled Inputs**: Uncontrolled inputs manage their own internal state; React accesses value via refs.
- **Use Case**: Essential for complex form handling, real-time validation, and predictable input state management.

## Example:

```jsx
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <form>
        <label>Username:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </>
  );
};
export default Login;
```

