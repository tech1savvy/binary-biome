---
id: favicon-implementation
aliases: []
tags:
  - html
  - favicon
  - implementation
forward:
  - "[file-types](file-types.md)"
noteId: 1777823470721
---

How do you add a favicon to an HTML page?

---

Basic implementation (single favicon using .ico files):

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

Comprehensive implementation (multiple sizes/devices):

```html
<!-- Standard favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<!-- PNG favicons -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
```

---

Best practices:

- Place the links in the `<head>` section
- Use absolute paths starting with "/"
- Provide multiple sizes for better device support
- Include a fallback ICO file for older browsers
