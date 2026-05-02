---
id: firewall
noteId: 1777728480470
---

How to allow a port using the Puppet `firewall` resource?

---

```puppet
firewall { '100 allow port 8000':
  proto  => 'tcp',
  dport  => 8000,
  action => 'accept',
}
```

---

### Explanation:
- `proto => 'tcp'` specifies the protocol.
- `dport => 8000` specifies the destination port to allow.
- `action => 'accept'` allows traffic on that port.
- The title `'100 allow port 8000'` starts with a number to order this rule among others (lower numbers run first).

Include this rule in your firewall class or manifest, then apply the configuration on the agent with `puppet agent -t`.

This will open TCP port 8000 on the node managed by Puppet using the firewall module.


