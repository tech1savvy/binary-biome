---
id: textarea
aliases: []
tags: []
forward:
  - "[text-input](text-input.md)"
  - "[radio](radio.md)"
noteId: 1777823471047
---

How do you create a multi-line text input (textarea) in HTML?

---

Create a textarea using:

```html
<label for="bio">Bio:</label> <textarea id="bio" name="bio"></textarea>
```

Key differences from regular input:

- Uses `<textarea>` element instead of `<input>`
- Supports multiple lines of text
- Can be resized by default in most browsers
- Closing tag required (unlike self-closing `<input>`)
