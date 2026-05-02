---
noteId: 1777728482172
---

### What is a ConfigMap in Kubernetes?

---

Stores non-sensitive configuration as key-value pairs for Pods to consume.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  APP_ENV: production
  LOG_LEVEL: info
```

```bash
kubectl get configmaps
kubectl create configmap my-config --from-literal=KEY=value
kubectl describe configmap my-config
```

---

Stored as plain text in etcd. Max 1 MiB. Use Secrets for sensitive data.
