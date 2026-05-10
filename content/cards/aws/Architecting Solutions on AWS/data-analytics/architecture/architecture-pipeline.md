### Architecture Pipeline

---

Client (JS library)
↓
API Gateway
↓
Kinesis Data Firehose
↓
Amazon S3 (Data Lake)
↓
Amazon Athena
↓
Amazon QuickSight

## Components:

1. **API Gateway**
   - REST HTTPS endpoint for clickstream events

2. **Kinesis Data Firehose**
   - Buffers streaming data
   - Delivers batches to storage

3. **Amazon S3**
   - Data lake storage
   - Cross-region replication enabled

4. **Amazon Athena**
   - SQL queries on S3 data

5. **Amazon QuickSight**
   - BI dashboards and insights
