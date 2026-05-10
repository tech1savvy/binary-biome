---
id: named-groups
aliases: []
noteId: 1777823467272
---

How do you use named groups in Django regex URLs and how are they accessed in views?

---

Use the syntax `(?P<name>pattern)` in your regex pattern. Named groups pass captured values as keyword arguments to your view function.

```python
# urls.py
from django.urls import re_path
from . import views

urlpatterns = [
    re_path(r'^article/(?P<year>\d{4})/(?P<month>\d{2})/$', views.article_archive),
]
```

```python
# views.py
def article_archive(request, year, month):
    return HttpResponse(f"Archive for {month}/{year}")
```

---

When someone visits `/article/2025/07/`, Django calls:
`article_archive(request, year='2025', month='07')`

The parameter names in the view function must match the names in the named groups. 