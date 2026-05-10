---
noteId: 1778320499366
---

### How do I check RBAC permissions for a user or ServiceAccount?

---

Use `kubectl auth can-i` to test what actions are allowed.

```bash
# Check if current user can create deployments
kubectl auth can-i create deployments

# Check a specific ServiceAccount
kubectl auth can-i get pods \
  --as=system:serviceaccount:staging:deployer

# Check all verbs on a resource
kubectl auth can-i --list --as=system:serviceaccount:staging:deployer
```

---

Returns `yes` or `no`. Essential for debugging RBAC denials without guessing.
