---
id: remove-event-listener
backward:
  - "[Event Bubbling](phases/event-bubbling.md)"
noteId: 1777823473521
---

How do you remove an event listener in JavaScript?

---

Use the `EventTarget.removeEventListener()` method to remove an event handler that was previously attached with `addEventListener()`.

---

**Important Considerations:**

-   You must pass the **exact same function reference** that was used when calling `addEventListener()`. Anonymous functions (defined inline) cannot be removed this way.
-   The `event` type and `options` (especially `capture`) must also match the original `addEventListener()` call.

**Example:**
```javascript
function handleClick() {
  console.log('Button clicked!');
}

const button = document.getElementById('myButton');

// Attach the listener
button.addEventListener('click', handleClick);

// Later, remove the listener
button.removeEventListener('click', handleClick);
```
