---
id: define
aliases: []
tags: []
noteId: 1777728479189
---

# What is Puppet?

---

- Puppet is an open-source declarative configuration management software.
- We define the desired state of servers and services (packages,files,users, services) in code.
- Puppet can enforces states across many machines, auto-heal states, and report results.

- Example:
  - You say: "Ensure Apache is installed."
  - Puppet ensures Apache is present — doesn’t reinstall if already there.

- Uses `master-agent (pull)` model.
