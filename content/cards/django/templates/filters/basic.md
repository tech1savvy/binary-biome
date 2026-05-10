---
id: basic
aliases: []
noteId: 1777823466322
---

How do you use basic template filters in Django?

---

Use the pipe symbol `|` to apply filters to template variables: `{{ variable|filter }}`.

---

```html
<!-- Basic filters -->
<p>Name: {{ username|title }}</p>
<p>Length: {{ message|length }} characters</p>
<p>Uppercase: {{ text|upper }}</p>
<p>Lowercase: {{ text|lower }}</p>
```

The pipe symbol `|` tells Django to apply the filter to the variable on the left. 