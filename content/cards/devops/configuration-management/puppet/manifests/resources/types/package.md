---
id: package
noteId: 1777728480621
---

How to ensure a package is installed in Puppet?

---

```puppet
package { 'nginx':
  ensure   => installed,   # installed / absent / latest / version number
  provider => 'apt',       # package manager (apt, yum, dnf, etc.)
  # source   => 'http://example.com/my_package.deb', # package path/URL
}
```

- Installs the `nginx` package if it is not already installed.
