---
id: register-app-urls
aliases: []
tags: []
backward:
  - "[define](cards/django/urls/define.md)"
  - "[basic-syntax](cards/django/urls/basic-syntax.md)"
noteId: 1777823467147
---

How do you register an app's URLs in Django's project URLs configuration?

---

1. In your project's main urls.py (usually in project_name/urls.py):

```python
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', include('blog.urls')),  # Include app URLs with a prefix
    path('', include('main.urls')),       # Include app URLs at root level
]
```

2. In your app's urls.py (e.g., blog/urls.py):

```python
from django.urls import path
from . import views

app_name = 'blog'  # Optional namespace for URL names

urlpatterns = [
    path('', views.index, name='index'),
    path('post/<int:id>/', views.post, name='post'),
]
```

---

Key points:

- Use `include()` to add app URLs to project URLs
- The first argument to path() sets the URL prefix for all app URLs
- Empty string '' means no prefix (root level)
- `app_name` creates a namespace for URL names
- Full URL path combines the prefix with app's URL patterns
  Example: 'blog/' + 'post/1/' = 'blog/post/1/'
