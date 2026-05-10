---
id: chaining
aliases: []
noteId: 1777823466347
---

How do you chain multiple filters in Django templates?

---

Use multiple pipe symbols to chain filters: `{{ variable|filter1|filter2 }}`. Filters are applied from left to right.

---

```html
<!-- Chaining filters -->
<p>{{ text|lower|truncatewords:5 }}</p>
<p>{{ name|title|truncatechars:20 }}</p>
<p>{{ date|date:"Y-m-d"|upper }}</p>
```

Example flow:
- **`{{ text|lower|truncatewords:5 }}`**
  1. First applies `|lower` to make text lowercase
  2. Then applies `|truncatewords:5` to limit to 5 words

The order matters - the first filter's output becomes the input for the second filter. 