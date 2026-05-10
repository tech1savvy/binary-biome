---
id: register-model
aliases: []
tags: []
noteId: 1777823463347
---

How do you make a Django model appear in the Admin site?

---

To show a model in Django Admin, register it in your app's `admin.py`:

1. Import the admin module and your model:

```python
from django.contrib import admin
from .models import YourModel
```

2. Register the model:

```python
admin.site.register(YourModel)
```

---

```python
class BlogPost(models.Model):
    def __str__(self):
        return self.title
```

- It makes the name of model instance appear readable in Django admin

