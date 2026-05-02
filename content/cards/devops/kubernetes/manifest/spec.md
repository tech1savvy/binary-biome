---
noteId: 1777728481801
---

### What is `spec` in a Kubernetes manifest?

---

Defines the desired state of the resource. This is where you configure what you want:

```yaml
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    ...
```

---

The most impactful edits happen here -- replica count, image versions, resource limits, env vars, volumes. Kubernetes works to make the actual state match `spec`.
