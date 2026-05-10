---
id: many-to-many
aliases: []
tags: []
noteId: 1777823465397
---

Which field should I use to define a many‑to‑many relationship?

---

- Use `django.db.models.ManyToManyField` as a model class attribute.
- The first positional argument is the related model class.

Example:

```python
from django.db import models


class Topping(models.Model):
    # ...
    pass


class Pizza(models.Model):
    # ...
    toppings = models.ManyToManyField(Topping)
```

- A `Topping` can appear on many `Pizza` objects; each `Pizza` can have many `Topping` objects.

---

- **Naming**: prefer plural names describing the set (e.g., `toppings`).
- **Placement**: it doesn’t matter which model defines the `ManyToManyField`, but only add it to one model. Generally put it on the model edited via forms (e.g., on `Pizza` so users select toppings on the pizza form).
- You can define recursive relationships (a model related to itself) and forward references to models not yet defined.

- `ManyToManyField` also supports many optional arguments to customize behavior.

