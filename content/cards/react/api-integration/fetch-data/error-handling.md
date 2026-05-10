---
id: fetching-api-data-error-handling
forward:
  - "[fetching-api-data](fetch.md)"
noteId: 1777823481446
---

How to handle errors when fetching API data in React using `fetch` and `res.ok`?

---

- Check `response.ok` to determine if the HTTP response status code indicates success (200-299).
- If `response.ok` is `false`, throw an `Error` to propagate the issue.
- Use a `.catch()` block to handle network errors or errors thrown during the 'response.ok' check.

```jsx
import React, { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null); // State to store error message

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => { // Handles network errors or errors thrown by the 'response.ok' check
        setError(err.message); // Set the error message
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? "Completed" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

---

- The `error` state is used to store and display any fetching errors.
- The component conditionally renders an error message if `error` is not `null`.
