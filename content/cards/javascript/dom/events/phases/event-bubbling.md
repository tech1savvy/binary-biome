---
id: event-bubbling
aliases: []
tags: []
backward:
  - "[Event Target Phase](event-target.md)"
forward:
  - "[Event Delegation](../../event-delegation.md)"
noteId: 1777823473446
---

What is the bubbling phase of event propagation?

---

The **bubbling phase** is the third and final phase of event propagation. After reaching the target element, the event travels **from the target element back up to the window**, traversing through all ancestor elements.

---

- Most event listeners are registered for this phase by default.
- This allows for event delegation, where a single listener on a parent element can handle events from many child elements.
- You can stop bubbling using `event.stopPropagation()`.
