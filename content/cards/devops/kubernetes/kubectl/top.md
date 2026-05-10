---
noteId: 1777822470372
---

### How do I check resource usage of pods and nodes?

---

`kubectl top` shows real-time CPU and memory usage per pod or node (like the Unix `top` command):

```bash
kubectl top nodes       # resource usage per node
kubectl top pods        # resource usage per pod
```

---

In minikube, requires the `metrics-server` addon to be running.
