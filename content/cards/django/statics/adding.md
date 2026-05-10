---
id: add-static-files-to-templates
aliases: []
noteId: 1777823465797
---

How do you handle static files in Django templates?

---

Use `{% load static %}` at the top of your template and `{% static 'path' %}` to reference CSS, JavaScript, images, and other static files.

---

```html
<!-- base.html -->
{% load static %}
<!DOCTYPE html>
<html>
  <head>
    <title>{% block title %}My Site{% endblock %}</title>
    <link rel="stylesheet" href="{% static 'css/style.css' %}" />
  </head>
  <body>
    <img src="{% static 'images/logo.png' %}" alt="Logo" />

    <main>{% block content %}{% endblock %}</main>

    <script src="{% static 'js/main.js' %}"></script>
  </body>
</html>
```

Static file structure:

```
myapp/
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── logo.png
└── templates/
    └── base.html
```

Key points:

- **`{% load static %}`**: Must be at the top of template
- **`{% static 'path' %}`**: Generates correct URL for static files
- **Development**: Django serves static files automatically
- **Production**: Use `python manage.py collectstatic` to collect all static files
- **Settings**: Configure `STATIC_URL` and `STATICFILES_DIRS` in settings.py
