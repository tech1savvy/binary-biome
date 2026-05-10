---
noteId: 1778320499591
---

### How do I create a VPA object?

---

Define a VPA targeting your deployment:

```yaml
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: vpa-demo
spec:
  targetRef:
    apiVersion: "apps/v1"
    kind: Deployment
    name: vpa-demo
  updatePolicy:
    updateMode: "Auto"
```

Apply:

```bash
kubectl apply -f vpa.yaml
```

Update modes:

| Mode | Behavior |
|---|---|
| `Auto` | Pods are recreated automatically with new resources |
| `Recreate` | Pods are restarted when recommendations change |
| `Initial` | Resources applied only on pod creation |
| `Off` | Only provides recommendations, no updates |
