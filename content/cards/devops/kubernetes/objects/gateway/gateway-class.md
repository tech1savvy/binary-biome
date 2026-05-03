---
noteId: 1777803543922
---

### What is a GatewayClass?

---

A reference to a specific Gateway **controller/implementation**. The Gateway object itself is implementation-agnostic — the GatewayClass tells Kubernetes which controller actually provisions the infrastructure.

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: GatewayClass
metadata:
  name: envoy
spec:
  controllerName: gateway.envoyproxy.io/gatewayclass-controller
```

```bash
kubectl get gatewayclasses
kubectl describe gatewayclass <name>
```

---

Think of it like: `GatewayClass` = which controller (NGINX, Istio, Contour, etc.), `Gateway` = the actual traffic endpoint that uses that controller.
