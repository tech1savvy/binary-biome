---
id: mount-basic-use
aliases: []
tags: []
noteId: 1777823475372
---

How to manually mount a storage device to a directory in Linux?

---

1. Create a mount point:

```sh
sudo mkdir /mnt/mydrive
```

2. Mount the device (e.g., `/dev/sdb1`) to the mount point:

```sh
sudo mount /dev/sdb1 /mnt/mydrive
```

---

After this, the files on `/dev/sdb1` will be accessible under `/mnt/mydrive` until the device is unmounted or the system is rebooted.
This is the fundamental operation of attaching a file system to the existing directory tree on Linux using the `mount` command.
