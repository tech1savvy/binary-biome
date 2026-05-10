---
id: data-mode-usage
aliases: []
tags: []
noteId: 1777823481072
---

How do you set up and render a router in React Router's **Data Mode**?

---

It's a two-step process, typically in your `main.jsx` file:

1.  **Create the router:** Use `createBrowserRouter` to define your routes as an array of objects.
2.  **Render the provider:** Pass the created router to the `<RouterProvider />` component to make it available to your app.

---

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

// 1. Define the routes
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/about", element: <About /> },
]);

// 2. Render the RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
```
