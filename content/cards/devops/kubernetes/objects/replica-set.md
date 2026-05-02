---
noteId: 1777715168615
---

### What is a ReplicaSet in Kubernetes?

---

Maintains a stable set of replica Pods running at any given time. Ensures the desired number of Pods matches the actual running count.

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: my-app-rs
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: app
        image: nginx:latest
```

---

Deployments manage ReplicaSets for you -- think of a Deployment as a wrapper. You will rarely use ReplicaSets directly.
