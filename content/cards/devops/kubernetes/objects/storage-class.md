---
noteId: 1778320499290
---

### What is a StorageClass?

---

Defines **how** storage is dynamically provisioned in Kubernetes.

- Tells the cluster which provisioner to use (e.g., AWS EBS, Minikube hostpath)
- PVCs reference a StorageClass to automatically create a matching PV
- No manual PV creation needed — the provisioner handles it

Key fields:

| Field | Purpose |
|---|---|
| `provisioner` | Driver that creates the volume |
| `reclaimPolicy` | What happens to PV when PVC is deleted (`Delete` or `Retain`) |
| `volumeBindingMode` | When the volume is provisioned (`Immediate` or `WaitForFirstConsumer`) |
