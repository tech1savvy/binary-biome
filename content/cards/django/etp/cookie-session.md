---
id: cookie-session
aliases: []
tags: []
noteId: 1777823463696
---

## Purpose of View Functions

- **get_cookie:** To retrieve and read the value of a cookie from the incoming HTTP request from a client.
- **set_cookie:** To set a cookie with a specified name, value, expiration, and security attributes on the HTTP response.
- **delete_cookie:** To delete a cookie by deleting it from the HTTP response, instructing the browser to remove it.

## Steps to Implement view functions (in views.py)

1. **get_cookie:**
   - Access the cookie using `request.COOKIES.get('cookie_name')`.
   - Return an HTTP response with the cookie value or a message if the cookie does not exist.

2. **set_cookie:**
   - Create an `HttpResponse` object.
   - Use `response.set_cookie()` method with:
     - name='name'
     - value='django'
     - `max_age=15` (seconds)
     - `secure=True` to ensure it is sent only over HTTPS.
   - Return the response object.

3. **delete_cookie:**
   - Create an `HttpResponse` object.
   - Use `response.delete_cookie('name')` to remove the cookie named 'name'.
   - Return the response object.

## URL Mappings (in urls.py)

- Import the views.
- Define URL patterns with `path()` mapping URLs to the respective view functions: `get_cookie`, `set_cookie`, and `delete_cookie`.

---

### Complete code example:

```python
# views.py

from django.http import HttpResponse

def get_cookie(request):
    cookie_value = request.COOKIES.get('name')
    if cookie_value:
        return HttpResponse(f"Cookie value: {cookie_value}")
    else:
        return HttpResponse("Cookie not found")

def set_cookie(request):
    response = HttpResponse("Cookie 'name' set with value 'django' for 15 seconds and secure=True")
    response.set_cookie('name', 'django', max_age=15, secure=True)
    return response

def delete_cookie(request):
    response = HttpResponse("Cookie 'name' deleted")
    response.delete_cookie('name')
    return response
```

```python
# urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('get_cookie/', views.get_cookie, name='get_cookie'),
    path('set_cookie/', views.set_cookie, name='set_cookie'),
    path('delete_cookie/', views.delete_cookie, name='delete_cookie'),
]
```
