---
noteId: 1778320496266
forward:
  - "[[raw-vs-transformed-data]]"
---

# What does a typical Amazon Kinesis ingestion architecture look like?

---

- EC2 instance runs Kinesis agent
- Agent sends data to Amazon Data Firehose
- Firehose stores raw data in S3
- AWS Lambda and Kinesis Analytics process the data
- Processed data stored back in S3
- Result: both raw and processed data available in S3.
