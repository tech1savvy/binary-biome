---
noteId: 1777728478691
---

How are basic command-line arguments handled in Bash?
***
- By using **positional parameters**, which are special variables that Bash automatically assigns to incoming arguments.
- `$1`, `$2`, etc. — The first, second, and subsequent arguments.
- `$0` — The name of the script itself.
- `$#` — The total count of arguments.
- `$@` and `$*` — All arguments presented as a list.

---

- Use quotes, especially `"$@"` to ensure arguments with spaces are treated as a single unit.
- For arguments beyond the 9th, you must use braces, e.g., `${10}`.
