---
noteId: 1778320499515
---

### What is RBAC in Kubernetes?

---

**Role-Based Access Control** controls *who can do what* on cluster resources via API authorization.

Core objects:
- `ServiceAccount` — identity for pods/processes (namespace-scoped)
- `Role` / `ClusterRole` — define permissions (verbs on resources)
- `RoleBinding` / `ClusterRoleBinding` — grant those permissions to identities

```bash
kubectl get serviceaccounts
kubectl get roles,clusterroles
kubectl get rolebindings,clusterrolebindings
```

---

Without RBAC rules, a ServiceAccount has **no permissions by default**.
