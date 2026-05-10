### What are the benefits of Auto Scaling?

---

- **Traditional Scaling:** Over-provisioning for peaks leads to wasted money during idle times
- **Auto Scaling:** Matches infrastructure capacity to real-time demand, ensuring performance at the lowest possible cost
- **Statelessness:** Crucial for ASGs. Since instances are "disposable," all persistent data must live in S3, RDS, or DynamoDB
