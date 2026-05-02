---
noteId: 1777712113689
---


### How do you isolate resources within a Kubernetes cluster?

---

A **Namespace** provides a logical isolation boundary. Resources in different namespaces are separated but can still communicate.

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: staging
```

## Built-in namespaces

| Namespace | Purpose |
|---|---|
| `default` | Default for resources without a namespace |
| `kube-system` | Kubernetes system components |
| `kube-public` | Publicly accessible resources |
| `kube-node-lease` | Node heartbeat leases |

## Common operations

```bash
# List namespaces
kubectl get namespaces

# Create a resource in a specific namespace
kubectl apply -f manifest.yaml -n staging

# Set default namespace for current context
kubectl config set-context --current --namespace=staging
```

## When to use

Separate environments (dev/staging/prod), multi-tenant clusters, or team-level resource grouping.
