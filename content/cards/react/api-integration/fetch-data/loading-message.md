---
id: conditional-rendering
aliases:
  - conditional-loading-messsage
tags: []
noteId: 1777823481497
---

```jsx
import React, { useState, useEffect } from "react";

function TodoList() {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading && <p>Loading todos...</p>}

      {!isLoading && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title} - {todo.completed ? "Completed" : "Pending"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
```
