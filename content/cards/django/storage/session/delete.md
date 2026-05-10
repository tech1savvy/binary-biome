---
id: delete
backward:
  - "[retrieve](cards/django/storage/session/retrieve.md)"
noteId: 1777823466097
---

Which option to use to delete data from Django session storage?

---

- Use `del request.session[key]` or `request.session.pop(key, None)`.

```python
from django.http import HttpResponse

def delete_session_key_view(request):
    request.session.pop("cart_id", None)  # safe if missing
    return HttpResponse("Session key removed")
```

- To clear all session data, use `request.session.flush()`.

```python
from django.http import HttpResponse

def clear_session_view(request):
    request.session.flush()
    return HttpResponse("Session cleared")
```

---

- `flush()` rotates the session key and deletes the session data.
- Removing keys does not end the session; `flush()` does.

