### How do you choose between container compute platforms?

---

**ECS with EC2:**
```
ECS (scheduler) → EC2 instances → Docker containers
```
- You control instance size, scaling groups, patching, and capacity
- More control, more operational chores

**ECS with Fargate:**
```
ECS (scheduler) → Fargate compute → Containers
```
- You do not see the servers at all
- You just define CPU, memory, and container image
- AWS handles the infrastructure

**EKS + Fargate:** Amazon EKS (Kubernetes) can also run on Fargate.
