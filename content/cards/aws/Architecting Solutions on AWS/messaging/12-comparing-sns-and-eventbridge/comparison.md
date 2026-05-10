### Comparison

---

| Feature          | Amazon SNS          | Amazon EventBridge      |
| ---------------- | ------------------- | ----------------------- |
| Model            | Pub/Sub topics      | Event bus               |
| Delivery         | Push to subscribers | Event routing           |
| Throughput       | Very high           | Moderate                |
| Latency          | Very low (~30 ms)   | Low (~500 ms)           |
| Filtering        | Basic               | Advanced JSON filtering |
| Targets          | Limited             | 15+ targets             |
| SaaS Integration | No                  | Yes                     |
| Schema Registry  | No                  | Yes                     |
