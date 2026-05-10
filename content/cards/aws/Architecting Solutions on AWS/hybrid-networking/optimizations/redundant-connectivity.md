### 1. Redundant Connectivity

---

Primary connection

- **AWS Direct Connect**

Backup connection

- **AWS Site-to-Site VPN**

Failover flow:

On-Prem
↓
Direct Connect (primary)
↓
AWS VPC

If Direct Connect fails:

On-Prem
↓
VPN Tunnel (backup)
↓
AWS VPC

Benefit:

- continuous connectivity
- automatic failover.
