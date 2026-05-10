---
id: verbose-name-relations
backward:
  - "[overview](django/models/field-options/overview.md)"
  - "[verbose-name](django/models/field-options/verbose-name.md)"
noteId: 1777823465147
---

How to set `verbose_name` for relational fields?

---

- For `ForeignKey`, `ManyToManyField`, and `OneToOneField`, the first positional argument is the related model, so use the `verbose_name` keyword.

Examples:
```python
poll = models.ForeignKey(
    Poll,
    on_delete=models.CASCADE,
    verbose_name="the related poll",
)
sites = models.ManyToManyField(Site, verbose_name="list of sites")
place = models.OneToOneField(
    Place,
    on_delete=models.CASCADE,
    verbose_name="related place",
)
```

---

- Keep labels consistent with the project’s style guidelines. 