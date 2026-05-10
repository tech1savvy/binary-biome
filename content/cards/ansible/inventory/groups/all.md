---
id: all
aliases: []
tags: []
noteId: 1777823456496
---

Which special section in Ansible inventory defines variables that apply globally to all hosts?

---

- `[all]` is a default group that automatically includes every host defined in the inventory.
- `:vars` suffix indicates that the section contains variables for the preceding group.
- `[all:vars]` is used to set variables that every host in the inventory should have access to.

---

- Example: `ansible_ssh_private_key_file` can be defined in `[all:vars]` to apply to all hosts.
- Variables can also be defined for more specific groups, e.g., `[app:vars]`.
