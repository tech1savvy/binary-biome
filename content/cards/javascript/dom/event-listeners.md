---
id: event-listeners
noteId: 1777823473247
---

What are event listeners in JavaScript and how are they used?

---

Event listeners in JavaScript are functions that wait for and respond to specific events on HTML elements or other DOM objects. The primary method to use them is `addEventListener()`.

**Syntax:**
```js
element.addEventListener(event, function, useCapture);
```

- `event`: The type of event (e.g., "click", "keydown").
- `function`: The callback function to execute when the event occurs.
- `useCapture` (optional): A boolean that specifies whether the event should be captured or bubbled.

**Example:**
```js
document.getElementById("myBtn").addEventListener("click", function() {
  alert("Button clicked!");
});
```

---

- Multiple event listeners can be added to a single element.
- Event listeners can be removed with `removeEventListener()`.
- The callback function receives an `event` object containing details about the event.
