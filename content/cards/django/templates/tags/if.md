---
id: if
aliases: []
noteId: 1777823466572
---

How do you use conditional statements in Django templates?

---

Use `{% if %}` and `{% endif %}` tags to conditionally display content based on variable values.

---

```html
{% if user.is_authenticated %}
    <p>Welcome, {{ user.username }}!</p>
{% else %}
    <p>Please <a href="{% url 'login' %}">login</a></p>
{% endif %}
```

You can also use `{% elif %}` and `{% else %}` for multiple conditions:

```html
{% if user.is_staff %}
    <p>Admin Panel</p>
{% elif user.is_authenticated %}
    <p>User Dashboard</p>
{% else %}
    <p>Guest Access</p>
{% endif %}
``` 