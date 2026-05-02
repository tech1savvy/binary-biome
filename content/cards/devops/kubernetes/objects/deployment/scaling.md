---
noteId: 1777728482297
---

### How do I scale a Deployment?

---

```bash
kubectl scale deployment/<name> --replicas=5
```

```bash
kubectl scale deployment/my-app --replicas=0     # Pause (down to zero)
kubectl scale deployment/my-app --replicas=10    # Scale up
```

Set a declarative replica count in the manifest:

```yaml
spec:
  replicas: 3
```

---

Scaling creates or terminates Pods to match the desired count. Use `kubectl autoscale` for automatic scaling based on CPU/memory.
