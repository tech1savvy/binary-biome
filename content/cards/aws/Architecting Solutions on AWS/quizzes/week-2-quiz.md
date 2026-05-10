### Week 2 Quiz: Serverless Data Analytics

---

### Question 1

A solutions architect is designing an architecture that can provide HTML pages to customers. They want a serverless solution that can host content over the internet and serve a static website with minimal effort. Which AWS service should the solutions architect choose?

- Amazon Simple Storage Service (Amazon S3)
- Amazon Elastic Compute Cloud (Amazon EC2)
- Amazon DynamoDB
- Amazon Kinesis

**Answer:** Amazon Simple Storage Service (Amazon S3) — specifically using the "Static website hosting" feature.

### Question 2

A solutions architect is designing a solution that needs real-time data ingestion. They are considering either Amazon Kinesis Data Firehose or Amazon Kinesis Data Streams for this solution. Which service should the solutions architect choose to meet the requirement for real-time data ingestion?

- Amazon Kinesis Data Firehose, because it has lower latency when compared to Amazon Kinesis Data Streams
- Amazon Kinesis Data Firehose, because it has higher latency when compared to Amazon Kinesis Data Streams
- Amazon Kinesis Data Streams, because it has lower latency when compared to Amazon Kinesis Data Firehose
- Amazon Kinesis Data Streams, because it has higher latency when compared to Amazon Kinesis Data Firehose

**Answer:** Amazon Kinesis Data Streams, because it has lower latency when compared to Amazon Kinesis Data Firehose — Streams offers millisecond latency; Firehose is buffer-based with 60s+ latency.

### Question 3

True or False: When creating data lakes for analytics on AWS, Amazon Simple Storage Service (Amazon S3) would be a preferred service. Users can use data in an S3 bucket with an independent data-processing or visualization layer, such as Amazon QuickSight, Amazon Athena, or Amazon EMR.

- True
- False

**Answer:** True — this represents the "Decoupled Data Lake" pattern.

### Question 4

A solutions architect is designing a serverless solution that can do Structured Query Language (SQL) queries over multiple objects that are stored in Amazon Simple Storage Service (Amazon S3). All the objects share the same data structure (schema) and are in JSON. Which service would make it easier to query the data, in addition to providing serverless capabilities?

- Amazon Athena
- AWS Database Migration Service (AWS DMS)
- Amazon S3 Select
- AWS Data Exchange

**Answer:** Amazon Athena — S3 Select only queries single objects; Athena queries across the entire bucket/prefix.

### Question 5

True or False: When architecting a solution that can handle high demand and usage spikes, Amazon CloudFront should be used in front of an Amazon Simple Storage Service (Amazon S3) bucket. CloudFront can cache data, support custom domain names, provide SSL via ACM, and provide DDoS protection via AWS WAF and AWS Shield.

- True
- False

**Answer:** True — standard best practice for performance and security optimization of static content.
