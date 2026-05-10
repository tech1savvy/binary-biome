---
id: str-converter
aliases: []
noteId: 1777823467097
---

How do you capture a string parameter in a Django URL?

---

Use `<str:parameter_name>` in the URL pattern. This captures a string (excluding forward slashes) and passes it as the specified parameter name to your view.

---

Example:

```python
# urls.py
path('user/<str:username>/', views.user_profile, name='user_profile'),
```

```python
# views.py
def user_profile(request, username):
    return HttpResponse(f"Profile page for user: {username}")
```

When someone visits `/user/john_doe/`, Django captures `john_doe` as a string and calls `user_profile(request, username='john_doe')`.

Note: `<str:name>` is the default converter, so you can also write just `<name>`. 