---
id: define
forward:
  - "[creation](creation.md)"
noteId: 1777728480875
---

What is a Puppet module?

---

- A self-contained, reusable bundle of Puppet code and data that manages a specific task, like installing and configuring software.
- They are the basic building blocks for organizing and sharing Puppet code.

---

- **Contents**: Modules can contain manifests (with classes and defined types), files, templates, tasks, and other plugins.
- **Structure**: They follow a specific directory structure, typically with a `manifests` directory containing an `init.pp` file for the main class.
- **Distribution**: Modules can be downloaded from the [Puppet Forge](https://forge.puppet.com/) or written manually.
