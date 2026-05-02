---
noteId: 1777712113065
---

### What is kubectl?

---

The Kubernetes command-line tool for running commands against clusters. It is a client that communicates with the Kubernetes API server.

```bash
kubectl get pods           # List pods
kubectl apply -f app.yaml  # Deploy resources
kubectl logs <pod-name>    # View pod logs
```

---

All kubectl operations translate to REST API calls against the API server.
