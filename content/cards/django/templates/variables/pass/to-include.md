---
id: pass-context-variables-to-include
aliases: []
tags: []
noteId: 1777823466797
---

How do you pass context variables to an included template in Django?

---

Use the `with` keyword in the include tag to pass variables:

```django
{% include 'template_name.html' with var1=value1 var2=value2 %}
```

Example:

```html
{% include 'header.html' with active_page='home' user=request.user %}
```

---

Key points:

- Variables passed this way are only available within the included template
- Multiple variables can be passed using space-separated key=value pairs
- This allows for dynamic behavior in included templates based on the context
- The parent template's context is not automatically available in the included template unless explicitly passed
