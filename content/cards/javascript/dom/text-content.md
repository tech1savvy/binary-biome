---
id: text-content
noteId: 1777823473622
---

How to get or set the text content of an element?

---

Use the `textContent` property.

```js
// Get text content
let text = element.textContent;

// Set text content
element.textContent = "New text content";
```

---

- Returns only the text content, without any HTML tags.
- It's a safer alternative to `innerHTML` for inserting plain text.
