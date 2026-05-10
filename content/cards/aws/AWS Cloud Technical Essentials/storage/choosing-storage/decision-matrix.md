### How do Instance Store, EBS, S3, EFS, and FSx compare?

---

| Service | Storage Type | Billing Model | Replication | Typical Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Instance Store** | Block | Included in EC2 | None (Physical) | Temporary / Scratch |
| **Amazon EBS** | Block | Provisioned | Within 1 AZ | Boot volumes / DBs |
| **Amazon S3** | Object | Usage-based | Across Multiple AZs | Static assets / Backups |
| **Amazon EFS** | File (NFS) | Usage-based | Across Multiple AZs | Shared Linux storage |
| **Amazon FSx** | File (SMB/Lustre) | Mixed | Varies by type | Windows / High-Perf HPC |
