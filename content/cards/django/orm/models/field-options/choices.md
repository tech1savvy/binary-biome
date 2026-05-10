---
id: choices
backward:
  - "[overview](django/models/field-options/overview.md)"
noteId: 1777823464997
---

Which option should I use to restrict values to a fixed set?

---

- Use the `choices` option to limit valid values and drive select widgets.
- Define choices as tuples or use enumeration helpers like `TextChoices`.

Example with `TextChoices`:
```python
from django.db import models


class Runner(models.Model):
    MedalType = models.TextChoices("MedalType", "GOLD SILVER BRONZE")
    name = models.CharField(max_length=60)
    medal = models.CharField(blank=True, choices=MedalType, max_length=10)
```

---

- `choices` impacts form rendering and validation; the database stores the raw field value. 