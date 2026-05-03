---
noteId: 1777803543832
---

### What is the Gateway API?

---

A modern replacement for Ingress. A **Gateway** describes an instance of traffic-handling infrastructure (e.g. cloud LB or in-cluster proxy) that accepts and processes external traffic — filtering, balancing, splitting — before routing to backend Services.

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: app-gateway
spec:
  gatewayClassName: envoy  # references a GatewayClass
  listeners:
  - name: http
    protocol: HTTP
    port: 80
```

**Key features**:
- **Multi-service on same IP**: one Gateway serves many services
- **Path-based routing**: `/api/*` → backend, `/*` → frontend
- **TLS/SSL termination**: certificates managed at the gateway
- **Cloud integration**: direct DNS and load balancer hooks

```bash
kubectl get gateways
kubectl describe gateway <gateway-name>
```

---

Use for production external access with more flexibility than Ingress. The Gateway API is a **spec** with multiple implementations (NGINX, Istio, Contour, Envoy, etc.) — pick the `gatewayClassName` that matches your stack.
