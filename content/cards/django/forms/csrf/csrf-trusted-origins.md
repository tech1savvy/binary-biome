---
id: csrf-trusted-origins
aliases: []
tags: []
noteId: 1777823463872
---

What is CSRF_TRUSTED_ORIGINS in Django and when should it be used?

---

- CSRF_TRUSTED_ORIGINS is a Django setting used to specify a list of trusted external domains from which unsafe HTTP requests (like POST) are allowed with CSRF protection. It is necessary when your frontend (e.g., React app) is served from a different domain than your Django backend and needs to make cross-origin requests that require CSRF validation.

- Example configuration in settings.py:

```python
CSRF_TRUSTED_ORIGINS = ['https://frontend.example.com']
```

---

- No trailing slash
- Multiple domains can be specified in the list
