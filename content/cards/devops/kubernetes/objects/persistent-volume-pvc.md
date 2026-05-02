---
noteId: 1777712113741
---

### PersistentVolume / PVC

### How do you manage persistent storage in Kubernetes?

---

**PersistentVolume (PV)**: Cluster-wide storage resource (backed by NFS, cloud disk, hostPath, etc.)

**PersistentVolumeClaim (PVC)**: User request for storage that binds to a PV.

```yaml
# PersistentVolumeClaim (most common — cluster auto-provisions PV)
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

## Access modes

| Mode | Description |
|---|---|
| `ReadWriteOnce` | Mounted by a single node (read-write) |
| `ReadOnlyMany` | Mounted by multiple nodes (read-only) |
| `ReadWriteMany` | Mounted by multiple nodes (read-write) |

## Lifecycle

Pod deleted → PVC persists → Data survives. Delete PVC to reclaim storage.
