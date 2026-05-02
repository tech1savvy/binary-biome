---
noteId: 1777712113640
---

### How do I create a Deployment imperatively with kubectl?

---

```bash
kubectl create deployment my-app --image=nginx:latest
```

```bash
kubectl create deployment my-app --image=nginx:latest --replicas=3
kubectl create deployment my-app --image=nginx:latest --port=80
```

---

Creates a Deployment and underlying ReplicaSet + Pods in one command. Use `kubectl apply -f <file.yaml>` for declarative management.
