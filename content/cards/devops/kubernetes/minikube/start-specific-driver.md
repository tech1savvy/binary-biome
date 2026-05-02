---
noteId: 1777712113365
---

### How do I start Minikube with a specific driver?

---

```bash
minikube start --driver=docker
minikube start --driver=podman
minikube start --driver=kvm2
minikube start --driver=virtualbox
```

Set a default permanently:

```bash
minikube config set driver docker
```

---

Docker is the recommended driver for local development. 
(also the default driver)
