---
noteId: 1777822470722
---

### What are resource requests?

---

A **request** is the guaranteed amount of CPU/RAM a Pod gets from its node. Kubernetes uses requests for **scheduling** — it only places Pods on nodes with enough free resources.

Without requests, K8s can overschedule nodes, causing Pods to crash when resources run out.

```yaml
spec:
  containers:
  - name: web-app
    image: nginx:latest
    resources:
      requests:
        memory: 256Mi    # guaranteed RAM
        cpu: 250m        # guaranteed CPU
      limits:
        memory: 512Mi    # max before killed (OOMKilled)
        cpu: 500m        # max before throttled
```

---

**Request** = what K8s reserves for scheduling. **Limit** = what the container is capped at. Always set both in production.
