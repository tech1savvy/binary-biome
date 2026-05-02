---
noteId: 1777712113415
---

### How do I check the status of my Minikube cluster?

---

```bash
minikube status
```

Output:

```
minikube
  type: Control Plane
  host: Running
  kubelet: Running
  apiserver: Running
  kubeconfig: Configured
```

All components must show `Running` before using `kubectl`.
