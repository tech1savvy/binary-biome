---
noteId: 1778320499241
---

### How do I verify storage actually works inside a pod?

---

Exec into the pod and check the mounted volume:

```bash
kubectl exec -it storage-pod -- sh
cat /data/file.txt
```

If you see the expected content, storage is working correctly.
