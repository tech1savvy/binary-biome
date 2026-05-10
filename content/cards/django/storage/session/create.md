---
id: create
forward:
  - "[retrieve](cards/django/storage/session/retrieve.md)"
noteId: 1777823466072
---

Which option to use to set data in Django session storage?

---

- Assign to `request.session[key] = value` and save if needed.

```python
from django.http import HttpResponse

def set_session_view(request):
    request.session["cart_id"] = "abc123"
    # request.session.set_expiry(3600)  # optional: seconds
    return HttpResponse("Session value set")
```

---

- Data is stored server-side; session id in cookie links it.
- Use `set_expiry(seconds|datetime|0|None)` to control lifetime (optional).

