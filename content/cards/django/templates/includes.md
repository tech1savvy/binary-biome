---
id: includes
aliases: []
tags: []
forward:
  - "[pass-context-variables-to-include](cards/django/templates/variables/pass.md)"
level: 1
noteId: 1777823466372
---

How do you include other templates in Django?

---

Use `{% include 'template_name.html' %}` to include and render other template files within your current template.

---

```html
<!-- home.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Home</title>
  </head>
  <body>
    {% include 'header.html' %}

    <main></main>

    {% include 'footer.html' %}
  </body>
</html>
```
