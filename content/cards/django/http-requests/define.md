---
id: http-requests
aliases: []
tags: []
noteId: 1777823464722
---

# HTTP Requests in Django

When a user visits a URL on a Django website, Django creates an **HttpRequest** object that contains metadata about the request (like HTTP method, headers, user info, GET or POST data, etc.). This request object is passed as the first argument to a Django **view** function or method.

## How Django Handles HTTP Requests:

- Django’s URL dispatcher maps the incoming URL to a corresponding view.
- The view receives an **HttpRequest** object.
- The view processes the request (reading data, querying DB, business logic).
- The view returns an **HttpResponse** object to send data back to the client.

## Example of HttpRequest usage in a view:

```python
from django.http import HttpResponse

def simple_view(request):
    # Access HTTP method
    method = request.method  # e.g. 'GET', 'POST'

    # Access query parameters (for GET)
    name = request.GET.get('name', 'Guest')

    # Access POST data, if any
    message = request.POST.get('message', '')

    response_text = f"Hello, {name}! You used {method} method."
    return HttpResponse(response_text)
```

## Important Attributes of HttpRequest:

- `request.method`: HTTP method (GET, POST, etc.)
- `request.GET`: Query parameters dictionary
- `request.POST`: POST form data dictionary
- `request.COOKIES`: Cookies data
- `request.META`: HTTP headers and environment variables
- `request.user`: Currently logged-in user (if authentication is enabled)

### Summary

- Django creates an HttpRequest object when a web page is requested.
- Views receive this object and handle the request.
- Views must return an HttpResponse object.
- HttpRequest exposes request details for views to handle logic.
