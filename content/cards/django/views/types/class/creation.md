---
id: creation
aliases: []
tags: []
noteId: 1777823467646
---

How to define a class based view in Django?

---

```py
# views.py
from django.http import HttpResponse
from django.views import View

class HelloWorldView(View):
    def get(self, request):
        return HttpResponse("Hello, World!")
```

---

- The class inherits from `django.views.View`.
- Request methods (GET, POST, etc.) are defined as _methods_ inside the class (get, post, etc.).
