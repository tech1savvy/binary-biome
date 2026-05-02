---
noteId: 1777712113665
---


### How do you manage external HTTP/HTTPS access to services?

---

An **Ingress** defines routing rules (host/path-based) for HTTP/HTTPS traffic into the cluster. Requires an **Ingress Controller** (e.g., NGINX, Traefik, HAProxy).

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
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
```

## Key features

- **Host-based routing**: `app.example.com` → service A, `api.example.com` → service B
- **Path-based routing**: `/api/*` → backend, `/*` → frontend
- **TLS termination**: SSL certificates managed at the ingress layer
- **Load balancing**: Distributes traffic across Pod endpoints

```bash
kubectl get ingress
kubectl describe ingress <ingress-name>
```

## When to use

Exposing HTTP/HTTPS services externally without creating a LoadBalancer Service per service.
