---
noteId: 1777810378401
---

### What is a PersistentVolumeClaim (PVC)?

---

- A request for storage
- With dynamic provisioning, automatically creates a PV if none matches
- Attached to a Pod like any other volume

```yaml
# PVC — cluster auto-provisions the PV dynamically
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: data-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

```yaml
# Pod using PVC
spec:
  containers:
  - name: app
    image: myapp:latest
    volumeMounts:
    - name: data
      mountPath: /data
  volumes:
  - name: data
    persistentVolumeClaim:
      claimName: data-pvc
```

---

## Access modes

| Mode | Description |
|---|---|
| `ReadWriteOnce` | Single node (read-write) |
| `ReadOnlyMany` | Multiple nodes (read-only) |
| `ReadWriteMany` | Multiple nodes (read-write) |

## Lifecycle

Pod deleted → PVC persists → Data survives. Delete PVC to reclaim storage.
