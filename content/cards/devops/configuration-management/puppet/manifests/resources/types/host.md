---
id: host
noteId: 1777728480534
---

What is the purpose of the `host` resource in Puppet?

---

- Manage entries in /etc/hosts.

### Example

```puppet
host { 'myserver':
  ip           => '192.168.1.10',   # IP address
  host_aliases => ['myserver_alias'], # list of alternate names
  ensure       => present,          # present / absent
}
```
