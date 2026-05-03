---
noteId: 1777712113689
---


### How do you isolate resources within a Kubernetes cluster?

---

A **Namespace** isolates cluster resources into logical groups.

- Separate environments (dev/staging/prod), multi-tenant clusters, or team-level grouping
- Allows reusing the same resource name across different namespaces

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: staging
```

### Built-in namespaces

| Namespace | Purpose |
|---|---|
| `default` | Default for resources without a namespace |
| `kube-system` | Kubernetes system components |
| `kube-public` | Publicly accessible resources |

### Common operations

```bash
# List namespaces
kubectl get namespaces

# Create a resource in a specific namespace
kubectl apply -f manifest.yaml -n staging
```
