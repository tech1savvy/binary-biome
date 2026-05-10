---
id: passwd
noteId: 1777823479423
---

How to change a user password in Linux?

---

The primary tool is the `passwd` command.

- **Change your own password**:
  ```sh
  passwd
  ```
- **Change another user's password** (requires root/sudo):
  ```sh
  sudo passwd <username>
  ```
- **Change the root user's password**:
  ```sh
  sudo passwd root
  ```

---

- You will be prompted for the current password (if changing your own) and the new password (twice).
- Passwords are not shown while typing for security.
- It is recommended to set strong passwords with a mix of letters, numbers, and special characters.
