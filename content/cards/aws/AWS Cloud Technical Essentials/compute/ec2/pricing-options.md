### What are the EC2 pricing options?

---

| Pricing Model | Cost Savings | Commitment | Typical Use Case |
| :--- | :--- | :--- | :--- |
| **On-Demand** | None (Baseline) | None | Spiky or unknown usage |
| **Reserved** | Significant (up to 75%) | 1 or 3 Years | Steady-state usage |
| **Spot** | Massive (up to 90%) | None | Interruptible/flexible workloads |

**On-Demand:** Pay per second/hour with no long-term commitment. Best for short-term, unpredictable workloads, testing, and uninterrupted workloads that cannot be scheduled. Lowest friction, no upfront cost.

**Reserved Instances (RIs):** Significant discount (up to 75%) in exchange for a committed term of 1 or 3 years. Best for predictable, steady-state usage (e.g., 24/7 web frontend).

**Spot Instances:** Take advantage of unused EC2 capacity at up to 90% discount. You set a max price. If the Spot Price exceeds your limit or AWS needs the capacity back, the instance is interrupted with a 2-minute warning. Best for fault-tolerant, stateless, or batch workloads.
