---
id: using
backward:
  - "[define](cards/django/models/define.md)"
noteId: 1777823465497
---

How do you start using Django models in a project?

---

- Add your app to `INSTALLED_APPS` in `settings.py` so Django knows to load its `models.py`.

Example `INSTALLED_APPS`:
```python
INSTALLED_APPS = [
    # ...
    "myapp",
    # ...
]
```

- After adding a new app, create and apply migrations.

```sh
python manage.py makemigrations
python manage.py migrate
```

---

- `makemigrations` inspects model changes and generates migration files.
- `migrate` applies pending migrations to the database. 