---
noteId: 1778320499615
---

### How do I enable metrics-server for VPA in Minikube?

---

Start Minikube and enable the metrics-server addon:

```bash
minikube start
minikube addons enable metrics-server
```

Verify metrics-server is running:

```bash
kubectl get pods -n kube-system
```

Look for the `metrics-server` pod in the output.
