### What is the modern database strategy?

---

Modern applications use a **Complementary Database Strategy**: Large applications are divided into smaller independent services (microservices), and each service uses the database type that best fits its functional and scaling requirements. For example, an e-commerce site uses RDS for orders (relational integrity), DynamoDB for the product catalog (high-speed lookup), and ElastiCache for sessions (ultra-low latency).
