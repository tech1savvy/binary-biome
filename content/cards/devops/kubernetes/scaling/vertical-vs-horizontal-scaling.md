---
noteId: 1777822470845
---

### What is vertical vs horizontal scaling?

---

**Vertical scaling (scale up)**: Increase resources (CPU/RAM) per Pod. Limited by the node's maximum capacity.

**Horizontal scaling (scale out)**: Increase the number of Pod replicas. Pods distribute across nodes — preferred in Kubernetes since you can scale until you run out of nodes.

```
Vertical:   1 Pod  →  1 Pod (more CPU/RAM)
Horizontal: 1 Pod  →  3 Pods (same resources, more instances)
```

---

Horizontal is generally better in K8s — more resilient, no single point of failure, and scales beyond a single node's limits.
