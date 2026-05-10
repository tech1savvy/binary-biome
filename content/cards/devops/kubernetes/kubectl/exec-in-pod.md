---
noteId: 1778320498816
---

### How do I execute a command inside a pod or enter its terminal?

---

Run a one-off command:
```bash
kubectl exec <pod-name> -- <command>
```

Enter an interactive terminal:
```bash
kubectl exec -it <pod-name> -- /bin/sh
```
Use `/bin/bash` instead of `/bin/sh` if the container has bash.

---

`-i` keeps stdin open, `-t` allocates a pseudo-TTY. Combine as `-it` for interactive shells.
