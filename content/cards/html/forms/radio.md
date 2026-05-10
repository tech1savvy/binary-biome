---
id: radio
aliases: []
tags: []
forward:
  - "[textarea](textarea.md)"
  - "[checkbox](checkbox.md)"
noteId: 1777823470946
---

How do you create a group of radio buttons in HTML with proper semantic structure?

---

Create radio buttons using fieldset and legend:

```html
<fieldset>
  <legend>Gender</legend>
  <input type="radio" id="male" name="gender" value="male" />
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female" />
  <label for="female">Female</label>
</fieldset>
```

Key points:

- Use `<fieldset>` to group related options
- Add `<legend>` to describe the group
- All radio inputs in a group must share the same `name` attribute
- Each option needs a unique `id` and matching `label`
- Only one option can be selected at a time
