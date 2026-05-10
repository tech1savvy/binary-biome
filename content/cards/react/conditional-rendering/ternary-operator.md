---
id: conditional-rendering-ternary-operator
aliases: []
tags: []
backward:
  - "[conditional-rendering-logical-and](logical-and.md)"
noteId: 1777823481822
---

How to conditionally render different components or elements based on a condition in React, including an "else" case?

---

Use the ternary operator (`condition ? <TrueComponent /> : <FalseComponent />`).

- The expression `condition ? <TrueComponent /> : <FalseComponent />` renders `<TrueComponent />` if `condition` is true.
- If `condition` is false, it renders `<FalseComponent />`.

```jsx
function TodoItem({ task, isCompleted }) {
  return (
    <li>
      {task} {isCompleted ? "✅" : "❌"}
    </li>
  );
}

function TodoList() {
  return (
    <ul>
      <TodoItem task="Learn React" isCompleted={true} />
      <TodoItem task="Build a project" isCompleted={false} />
    </ul>
  );
}
```

---

**Important notes:**

- The ternary operator is ideal when you need to render one of two different things based on a condition.
- Keep the expressions concise for readability. For more complex conditional rendering, consider using `if/else` statements outside of JSX or separate components.
