---
id: declaration
noteId: 1777728480265
---

What is the syntax for declaring a resource in a Puppet manifest?

---

```puppet
type { 'title':
  attribute => value,
  attribute => value,
}
```

---

- **type**: The kind of resource (e.g., `file`, `package`, `service`, `user`, `exec`).
- **title**: The name of the resource (e.g., a filename, package name, or service name).
- **attributes**: Properties that define the desired state of the resource (e.g., `ensure => 'installed'`, `content => '...'`).
