---
id: http-method
aliases: []
noteId: 1777823464772
---

How do you get the HTTP method (GET, POST, etc.) from a Django request object?

---

`request.method`

Example:

```python
def example_view(request):
    method = request.method  # e.g. 'GET', 'POST', 'PUT'
    if method == 'POST':
        return HttpResponse("Received POST")
    return HttpResponse(f"You used {method}")
``` 