---
noteId: 1778320499016
---

### How do I use annotations to configure Ingress behavior?

---

Ingress annotations are controller-specific key-value pairs in `metadata.annotations` that tweak proxy behavior (timeouts, rewrites, CORS, auth, etc.). Annotation keys vary by controller.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: annotated-ingress
  annotations:
    # NGINX-specific examples:
    nginx.ingress.kubernetes.io/rewrite-target: /
    nginx.ingress.kubernetes.io/proxy-read-timeout: "300"
    nginx.ingress.kubernetes.io/cors-allow-origin: "https://example.com"
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

```bash
kubectl get ingress annotated-ingress
```

---

Annotations are the escape hatch for features not in the Ingress spec. Check your controller's docs for supported keys.
