---
noteId: 1778320499191
---

### How do I create a custom StorageClass?

---

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: dynamic-hostpath
provisioner: k8s.io/minikube-hostpath
reclaimPolicy: Delete
volumeBindingMode: Immediate
```

Apply:

```bash
kubectl apply -f storageclass.yaml
```
