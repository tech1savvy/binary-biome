---
id: nested-routes
backward:
  - "[usage](usage.md)"
noteId: 1777823481022
---

How to define nested routes in React Router?

---

Use the `children` property within a route object to define nested routes:

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    children: [
      {
        path: "about",
        element: <AboutComponent />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
```

---

- Nested routes allow you to render components within the layout of a parent route.
- The `children` array defines routes that are relative to their parent's `path`.
- The parent component (`RootComponent` in this example) should render an `<Outlet />` component from `react-router-dom` where the child routes' elements will be rendered.