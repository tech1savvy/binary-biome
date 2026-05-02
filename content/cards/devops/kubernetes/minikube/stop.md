---
noteId: 1777712113440
---

### How do I stop a running Minikube cluster without deleting it?

---

Gracefully shuts down the cluster, preserving all data:

```bash
minikube stop
```

Restore the cluster as-is:

```bash
minikube start
```

---

Use `stop` when done for the day.
