### Buffer Options

---

| Service    | Use Case                   | Decision |
| ---------- | -------------------------- | -------- |
| DynamoDB   | Simple data storage        | Possible |
| Amazon SQS | Queue for async processing | Selected |

Reason:

- Business logic must run **before final storage**
