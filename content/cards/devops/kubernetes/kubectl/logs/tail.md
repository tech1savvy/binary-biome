---
noteId: 1777715168498
---

### How do I view only the last N lines of a Pod's logs?

---

```bash
kubectl logs <pod-name> --tail=<number>
```

```bash
kubectl logs my-app-5d4b6c7f8-x9y2z --tail=100
kubectl logs my-app-5d4b6c7f8-x9y2z --tail=50 -c sidecar
```

---

Faster than dumping full logs. Combine with `-c` for multi-container pods.
