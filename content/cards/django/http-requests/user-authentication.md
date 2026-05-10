---
id: user-authentication
aliases: []
tags: []
noteId: 1777823464847
---

How do you access the currently logged-in user in a Django request object (if authentication is enabled)?

---

`request.user` (an instance of `User` or `AnonymousUser`)

Example:

```python
def user_view(request):
    if request.user.is_authenticated:
        username = request.user.username
        return HttpResponse(f"Hello, {username}")
    return HttpResponse("Hello, anonymous visitor")
```

