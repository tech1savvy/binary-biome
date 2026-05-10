---
id: find-by-type
noteId: 1777823477972
---

Which options to use with `find` to search for only files or only directories?

---

Use `-type f` for files and `-type d` for directories.

```sh
find /path/to/search -type f -name "filename"
find /path/to/search -type d -name "dirname"
```

---

`f` stands for file, `d` for directory.
