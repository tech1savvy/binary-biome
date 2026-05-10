---
id: dynamic-urls
aliases: []
noteId: 1777823466922
---

How do you create dynamic URLs in Django?

---

Use **path converters** in angle brackets `<>` inside the URL pattern to capture dynamic parts of the URL and pass them as arguments to views.

---

Example:

```python
# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('post/<int:id>/', views.post_detail, name='post_detail'),
]
```

```python
# views.py
def post_detail(request, id):
    return HttpResponse(f"Post id is {id}")
```

When someone visits `/post/42/`, Django calls `post_detail` view with `id=42`.

Common path converters:
- `<int:id>` - captures integer
- `<str:name>` - captures string
- `<slug:slug>` - captures slug (alphanumeric + hyphens/underscores) 