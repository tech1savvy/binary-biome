---
id: service
noteId: 1777728480685
---

How to ensure a service is running and enabled at boot in Puppet?

---

```puppet
service { 'nginx':
  ensure     => running,   # running, stopped
  enable     => true,      # true, false (start at boot)
  hasstatus  => true,      # true, false (whether the service has a status command)
  hasrestart => true,      # true, false (whether the service has a restart command)
  require    => Package['nginx'],   # Dependency
}
```

- Ensures the `nginx` service is running and enabled at boot.
