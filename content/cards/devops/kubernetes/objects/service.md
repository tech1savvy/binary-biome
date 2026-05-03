---
noteId: 1777712113790
---


### How do you expose Pods with a stable network endpoint?

---

A **Service** provides a stable IP/DNS endpoint that persists across Pod restarts, and load balances traffic to a set of Pods (selected by labels).

Pods are ephemeral -- destroyed and recreated with new IPs. The Service stays at the same address so clients never break.

**Service Type Hierarchy** (each builds on the last):

```
ClusterIP → NodePort → LoadBalancer
```

| Type | Scope | Builds On |
|---|---|---|
| `ClusterIP` | Internal only | base |
| `NodePort` | Node IP + static port | ClusterIP |
| `LoadBalancer` | Cloud LB with public IP | NodePort |

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector: # does not support complex matchLabels/matchExpressions
    app: nginx
  ports:
  - port: 80       # service port
    targetPort: 80 # pod port
```

```bash
kubectl get services
kubectl get svc
kubectl describe service <service-name>
```
