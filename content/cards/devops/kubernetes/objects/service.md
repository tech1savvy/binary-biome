---
noteId: 1777712113790
---


### How do you expose Pods with a stable network endpoint?

---

A **Service** provides a stable IP/DNS endpoint that persists across Pod restarts, and load balances traffic to a set of Pods (selected by labels).

Pods are ephemeral -- destroyed and recreated with new IPs. The Service stays at the same address so clients never break.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - port: 80
    targetPort: 80
```

```bash
kubectl get services
kubectl get svc
kubectl describe service <service-name>
```
