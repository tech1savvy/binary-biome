---
noteId: 1777728481409
---

### How do I create or update resources from a YAML file?

---

```bash
kubectl apply -f <file.yaml>
```

```bash
kubectl apply -f deployment.yaml
kubectl apply -f ./manifests/        # All files in directory
kubectl apply -f https://url/to/manifest.yaml
```

---

Declarative -- creates if missing, updates if changed. This is the preferred way to manage resources over imperative `kubectl create`.
