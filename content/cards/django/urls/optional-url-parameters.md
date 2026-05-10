---
id: optional-url-parameters
aliases: []
tags: []
noteId: 1777823466947
---

Which options to use to achieve optional parameters in Django URLs?

---

```python
def my_view(request, param=None):
    if param:
        # Do something with param
    else:
        # Handle case where param is not provided
```
