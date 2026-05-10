---
id: static-files-collectstatic
aliases: []
tags: []
noteId: 1777823465821
---

How do you prepare static files for production deployment in Django?

---

Use the `collectstatic` management command:

```bash
python manage.py collectstatic
```

This command:

1. Gathers all static files from all apps and STATICFILES_DIRS
2. Copies them to the STATIC_ROOT directory
3. Maintains the same directory structure

Required settings in settings.py:

```python
STATIC_ROOT = BASE_DIR / "staticfiles"  # Where files will be collected
```

---

Key points:

- Run before deploying to production
- Creates a single directory for all static files
- Makes it easy to serve files via web server or CDN
- Preserves directory structure from source locations
- Skips files that haven't changed
- Can use `--noinput` flag to skip confirmation
- Example: `python manage.py collectstatic --noinput`

Common deployment workflow:

1. Add STATIC_ROOT to settings.py
2. Run collectstatic
3. Configure web server (nginx/apache) to serve files from STATIC_ROOT
4. Or use cloud storage/CDN for better performance
