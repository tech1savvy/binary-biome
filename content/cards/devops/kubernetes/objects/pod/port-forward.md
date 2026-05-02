---
noteId: 1777715168602
---

### How do I forward a local port to a Pod with kubectl?

---

```bash
kubectl port-forward pod/<pod-name> <local-port>:<pod-port>
```

```bash
kubectl port-forward pod/my-app-5d4b6c7f8-x9y2z 8080:80
```

```bash
kubectl port-forward service/my-app 8080:80    # Forward via Service
kubectl port-forward deploy/my-app 8080:80     # Forward via Deployment
```

---

Useful for debugging services not exposed externally. Blocks the terminal until `Ctrl+C`.
