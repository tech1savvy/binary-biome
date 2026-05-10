---
noteId: 1778320499389
---

### What is a ClusterRole in Kubernetes?

---

Like a `Role`, but **cluster-wide** — can grant permissions on cluster-scoped resources (Nodes, Namespaces) or all namespaces.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: node-reader
rules:
- apiGroups: [""]
  resources: ["nodes"]
  verbs: ["get", "list", "watch"]
```

Imperative:

```bash
kubectl create clusterrole node-reader \
  --verb=get,list,watch \
  --resource=nodes
```

```bash
kubectl get clusterroles
kubectl describe clusterrole node-reader
```

---

`ClusterRole` can also be used with `RoleBinding` to grant namespaced permissions from a shared cluster-wide definition.
