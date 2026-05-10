---
id: traditional-jsx-routes
aliases: []
tags: []
noteId: 1777823481147
---

How to define routes using the traditional JSX approach in React Router v6?

---

The traditional way uses `<BrowserRouter>`, `<Routes>`, and `<Route>` components directly inside your React component tree:

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

- `<BrowserRouter>` wraps the app to enable HTML5 history-based routing.
- `<Routes>` contains one or more `<Route>` elements.
- Each `<Route>` has a `path` and an `element` that defines the component to render when the path matches.

---

- This declarative JSX way is simple and suits many apps, especially small to medium-sized ones.
- **Summary of differences vs. `createBrowserRouter` approach:**
  - Traditional defines routes inline as JSX components.
  - `createBrowserRouter` defines routes as a config object/array and uses `<RouterProvider>` to provide the router externally.
