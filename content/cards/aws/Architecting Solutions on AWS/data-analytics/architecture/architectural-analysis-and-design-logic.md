### Architectural Analysis and Design Logic

---

Following the customer call, the Solutions Architect (SA) organizes the requirements to guide the service selection process.

## 1. Requirement Synthesis

| Requirement | Design Choice | Rationale |
| :--- | :--- | :--- |
| **HTTPS Ingestion Endpoint** | **Amazon API Gateway** | Provides a RESTful interface for the client-side JavaScript library. |
| **Reduced Staff / Convenience** | **Managed Services** | Eliminates the need for manual server/OS management. |
| **Refined Usage Billing** | **Serverless Services** | Avoids EC2 hourly costs; aligns with "pay only for what you use." |
| **Data Durability / Backup** | **Cross-Region Replication** | Managed services like S3 offer native features for backing up data to a secondary Region. |
| **Security** | **Encryption Everywhere** | Mandatory encryption at rest and in transit. |
