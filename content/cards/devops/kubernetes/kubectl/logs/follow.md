---
noteId: 1777715168393
---

### How do I stream Pod logs in real-time with kubectl?

---

```bash
kubectl logs -f <pod-name>
```

```bash
kubectl logs -f my-app-5d4b6c7f8-x9y2z
kubectl logs -f my-app-5d4b6c7f8-x9y2z -c sidecar
```

---

Follows new log lines as they appear. Blocks the terminal until `Ctrl+C`. Combine with `--tail=0` to skip old lines.
