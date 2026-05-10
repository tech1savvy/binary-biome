---
noteId: 1778320498465
---

### How do I customize Helm chart values?

---

Edit `values.yaml`:

```yaml
replicaCount: 2

image:
  repository: nginx
  tag: latest
```

---

Edit `values.yaml` in the chart directory