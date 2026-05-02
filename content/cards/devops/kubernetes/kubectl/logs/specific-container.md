---
noteId: 1777715168478
---

### How do I view logs from a specific container in a multi-container Pod?

---

```bash
kubectl logs <pod-name> -c <container-name>
```

```bash
kubectl logs my-app-5d4b6c7f8-x9y2z -c sidecar
kubectl logs my-app-5d4b6c7f8-x9y2z -c init-container
```

---

Required for pods with multiple containers. List containers with `kubectl get pod <name> -o jsonpath='{.spec.containers[*].name}'`.
