---
id: 01_getting_started
aliases: []
tags: []
noteId: 1777728479167
---

### Puppet Specific

- Puppet `DSL` = Puppet’s Domain-Specific Language.
- It’s the language you use to write Puppet manifests (configuration files).
- This DSL is _tailored **for describing system configuration rather than general-purpose programming**._

### puppet manifest.json , this does not exists, only .pp, json files are for ansible

- a simple example of nginx setup, config, and service running

  ```json
      node 'web01.example.com' {
          package { 'nginx':
              ensure => installed,
          }

          file { '/etc/nginx/nginx.conf':
              source  => 'puppet:///modules/nginx/nginx.conf',
              require => Package['nginx'],
          }

          service { 'nginx':
              ensure    => running,
              enable    => true,
              subscribe => File['/etc/nginx/nginx.conf'],
          }
      }
  ```

### Core Components of Puppet

- `puppet master` (puppetServer) :
  - The central server.
  - It compiles catalogs (plans of what each node should look like) based on your manifests and modules.
  - stores and serves config(`.pp` manifest files) to agents
  - Agents talk to it to get their instructions.

- `puppet agent (client)` :
  - Runs on each node (child server) we manage.
  - It contacts the Master (periodically), downloads its catalog, and applies the configuration locally.

- `manifest and modules` :
  - `Manifests`: Files with Puppet DSL code that declare resources (packages, services, files).
    - A blueprint of what u want in the server.

  - `Modules`: Reusable collections of manifests, templates, and files (like “packages” of configuration).
    - Makes configs reusable and shareable.

  - `Templates` : A template is a file with dynamic content, usually written in ERB (Embedded Ruby).
    - Lets you customize files based on node facts or variables.

      ```
          server {
              listen 80;
              server_name <%= @hostname %>;
          }
      ```

  - `files` : Files are static files that Puppet can copy directly to nodes.
    - Example: config files, certificates, scripts.

      ```
          file { '/etc/motd':
              source => 'puppet:///modules/mymodule/motd',
              ensure => file,
          }
      ```

  ```
      nginx/
      ├── manifests/
      │    └── init.pp
      ├── files/
      │    └── nginx.conf
      └── templates/
          └── site.erb
  ```

- `Facter` :
  - A small tool that collects system facts from the node (hostname, OS, IP, memory, etc.).
  - These facts can be used inside manifests (for conditional logic).

  > "Master writes the playbook, agents play the role."

- `Cetificate Authority (CA)` :
  - Built into Puppet Master.
  - It ensures secure, encrypted comms b/w master and agent.
  - Issues and manages TLS(transport layer security) certificates so the communication between agent and master is secure and trusted.(like signing a CSR sent from agent request)

  > "Like getting an ID card before entering a secure zone."

- `Catalog` :
  - A compiled, node-specific plan of resources created by the Master from your manifests.
  - It’s what the Agent actually applies on the node.

- `Fileserver` :
  - Lets you serve static files from the Master to Agents using puppet:/// URLs in manifests.
  - Example: source => 'puppet:///modules/nginx/nginx.conf'.

  ***

- `Hiera` :
  - A hierarchical key-value store for configuration data.
  - Lets you separate code from data, so you don’t hardcode values in manifests.

- `puppetDB` :
  - A database where Puppet stores facts, reports, and exported resources.
  - You can query it for information about all your nodes.

- `Orchestrator / Bolt` :
  - Tools for running ad-hoc or orchestration tasks (push-style).
  - Good for one-time fixes or triggering actions immediately instead of waiting for the pull cycle.

### Cycle

- Puppet runs are usually scheduled (every 30 minutes by default).
- Every run repeats these steps to ensure the node always matches the desired state.
- Deviations (configuration drift) are automatically corrected in the next run.

    <img src="../puppet/image/visual_master_slave.png" alt="Puppet" width="400" height="400">

- workflow (mental diagram)

  ```sql
      +------------------+
      |   Puppet Agent   |
      |   (on Node)      |
      +------------------+
          | Collects facts via Facter
          v
      +------------------+
      |  Facts (system)  |
      +------------------+
          | Sends facts + requests catalog
          v
      +------------------+
      |  Puppet Master   |
      |  (Server)        |
      +------------------+
          | Compiles catalog using:
          | - Manifests
          | - Modules
          | - Hiera data
          v
      +------------------+
      | Signed Catalog   |
      +------------------+
          | Sent back securely to agent
          v
      +------------------+
      |  Puppet Agent    |
      | Applies catalog  |
      | - Installs packages
      | - Updates config files
      | - Starts services
      +------------------+
          | Sends report back to Master
          v
      +------------------+
      | Puppet Master /  |
      | PuppetDB         |
      +------------------+
          |
          | Feedback / auditing / monitoring
          +-------------------->

  ```
