---
noteId: 1778320499465
---

### What is a RoleBinding in Kubernetes?

---

Grants the permissions of a `Role` or `ClusterRole` to a user, group, or ServiceAccount **within a namespace**.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: deploy-binding
  namespace: staging
subjects:
- kind: ServiceAccount
  name: deployer
  namespace: staging
roleRef:
  kind: Role
  name: deploy-role
  apiGroup: rbac.authorization.k8s.io
```

Imperative:

```bash
# Bind a Role to a ServiceAccount
kubectl create rolebinding deploy-binding \
  --namespace=staging \
  --role=deploy-role \
  --serviceaccount=staging:deployer

# Bind a ClusterRole to a User
kubectl create rolebinding dev-binding \
  --namespace=dev \
  --clusterrole=edit \
  --user=dev-user
```

```bash
kubectl get rolebindings -n staging
kubectl describe rolebinding deploy-binding -n staging
```

---

RoleBinding always lives in a namespace. Use `ClusterRoleBinding` for cluster-wide grants.
