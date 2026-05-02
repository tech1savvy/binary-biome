---
noteId: 1777712113764
---


### What is a Pod in Kubernetes?

---

The **smallest deployable unit** in Kubernetes. A Pod wraps one or more containers that share:

- Network namespace (same IP, can communicate via `localhost`)
- Storage volumes
- Lifecycle (started/stopped together)

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
```

---

- Even if you run a single container, Kubernetes still wraps it in a Pod.
- Pods are ephemeral in nature— they are created, scheduled, and destroyed as needed.

```bash
kubectl get pods
kubectl describe pod <pod-name>
kubectl logs <pod-name>
```
