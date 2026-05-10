---
id: choices
noteId: 1777823465247
---

How do you use choices field on Django Models?

---
```python
from django.db import models


class Runner(models.Model):
    MedalType = models.TextChoices("MedalType", "GOLD SILVER BRONZE")
    name = models.CharField(max_length=60)
    medal = models.CharField(blank=True, choices=MedalType, max_length=10)
```