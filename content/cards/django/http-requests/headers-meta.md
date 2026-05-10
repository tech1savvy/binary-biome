---
id: headers-meta
aliases: []
noteId: 1777823464747
---

How do you access HTTP headers and environment variables in a Django request object?

---

`request.META` (dictionary-like; headers are `HTTP_<HEADER_NAME>`) — alternative modern API: `request.headers`

Example:

```python
def meta_view(request):
    user_agent = request.META.get('HTTP_USER_AGENT', '')    # common pattern
    content_type = request.META.get('CONTENT_TYPE', '')
    # or using request.headers (Django 2.2+):
    ua2 = request.headers.get('User-Agent', '')
```

---

Tip: header names in `META` are uppercased and prefixed with `HTTP_` (except a few like `CONTENT_TYPE`, `CONTENT_LENGTH`). 