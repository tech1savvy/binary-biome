---
noteId: 1778320497940
siblings: ['[[amazon-athena-federated-query-overview]]', '[[amazon-athena-federated-query-lambda]]', '[[amazon-athena-federated-query-performance]]']
---

# How do Athena Federated Queries handle security?

---

- Lambda runs in a VPC of your choice with VPN connectivity (encryption in transit via tunnels + SSL certificates)
- Encryption at rest on AWS side uses KMS (enabled by default)
- On-premises encryption is your own responsibility (key management at the data center)
