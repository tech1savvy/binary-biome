---
id: workflow
aliases: []
tags: []
noteId: 1777728479115
---

## How Puppet works end-to-end.

---

1. **Agent collects facts** via Facter:

- Facts are information describing the node in key/value pairs format: hostname, OS, IP address, network interfaces, memory, CPU, uptime, architecture.

2. **Agent sends facts to Puppet Master** and requests a catalog:

- A catalog is a document that defines the desired state of resources (files, services, users, packages, etc.) for a particular node.
- TLS Certificates ensure secure communication.

> If they are connecting for the first-time: agent generates a Certificate Signing Request (CSR) → master signs it → enables secure connection (handshake) for future communication.

3. **Master compiles catalog**:

- Catalog is compiled using manifests, modules (and, Hiera data).
- Puppet Master takes the node’s facts and compiles a catalog.

4. **Master sends signed catalog** to agent:

- Master sends the compiled catalog back to the agent.
- Catalog is digitally signed to prevent tampering.

5. **Agent applies catalog** to enforce the desired state:

- Agent reads the catalog and applies each resource on the node.
- Resources include packages, services, files, users, cron jobs.

6. **Agent sends report** back to master (optional storage in PuppetDB):

- After applying the catalog, the agent sends a report to the master.
- Reports include: changes made, resource state, errors, runtime stats.
