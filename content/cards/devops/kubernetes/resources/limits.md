---
noteId: 1777822470672
---

### How do you set resource limits on a container?

---

Prevents a Pod from hogging all CPU/RAM on its node and starving other Pods.

```yaml
spec:
  containers:
  - name: web-app
    image: nginx:latest
    resources:
      limits:
        memory: 512Mi    # max 512 mebibytes
        cpu: 500m        # max 500 milli-cores (0.5 cores)
```

**Units**:
- **Memory**: `Ki`, `Mi`, `Gi` (e.g. `512Mi`)
- **CPU**: `m` for milli-cores (e.g. `500m` = 0.5 cores, `1000m` = 1 full core)

---

Set limits in production — without them, a misbehaving Pod can suffocate everything else on the node.
