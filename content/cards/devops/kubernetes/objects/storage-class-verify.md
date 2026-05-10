---
noteId: 1778320499266
---

### How do I verify dynamic provisioning worked?

---

After creating a PVC referencing a StorageClass:

```bash
kubectl get pvc
kubectl get pv
```

Expected:

- PVC → `Bound`
- PV → dynamically created (name like `pvc-xxxxx`)

The PV is auto-created by the StorageClass provisioner — no manual PV needed.
