---
id: template-namespacing
aliases: []
tags: []
level: 1
backward:
  - "[default-locations](cards/django/templates/default-locations.md)"
noteId: 1777823466422
---

How does Django handle template naming conflicts between project-level and app-level templates? What's the best practice?

---

Django searches for templates in this order:

1. Project-level templates (in DIRS setting)
2. App-level templates (when APP_DIRS=True)

To avoid naming conflicts, use app-specific namespacing:

```
# Good (namespaced):
myapp/
    templates/
        myapp/
            base.html
            home.html

# Usage in template:
{% extends "myapp/base.html" %}
```

```
# Problematic (not namespaced):
myapp/
    templates/
        base.html     # Could conflict with other apps
        home.html
```

---

Key points:

- Without namespacing, project-level templates always override app-level templates with the same name
- Best practice: Put app templates in a subdirectory named after the app
- Example path: `myapp/templates/myapp/template.html`
- This prevents accidental template overrides
- Makes it explicit which template you're extending
- Allows multiple apps to have templates with the same name
