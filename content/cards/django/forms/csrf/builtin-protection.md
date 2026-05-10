---
id: csrf-support
aliases: []
tags: []
noteId: 1777823463847
---

How does Django provide CSRF protection for forms?

---

- Django includes built-in CSRF protection middleware.
- In templates, use `{% csrf_token %}` inside `<form>` tags to include a CSRF token.
- Django automatically checks for the token on POST requests and blocks requests without a valid token.

---

- CSRF protection is enabled by default in Django settings.
- Always include `{% csrf_token %}` in forms that use POST. - For example:

  ```html
  <form method="post" action="/your-action-url/">
    {% csrf_token %}
    <!-- ... form content -->
  </form>
  ```
