---
noteId: 1777728478514
---

Which command is used to find the process ID (PID) of a running program by name?
***
- Use the `pidof` command. It returns the PID of a process if it's running.
- The command's exit status (`$?`) is `0` if a process is found, and `1` otherwise.

```bash
# Check if 'cron' is running without printing its PID to the console
if pidof cron >/dev/null; then
    echo "Process is running."
else
    echo "Process is not running."
fi
```

---

- `pidof` is a simple and direct way to check for a process by its exact name.
- Because `if` statements evaluate the exit status of commands, you can use `pidof` directly within the condition.
