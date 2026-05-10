---
noteId: 1778320499491
---

### What is a ServiceAccount in Kubernetes?

---

An identity for pods and processes to authenticate against the Kubernetes API. Every pod runs as a ServiceAccount (defaults to `default`).

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: deployer
  namespace: staging
```

```bash
kubectl create serviceaccount deployer -n staging
kubectl get serviceaccounts -n staging
```

---

Mounted into pods as a token at `/var/run/secrets/kubernetes.io/serviceaccount/`. Permissions are granted via RoleBinding/ClusterRoleBinding.
