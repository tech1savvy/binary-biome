---
id: template-context-variables
aliases: []
tags: []
noteId: 1777823466771
---

How do you pass context variables to a Django template?

---

Pass a dictionary as the `context` parameter to the `render()` function:

```python
from django.shortcuts import render

def home(request):
    context = {
        'title': 'Home Page',
        'content': 'Welcome to the site!'
    }
    return render(request, 'index.html', context)
```

Then access variables in the template using double curly braces:

```html
<h1>{{ title }}</h1>
<p>{{ content }}</p>
```

---

Key points:

- Context must be a dictionary with string keys
- Variables are accessed in templates using {{ variable_name }} syntax
- If a variable doesn't exist in context, it will render as an empty string
- You can pass any Python type that can be rendered as a string (strings, numbers, lists, etc.)
