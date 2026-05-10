### Which storage service for a shared file system across multiple EC2 instances?

---

**Amazon EFS** (for Linux/NFS) or **Amazon FSx** (for Windows/SMB). Unlike EBS (1-to-1), these can be mounted by hundreds of instances simultaneously and scale automatically.
