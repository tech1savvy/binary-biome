---
id: exec
noteId: 1777728480397
---

What is the purpose of the `exec` resource in Puppet?

---

- Execute a command or script.

### Example

```puppet
exec { 'update_system':
  command     => '/usr/bin/apt-get update',   # shell cmd to run
  path        => ['/usr/bin', '/usr/sbin'],   # array of paths (e.g., ['/usr/bin'])
  creates     => '/var/log/update_ran',       # file path to create at, usually log
  onlyif      => '/usr/bin/test -f /tmp/flag', # run only if condition true
  unless      => '/usr/bin/test -f /tmp/done', # skip if condition true
  refreshonly => true,                        # true, false
}
```
