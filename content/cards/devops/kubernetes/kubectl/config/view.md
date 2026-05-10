---
noteId: 1778320498790
---

### How do I view the current kubeconfig?

---

```bash
kubectl config view
kubectl config view --minify        # current context only
kubectl config view --raw           # full merged config
```

---

Kubeconfig lives at `$KUBECONFIG` (default: `~/.kube/config`). Multiple files can be merged with `KUBECONFIG=file1:file2`.
