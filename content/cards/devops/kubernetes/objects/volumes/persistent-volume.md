---
noteId: 1777810378466
---

### What is a PersistentVolume (PV)?

---

- Cluster-wide storage resource created separately from Pods
- Can be provisioned **statically** (manually by admin) or **dynamically** (auto-created when a PVC requests storage)
- Prefer dynamic — less work, more flexible

```yaml
# Static PV (manually created by admin)
apiVersion: v1
kind: PersistentVolume
metadata:
  name: data-pv
spec:
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: /mnt/data
```

```bash
kubectl get pv
kubectl describe pv <name>
```

---

A PV is just storage — it exists independently of any Pod or claim. Think of it like a Node resource: cluster-level, not app-level.
