---
noteId: 1777728482904
---

### What is a NodePort Service?

---

Exposes the Service on a static port (30000-32767) on each Node's IP, reachable externally.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app
spec:
  type: NodePort
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 8080
    nodePort: 30007
```

---

Use for quick external access or on-prem clusters without cloud load balancers. The port is accessible at `<NodeIP>:<nodePort>`.
