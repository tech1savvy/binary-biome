---
id: text-input
aliases: []
tags: []
forward:
  - "[container](container.md)"
  - "[textarea](textarea.md)"
noteId: 1777823471021
---

How do you create a text input field in HTML with proper labeling and autocomplete?

---

Create a text input field with label using:

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" autocomplete="on" />
```

Key points:

- Use `<input type="text">` for single-line input
- Link `label` with input using matching `for` and `id` attributes
- Enable `autocomplete` for better user experience
- Include `name` attribute for form submission
