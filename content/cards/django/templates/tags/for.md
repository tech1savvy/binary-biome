---
id: for
aliases: []
noteId: 1777823466546
---

How do you create loops in Django templates?

---

Use `{% for %}` and `{% endfor %}` tags to iterate through lists, querysets, or other iterable objects.

---

```html
{% for item in items %}
    <li>{{ item.name }} - {{ item.price }}</li>
{% endfor %}
```

Use `{% empty %}` to handle empty lists:

```html
{% for user in users %}
    <p>{{ user.username }}</p>
{% empty %}
    <p>No users found.</p>
{% endfor %}
```

You can access loop variables like `forloop.counter`, `forloop.first`, `forloop.last` for additional control. 