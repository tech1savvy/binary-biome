---
id: one-to-one
noteId: 1777823465447
---

Which field should I use to define a one‑to‑one relationship?

---

- Use `django.db.models.OneToOneField` as a model class attribute.
- The first positional argument is the related model class.
- Commonly used when one object “extends” another (one‑to‑one at the DB level).

Example:
```python
from django.db import models


class Place(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=30)


class Restaurant(models.Model):
    place = models.OneToOneField(Place, on_delete=models.CASCADE)
    serves_pizza = models.BooleanField(default=False)
    serves_pasta = models.BooleanField(default=False)
```

- `Restaurant` “is a” `Place`: it reuses core fields via a one‑to‑one link.
---

- `OneToOneField` supports optional arguments to customize behavior.