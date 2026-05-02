---
noteId: 1777715168168
---

### How do I list Kubernetes resources with kubectl?

---

```bash
kubectl get <resource-type>
```

```bash
kubectl get pods
kubectl get deployments
kubectl get services
kubectl get pods -n kube-system        # Specific namespace
kubectl get pods --all-namespaces       # All namespaces (alias: -A)
kubectl get pods -o wide                # Extended output
```

```bash
kubectl get pod <pod-name> -o yaml      # Full YAML manifest
kubectl get pod <pod-name> -o json      # Full JSON output
kubectl get pods -w                     # Watch for changes
```

---

Supports all resource types. Add `-o` for output formatting, `-n` for namespaces, `-w` for live watching.
