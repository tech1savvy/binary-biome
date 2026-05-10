### What is AWS Fargate?

---

AWS Fargate is a serverless compute engine for containers (both ECS and EKS).

**ECS Launch Types:**

| Launch Type | What Runs the Containers | Who Manages Servers |
| :--- | :--- | :--- |
| **EC2** | Containers run on EC2 instances | You manage the instances |
| **Fargate** | Containers run on AWS-managed infrastructure | AWS manages everything |

- **No Infrastructure Management:** No provisioning, patching, or cluster capacity management
- **Abstraction:** AWS handles the underlying OS and environment. You define CPU and memory at the Task (ECS) or Pod (EKS) level
- **Built-in HA/Scaling:** Scaling and fault tolerance are built-in

**Fargate Workflow:**
1. **Build:** Create your container image
2. **Push:** Store the image in Amazon ECR
3. **Define:** Specify memory and CPU requirements
4. **Run:** Launch the container
5. **Pay:** Only pay for the vCPU, memory, and storage consumed

**Use Cases:** Microservices, batch processing, machine learning, migrating on-premises apps

> ECS = container orchestration (control plane). Fargate = serverless compute for containers (runtime infrastructure option).
