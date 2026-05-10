---
id: rm-r
noteId: 1777823475847
---

Which command line utility is used to recursively remove directories and their contents?

---

```sh
rm -r <directory>
```
- The `-r` (or `--recursive`) option tells `rm` to delete directories and all files and subdirectories inside them recursively.

---

- Use with caution: `rm -r` permanently deletes files and directories without placing them in a trash or recycle bin.
- To prompt for confirmation before deleting each item, use `rm -ri <directory>`.
- To force deletion without prompts, even for write-protected files, use `rm -rf <directory>`.
