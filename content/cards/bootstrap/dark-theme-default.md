---
id: dark-theme-default
aliases: []
tags: []
forward:
  - "[toggle-theme](cards/bootstrap/toggle-theme.md)"
noteId: 1777823457346
---

How do you set Bootstrap's dark theme as the default theme?

---

1. Add `data-bs-theme="dark"` to the `<html>` or `<body>` tag:

```html
<!DOCTYPE html>
<html data-bs-theme="dark">
  <!-- or -->
  <body data-bs-theme="dark"></body>
</html>
```

---

Key points:

- Can also be applied to specific container tags instead of whole page
- Components will use dark variants of their styles
- System colors and custom properties are automatically adjusted
