---
id: mapping
aliases: []
tags: []
noteId: 1777823467772
---

How to map a function based view to a url?

---

```py
from django.urls import path
from .views import hello_world

urlpatterns = [
    path('hello/', hello_world),
]
```
