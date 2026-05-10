### Queue Types

---

| Type     | Characteristics                            | Use Case                  |
| -------- | ------------------------------------------ | ------------------------- |
| Standard | Unlimited throughput, best-effort ordering | Most workloads            |
| FIFO     | Strict order, exactly-once processing      | Order-sensitive workflows |

FIFO limits:

- 300 msg/sec
- 3000 msg/sec (high throughput mode)
