---
noteId: 1777803543946
---

### What is an HTTPRoute?

---

Defines how HTTP traffic from a Gateway is routed to backend Services. Replaces the `rules` section of an Ingress.

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: app-route
spec:
  parentRefs:
  - name: envoy              # attaches to this Gateway
    sectionName: http
  rules:
  - matches:
    - path:
        type: PathPrefix
        value: /api
    backendRefs:
    - name: api-service
      port: 8080
  - matches:
    - path:
        type: PathPrefix
        value: /
    backendRefs:
    - name: web-service
      port: 80
```

```bash
kubectl get httproutes
kubectl describe httproute <name>
```

---

A Gateway just opens the listener. HTTPRoute defines the actual routing rules (path, header, method matching) and points to the backend Services. One Gateway can have many HTTPRoutes attached.
