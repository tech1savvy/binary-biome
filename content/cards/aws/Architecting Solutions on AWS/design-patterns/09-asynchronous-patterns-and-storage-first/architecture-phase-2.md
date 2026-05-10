### Architecture (Phase 2)

---

Components:

1. **API Gateway**
   - Validates request

2. **Amazon SQS**
   - Stores order message (buffer)

3. **Lambda**
   - Polls queue
   - Processes order

Flow:

Client
↓
API Gateway
↓
SQS Queue
↓
Lambda Processing
