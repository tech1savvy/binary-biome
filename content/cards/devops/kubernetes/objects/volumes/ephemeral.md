---
noteId: 1777803544122
---


### What are Ephemeral Volumes?

---

Container filesystem data is lost on restart. Ephemeral volumes solve two problems:

- **Data sharing** between containers in the same Pod
- **Temporary storage** that outlives container crashes (but not Pod deletion)

The most common ephemeral volume is `emptyDir` — starts empty, lives as long as the Pod.

```yaml
spec:
  containers:
  - name: writer
    image: busybox
    volumeMounts:
    - name: shared
      mountPath: /data
  - name: reader
    image: busybox
    volumeMounts:
    - name: shared
      mountPath: /data
  volumes:
  - name: shared
    emptyDir: {}
```

---

Deleted when the Pod is removed. Not for long-lived data — use PersistentVolumes for that.
