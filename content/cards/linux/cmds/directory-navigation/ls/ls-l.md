---
id: ls-l
aliases: []
tags: []
noteId: 1777823475196
---

Which command lists files and directories with details in long format?

---

```sh
ls -l
```

---

- The long format (`-l`) provides detailed information about each file and directory, including:
  - File permissions (e.g., `drwxr-xr-x`)
  - Number of hard links
  - Owner name
  - Group name
  - Size of the file in bytes
  - Date and time of last modification
  - Filename

### Example Output

```
-rw-r--r-- 1 user group 1234 Jan 1 10:00 filename.txt
drwxr-xr-x 2 user group 4096 Feb 2 11:30 directoryname
```

