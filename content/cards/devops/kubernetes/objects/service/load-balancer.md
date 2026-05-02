---
noteId: 1777728482875
---

### What is a LoadBalancer Service?

---

Provisions an external cloud load balancer that routes traffic to the Service.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app
spec:
  type: LoadBalancer
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 8080
```

---

Use for production external access on cloud providers (AWS, GCP, Azure). The cloud LB gets its own public IP.
