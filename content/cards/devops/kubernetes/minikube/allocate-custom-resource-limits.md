---
noteId: 1777712113289
---

### How do I allocate custom resources limits for my Minikube cluster?

---

Use `--cpus` and `--memory` to set CPU cores and RAM:

```bash
minikube start --cpus=4 --memory=8192
```

```bash
minikube start --cpus=2 --memory=4096    # Lighter workload
```

---

Defaults to 2 CPUs and 2GB RAM. Increase for resource-heavy workloads.
