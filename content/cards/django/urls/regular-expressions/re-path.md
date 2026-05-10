---
id: re-path
aliases: []
noteId: 1777823467298
---

What are regular expressions in Django URLs and how do you use them?

---

Regular expressions in Django URLs allow you to define complex and flexible URL patterns using the `re_path()` function, giving you precise control beyond what simple path converters can do.


```python
# urls.py
from django.urls import re_path
from . import views

urlpatterns = [
    # Named group - passed as keyword argument
    re_path(r'^article/(?P<year>\d{4})/$', views.article_year),
    
    # Unnamed group - passed as positional argument
    re_path(r'^article/(\d{4})/$', views.article_year),
]
```

---
Key syntax elements:
- **Import**: `from django.urls import re_path`
- **Regex pattern**: Use raw string `r'pattern'`
- **Named groups**: `(?P<name>pattern)` - parameters passed as keyword arguments
- **Unnamed groups**: `(pattern)` - parameters passed as positional arguments
- **Start/end anchors**: `^` and `$` to match entire URL

Named groups are recommended for readability but not required. 