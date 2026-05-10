### Storage Options Comparison

---

| Service | Model          | Limitation                                   | Decision |
| ------- | -------------- | -------------------------------------------- | -------- |
| EBS     | Block storage  | Requires EC2 attachment; provisioned billing | Rejected |
| EFS     | File storage   | Requires mounting; unnecessary complexity    | Rejected |
| S3      | Object storage | API-based access, scalable                   | Selected |

Reason:

- Independent storage
- Usage-based pricing
- Accessible by many services
