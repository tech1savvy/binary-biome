---
noteId: 1778320499439
---

### What is a Role in Kubernetes?

---

Defines a set of permissions (verbs on resources) **within a single namespace**. Uses `apiGroups`, `resources`, and `verbs`.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: deploy-role
  namespace: staging
rules:
- apiGroups: ["apps"]
  resources: ["deployments"]
  verbs: ["get", "list", "create", "update", "patch", "delete"]
```

Imperative:

```bash
kubectl create role deploy-role \
  --namespace=staging \
  --verb=get,list,create,update,patch,delete \
  --resource=deployments.apps
```

```bash
kubectl get roles -n staging
kubectl describe role deploy-role -n staging
```

---

For cluster-wide permissions, use `ClusterRole`.
