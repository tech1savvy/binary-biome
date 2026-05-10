---
id: retrieve
forward:
  - "[delete](cards/django/storage/session/delete.md)"
backward:
  - "[create](cards/django/storage/session/create.md)"
noteId: 1777823466122
---

Which option to use to read data from Django session storage?

---

- Use `request.session.get(key, default)`.

```python
from django.http import HttpResponse

def get_session_view(request):
    cart_id = request.session.get("cart_id", None)
    return HttpResponse(f"cart_id={cart_id}")
```

---

- Returns the stored value or `default` if missing.
- Session may be empty for new users; handle `None` appropriately.

