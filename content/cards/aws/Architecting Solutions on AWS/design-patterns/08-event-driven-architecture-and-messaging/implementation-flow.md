### Implementation Flow

---

1. **DynamoDB**
   - Order stored

2. **DynamoDB Stream**
   - Detects item change

3. **Lambda (Link Function)**
   - Reads stream event
   - Publishes message to SNS

4. **SNS Topic**
   - Sends event to subscribers (Inventory, Accounting, Fulfillment)

# Benefits

**Resilience**

- Downstream failures don't break order processing

**Flexibility**

- New consumers can subscribe without changing core code

**Serverless**

- Fully managed services
- No infrastructure to maintain
