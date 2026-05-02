---
noteId: 1777712113090
---

### What is Kubernetes?

---

An open-source container orchestration platform originally developed by Google (based on Borg). Abbreviated as **K8s**.

## Core capabilities

- Declarative configuration via YAML manifests
- Self-healing (restarts failed containers, reschedules pods)
- Horizontal scaling and load balancing
- Automated rollouts and rollbacks
- Service discovery and storage orchestration

```bash
# Check cluster info
kubectl cluster-info

# List all resources
kubectl get all
```

## When to use

Running containerized workloads in production at scale, especially when you need high availability, auto-scaling, or multi-host deployments.
