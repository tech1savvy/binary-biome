---
id: path-converter
aliases: []
noteId: 1777823467047
---

How do you capture a path parameter (including slashes) in a Django URL?

---

Use `<path:parameter_name>` in the URL pattern. This captures a string including path separators `/` and passes it as the specified parameter name to your view.

---

Example:

```python
# urls.py
path('files/<path:file_path>/', views.serve_file, name='serve_file'),
```

```python
# views.py
def serve_file(request, file_path):
    return HttpResponse(f"Serving file at path: {file_path}")
```

When someone visits `/files/documents/reports/2024/summary.pdf/`, Django captures `documents/reports/2024/summary.pdf` as the path and calls `serve_file(request, file_path='documents/reports/2024/summary.pdf')`.

Use `<path:>` when you need to capture URLs that contain multiple directory levels or file paths. 