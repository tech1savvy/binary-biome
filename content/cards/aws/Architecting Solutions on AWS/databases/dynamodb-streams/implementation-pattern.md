### Implementation Pattern

---

Used to trigger downstream processing.

Flow:

DynamoDB Table
↓
DynamoDB Stream
↓
Lambda Trigger
↓
SNS Topic
↓
Subscribers

Steps:

1. Order saved to **DynamoDB**
2. Change recorded in **Stream**
3. **Lambda** triggered by stream event
4. Lambda publishes event to **SNS**
5. SNS fans out to downstream services

Example consumers:

- Inventory
- Accounting
- Fulfillment
