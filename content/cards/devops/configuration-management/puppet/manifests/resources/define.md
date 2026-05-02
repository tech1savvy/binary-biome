---
id: define
noteId: 1777728480275
---

What are Resources in Puppet?

---

In Puppet, a resource is the basic unit of configuration. It represents something you want to manage on a system such as:

- **File**
- **Package**
- **Service**
- **User / Group**
- **Exec** → running a command or script

---

- Puppet manages these resources by ensuring they are always in the desired state you declare in the manifest.
- **File** → `/etc/hosts`, `/tmp/test.txt`
- **Package** → `nginx`, `apache2`, `mysql`
- **Service** → `nginx`, `sshd`