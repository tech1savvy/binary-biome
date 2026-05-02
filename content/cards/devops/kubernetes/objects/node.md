---
noteId: 1777712113716
---


### What is a Node in Kubernetes?

---

A **Node** is a worker machine (physical or virtual) that runs Pods. Each node has:

- **kubelet** — agent that communicates with the control plane
- **Container runtime** — Docker, containerd, CRI-O, etc.
- **kube-proxy** — handles networking rules

```bash
# List all nodes
kubectl get nodes

# Detailed node info
kubectl describe node <node-name>
```

## Node conditions

| Condition | Meaning |
|---|---|
| `Ready` | Node is healthy and can accept Pods |
| `MemoryPressure` | Node memory is low |
| `DiskPressure` | Node disk space is low |
| `PIDPressure` | Too many processes running |

## Key insight

You don't directly schedule Pods to nodes. The **scheduler** decides placement based on resources, affinity rules, and taints/tolerations.
