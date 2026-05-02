---
id: define
noteId: 1777728480801
---

How can you store and reuse values in Puppet manifests?

---

By using variables.

### Syntax
```puppet
$variable_name = "value"
```

### Example
```puppet
$pkg = "nginx"

package { $pkg:
  ensure => installed,
}
```
