### Which storage service for temporary high-speed calculations where durability is not a priority?

---

**Amazon EC2 Instance Store**. Directly attached storage is the fastest option for scratch space and is included in the price of the EC2 instance. Data is lost if the instance stops, but this is acceptable for temporary calculations.
