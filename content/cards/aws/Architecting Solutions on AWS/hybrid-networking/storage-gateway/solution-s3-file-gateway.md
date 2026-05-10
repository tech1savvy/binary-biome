### Solution: S3 File Gateway

---

A gateway appliance deployed on-premises.

Architecture:

On-Prem Application
↓ (NFS / SMB)
S3 File Gateway
↓
Local Cache
↓ async upload
Amazon S3 (object storage)

Process:

1. application writes file using NFS
2. gateway stores data in local cache
3. gateway uploads file to S3 asynchronously
4. cloud workloads read data directly from S3.
