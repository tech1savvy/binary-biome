---
id: views
aliases: []
noteId: 1777823463597
---

How do you handle errors in Django views?

---

Use Python's native try/except blocks to catch specific exceptions and provide custom responses, such as returning JSON error messages or rendering error templates.

---

```python
# views.py
from django.http import JsonResponse
from .models import Book

def book_detail(request, book_id):
    try:
        book = Book.objects.get(id=book_id)
        return JsonResponse({'title': book.title})
    except Book.DoesNotExist:
        return JsonResponse({'error': 'Book not found'}, status=404)
    except Exception:
        return JsonResponse({'error': 'An unexpected error occurred'}, status=500)
```

This approach ensures user-friendly errors and prevents exposure of sensitive details, but can lead to repetitive code across views.

Key benefits:
- **Custom error responses** instead of generic Django error pages
- **Proper HTTP status codes** (404, 500, etc.)
- **User-friendly messages** without exposing internal details
- **Graceful degradation** when things go wrong 