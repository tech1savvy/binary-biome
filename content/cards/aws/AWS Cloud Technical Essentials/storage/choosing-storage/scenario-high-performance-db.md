### Which storage service for a MySQL database on EC2 requiring fast, durable, persistent storage?

---

**Amazon EBS**. Databases require low-latency random I/O that EBS (SSD-backed) provides. EBS acts as the local hard drive for the EC2 instance and data survives instance restarts or failures.
