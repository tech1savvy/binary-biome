---
id: default
backward:
  - "[overview](django/models/field-options/overview.md)"
noteId: 1777823465022
---

Which option should I use to set a default value for a field?

---

- Sets the value used when none is provided.
- Accepts a static value or a callable (called at object creation).

---

- Use callables for dynamic defaults (e.g., `timezone.now`). 