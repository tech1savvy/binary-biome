---
noteId: 1778320499216
---

### How do I enable dynamic provisioning in Minikube?

---

```bash
minikube addons enable storage-provisioner
minikube addons enable default-storageclass
```

Verify:

```bash
kubectl get storageclass
```

Expected output:

```
NAME                 PROVISIONER                DEFAULT
standard (default)   k8s.io/minikube-hostpath   yes
```
