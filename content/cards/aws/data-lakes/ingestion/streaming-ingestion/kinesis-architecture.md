---
noteId: 1778320496266
---

###### What does a typical Amazon Kinesis ingestion architecture look like?

---

1. EC2 instance runs Kinesis agent
2. Agent sends data to Amazon Data Firehose
3. Firehose stores raw data in S3
4. AWS Lambda and Kinesis Analytics process the data
5. Processed data stored back in S3

Result: both raw and processed data available in S3.
