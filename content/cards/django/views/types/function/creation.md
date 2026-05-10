---
id: creation
aliases: []
tags: []
noteId: 1777823467747
---

How to define a function based view?

---

```py
from django.http import HttpResponse

def hello_world(request):
    return HttpResponse("Hello, world!")
```
