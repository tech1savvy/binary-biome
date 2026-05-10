---
id: uuid-converter
aliases: []
noteId: 1777823467122
---

How do you capture a UUID parameter in a Django URL?

---

Use `<uuid:parameter_name>` in the URL pattern. This captures a valid UUID string and passes it as the specified parameter name to your view.

---

Example:

```python
# urls.py
path('file/<uuid:file_id>/', views.file_download, name='file_download'),
```

```python
# views.py
def file_download(request, file_id):
    return HttpResponse(f"Downloading file with ID: {file_id}")
```

When someone visits `/file/550e8400-e29b-41d4-a716-446655440000/`, Django captures the UUID and calls `file_download(request, file_id='550e8400-e29b-41d4-a716-446655440000')`.

UUIDs are useful for unique identifiers that are not sequential and provide better security than auto-incrementing IDs. 