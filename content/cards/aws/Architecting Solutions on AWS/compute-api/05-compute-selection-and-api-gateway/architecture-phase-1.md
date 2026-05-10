### Architecture (Phase 1)

---

1. **Amazon API Gateway**
   - Receives HTTP requests

2. **AWS Lambda**
   - Runs application logic

Flow:

Client → API Gateway → Lambda

# Design Principle

Choose **best-fit architecture**, not just something that works.

For this workload:

- Serverless
- Minimal operations
- Automatic scaling
