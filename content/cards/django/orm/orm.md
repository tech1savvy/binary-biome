---
id: orm
noteId: 1777823465521
---

What is Django's ORM and how do you use it?

---

- Bridges Python objects (models) and relational database tables.
- Define schema as Python classes inheriting from `django.db.models.Model`.
- Generates SQL for creating/manipulating tables based on models.
- Supports CRUD via Pythonic APIs: `.save()`, `.filter()`, `.get()`, `.delete()`.
- Returns data as iterable, chainable `QuerySet`s.
- Database-agnostic across SQLite, PostgreSQL, MySQL, Oracle.
- Supports relationships: foreign keys, many-to-many, one-to-one.

Example model:
```python
from django.db import models

class Album(models.Model):
    title = models.CharField(max_length=30)
    artist = models.CharField(max_length=30)
    genre = models.CharField(max_length=30)

    def __str__(self):
        return self.title
```

Basic operations:
```python
# Create and save
a = Album(title="Divide", artist="Ed Sheeran", genre="Pop")
a.save()

# Query all
albums = Album.objects.all()

# Filter
beatles_albums = Album.objects.filter(artist="The Beatles")
```

---

- Django ORM simplifies DB interactions with a high-level, Pythonic interface, reducing the need for raw SQL.
