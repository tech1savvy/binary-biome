---
id: url-naming
aliases: []
noteId: 1777823467347
---

Why do you give names to URLs in Django and how do you use them?

---

URL names provide a way to reference URLs without hardcoding them, enabling reverse lookups and template links.

---

```python
# urls.py
urlpatterns = [
    path('post/<int:id>/', views.post_detail, name='post_detail'),
    path('user/<str:username>/', views.user_profile, name='user_profile'),
]
```

```python
# views.py - reverse lookup
from django.urls import reverse

def some_view(request):
    url = reverse('post_detail', args=[42])  # Generates '/post/42/'
    return HttpResponse(f"Go to: {url}")
```

```html
<!-- templates - template links -->
<a href="{% url 'post_detail' 42 %}">View Post</a>
<a href="{% url 'user_profile' 'john' %}">John's Profile</a>
```

Benefits:
- **Maintainable**: Change URL structure without updating templates/views
- **Reusable**: Reference URLs by name instead of hardcoded paths
- **Template-friendly**: Use `{% url %}` tag for dynamic links 