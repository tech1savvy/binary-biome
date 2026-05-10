---
id: select
aliases: []
tags: []
forward:
  - "[checkbox](checkbox.md)"
  - "[submit](submit.md)"
noteId: 1777823470972
---

How do you create a dropdown selection list in HTML?

---

Create a dropdown using select and option elements:

```html
<label for="food">Favorite Food:</label>
<select id="food" name="food">
  <option value="pizza">Pizza</option>
  <option value="sushi">Sushi</option>
</select>
```

Key points:

- Use `<select>` element for dropdown lists
- Each option uses `<option>` tag
- Options have `value` attribute for form submission
- Display text can differ from the value
- Provides a compact way to choose one from many options
