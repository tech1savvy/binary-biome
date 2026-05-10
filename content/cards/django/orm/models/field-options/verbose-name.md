---
id: verbose-name
backward:
  - "[overview](django/models/field-options/overview.md)"
forward:
  - "[verbose-name-relations](django/models/field-options/verbose-name-relations.md)"
noteId: 1777823465172
---

What is a field’s `verbose_name` in Django?

---

- Optional first positional argument for most field types.
- If omitted, derived from the attribute name (underscores → spaces).

Examples:
```python
first_name = models.CharField("person's first name", max_length=30)
first_name = models.CharField(max_length=30)  # becomes "first name"
```

---

- Convention: don’t capitalize the first letter; Django will capitalize labels as needed. 