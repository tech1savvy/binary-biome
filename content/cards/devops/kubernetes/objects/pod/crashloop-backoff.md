---
noteId: 1777728482558
---

### What is CrashLoopBackOff?

---

Pod status when a container repeatedly crashes and Kubernetes restarts it with increasing delays between attempts (backoff).

```bash
kubectl get pods
# NAME    READY   STATUS             RESTARTS   AGE
# my-app  0/1     CrashLoopBackOff   5          3m
```

---

Kubernetes auto-restarts containers. Each crash increases the wait time before the next restart. Fix the root cause to stop the cycle.
