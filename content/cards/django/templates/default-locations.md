---
id: default-locations
aliases: []
tags: []
forward:
  - "[includes](cards/django/templates/includes.md)"
level: 1
noteId: 1777823466196
---

Where does Django look for templates by default?

---

Django looks for templates in two main locations:

1. App-specific templates directory
   - Within each installed app's `templates` subdirectory
   - Enabled by default with `APP_DIRS: True` in settings.py

2. Project-level templates directory (optional)
   - Must be explicitly configured in settings.py by adding paths to `DIRS`
   - By default, `DIRS` is empty: `[]`

Example configuration in settings.py:

```python
TEMPLATES = [
    {
        "DIRS": [BASE_DIR / "templates"],  # Empty by default, add paths here for project-level templates, for ex, root/templates/
        "APP_DIRS": True,  # App-level templates enabled by default
    },
]
```

---

The search order is:

1. First checks project-level directories (if configured in DIRS)
2. Then checks app-specific template directories (enabled by default)
