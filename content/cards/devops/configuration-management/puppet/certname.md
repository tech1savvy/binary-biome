---
id: certname
aliases: []
tags: []
noteId: 1777728479139
---

# Puppet Certname Configuration

This document outlines how to configure the `certname` for Puppet agents and masters, including steps for older Puppet versions.

## Master Configuration

Edit the Puppet configuration file on the master:

```sh
sudo nano /etc/puppet/puppet.conf
```

Add or modify the `certname` in the `[main]` section:

```conf
[main]
ssldir = /var/lib/puppet/ssl
certname = agent.local # Set the certname for this master

[master]
vardir = /var/lib/puppet
cadir  = /var/lib/puppet/ssl/ca
dns_alt_names = puppet
```

## Agent Configuration

Edit the Puppet configuration file on the agent:

```sh
sudo nano /etc/puppet/puppet.conf
```

Add or modify the `certname` in the `[main]` section:

```conf
[main]
ssldir = /var/lib/puppet/ssl
certname = agent.local # Set the certname for this agent

[master]
vardir = /var/lib/puppet
cadir  = /var/lib/puppet/ssl/ca
dns_alt_names = puppet
```

## Steps for Older Puppet Versions (Certificate Signing)

For older Puppet versions, manual certificate signing might be required.

### On the Agent

1.  **Generate CSR and Request Signing:**
    Run the following command on the agent. If no certificate exists, this will generate a new certificate signing request (CSR) and send it to the master.

    ```sh
    puppet agent --test
    ```

### On the Master

1.  **List Pending Certificate Signing Requests:**
    Run this command on the master to see agents waiting for their certificates to be signed.

    ```sh
    puppet cert list --all
    ```

2.  **Sign the Agent's Certificate:**
    Sign the certificate for the specific agent. Replace `agent.local` with the actual certname of your agent.

    ```sh
    puppet cert sign agent.local
    ```

    Alternatively, to sign all pending certificates:

    ```sh
    puppet cert sign --all
    ```

### On the Agent (Final Step)

1.  **Retrieve Signed Certificate:**
    Run the `puppet agent --test` command again on the agent. This time, the agent will retrieve its signed certificate and establish a trusted connection with the master.

    ```sh
    puppet agent --test
    ```
