### Kinesis Services

---

## Kinesis Data Streams (KDS)

Real-time streaming platform.

Characteristics:

- Millisecond latency
- High throughput (GB/sec)
- Data retained for **24 hours–365 days**
- Requires custom producers and consumers

Typical architecture:

Producer → Kinesis Stream → Consumer (Lambda / KCL)

Use cases:

- real-time dashboards
- anomaly detection
- dynamic pricing
