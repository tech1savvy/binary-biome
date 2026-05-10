---
id: find-by-mtime
noteId: 1777823477896
---

Which option to use with `find` to search for files based on their modification time?

---

Use the `-mtime` option.

```sh
find /path/to/search -mtime -7 # Modified in the last 7 days
find /path/to/search -mtime +30 # Modified more than 30 days ago
```

---

`+N` means more than N days ago, `-N` means less than N days ago (within N days).
