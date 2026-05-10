---
id: handler
aliases: []
tags: []
backward:
  - "[task-define](task-define.md)"
forward: []
noteId: 1777823456396
---

What is an Ansible Handler?

---

A special kind of task that only runs when notified by another task. Handlers are automatically executed at the end of the play, after all other tasks have been completed.

---

A task notifies a handler by name. If the handler is notified, it will run at the end of the play.
Handlers are defined in a `handlers` block.
This example shows how to reload UFW when a rule is changed.

```yaml
# roles/ufw/handlers/main.yml
---
- name: reload ufw
  ufw:
    state: reloaded
```

```yaml
# roles/ufw/tasks/main.yml
---
- name: Allow SSH in UFW
  ufw:
    rule: allow
    name: OpenSSH
```
