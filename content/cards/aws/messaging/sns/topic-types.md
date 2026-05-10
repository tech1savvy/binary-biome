---
noteId: 1778392166524
---

### Topic Types

---

| Type     | Characteristics                            | Use Case                  |
| -------- | ------------------------------------------ | ------------------------- |
| Standard | Unlimited throughput, best-effort ordering | Most event notifications  |
| FIFO     | Strict ordering, exactly-once delivery     | Order-sensitive workflows |

FIFO limits:

- ~300 messages/sec

Latency (standard):

- ~30 ms
