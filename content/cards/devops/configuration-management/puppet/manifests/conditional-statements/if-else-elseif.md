---
id: if-else-elseif
noteId: 1777728480049
---

How to implement conditional logic in Puppet manifests using if-else-elseif statements?

---

By using conditional statements (if/elsif/else) to control resource application based on facts or variables.

### Syntax:
```puppet
if <condition> {
  # code to execute if condition is true
} elsif <another_condition> {
  # code to execute if another_condition is true
} else {
  # code to execute if no conditions are true
}
```

### Example:
```puppet
if $facts['os']['family'] == 'Debian' {
  package { 'apache2': ensure => installed }
} elsif $facts['os']['family'] == 'RedHat' {
  package { 'httpd': ensure => installed }
} else {
  notify { 'Unsupported OS':
    message => "This OS family is not explicitly supported: ${facts['os']['family']}",
  }
}
```
