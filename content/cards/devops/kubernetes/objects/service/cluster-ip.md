---
noteId: 1777728482838
---

### What is a ClusterIP Service?

---

The default Service type. Exposes the Service on a cluster-internal IP, reachable only from within the cluster.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app
spec:
  type: ClusterIP
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 8080
```

---

Use for Pod-to-Pod communication inside the cluster. No external access.
