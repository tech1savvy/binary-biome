---
id: create
forward:
  - "[retrieve](cards/django/storage/cookie/retrieve.md)"
noteId: 1777823465947
---

Which method to use to set a cookie on a response in Django?

---

- Use `HttpResponse.set_cookie(name, value, max_age=..., expires=..., path='/', domain=None)`.

```python
from django.http import HttpResponse

def set_cookie_view(request):
    response = HttpResponse("Cookie set")
    response.set_cookie(
        key="my_cookie",
        value="cookie_value",
        max_age=3600,  # seconds
    )
    return response
```

---

- `max_age` (seconds) or `expires` (datetime) controls lifetime.
- `path`: URL scope. Cookie sent only for request paths that start with this value. Default `'/'`.
  - Examples: `path='/'` (all paths), `path='/admin'` (only under `/admin`).
- `domain`: Hostname scope. `None` = host-only; use like `.example.com` to include subdomains.
