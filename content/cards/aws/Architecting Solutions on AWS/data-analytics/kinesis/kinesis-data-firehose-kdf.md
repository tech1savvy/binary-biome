### Kinesis Data Firehose (KDF)

---

Managed delivery service for streaming data.

Characteristics:

- Fully managed
- Automatic scaling
- Buffers and batches data
- Optional transformation via Lambda

Destinations:

- S3
- Redshift
- OpenSearch
- third-party tools (Splunk, Datadog, etc.)

Latency:

- ~60 seconds to several minutes

Typical flow:

Producer → Firehose → Destination (e.g., S3)

--

## Kinesis Data Analytics (KDA)

Real-time stream processing.

Capabilities:

- SQL queries on streaming data
- Apache Flink applications
- Automatic scaling

Use case:

- live analytics on streaming events.
