---
noteId: 1777715168273
---

### How do I view extended information for Pods with kubectl?

---

```bash
kubectl get pods -o wide
```

Output includes:

| Column    | Description                |
| --------- | -------------------------- |
| `NODE`    | Which node the pod runs on |
| `IP`      | Pod IP address             |
| `READY`   | Containers ready / total   |

```bash
kubectl get pods -o wide -n kube-system
```

---

Useful for debugging network issues and checking pod scheduling across nodes.
