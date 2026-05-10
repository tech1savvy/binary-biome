---
noteId: 1778320498940
---

### How do I update a Deployment image imperatively with kubectl?

---

```bash
kubectl set image deployment/<name> <container>=<image>:<tag>
```

```bash
kubectl set image deployment/my-app app=nginx:1.25
```

---

Updates the Pod template and triggers a rolling update. Each `set image` creates a new rollout revision.
