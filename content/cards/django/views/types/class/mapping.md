---
id: mapping
aliases: []
tags: []
noteId: 1777823467672
---

How to map a class based view to a url?

---

```py
from django.urls import path
from .views import HelloWorldView

urlpatterns = [
    path('hello/', HelloWorldView.as_view()),
]
```

---

- `as_view()` converts the class into a callable view function Django uses internally.
