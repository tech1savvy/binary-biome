### What is Amazon ECS?

---

**Amazon Elastic Container Service (ECS)** is a fully managed, AWS-native container orchestration service.

- **Task Definition:** A JSON blueprint for containers (defines the container image, ports, environment variables, etc.)
- **Task:** A running instantiation of a Task Definition

ECS is the **control plane** (scheduler/orchestrator). It can run containers on either EC2 instances (you manage) or Fargate (AWS manages).
