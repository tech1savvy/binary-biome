---
id: unnamed-groups
aliases: []
noteId: 1777823467322
---

How do you use unnamed groups in Django regex URLs and how are they accessed in views?

---

Use regular parentheses `(pattern)` in your regex pattern. Unnamed groups pass captured values as positional arguments to your view function in the order they appear.

---

```python
# urls.py
from django.urls import re_path
from . import views

urlpatterns = [
    re_path(r'^article/(\d{4})/(\d{2})/$', views.article_archive),
]
```

```python
# views.py
def article_archive(request, year, month):
    return HttpResponse(f"Archive for {month}/{year}")
```

When someone visits `/article/2025/07/`, Django calls:
`article_archive(request, '2025', '07')`

**Important**: The order of parameters in your view function must match the order of unnamed groups in the regex pattern. The first group `(\d{4})` becomes the first argument, second group `(\d{2})` becomes the second argument. 