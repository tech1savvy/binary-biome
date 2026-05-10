### Requirement → Service Mapping

---

| Requirement              | Service                  | Reason                              |
| ------------------------ | ------------------------ | ----------------------------------- |
| HTTPS ingestion          | API Gateway              | REST endpoint for client events     |
| Low operational overhead | Managed services         | No server/OS management             |
| Usage-based billing      | Serverless services      | Pay per request or data processed   |
| Data durability          | Cross-region replication | Backup data across regions          |
| Security                 | Encryption               | Encrypt data in transit and at rest |
