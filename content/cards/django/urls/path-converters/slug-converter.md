---
id: slug-converter
aliases: []
noteId: 1777823467071
---

How do you capture a slug parameter in a Django URL?

---

Use `<slug:parameter_name>` in the URL pattern. This captures a slug containing only letters, numbers, hyphens, and underscores.

---

Example:

```python
# urls.py
path('article/<slug:title>/', views.article_detail, name='article_detail'),
```

```python
# views.py
def article_detail(request, title):
    return HttpResponse(f"Article: {title}")
```

When someone visits `/article/my-first-article/`, Django captures `my-first-article` as a slug and calls `article_detail(request, title='my-first-article')`.

Valid slug characters: a-z, A-Z, 0-9, hyphens (-), underscores (_) 