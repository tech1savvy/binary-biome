---
noteId: 1778320498741
---

### How do I switch between contexts with kubectl?

---

```bash
kubectl config use-context <context-name>
```

```bash
kubectl config use-context dev-context
kubectl config use-context admin-context
```

---

Verify with `kubectl config current-context`. The active context is marked with `*` in `kubectl config get-contexts`.
