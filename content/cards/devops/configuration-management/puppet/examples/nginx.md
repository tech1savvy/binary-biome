---
id: nginx
noteId: 1777728479446
---

How to define an Nginx class in Puppet to install the package, ensure the service is running, and deploy a custom `index.html`?

---

```puppet
class nginx {
  # Install nginx package
  package { 'nginx':
    ensure => installed,
  }

  # Ensure nginx service is running and enabled
  service { 'nginx':
    ensure => running,
    enable => true,
    require => Package['nginx'],
  }

  # Deploy a custom index.html from module files
  file { '/var/www/html/index.html':
    ensure  => file,
    source  => 'puppet:///modules/nginx/index.html',
    require => Package['nginx'],
    notify  => Service['nginx'],
  }
}
```