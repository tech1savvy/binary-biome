---
noteId: 1778320497891
siblings: ['[[amazon-athena-federated-query-lambda]]', '[[amazon-athena-federated-query-security]]', '[[amazon-athena-federated-query-performance]]']
---

# What is an Athena Federated Query?

---

- Joins data across different sources (on-premises databases, DynamoDB, RDS, other AWS services) using a single `SELECT` statement
- No need to copy data to S3 first — uses Athena connectors to reach sources directly
- Useful as a bridge during migration, not a permanent replacement for centralizing data in S3
