---
noteId: 1777728482281
---

### How do I rollback a Deployment to a previous version?

---

View rollout history:

```bash
kubectl rollout history deployment/<name>
```

Rollback to the previous revision:

```bash
kubectl rollout undo deployment/<name>
```

Rollback to a specific revision:

```bash
kubectl rollout undo deployment/<name> --to-revision=2
```

Check rollout status:

```bash
kubectl rollout status deployment/<name>
```

---

Each `kubectl apply` or `kubectl set image` creates a new revision. Rollbacks swap the Pod template back to the target revision and trigger a rolling update.
