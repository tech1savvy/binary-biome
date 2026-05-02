---
id: apache
aliases: []
tags: []
noteId: 1777728479289
---

How to define an Apache class in Puppet to install the package, ensure the service is running, and deploy a custom `index.html`?

---

### Puppet Class Definition

This Puppet code defines an `apache` class that installs the `apache2` package, ensures the `apache2` service is running and enabled, and deploys a custom `index.html` file to `/var/www/html/`.

```puppet
class apache {
  # Install Apache package
  package { 'apache2':
    ensure => installed,
  }
  # Ensure service is running
  service { 'apache2':
    ensure => running,
    enable => true,
    require => Package['apache2'],
  }
  # Deploy a custom index.html from module files
  file { '/var/www/html/index.html':
    ensure  => file,
    source  => 'puppet:///modules/apache/index.html',
    require => Package['apache2'],
  }
}
```

```html
<h1>Welcome to Apache Server !</h1>
```

### Applying the Puppet Manifest

To apply the defined Apache class, use the `puppet apply` command with the `--modulepath` flag to specify the location of your modules.

```bash
sudo puppet apply --modulepath=modules -e 'class { "apache": }'
```

```
Notice: Compiled catalog for puppet-agent.local in environment production in 0.18 seconds
Notice: /Stage[main]/Apache/Package[apache2]/ensure: created
Notice: /Stage[main]/Apache/File[/var/www/html/index.html]/content: content changed '{sha256}6faef4d5d777fdcaa653766b0ac8b9ed32d0fd87f7dcd79f02ff524dd1b0eb69' to '{sha256}379099e7000ceb31e1d2de0c817c6d245ba327e73e57a81c6aeaeae18b7e8e05'
Notice: Applied catalog in 15.06 seconds
```

### Verification

After applying the manifest, you can verify the Apache installation and the deployed `index.html` using the following commands.

```bash
which apache2
```

```
/usr/sbin/apache2
```

```bash
curl http://localhost/
```

```
<h1>Welcome to My Apache Server</h1>
```

### Module Structure

This `tree` command shows the expected directory structure for the Puppet modules, including the `apache` module with its `files` and `manifests` subdirectories.

```bash
tree
```

```
.
└── modules
    ├── apache
    │   ├── files
    │   │   └── index.html
    │   └── manifests
    │       └── init.pp
    └── hello
        └── manifests
            └── init.pp

7 directories, 3 files
```
