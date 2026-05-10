---
id: many-to-one
noteId: 1777823465423
---

Which field should I use to define a many‑to‑one relationship?

---

- Use `django.db.models.ForeignKey` as a model class attribute.
- The first positional argument is the related model class.

Example:
```python
from django.db import models


class Manufacturer(models.Model):
    # ...
    pass


class Car(models.Model):
    manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE)
    # ...
```

- A `Manufacturer` can have many `Car` rows; each `Car` has one `Manufacturer`.

---

- Field name convention: use the related model name in lowercase (e.g., `manufacturer`), but any valid name works:

```python
class Car(models.Model):
    company_that_makes_it = models.ForeignKey(
        Manufacturer,
        on_delete=models.CASCADE,
    )
    # ...
```

- `ForeignKey` supports many optional arguments to customize behavior.
- You can define recursive relationships (a model related to itself) and forward references to models not yet defined.