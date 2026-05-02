---
noteId: 1777728482704
---

### What is a Secret in Kubernetes?

---

Stores sensitive data (passwords, tokens, keys) base64-encoded for Pods to consume.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-credentials
type: Opaque
data:
  username: YWRtaW4=        # base64 encoded
  password: c3VwZXJzZWNyZXQ=
```

```bash
kubectl get secrets
kubectl create secret generic my-secret --from-literal=key=value
```

---

Base64 encoding is NOT encryption -- it just prevents accidental exposure in terminals. Enable etcd encryption at rest for real security. Max 1 MiB.
