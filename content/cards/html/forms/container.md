---
id: container
aliases: []
tags: []
forward:
  - "[text-input](text-input.md)"
noteId: 1777823470821
---

How do you create a basic HTML form container and what are its essential attributes?

---

The basic HTML form container is created using the `<form>` tag with two essential attributes:

```html
<form action="submit_url" method="post">
  <!-- form elements go here -->
</form>
```

- `action`: Specifies where to send the submitted data
- `method`: Defines how to send the data (typically "get" or "post")
