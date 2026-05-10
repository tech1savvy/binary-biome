---
id: delete-request
aliases: []
tags: []
backward:
  - "[fetch](fetch.md)"
noteId: 1777823482221
---

-

- Use the `fetch` API with `method: 'DELETE'` targeting the resource's endpoint.
- Handle the response and perform any necessary actions, such as redirecting the user.

```jsx
const handleDelete = (id) => {
  fetch("http://localhost:8000/resources/" + id, {
    method: "DELETE",
  }).then(() => {
    // Perform actions after successful deletion, e.g., redirect
    history.push("/");
  });
};
```

---

- The `id` of the resource is typically passed as an argument to the handler.
- The `fetch` call's `method` option must be set to `'DELETE'`.
- After deletion, it's common to redirect the user using a routing library's history object (e.g., `history.push('/')`).
