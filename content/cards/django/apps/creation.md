---
id: creation
aliases: []
tags: []
forward:
  - "[register](cards/django/apps/register.md)"
noteId: 1777823462922
---

What is the cmd to create a django app?

---

```sh
django-admin startapp <app_name> <app_dir>
```

---

- If you specify the directory, it must already exist, as the command will not create the directory for you.
- If you don't specify the directory, the app will be created in the current working directory with the app name as sub-directory.
