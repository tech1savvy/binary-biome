---
id: repository
noteId: 1777728480643
---

How to manage package repositories in Puppet?

---

- Use OS-specific resource types like `yumrepo` (for Red Hat-based systems) or `apt::source` (for Debian-based systems) to manage package repositories.
- Purpose: Add repositories for package installation.

---

To manage package repositories in Puppet on Debian-based systems, you use the `apt::source` defined resource type from the Puppet Apt module.

### Example to add an APT repository:

```puppet
apt::source { 'myrepo':
  location    => 'http://myrepo.example.com/debian',
  release     => 'buster',
  repos       => 'main',
  key         => {
    'id'     => 'ABC12345',
    'source' => 'http://myrepo.example.com/debian/repo.key',
  },
}
```

### Explanation:
- `location`: URL of the repository.
- `release`: distribution codename (e.g., buster, focal).
- `repos`: repository component (e.g., main, contrib).
- `key`: the GPG key details to authenticate packages from the repo.

After declaring this, Puppet will add the specified APT repository to the system's sources list and import the GPG key.

If the `apt` module is not installed, you can install it from Puppet Forge:

```shell
puppet module install puppetlabs-apt
```

This allows Puppet to manage APT package repositories declaratively.