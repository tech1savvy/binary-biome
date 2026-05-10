### Database Options

---

| Service           | Model             | Use Case                   | Notes                                      |
| ----------------- | ----------------- | -------------------------- | ------------------------------------------ |
| Aurora Serverless | Relational (SQL)  | Complex queries, joins     | Needs **RDS Proxy** for Lambda connections |
| DynamoDB          | NoSQL (Key-Value) | High scale, simple queries | Native scaling, no proxy                   |
