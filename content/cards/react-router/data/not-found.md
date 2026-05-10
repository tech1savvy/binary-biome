---
id: page-not-found
backward:
  - "[usage](usage.md)"
forward:
  - "[link-component](link-component.md)"
noteId: 1777823481047
---

How to add a custom 'Not Found' page in React Router?

---

Define a route with `path: "*"` as the last route in your router configuration:

```jsx
const router = createBrowserRouter([
  // ... other routes
  { path: "*", element: <PageNotFound /> },
]);
```

Create a `PageNotFound` component:

```jsx
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/">
        <button>Go Back Home</button>
      </Link>
    </>
  );
};

export default PageNotFound;
```

---

- The `path: "*"` acts as a wildcard, matching any URL that hasn't been matched by previous routes.
- It should always be the last route in your configuration to ensure other specific routes are matched first.
- The `PageNotFound` component typically provides a user-friendly message and a link to navigate back to the home page.