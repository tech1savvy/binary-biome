### Compute Options

---

| Category   | Service             | Decision | Reason                                       |
| ---------- | ------------------- | -------- | -------------------------------------------- |
| Instances  | EC2                 | Rejected | Requires server management and scaling setup |
| Containers | ECS / EKS (Fargate) | Rejected | Team lacks container expertise               |
| Serverless | **AWS Lambda**      | Selected | Fully managed, auto-scaling, no servers      |
