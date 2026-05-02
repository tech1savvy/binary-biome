---
id: case
noteId: 1777728480033
---

How to implement conditional logic in Puppet manifests using case statements?

---

By using case statements to match a variable's value against several possible conditions.

### Syntax:
```puppet
case $variable {
  'value1': {
    # code for value1
  }
  'value2': {
    # code for value2
  }
  default: {
    # code for any other value
  }
}
```

### Example:
```puppet
case $facts['os']['family'] {
  'Debian': { package { 'apache2': ensure => installed } }
  'RedHat': { package { 'httpd': ensure => installed } }
  default:  { notify { 'Unsupported OS': } }
}
```
