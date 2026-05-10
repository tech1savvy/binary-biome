---
id: event-object
backward:
  - "[Add Event Listener](add-event-listener.md)"
forward:
  - "[Event Capturing](phases/event-capturing.md)"
noteId: 1777823473372
---

What is the Event object in JavaScript event handling?

---

When an event occurs, the browser creates an **`Event` object** (or an object based on the `Event` interface) and passes it as the first argument to the event handler function.

---

This object contains important information about the event that just happened, such as:

-   `event.type`: The type of event (e.g., "click", "keydown").
-   `event.target`: The DOM element that triggered the event.
-   `event.currentTarget`: The DOM element to which the event listener is attached.
-   `event.preventDefault()`: A method to stop the browser's default action for that event (e.g., prevent a form submission).
-   `event.stopPropagation()`: A method to stop the event from propagating further through the DOM (i.e., stop bubbling or capturing).
