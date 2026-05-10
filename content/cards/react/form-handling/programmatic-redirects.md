---
id: programmatic-redirects
aliases: []
tags: []
backward:
  - "[submit-event](submit-event.md)"
noteId: 1777823482247
---

How do you perform programmatic redirects after a form submission in React?

---

- After a successful form submission (e.g., `fetch` request completes), use a history object (from a routing library like React Router) to navigate.
- `history.push('/')` navigates to a specific path.
- `history.go(-1)` navigates back one step in the browser history.
- `history.go(1)` navigates forward one step in the browser history.

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  const blog = { title, body, author };

  fetch("http://localhost:8000/blogs/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  }).then(() => {
    // history.go(-1); // Navigates back one step
    history.push("/"); // Navigates to the home page
  });
};
```

---

- This typically requires a routing library (e.g., React Router) to provide the `history` object.
- `history.push(path)` is commonly used to redirect to a new URL, adding a new entry to the history stack.
- `history.go(-1)` is useful for going back to the previous page, similar to clicking the browser's back button.
- `history.go(1)` is useful for going forward to the next page, similar to clicking the browser's forward button.

