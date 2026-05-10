---
id: facts
aliases: []
tags: []
noteId: 1777823456346
---

What are Ansible facts and how are they used?

---

- Ansible facts are automatically gathered information about remote systems (OS, IP, hardware, etc.).
- They are collected at the beginning of a playbook run (unless disabled).
- Used for dynamic configuration and decision-making in playbooks.

---

- Check Ansible facts values before playbooks execution using:

```sh
`ansible -m setup -i inventory.ini <hostname>`
```
