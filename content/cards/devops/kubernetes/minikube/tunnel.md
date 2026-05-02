---
noteId: 1777712113465
---

### How do I expose all Minikube services to the host?

---

Routes traffic from `127.0.0.1` to `LoadBalancer` Services:

```bash
minikube tunnel
```

Typical workflow:

```bash
kubectl expose deployment my-app --type=LoadBalancer --port=8080
minikube tunnel              # Run in separate terminal
kubectl get services         # Verify EXTERNAL-IP is assigned
```

---

Without `minikube tunnel`, services stay `<pending>` for `EXTERNAL-IP`.
