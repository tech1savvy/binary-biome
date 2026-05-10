---
id: create
aliases: []
tags: []
noteId: 1777823465621
---

What is the cmd to create a django project?

---

```sh
django-admin startproject <project_name> [directory]
```

- [directory] is an optional argument specifying the directory in which to create the project.
  - If omitted, the project will be created in the current directory.
  - If specified, the directory should already exist.
    - It will not create it by itself.
