---
noteId: 1777728482864
---

## What is an ExternalName Service?

---

Maps a Service to an external DNS name using a CNAME record. No selector or endpoints needed.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-database
spec:
  type: ExternalName
  externalName: db.example.com
```

---

Use to abstract external dependencies so in-cluster apps reference them like internal services (`my-database.default.svc.cluster.local`).
