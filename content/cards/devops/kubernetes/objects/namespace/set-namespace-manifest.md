---
noteId: 1777822470570
---

### How do you set a namespace in a resource manifest?

---

Add `namespace` under `metadata` in any resource YAML:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: web-app
  namespace: staging   # resource deployed to this namespace
spec:
  containers:
  - name: nginx
    image: nginx:latest
```

---

If `namespace` is omitted, the resource goes to `default` (or whichever namespace is set in your kubectl context). The `-n` flag on `kubectl apply` overrides this.
