---
id: structure
noteId: 1777728480903
---

What is the basic structure of a Puppet module?

---

- **my_module/ (root folder)**: The main directory named after the module.
- **manifests/**: Contains Puppet manifests (.pp files). The `init.pp` file here defines the main class of the module.
- **files/**: Stores static files that the module can distribute to nodes.
- **templates/**: Contains ERB or EPP templates for generating dynamic configuration files.
- **metadata.json**: A JSON file that describes the module (name, author, version, dependencies).

---

Additional optional directories may include:
- **data/**: for parameter data (Hiera data)
- **examples/**: example usage manifests
- **tasks/**: Puppet tasks
- **spec/**: unit tests
- **lib/**: custom Ruby code or custom Puppet types and facts
