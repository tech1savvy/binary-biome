---
id: post-data
aliases: []
noteId: 1777823464797
---

How do you access POST form data in a Django request object?

---

`request.POST` (a `QueryDict`)

Example:

```python
def submit_view(request):
    # request.POST exists regardless of method, but is typically used with POST
    message = request.POST.get('message', '')   # safe default
    # or raise KeyError if missing: message = request.POST['message']
    choices = request.POST.getlist('choices')   # for multi-select fields
``` 