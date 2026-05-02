---
id: agent
aliases: []
tags: []
noteId: 1777728479522
---

# Update and Upgrade APT

```bash
sudo apt update
```

    • sudo nano /etc/hosts
    • <private ip of master> puppet
    • Ctrl + s  => save
    • Ctrl + x => come out
    • wget https://apt.puppetlabs.com/puppet-release-bionic.deb
    • sudo dpkg -i puppet-release-bionic.deb
    • sudo apt-get install puppet
    • sudo systemctl start puppet
    • sudo systemctl enable puppet

# Install Package

```bash
sudo apt install puppet-agent
```

# Start the puppet service & Make it auto-start on startup

```bash
sudo systemctl start puppet
sudo systemctl enable puppet
sudo systemctl status puppet
```
