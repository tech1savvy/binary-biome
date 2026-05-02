---
id: file
noteId: 1777728480460
---

How to manage a file and its content in Puppet?

---

```puppet
file { '/tmp/hello.txt':
  ensure  => present,         # present / absent / file / directory / link
  content => "Hello Puppet",  # text inside file
  source  => 'puppet:///modules/mymodule/hello.txt', # file path or URL (puppet:///, http://)
  mode    => '0644',          # file permissions (0644, 0755)
  owner   => 'root',          # username (e.g., root)
  group   => 'root',          # group name (e.g., admin)
  recurse => true,            # true, false (apply same settings to all subdirectories if true)
}
```

- Ensures `/tmp/hello.txt` exists with the given content.