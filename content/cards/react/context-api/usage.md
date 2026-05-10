---
id: usage
aliases: []
tags: []
backward:
  - "[define](context-api/define.md)"
noteId: 1777823481922
---

How do you use the React Context API to share data?

---

- Create context with `React.createContext()`.
- Use `Provider` to wrap components and supply data.
- Access data with `Consumer` or `useContext` hook.

---

- Commonly used for sharing global state like themes, user authentication, or language settings.

## Example:

```jsx
import React, { createContext, useContext } from "react";

// 1. Create a Context
const ThemeContext = createContext("light");

// 2. Create a Provider component
function ThemeProvider({ children }) {
  const theme = "dark"; // Example theme
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

// 3. Consume the Context
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      My Button
    </button>
  );
}

// Usage in App
function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}

export default App;
```
