---
id: event-delegation
aliases: []
tags:
  - null
backward:
  - "[Event Bubbling](phases/event-bubbling.md)"
noteId: 1777823473346
---

What is event delegation in JavaScript?

---

Event delegation is a technique that handles events on multiple child elements by attaching a single event listener to a common parent or ancestor element, relying on event bubbling for propagation.

---

### How It Works

Events in the DOM propagate through three phases: capturing, target, and bubbling. Event delegation leverages the **bubbling phase**:

- An event triggered on a child element bubbles up to its parent.
- The single listener on the parent catches the event.
- The parent listener then inspects `event.target` (the actual element that originated the event) to identify which child element was clicked and applies specific logic.

### Key Benefits

- **Performance**: Fewer listeners reduce memory usage, especially for large or dynamic lists.
- **Dynamic elements**: Automatically handles items added or removed after initial setup without needing to re-bind listeners.
- **Simplified code**: Centralizes event logic, making code cleaner and easier to maintain.

### Example: Button List

For dynamic buttons inside a `<div>`, delegate clicks to the parent:

```html
<div id="menu">
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

```javascript
document.getElementById("menu").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log(event.target.innerText);
  }
});
```

Adding more buttons later requires no code changes, as events bubble to the delegated listener.
