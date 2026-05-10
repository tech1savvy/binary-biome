### How do Instance Store and EBS compare on connection, persistence, performance, and redundancy?

---

| Feature | Instance Store | Amazon EBS |
|---|---|---|
| Connection | Physically attached | Network-attached |
| Persistence | Ephemeral (lost on stop/termination) | Persistent |
| Performance | Ultra-low latency | Network-based latency |
| Redundancy | None (user must replicate) | Automatically replicated within AZ |
