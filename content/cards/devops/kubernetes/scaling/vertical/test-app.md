---
noteId: 1778320499691
---

### How do I deploy a test app for VPA?

---

Create a deployment with low resource requests so VPA has something to adjust:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: vpa-demo
spec:
  replicas: 1
  selector:
    matchLabels:
      app: vpa-demo
  template:
    metadata:
      labels:
        app: vpa-demo
    spec:
      containers:
      - name: app
        image: nginx
        resources:
          requests:
            cpu: "50m"
            memory: "50Mi"
```

Apply:

```bash
kubectl apply -f deployment.yaml
```

Low requests let VPA demonstrate it can recommend higher values.
