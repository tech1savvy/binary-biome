---
id: architecture
aliases: []
tags: []
noteId: 1777728479065
---

# Explain Puppet architecture

--

## Master-Slave (or Master-Agent)

- **Puppet Master**: is the main node that holds all configuration files.
  - i.e what to install, configure, etc.
- **Puppet Agent**: is any node that _pulls_ instructions from the master and applies them.

> "Agents (students) go to the master (teacher) every 30 minutes and ask, 'What should I do next?'"
