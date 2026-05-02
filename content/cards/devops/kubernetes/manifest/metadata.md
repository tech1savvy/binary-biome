---
noteId: 1777728481772
---

### What is `metadata` in a Kubernetes manifest?

---

Metadata about the resource -- name, namespace, labels, annotations:

```yaml
metadata:
  name: my-app
  namespace: production
  labels:
    app: my-app
    tier: backend
  annotations:
    description: "My application"
```

---

`name` is required. `labels` are used for selectors and queries. `annotations` attach non-identifying metadata for tools and operators.
