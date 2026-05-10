---
id: retrieve
aliases: []
tags: []
backward:
  - "[create](cards/django/storage/cookie/create.md)"
forward:
  - "[delete](cards/django/storage/cookie/delete.md)"
noteId: 1777823465997
---

Which option to use to read a cookie from a Django request?

---

- Use `request.COOKIES.get(name, default)`.

```python
def get_cookie_view(request):
    value = request.COOKIES.get("my_cookie", "default_value")
    return HttpResponse(f"my_cookie={value}")
```

---

- Returns a string value or `default` if missing.
- Cookies are client-controlled; validate and avoid trusting blindly.
