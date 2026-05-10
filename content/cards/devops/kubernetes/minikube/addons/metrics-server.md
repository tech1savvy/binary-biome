---
noteId: 1777822470446
---

### How do I enable metrics in Minikube?

---

```bash
minikube addons enable metrics-server
```

---

The `metrics-server` addon is required for `kubectl top` commands (nodes, pods). Verify it's running:

```bash
kubectl top nodes
kubectl top pods
```
