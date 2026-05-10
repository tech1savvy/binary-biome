---
noteId: 1778320499091
---

### How do I configure path-based routing in Ingress?

---

Route traffic to different services based on the URL path using `path` and `pathType` in `spec.rules.http.paths`.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: path-routing
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 8080
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
```

```bash
kubectl get ingress path-routing
```

---

`/api/*` → `api-service`, `/*` → `web-service`. Longest prefix match wins.
