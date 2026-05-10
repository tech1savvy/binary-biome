---
id: add-event-listener
aliases: []
tags: []
forward:
  - "[Event Object](event-object.md)"
noteId: 1777823473321
---

How do you attach an event listener in JavaScript?

---

Use the `EventTarget.addEventListener()` method. This is the recommended and most powerful way to register event handlers.

---

**Syntax:**

```javascript
element.addEventListener("event", handlerFunction, [options]);
```

- `event`: A string representing the event type (e.g., `'click'`, `'mouseover'`, `'keydown'`).
- `handlerFunction`: The function to be executed when the event occurs.
- `options` (optional): An object that can specify `capture: true` (to use the capturing phase), `once: true` (to run only once), or `passive: true` (for performance with scroll events).

**Benefits:**

- Allows multiple event listeners for the same event type on a single element.
- Listeners can be removed using `removeEventListener()`.
