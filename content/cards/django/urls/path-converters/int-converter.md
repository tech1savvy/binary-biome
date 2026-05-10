---
id: int-converter
aliases: []
noteId: 1777823467022
---

How do you capture an integer parameter in a Django URL?

---

Use `<int:parameter_name>` in the URL pattern. This captures an integer and passes it as the specified parameter name to your view.

---

Example:

```python
# urls.py
path('post/<int:id>/', views.post_detail, name='post_detail'),
```

```python
# views.py
def post_detail(request, id):
    return HttpResponse(f"Post id is {id}")
```

When someone visits `/post/42/`, Django captures `42` as an integer and calls `post_detail(request, id=42)`. 