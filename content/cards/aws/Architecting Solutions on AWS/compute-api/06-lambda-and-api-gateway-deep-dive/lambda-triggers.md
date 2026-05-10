### Lambda Triggers

---

Common event sources:

- API Gateway
- S3
- DynamoDB
- SNS
- SQS (_Simple Queue Service_): Instead of services calling each other directly and breaking everything when one dies, they send messages to a queue.
- Kinesis: is a real-time _data streaming_ platform which processes continuous streams of data instead of simple queued messages.
- CloudWatch
- ALB
- EventBridge (external/SaaS events): an event bus service that routes events between applications, AWS services, and external SaaS platforms.
  - Instead of tightly connecting services, you publish events to a bus and let rules decide where they go.
