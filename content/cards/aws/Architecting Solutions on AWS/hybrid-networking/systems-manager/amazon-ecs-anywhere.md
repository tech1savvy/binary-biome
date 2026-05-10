### Amazon ECS Anywhere

---

Extends ECS container management to on-prem servers.

Purpose:
Run containers on local infrastructure but manage them from AWS.

Requirements:

- ECS Agent
- AWS Systems Manager (SSM) Agent

Supported infrastructure:

- VMware
- Hyper-V
- bare metal servers

Benefits:

- single ECS control plane
- same deployment workflows
- same monitoring tools

Architecture:

AWS ECS Control Plane
↓
On-Prem Servers
(ECS Agent + SSM Agent)
↓
Run Containers
