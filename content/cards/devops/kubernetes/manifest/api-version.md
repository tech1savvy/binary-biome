---
noteId: 1777728481741
---

### What is `apiVersion` in a Kubernetes manifest?

---

Specifies the version of the Kubernetes API used to create the object:

```yaml
apiVersion: apps/v1
```

```yaml
apiVersion: v1          # Pods, Services, Namespaces
apiVersion: apps/v1     # Deployments, ReplicaSets, StatefulSets
apiVersion: networking.k8s.io/v1  # Ingress
```

---

Using the wrong version causes `no matches for kind` errors on `apply`. Check the [API reference](https://kubernetes.io/docs/reference/kubernetes-api/) for the correct version per resource type.
