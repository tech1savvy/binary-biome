---
id: inheritance
aliases: []
level: 1
noteId: 1777823466396
---

How does template inheritance work in Django?

---

Use `{% extends %}` to inherit from a base template and `{% block %}` to define sections that child templates can override.

---

```html
<!-- base.html (parent template) -->
<!DOCTYPE html>
<html>
  <head>
    <title>{% block title %}My Site{% endblock %}</title>
  </head>
  <body>
    <header>{% block header %}Site Header{% endblock %}</header>
    <main>{% block content %}{% endblock %}</main>
    <footer>{% block footer %}Site Footer{% endblock %}</footer>
  </body>
</html>
```

```html
<!-- child.html (child template) -->
{% extends 'base.html' %} {% block title %}Page Title{% endblock %} {% block
content %}
<h1>Welcome to my page</h1>
<p>This is the main content.</p>
{% endblock %}
```

Key points:

- **`{% extends %}`** must be the first template tag in child templates
- **`{% block %}`** defines sections that can be overridden
- Child templates can override any block by defining the same block name
- Blocks not overridden use default content from base template
