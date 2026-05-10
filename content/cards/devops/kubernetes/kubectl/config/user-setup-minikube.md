---
noteId: 1778320498766
---

### How do I set up a new user with client certificates in a minikube cluster?

---

Minikube has a built-in CA. Generate a key + CSR, sign with the CA, then add to kubeconfig.

```bash
# 1. Generate private key and CSR for admin-user
openssl genrsa -out admin-user.key 2048
openssl req -new -key admin-user.key -out admin-user.csr -subj "/CN=admin-user/O=system:masters"

# 2. Generate private key and CSR for dev-user
openssl genrsa -out dev-user.key 2048
openssl req -new -key dev-user.key -out dev-user.csr -subj "/CN=dev-user/O=developers"

# 3. Get Minikube CA paths (typically ~/.minikube/ca.crt and ~/.minikube/ca.key)
minikube ca

# 4. Sign certificates with Minikube CA
openssl x509 -req -in admin-user.csr \
  -CA ~/.minikube/ca.crt -CAkey ~/.minikube/ca.key \
  -CAcreateserial -out admin-user.crt -days 365

openssl x509 -req -in dev-user.csr \
  -CA ~/.minikube/ca.crt -CAkey ~/.minikube/ca.key \
  -CAcreateserial -out dev-user.crt -days 365

# 5. Add credentials to kubeconfig
kubectl config set-credentials admin-user \
  --client-certificate=admin-user.crt \
  --client-key=admin-user.key

kubectl config set-credentials dev-user \
  --client-certificate=dev-user.crt \
  --client-key=dev-user.key

# 6. Create contexts (assumes namespaces dev and admin exist)
kubectl config set-context admin-context \
  --cluster=minikube \
  --user=admin-user \
  --namespace=admin

kubectl config set-context dev-context \
  --cluster=minikube \
  --user=dev-user \
  --namespace=dev
```

---

After setup, bind RBAC permissions:
```bash
# Admin user (full cluster access)
kubectl create clusterrolebinding admin-user-binding \
  --clusterrole=cluster-admin \
  --user=admin-user

# Dev user (edit access to dev namespace)
kubectl create rolebinding dev-user-binding \
  --clusterrole=edit \
  --user=dev-user \
  --namespace=dev
```

