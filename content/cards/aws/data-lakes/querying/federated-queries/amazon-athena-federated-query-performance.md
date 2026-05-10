---
noteId: 1778320497916
---

# What are the performance trade-offs of Athena Federated Queries?

---

- Federated queries traverse the network (potentially over VPN), incurring a performance hit
- More impactful for large datasets (terabytes) compared to querying data natively in S3
- Use as a bridge during migration, not a permanent replacement for centralizing data in S3
