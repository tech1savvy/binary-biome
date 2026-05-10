---
noteId: 1777822470546
---

### How do you set a default namespace for kubectl?

---

Avoid typing `-n <namespace>` on every command by setting the default namespace for your current context:

```bash
kubectl config set-context --current --namespace=staging
```

Verify it worked:

```bash
kubectl config view --minify | grep namespace
```

---

Resets to `default` when you switch contexts or run:
```bash
kubectl config set-context --current --namespace=default
```
