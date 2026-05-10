---
id: basic-syntax
aliases: []
noteId: 1777823466871
---

What is the basic syntax for defining URL patterns in Django?

---

Use the `path()` function with three arguments: URL string, view function, and optional name.

---

```python
# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello_world, name='hello'),
    path('about/', views.about_page, name='about'),
]
```

Basic syntax: `path('url_string/', view_function, name='url_name')`

- **URL string**: The URL pattern (e.g., 'hello/', 'about/')
- **View function**: The function to call when URL is visited
- **Name**: Optional identifier for reverse URL lookups 