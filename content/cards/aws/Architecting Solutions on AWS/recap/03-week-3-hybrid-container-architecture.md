### Week 3: Hybrid Container Architecture

---

Goal: Run workloads both on-prem and in AWS.

Architecture:

```
On-Prem Data Center
↓
Direct Connect
↓
AWS VPC

Compute
ECS + ECS Anywhere
EC2 instances

Storage
Storage Gateway
NFS → S3

Database
RDS PostgreSQL
Multi-AZ
```

Key Concepts:

- Hybrid connectivity (Direct Connect vs VPN)
- Container portability
- High availability with Multi-AZ
- Hybrid file access using Storage Gateway
- Disaster recovery strategies
