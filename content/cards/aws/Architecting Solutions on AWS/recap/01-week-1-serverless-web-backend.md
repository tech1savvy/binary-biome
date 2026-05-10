### Week 1: Serverless Web Backend

---

Goal: Build a resilient async backend.

Architecture:

```
API Gateway
↓
SQS
↓
Lambda
↓
DynamoDB
↓
DynamoDB Streams
↓
Lambda
↓
SNS (fan-out to services)
```

Key Concepts:

- Event-driven architecture
- Async processing
- Storage-first pattern
- Decoupling services
- Eliminating single points of failure
