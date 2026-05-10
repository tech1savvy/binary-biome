---
id: submit
aliases: []
tags: []
forward:
  - "[select](select.md)"
  - "[file-upload](file-upload.md)"
noteId: 1777823470997
---

How do you create a submit button for HTML forms?

---

Create a submit button using:

```html
<button type="submit">Send</button>
```

Alternative method:

```html
<input type="submit" value="Send" />
```

Key points:

- Both `<button type="submit">` and `<input type="submit">` work
- Button text should clearly communicate the action
- Button triggers form submission when clicked
- Only one submit button is typically needed per form
