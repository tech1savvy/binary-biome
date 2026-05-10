---
id: custom-404
aliases: []
tags: []
noteId: 1777823463572
---

How do you automatically redirect all 404 errors to a custom view in Django?

---

Create a custom 404 view function and add it to your main URLs configuration to handle all 404 errors automatically.

---

```python
# views.py
from django.shortcuts import render

def custom_404(request, exception):
    return render(request, 'custom_404.html', {
        'requested_url': request.path
    }, status=404)
```

```python
# urls.py (main project URLs)
from django.conf.urls import handler404
from .views import custom_404

handler404 = 'myapp.views.custom_404'  # Point to your custom view

urlpatterns = [
    # ... your URL patterns
]
```

```html
<!-- templates/custom_404.html -->
{% extends 'base.html' %} {% block content %}
<h1>Page Not Found</h1>
<p>The page "{{ requested_url }}" doesn't exist.</p>
<a href="{% url 'home' %}">Go Home</a>
{% endblock %}
```

Key points:

- **`handler404`**: Set in main URLs to override Django's default 404 handling
- **Custom view**: Can access request object and show dynamic content
- **Status code**: Return with `status=404` for proper HTTP response
- **Context**: Can pass additional data to your 404 template

---

Other built-in error handlers (existence and usage):

- **`handler400`**: Bad Request (400)
- **`handler403`**: Permission Denied (403)
- **`handler404`**: Page Not Found (404)
- **`handler500`**: Server Error (500)

Define them in your root `urls.py` similarly:

```python
# urls.py
from django.conf.urls import handler404, handler500

handler404 = 'myapp.views.custom_404'
handler500 = 'myapp.views.server_error'
```

```python
def custom_500(request):
    # Render 500.html template with status code 500
    return render(request, '500.html', status=500)ef custom_500():
```

Notes:

- Handlers must be defined in the root URLconf (project-level `urls.py`)
- `handler500` view must accept only `request` (no `exception` arg)
- `handler400`, `handler403`, `handler404` views accept `(request, exception)`

