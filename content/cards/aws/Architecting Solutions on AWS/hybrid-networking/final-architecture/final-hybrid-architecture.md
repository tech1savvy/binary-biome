### Final Hybrid Architecture

---

On-Prem Data Center
│
│ Direct Connect: physical link
│
AWS VPC
├─ ECS Anywhere Cluster (EC2)
│ └─ Containers
│
├─ ALB
│
├─ RDS PostgreSQL (Multi-AZ)
│
├─ S3
│ ↑
│ Storage Gateway (NFS bridge)
│
├─ NAT Gateway
│
└─ Management
├ Systems Manager
└ AWS Backup
