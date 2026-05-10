### Week 2: Serverless Data Analytics Pipeline

---

Goal: Collect and analyze clickstream data.

Architecture:

```
API Gateway
↓
Kinesis Data Firehose
↓
Lambda (data transform)
↓
S3 (data lake)
↓
Athena (SQL queries)
↓
QuickSight (dashboards)
```

Key Concepts:

- Data lake architecture
- Serverless analytics
- Storage and compute decoupling
- Pay-per-query analytics
- Lifecycle and cost optimization
