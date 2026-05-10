---
noteId: 1778320499041
---

### How do I configure host-based routing in Ingress?

---

Route traffic to different services based on the requested hostname using the `host` field in `spec.rules`.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: host-routing
spec:
  rules:
  - host: app.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
  - host: api.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 8080
```

```bash
kubectl get ingress host-routing
```

---

`app.example.com` → `web-service`, `api.example.com` → `api-service`.
