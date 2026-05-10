---
id: submit-event
aliases: []
tags: []
backward:
  - "[controlled-inputs](controlled-inputs.md)"
noteId: 1777823482272
---

How do you handle form submissions in React?

---

- Use the `onSubmit` prop on the `<form>` element, passing a handler function.
- Inside the handler, call `event.preventDefault()` to stop the default browser behavior (page reload).
- Access form data from the component's state (for controlled inputs).

```jsx
const handleSubmit = (e) => {
  e.preventDefault(); // prevent default behaviour of html form submision and page refresh
  const user = { username, password };

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then(() => console.log("user created"));
};

return (
  <form onSubmit={handleSubmit}>
    {/* ... input fields ... */}
    <input type="submit" value="Login" />
  </form>
);
```

---

- `e.preventDefault()` is crucial to prevent the browser from performing a full page reload, which is the default behavior for form submissions.
- Form data (like `username` and `password`) is typically managed by React state using controlled components.
- The `fetch` API or other HTTP clients can then be used to send the collected data to a backend server.

