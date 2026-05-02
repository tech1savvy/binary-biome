---
noteId: 1777728481817
---

### What is `status` in a Kubernetes manifest?

---

Shows the current observed state of the resource. Populated and maintained by Kubernetes -- **you never edit this**:

```yaml
status:
  availableReplicas: 3
  readyReplicas: 3
  replicas: 3
  updatedReplicas: 3
```

---

Read-only. Use `kubectl get <resource> -o yaml` or `kubectl describe <resource>` to inspect it.
