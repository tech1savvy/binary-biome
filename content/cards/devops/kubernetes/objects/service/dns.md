---
noteId: 1777822470596
---

### How does Kubernetes DNS work for Services?

---

Kubernetes automatically creates DNS entries for each Service. The full format is:

```
<service-name>.<namespace>.svc.cluster.local
```

| Scope | Format |
|---|---|
| Same namespace | `<service-name>` |
| Different namespace | `<service-name>.<namespace>` |
| Fully qualified | `<service-name>.<namespace>.svc.cluster.local` |

```bash
# Test DNS resolution from inside a Pod
kubectl exec -it <pod> -- nslookup my-service.default.svc.cluster.local
```

---

Can also append the port number: `<service-name>:8080`
