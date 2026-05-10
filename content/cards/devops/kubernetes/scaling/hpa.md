---
noteId: 1777822470821
---

### What is a Horizontal Pod Autoscaler (HPA)?

---

Automatically scales the number of Pods in a Deployment based on observed metrics (CPU, memory, or custom metrics).

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: web-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: web-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

```bash
kubectl get hpa
kubectl describe hpa <name>
```

---

In Minikube, requires the `metrics-server` addon.
