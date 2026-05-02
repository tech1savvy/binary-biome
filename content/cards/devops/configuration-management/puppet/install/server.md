---
id: server
aliases: []
tags: []
forward:
  - "[agent](agent.md)"
noteId: 1777728479578
---

How to install puppet server?

---

sudo apt update
sudo nano /etc/hosts
<private ip of master> puppet
• Ctrl + s => save
• Ctrl + x => come out
wget https://apt.puppetlabs.com/puppet-release-bionic.deb
sudo dpkg -i puppet-release-bionic.deb
sudo apt-get install puppet-master
ask for y/n => type y
apt policy puppet-master
check status:
sudo systemctl status puppet-master.service
ctrl-c to exit
sudo nano /etc/default/puppet-master
add: JAVA_ARGS="-Xms512m -Xmx512m"
sudo systemctl restart puppet-master.service
sudo systemctl status puppet-master.service
