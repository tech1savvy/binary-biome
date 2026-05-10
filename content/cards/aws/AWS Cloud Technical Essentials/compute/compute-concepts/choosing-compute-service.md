### How do you choose between EC2, Containers, and Lambda?

---

| Goal | Best Fit |
| :--- | :--- |
| Minimize Refactoring / Maximum Control | **Amazon EC2** |
| Fastest Scaling / Environment Portability | **Containers (ECS/EKS)** |
| Lowest Cost for Infrequent/Event-Driven Tasks | **AWS Lambda** |
| No Server Management (Serverless Containers) | **AWS Fargate** |

**Scenario 1: Infrequent, Event-Driven Tasks** → Lambda. Cost-effective since you only pay for execution time. Native S3 trigger integration.

**Scenario 2: Lift and Shift Migrations** → EC2. Minimal refactoring by matching on-prem environment with a Linux AMI.

**Scenario 3: Microservices and Fast Scaling** → Containers (ECS/EKS). Portable, fast boot times, industry standard for microservices.
