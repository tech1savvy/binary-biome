---
id: filed
backward:
  - "[define](cards/django/models/define.md)"
  - "[using](cards/django/models/using.md)"
noteId: 1777823465272
---

What are fields in a Django model? Include cautions and an example.

---

- Fields are the most important (and only required) part of a model.
- They are specified as class attributes on subclasses of `django.db.models.Model`.
- Avoid field names that conflict with the models API (e.g., `clean`, `save`, `delete`).

Example:
```python
from django.db import models


class Musician(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    instrument = models.CharField(max_length=100)


class Album(models.Model):
    artist = models.ForeignKey(Musician, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    release_date = models.DateField()
    num_stars = models.IntegerField()
```

---

- Choose field types and options (`max_length`, `on_delete`, etc.) appropriate to your data and constraints.
- Field types matter: a field is an instance of a `Field` subclass, and Django uses that class to decide:
  - The database column type (e.g., `CharField` → `VARCHAR`, `IntegerField` → `INTEGER`).
  - The default form widget (e.g., `CharField` → `<input type="text">`, `ForeignKey` → `<select>`).
  - Baseline validation rules in admin and generated forms.
- Django ships with many built‑in fields. (@docs/model-field-reference). You can also create custom fields when built‑ins aren’t sufficient. 