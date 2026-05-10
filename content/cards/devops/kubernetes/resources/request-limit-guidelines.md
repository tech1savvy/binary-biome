---
noteId: 1777822470695
---

### How do I set resource requests and limits for autoscaling?

---

**Rule of thumb** (based on average usage):

| Resource | Request | Limit |
|---|---|---|
| Memory | ~10% above average | ~100% above average |
| CPU | ~50% of average | ~100% above average |

**Why these numbers?**

- **Memory is scarier**: running out crashes the pod (OOMKilled), so requests get a buffer
- **Limits are a safety net**: should only trigger on abnormal spikes, not normal usage
- **Requests guide scheduling**: set high enough to guarantee resources, but not so high that K8s thinks nodes are full when they aren't

---

These are starting points — always tune based on actual application behavior and metrics.
