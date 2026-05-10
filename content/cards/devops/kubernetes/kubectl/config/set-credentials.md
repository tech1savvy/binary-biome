---
noteId: 1778320498715
---

### How do I add user credentials to kubeconfig?

---

```bash
kubectl config set-credentials <user-name> \
  --client-certificate=<path-to-cert> \
  --client-key=<path-to-key>
```

```bash
kubectl config set-credentials dev-user \
  --client-certificate=/home/user/certs/dev-user.crt \
  --client-key=/home/user/certs/dev-user.key
```

---

For token-based auth, use `--token=<token>` instead. For cloud providers, credentials are handled by the cloud CLI.
