---
noteId: 1778320498866
---

### How do I find the Minikube CA certificate and key paths?

---

```bash
minikube ca
```

Output shows the paths to the CA certificate and key (typically `~/.minikube/ca.crt` and `~/.minikube/ca.key`).

```bash
# Typical output:
# ~/.minikube/ca.crt
# ~/.minikube/ca.key
```

---

Use these paths to sign client certificates for new users with `openssl x509 -req ... -CA ~/.minikube/ca.crt -CAkey ~/.minikube/ca.key`.
