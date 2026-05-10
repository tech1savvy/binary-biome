---
id: register
aliases: []
tags: []
noteId: 1777823462972
---

# How to register a app in a django project?

- Add the app to `INSTALLED_APPS` list inside `my_project/settings.py`.

> `my_project/settings.py`

```py
INSTALLED_APPS = [
    # user apps
    "blogs.apps.AuthConfig",
    # default apps
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]
```

> `my_project/blogs/app.py`

```py
from django.apps import AppConfig


class BlogsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'blogs'
```
