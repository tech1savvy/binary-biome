---
noteId: 1777715168103
---

### How do I get detailed information about a Kubernetes resource?

---

```bash
kubectl describe <resource-type> <resource-name>
```

```bash
kubectl describe pod my-app-5d4b6c7f8-x9y2z
kubectl describe deployment my-app
kubectl describe node worker-1
```

---

Shows events, conditions, and full configuration. Essential for debugging pods stuck in `Pending` or `CrashLoopBackOff`.
