---
id: push-vs-pull-model
aliases: []
tags: []
noteId: 1777728479089
---

# Pull vs Push model

## Pull model

Every node has an agent that periodically contacts the central server (puppet-master) to request their desired configuration.

### Advantages

- Allows for automatic scheduled updates for large, continuously running environments with security and control.
- Scales well and can handle a large infrastructure.

### Disadvantages

- Harder to trigger immediate configuration updates which causes delay in applying urgent changes.

---

## Push model

An administrator node pushes commands or changes directly to nodes instantly (on demand).

### Advantages

- Allows real-time updates for ad-hoc changes.
- Easy to understand and use.

### Disadvantages

- Does not scale well for hundreds of nodes.
- Requires continuous availability of admin/central node.
