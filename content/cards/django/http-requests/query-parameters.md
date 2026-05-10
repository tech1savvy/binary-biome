---
id: query-parameters
aliases: []
noteId: 1777823464822
---

How do you access query parameters (from the URL) in a Django request object?

---

`request.GET` (a `QueryDict`)

Example:

```python
# Request URL: /search?q=django&page=2
def search_view(request):
    q = request.GET.get('q', '')           # 'django'
    page = request.GET.get('page', '1')    # '2'
    tags = request.GET.getlist('tag')      # use getlist for repeated params
``` 