---
id: user
noteId: 1777728480728
---

What is the purpose of the `user` resource in Puppet?

---

- Manage system users.

### Example

```puppet
user { 'john':
  ensure     => present,         # present / absent
  uid        => '1001',          # numeric IDs
  gid        => '1001',          # numeric IDs
  home       => '/home/john',    # path (e.g., /home/john)
  shell      => '/bin/bash',     # /bin/bash, /bin/sh
  password   => '$6$salt$encryptedpassword', # encrypted string
  managehome => true,            # Create home directory if missing
}
```
