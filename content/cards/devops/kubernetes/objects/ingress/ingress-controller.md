---
noteId: 1778320499067
---

### What is an Ingress Controller?

---

A pod (or set of pods) that watches `Ingress` resources and configures a reverse proxy (NGINX, Traefik, HAProxy, etc.) to match the rules. Without an Ingress Controller, Ingress objects do nothing.

Common controllers:
- **NGINX Ingress Controller** — most popular, config via annotations
- **Traefik** — native service discovery, Let's Encrypt integration
- **HAProxy** — high performance, configmap-based config
- **AWS/GCP/Azure** — cloud provider native controllers

---

The Ingress Controller is the *implementation*; Ingress resources are the *configuration*.
