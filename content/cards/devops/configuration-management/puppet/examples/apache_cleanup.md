---
id: apache_cleanup
noteId: 1777728479264
---

What is the purpose of the `apache_cleanup` class in Puppet?

---

The `apache_cleanup` class ensures the removal of Apache-related components:
- Uninstalls the `apache2` package.
- Stops and disables the `apache2` service.
- Deletes the `/var/www/html/index.html` file.

---

**Puppet Code:**
```puppet
class apache_cleanup {
  package { 'apache2':
    ensure => absent,
  }
  service { 'apache2':
    ensure => stopped,
    enable => false,
  }
  file { '/var/www/html/index.html':
    ensure => absent,
  }
}
```