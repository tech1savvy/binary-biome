---
id: migrations
noteId: 1777823465323
---

What are migrations in Django and How to use them?

---

- Migrations manage database schema changes derived from your model definitions.
- They version and apply changes like adding/removing fields or creating/dropping tables.

- Migration files are Python modules stored in each app’s `migrations/` directory and tracked in version control.
- `makemigrations` generates migrations that describe model changes; `migrate` applies them to the database.

- They abstract database‑specific SQL, so we do not have to manually alter the database with SQL queries.
- Each migration lists declarative operations (create table, add/remove field, rename model, etc.) that Django compiles to SQL for your backend.

---

Common commands:
```sh
python manage.py makemigrations
python manage.py migrate
```
