### 2. Container Scaling (ECS)

---

Two scaling layers.

Cluster Auto Scaling

- scales **EC2 instances** in the ECS cluster
- ensures enough compute capacity.

Service Auto Scaling

- scales **ECS tasks (containers)** within a service
- triggered by metrics like CPU or memory.

Example:

- traffic spike → more tasks launched.
