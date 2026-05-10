---
id: checkbox
aliases: []
tags: []
forward:
  - "[radio](radio.md)"
  - "[select](select.md)"
noteId: 1777823470797
---

How do you create checkboxes in HTML forms?

---

Create checkboxes using:

```html
<input type="checkbox" id="subscribe" name="subscribe" />
<label for="subscribe">Subscribe to newsletter</label>
```

Key points:

- Use `<input type="checkbox">` for multiple independent selections
- Each checkbox needs unique `id` and `name` attributes
- Link each checkbox to its label using matching `for` and `id`
- Users can select any number of checkboxes (unlike radio buttons)
- Checkboxes are independent of each other
