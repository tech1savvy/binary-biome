---
id: find-exec
noteId: 1777823478022
---

Which option to use with `find` to execute a command on each found item?

---

Use the `-exec` option.

```sh
find /path/to/search -name "*.log" -exec rm {} \;
```

---

`{}` is a placeholder for the found file/directory. `\;` terminates the `-exec` command.
