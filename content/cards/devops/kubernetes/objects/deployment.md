---
noteId: 1777712113565
---


### How do you manage replica sets and declarative updates to Pods?

---

A **Deployment** manages Pods via ReplicaSets and enables declarative updates.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:                        # Labels the Deployment itself (filtering/org)
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:                 # "Manage Pods with these labels" (required match)
      app: nginx
  template:
    metadata:
      labels:                    # Gives Pods their identity (must match selector)
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.25
```

## Key features

- **Declarative**: Define desired state, K8s makes it happen
- **Rolling updates**: Zero-downtime deployments by default
- **Rollback**: Each update is versioned -- revert to any previous revision
- **Scaling**: Change replica count up or down

```bash
kubectl get deployments
kubectl rollout status deployment/<name>
```
