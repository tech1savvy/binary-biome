---
id: cron
aliases: []
tags: []
noteId: 1777728480387
---

What is the purpose of the `cron` resource in Puppet?

---

- Schedule tasks with cron jobs.

### Example

```puppet
cron { 'backup':
  command => '/usr/bin/backup.sh',   # Command to run
  user    => 'root',                 # User who runs it
  minute  => '0',                    # 0–59, *
  hour    => '2',                    # 0–23, *
  month   => '*',                    # 1–12, *
  weekday => '*',                  # 0–6 (0=Sunday)
  ensure  => present,                # present / absent
}
```

### Extra: Understanding `*` in Cron

- The `*` (asterisk) character in cron fields means "every" or "any". For example, `minute => '*'` means the command will run every minute, and `hour => '*'` means it will run every hour.
