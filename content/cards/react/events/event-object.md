---
id: event-object
aliases: []
tags: []
backward:
  - "[events-in-react](cards/react/events/events.md)"
noteId: 1777823482096
---

What is a event object parameter and how it is passed React event handlers?

---

- The `e` parameter stands for the **event object**, which is automatically passed to an event handler function by React.
- It contains properties and methods with details about the user interaction, such as `e.target` (the element that triggered the event).

---

- **With a function reference**, the event object is passed automatically:

  ```jsx
  const handleClick = (e) => console.log(e.type); // 'click'
  <button onClick={handleClick}>Click Me</button>;
  ```

- **With an inline arrow function**, you must pass it explicitly if needed:

  ```jsx
  <button onClick={(e) => console.log(e.target)}>Click Me</button>
  ```

- This allows you to call methods like `e.preventDefault()` or access data like `e.target.value`.
