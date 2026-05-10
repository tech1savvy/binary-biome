### Data Cleaning Strategy

---

Real-world data may be messy.

Two common approaches:

**Firehose Transformation**

- Trigger **Lambda** during ingestion
- Clean or modify records before storing

**S3 Processing**

- Trigger Lambda on `PutObject`
- Process file after upload
