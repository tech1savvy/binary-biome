### High Availability Design

---

Direct Connect is still a physical link, so redundancy is required.

Best practice:

Primary connectivity:

- Dual Direct Connect connections

Backup connectivity:

- Site-to-Site VPN failover

Failover flow:

On-prem → Direct Connect → AWS  
If DX fails → VPN tunnel → AWS
