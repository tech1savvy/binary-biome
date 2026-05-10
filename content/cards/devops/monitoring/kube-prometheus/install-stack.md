---
noteId: 1778320499865
---

### How do I install kube-prometheus stack using Helm?

---

Add the Prometheus community repo and install:

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install kube-prometheus prometheus-community/kube-prometheus-stack -n monitoring --create-namespace
```

Verify pods are running:

```bash
kubectl get pods -n monitoring
```


