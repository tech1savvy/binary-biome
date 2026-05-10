---
id: event-target-phase
backward:
  - "[Event Capturing](event-capturing.md)"
forward:
  - "[Event Bubbling](event-bubbling.md)"
noteId: 1777823473497
---

What is the target phase of event propagation?

---

The **target phase** is the second phase of event propagation. In this phase, the event **reaches the actual element that triggered it**.

---

-   Listeners attached directly to the target element are triggered during this phase.
-   This is where the event is considered to have "originated."
