---
noteId: 1778320499415
---

### What is a ClusterRoleBinding in Kubernetes?

---

Grants the permissions of a `ClusterRole` **cluster-wide** to a user, group, or ServiceAccount.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-binding
subjects:
- kind: User
  name: alice
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: cluster-admin
  apiGroup: rbac.authorization.k8s.io
```

Imperative:

```bash
# Bind a ClusterRole to a User
kubectl create clusterrolebinding admin-binding \
  --clusterrole=cluster-admin \
  --user=admin-user

# Bind a ClusterRole to a ServiceAccount
kubectl create clusterrolebinding deployer-binding \
  --clusterrole=cluster-admin \
  --serviceaccount=staging:deployer
```

```bash
kubectl get clusterrolebindings
kubectl describe clusterrolebinding admin-binding
```

---

ClusterRoleBinding is cluster-scoped (no namespace). Grants apply across **all** namespaces.
