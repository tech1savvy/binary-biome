### Architecture Flow

---

Client (JS library)
↓
HTTPS POST
↓
API Gateway
↓
Kinesis Data Firehose
↓
Amazon S3 (Data Lake)

Steps:

1. Client sends POST request
2. API Gateway receives request
3. API Gateway maps request to **Kinesis PutRecord**
4. Firehose buffers events
5. Firehose delivers data to **S3**
