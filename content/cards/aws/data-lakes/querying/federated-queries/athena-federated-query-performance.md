---
noteId: 1778320497916
---

###### What are the performance trade-offs of Athena Federated Queries?

---

Federated queries traverse the network (potentially over VPN), so there is a performance hit compared to querying data natively in S3 — especially for terabytes of data. Use as a bridge during migration, not a permanent replacement for centralizing data in S3.
