### How does EC2 handle networking and high availability?

---

- By default, instances are placed in a **Default VPC** (public by default; custom VPCs should be used for private data)
- Instances reside in a specific **Availability Zone (AZ)**
- **Best Practice:** Deploy at least **two** instances across **two separate** AZs
- **Benefit:** If one AZ fails, the application remains available. Using multiple smaller instances is more resilient than using one large instance
