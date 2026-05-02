---
id: git-ignore-files
aliases: []
tags: []
noteId: 1777728481192
---

What are the differences between `.gitignore` and `.git/info/exclude`?

---

- **.gitignore**: A file committed to the repository. Its rules are shared and apply to all clones, making it ideal for project-wide ignores (`node_modules/`, `*.log`).
- **.git/info/exclude**: A local file within the `.git` directory that is not committed. Its rules are personal and apply only to your clone, ideal for editor-specific files.

| Aspect       | .gitignore             | .git/info/exclude              |
| ------------ | ---------------------- | ------------------------------ |
| **Scope**    | All clones (committed) | Local clone only (uncommitted) |
| **Use Case** | Shared project ignores | Personal workflow files        |

---

Both methods only work for **untracked** files.
