---
noteId: 1777715168155
---

### How do I edit a live Kubernetes resource with kubectl?

---

```bash
kubectl edit <resource-type> <resource-name>
```

```bash
kubectl edit deployment my-app
kubectl edit service my-service
kubectl edit configmap my-config
```

---

Opens the resource in your default editor. Changes are applied on save. Use `$EDITOR` env var to change the editor.
