---
id: apache
aliases: []
tags: []
noteId: 1777728479414
---

How to define an Apache class in Puppet to install the package, ensure the service is running, and deploy a custom `index.html`?

---

#### Puppet Class Definition

> `/etc/puppet/code/environments/production/modules/apache/manifests/init.pp`

```puppet
class apache {
  package { 'apache2':
    ensure => installed,
  }

  service { 'apache2':
    ensure => running,
    enable => true,
    require => Package['apache2'],
  }

  file { '/var/www/html/index.html':
    ensure  => file,
    source  => 'puppet:///modules/apache/index.html',
    require => Package['apache2'],
  }
}
```

#### Custom `index.html`

> `/etc/puppet/code/environments/production/modules/apache/files/index.html`

```html
<h1>Welcome to Apache Server !</h1>
```

#### Including the Class

> `/etc/puppet/code/environments/production/manifests/site.pp`

```puppet
include apache
```

#### Directory Structure

```bash
tree
```

```
.
└── modules
    ├── apache
    │   ├── files
    │   │   └── index.html
    │   └── manifests
    │       └── init.pp
    └── hello
        └── manifests
            └── init.pp
```

---
