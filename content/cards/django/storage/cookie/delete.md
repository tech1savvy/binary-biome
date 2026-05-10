---
id: delete
backward:
  - "[retrieve](cards/django/storage/cookie/retrieve.md)"
noteId: 1777823465971
---

Which option to use to delete a cookie in Django?

---

- Use `HttpResponse.delete_cookie(name, path='/', domain=None)`.

```python
from django.http import HttpResponse

def delete_cookie_view(request):
    response = HttpResponse("Cookie cleared")
    response.delete_cookie("my_cookie")
    return response
```

---

- Deletion matches the cookie by name and scope.
- `path`: cookie path scope; must match what was set (default `'/'`).
  - Examples: `path='/'` (global), `path='/admin'` (only under `/admin`).
- `domain`: cookie domain scope; use the same if set (e.g., `.example.com`).

