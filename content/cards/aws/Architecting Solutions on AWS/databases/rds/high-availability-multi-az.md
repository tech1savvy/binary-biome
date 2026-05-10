### High Availability – Multi-AZ

---

RDS can deploy the database across multiple **Availability Zones**.

Architecture:

Primary DB (AZ1)
↓ synchronous replication
Standby DB (AZ2)

Key points:

- automatic failover if primary fails
- same database endpoint (DNS)
- application reconnects automatically

3-AZ deployments:

- two readable standby nodes
- faster failover (~35 seconds)
- extra read capacity
