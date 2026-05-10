### Which storage service for standalone / multi-compute access (e.g., transcoding media with Lambda)?

---

**Amazon S3**. Lambda cannot attach EBS, S3 handles unlimited growth cost-effectively, and provides 11 nines of durability.
