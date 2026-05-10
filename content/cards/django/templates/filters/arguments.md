---
id: arguments
aliases: []
noteId: 1777823466297
---

How do you use template filters with arguments?

---

Use a colon `:` to pass arguments to filters: `{{ variable|filter:argument }}`.

---

```html
<!-- Filters with arguments -->
<p>Date: {{ date|date:"F j, Y" }}</p>
<p>Truncate: {{ long_text|truncatewords:10 }}</p>
<p>Default: {{ value|default:"No data" }}</p>
```

Examples:
- **`|date:"F j, Y"`** - Format date as "January 15, 2025"
- **`|truncatewords:10`** - Limit text to 10 words
- **`|default:"No data"`** - Show "No data" if variable is empty 