---
noteId: 1778320498691
---

### How do I create a new context in kubeconfig?

---

A context ties a **cluster**, **user**, and **namespace** together.

```bash
kubectl config set-context <context-name> \
  --cluster=<cluster-name> \
  --user=<user-name> \
  --namespace=<namespace>
```

```bash
kubectl config set-context dev-context \
  --cluster=minikube \
  --user=dev-user \
  --namespace=dev
```

---

After creating, use `kubectl config use-context <name>` to switch to it.
