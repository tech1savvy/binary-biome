---
noteId: 1778320498841
---

### How do I enable the Ingress addon in Minikube?

---

```bash
minikube addons enable ingress
```

---

The `ingress` addon spins up the NGINX Ingress Controller inside the Minikube cluster. Verify it's running:

```bash
kubectl get pods -n ingress-nginx
```

Once running, Ingress resources will be picked up and routed by the controller.
