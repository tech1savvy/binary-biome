---
noteId: 1777728478589
---

How do you discard standard error (stderr) in Bash?
***
- Redirect the standard error file descriptor (`2`) to `/dev/null` using `2>/dev/null`.

```bash
# This command fails, but the error message is discarded.
ls /non_existent_directory 2>/dev/null
```

---

- To discard both standard output and standard error at the same time, you can use the shorthand `&>/dev/null`.
