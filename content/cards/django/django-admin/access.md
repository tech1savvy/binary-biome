---
id: access
tags:
  - superuser
backward:
  - "[overview](django/django-admin/overview.md)"
noteId: 1777823463297
---

How do you access Django Admin and create a superuser?

---

- Django Admin is enabled by default in new projects.
    - i.e. `django.contrib.admin` is included in `INSTALLED_APPS` in `settings.py`.
- Run migrations for built‑in apps (including admin):
```bash
python manage.py migrate
```
- Create a superuser:
```bash
python manage.py createsuperuser
```
- After creating a superuser, log in at `/admin/` to manage models, users, groups, and permissions. 