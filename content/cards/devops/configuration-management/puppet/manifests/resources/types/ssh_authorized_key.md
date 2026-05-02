---
id: ssh_authorized_key
noteId: 1777728480699
---

What is the purpose of the `ssh_authorized_key` resource in Puppet?

---

- Manage SSH keys for users.

### Example

```puppet
ssh_authorized_key { 'john@laptop':
  key  => 'ssh-rsa AAAA...',
  user => 'john',
}
```
