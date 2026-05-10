---
id: mkdir-p
noteId: 1777823475621
---

Which command line utility option is used to create nested directories and avoid errors if parent directories already exist?

---

```sh
mkdir -p <path>
```
- The `-p` (or `--parents`) option with `mkdir` allows creating nested directories in a single command.

---

- Example: `mkdir -p a/b/c` will create directory `a`, then `b` inside `a`, and `c` inside `b`.
- If `a` or `b` do not already exist, they will be created automatically.
- If parent directories already exist, no error will be raised.
