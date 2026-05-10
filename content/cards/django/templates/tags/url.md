---
id: url
aliases: []
noteId: 1777823466596
---

How do you generate URLs in Django templates?

---

Use `{% url 'url_name' %}` to generate URLs based on URL names defined in your urls.py files.

---

```html
<!-- Basic URL generation -->
<a href="{% url 'home' %}">Home</a>
<a href="{% url 'about' %}">About</a>

<!-- URL with parameters -->
<a href="{% url 'user_detail' user.id %}">View Profile</a>
<a href="{% url 'post_detail' year=2025 month=7 slug='my-post' %}">View Post</a>
```

The `{% url %}` tag looks up the URL pattern by name and generates the correct URL, making your templates independent of URL structure changes. 