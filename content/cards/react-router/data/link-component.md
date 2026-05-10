---
id: link-component
aliases: []
tags: []
backward:
  - "[usage](usage.md)"
noteId: 1777823480996
---

How to use the `Link` component for client-side navigation in `react-router-dom`?

---

- Import the `Link` component from `react-router-dom`.
- Use the `to` prop to specify the target path for navigation.
- The component renders into an accessible `<a>` tag with an `href` attribute.
- Clicking a `Link` updates the URL and renders the corresponding component defined in your routes without reloading the page.

```jsx
import { Link } from "react-router";

function NavBar() {
  return (
    <nav>
      <Link to="/home">Home</Link> |<Link to="/dashboard">Dashboard</Link> |
      <Link to="/about">About</Link>
    </nav>
  );
}
```

---

- Prevents full page reloads unlike a regular `<a>` tag.
