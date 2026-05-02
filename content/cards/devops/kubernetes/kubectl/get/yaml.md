---
noteId: 1777715168294
---

### How do I view a resource's full YAML manifest with kubectl?

---

```bash
kubectl get <resource> <name> -o yaml
```

```bash
kubectl get pod my-app-5d4b6c7f8-x9y2z -o yaml
kubectl get deployment my-app -o yaml
kubectl get service my-app -o yaml
```

---

Shows the complete live manifest including runtime fields like `status`, `managedFields`, and `uid`. Use `--export` to strip cluster-specific fields for reuse.
