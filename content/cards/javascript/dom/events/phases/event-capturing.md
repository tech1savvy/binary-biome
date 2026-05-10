---
id: event-capturing
backward:
  - "[Event Object](../event-object.md)"
forward:
  - "[Event Target Phase](event-target.md)"
noteId: 1777823473471
---

What is the capturing phase of event propagation?

---

The **capturing phase** is the first phase of event propagation. In this phase, the event travels from the **window down to the target element's parent**, traversing through all ancestor elements.

---

-   Listeners registered with `addEventListener(type, handler, { capture: true })` are triggered during this phase.
-   It allows you to intercept an event before it reaches the actual target element.
-   This phase is rarely used compared to the bubbling phase.
