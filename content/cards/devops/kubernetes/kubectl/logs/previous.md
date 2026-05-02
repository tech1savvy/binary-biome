---
noteId: 1777715168418
---

### How do I view logs from a previous crashed container?

---

```bash
kubectl logs <pod-name> --previous
```

```bash
kubectl logs my-app-5d4b6c7f8-x9y2z --previous
kubectl logs my-app-5d4b6c7f8-x9y2z --previous -c sidecar
```

---

Essential for debugging `CrashLoopBackOff` pods. Only works when a container has restarted.
