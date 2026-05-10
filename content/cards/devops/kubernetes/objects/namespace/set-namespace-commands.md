---
noteId: 1778320499165
---

### How do I set the namespace for a kubectl command imperatively?

---

Use the `-n` (or `--namespace`) flag to target a specific namespace without modifying manifests or changing the default.

```bash
kubectl create deployment my-app --image=nginx -n staging
kubectl get pods -n dev
kubectl apply -f manifest.yaml -n prod
```

---

Per-command namespace override. For a persistent default, see `set-default-namespace.md`.
