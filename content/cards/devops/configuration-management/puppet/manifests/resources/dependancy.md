---
id: dependency
aliases:
  - relationships
  - order
tags: []
noteId: 1777728480314
---

How to define dependencies between resources in Puppet?

---

```puppet
package { 'apache2':
  ensure => installed,
}

service { 'apache2':
  ensure => running,
  enable => true,
  require => Package['apache2'],  # dependency
}
```

- Use the `require` metaparameter to ensure the package is installed before managing the service.
- This first installs Apache, then ensures the service is running.
