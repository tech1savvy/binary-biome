### Messaging Service Options

---

| Service     | Model     | Use Case                          | Decision   |
| ----------- | --------- | --------------------------------- | ---------- |
| Amazon SNS  | Pub/Sub   | Simple fan-out messaging          | Selected   |
| EventBridge | Event bus | Advanced filtering & integrations | Not needed |

Reason for SNS:

- Simpler
- Lower cost
- Fits basic fan-out requirement
