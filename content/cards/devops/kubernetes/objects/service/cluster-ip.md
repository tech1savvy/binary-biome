---
noteId: 1777728482838
---

### What is a ClusterIP Service?

---

Exposes the Service on a cluster-internal IP, reachable only from within the cluster.
- The default Service type. If no type is mentioned ClusterIP is created.

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
