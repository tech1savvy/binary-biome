### Week 1 Quiz: Designing a Serverless Web Backend

---

### Question 1

A customer workload runs in Docker containers on EC2 and on-premises Kubernetes. They want to migrate part of their hybrid Kubernetes deployment to the cloud with minimum effort, keeping native Kubernetes features and reducing operational overhead. Which service should they use?

- AWS Fargate with Amazon Elastic Container Service (Amazon ECS)
- AWS Fargate with Amazon Elastic Kubernetes Service (Amazon EKS)
- Amazon Elastic Container Service (Amazon ECS)
- Amazon Elastic Kubernetes Service (Amazon EKS)

**Answer:** Amazon Elastic Kubernetes Service (Amazon EKS) — matches requirement for native Kubernetes features and managed overhead.

### Question 2

An application needs to process events received through an API. Multiple consumers must be able to process the data concurrently. Which managed service best meets this requirement in the most cost-effective way?

- Amazon Simple Notification Service (Amazon SNS) with a fan-out strategy
- Amazon Simple Queue Service (Amazon SQS) with FIFO queues
- Amazon EventBridge with rules
- Amazon Elastic Compute Cloud (Amazon EC2) with Spot Instances

**Answer:** Amazon Simple Notification Service (Amazon SNS) with a fan-out strategy — the specific pattern for pushing one event to multiple concurrent consumers.

### Question 3

True or False: Amazon RDS is more suitable for structured or relational data (joins, auto-increment). Amazon DynamoDB is more suitable for NoSQL workloads (items with their own attributes).

- True
- False

**Answer:** True — accurate description of SQL vs. NoSQL strengths.

### Question 4

Which statements about DynamoDB Accelerator (DAX) (in-memory cache) are correct? (Choose THREE.)

- DAX reduces operational and application complexity by providing a managed service that is compatible with the DynamoDB API.
- Although using DAX has a cost, it can reduce the consumption of DynamoDB table capacity. If the data is read intensive, DAX can result in cost savings by caching while providing better read latency.
- DAX does not support server-side encryption (SSE).
- DAX is not designed for applications that are write-intensive. It can also add cost to applications that do not perform much read activity.
- DAX does not support encrypting data in transit.

**Answer:** 1, 2, and 4:
- DAX reduces complexity (compatible with DynamoDB API).
- DAX reduces table RCU consumption and is cost-effective for heavy reads.
- DAX is not for write-heavy apps and adds cost for low-read apps.

### Question 5

True or False: AWS Lambda runs code without provisioning servers, handles high-availability, OS maintenance, scaling, and logging, and can run virtually any type of application or backend service.

- True
- False

**Answer:** True — standard definition of AWS Lambda.
