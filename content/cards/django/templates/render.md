---
id: render-template
aliases: []
tags: []
level: 1
forward:
  - "[template-context-variables](cards/django/templates/variables/pass/as-context-variables.md)"
noteId: 1777823466447
---

How do you render a template in Django?

---

Use the `render()` shortcut function from `django.shortcuts`:

```python
from django.shortcuts import render

def home(request):
    return render(request, 'index.html')  # Basic template rendering
```

---

The `render()` function takes three main arguments:

1. `request` - The HTTP request object (required)
2. `template_name` - Path to your template file (required)
3. `context` - Dictionary of variables to pass to template (optional)
