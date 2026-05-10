---
noteId: 1778320499715
---

### How do I check VPA recommendations?

---

Describe the VPA object after it collects enough metrics:

```bash
kubectl describe vpa vpa-demo
```

Look for recommendations like:

```
Recommendation:
  Container Recommendations:
    Container Name:  app
    Lower Bound:     cpu: 50m, memory: 50Mi
    Target:          cpu: 100m, memory: 120Mi
    Upper Bound:     cpu: 200m, memory: 256Mi
```

In `Auto` mode, the pod gets recreated with updated resources. Watch it happen:

```bash
kubectl get pods -w
```
