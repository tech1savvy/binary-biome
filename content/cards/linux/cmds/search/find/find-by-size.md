---
id: find-by-size
noteId: 1777823477947
---

Which option to use with `find` to search for files based on their size?

---

Use the `-size` option.

```sh
find /path/to/search -size +100M # Larger than 100 MB
find /path/to/search -size -10k  # Smaller than 10 KB
```

---

Common units: `c` (bytes), `k` (kilobytes), `M` (megabytes), `G` (gigabytes). Prefix with `+` for greater than, `-` for less than.
