---
id: static-files-settings
aliases: []
tags: []
forward:
  - "[adding](cards/django/statics/adding.md)"
  - "[collectstatic](cards/django/statics/collectstatic.md)"
noteId: 1777823465847
---

How do you configure static files settings in Django's settings.py?

---

Configure these settings in settings.py:

```python
# Base URL where static files will be served
STATIC_URL = 'static/'

# Additional directories where Django should look for static files
STATICFILES_DIRS = [
    BASE_DIR / "static",  # Project-level static files
    BASE_DIR / "assets",  # Additional directories if needed
]

```

Example directory structure:

```
myproject/
├── static/          # Project-level static files (in STATICFILES_DIRS)
├── assets/          # Additional static files (in STATICFILES_DIRS)
└── myapp/
    └── static/     # App-level static files (automatically included)
```

---

Key points:

- `STATIC_URL`: URL prefix for static files (e.g., 'http://example.com/static/')
- `STATICFILES_DIRS`: List of additional directories to search for static files
- App-level static files in `myapp/static/` are automatically included
- Django searches both app-level and project-level directories
- Development server serves files automatically
- For production setup, see collectstatic card
