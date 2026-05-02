---
noteId: 1777728481761
---

### What is `kind` in a Kubernetes manifest?

---

Specifies the type of object you are configuring:

```yaml
kind: Deployment
kind: Pod
kind: Service
```

---

Combined with `apiVersion`, determines the schema and available fields in `spec`.
