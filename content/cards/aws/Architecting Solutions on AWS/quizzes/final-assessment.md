### Final Assessment: Architecting Solutions on AWS

---

### Question 1

A solutions architect is designing an architecture that can provide HTML pages to customers. They want a serverless solution that can host content over the internet and serve a static website with minimal effort. Which AWS service should the solutions architect choose?

- Amazon Simple Storage Service (Amazon S3)
- Amazon Elastic Compute Cloud (Amazon EC2)
- Amazon DynamoDB
- Amazon Kinesis

**Answer:** Amazon Simple Storage Service (Amazon S3) — static website hosting feature.

### Question 2

Which of the following options includes true statements for both Amazon S3 cross-Region replication (CRR) and AWS Key Management Service (AWS KMS)?

- To configure S3 CRR, both the source and destination buckets must belong to the same AWS account. Server-side encryption (SSE) is possible for replicated objects.
- To configure S3 CRR, both the source and destination buckets must belong to the same AWS account. Server-side encryption (SSE) is not possible for replicated objects.
- To configure S3 CRR, the source and destination buckets can belong to different AWS accounts. Server-side encryption (SSE) is possible for replicated objects.
- To configure S3 CRR, the source and destination buckets can belong to different AWS accounts. Server-side encryption (SSE) is not possible for replicated objects.

**Answer:** The source and destination buckets can belong to different AWS accounts. Server-side encryption (SSE) is possible for replicated objects.

### Question 3

True or False: Amazon RDS is more suitable for databases that handle structured or relational data (joins, auto-increment). Amazon DynamoDB is more suitable for NoSQL workloads where tables are collections of items with their own attributes.

- True
- False

**Answer:** True — standard SQL/NoSQL distinction.

### Question 4

Amazon DynamoDB Accelerator (DAX) delivers fast response times for accessing eventually consistent data. Which statements about DAX are correct? (Choose THREE.)

- DAX reduces operational and application complexity by providing a managed service that is compatible with the DynamoDB API.
- Although using DAX has a cost, it can reduce the consumption of DynamoDB table capacity. If the data is read intensive, DAX can result in cost savings by caching.
- DAX does not support server-side encryption (SSE).
- DAX is not designed for applications that are write-intensive. It can also add cost to applications that do not perform much read activity.
- DAX does not support encrypting data in transit.

**Answer:** 1, 2, and 4:
- Managed service compatible with DynamoDB API.
- Reduces RCU consumption through caching.
- Not for write-intensive apps; adds cost if not used for heavy reads.

### Question 5

True or False: AWS Lambda is a compute service that runs code without the need to provision or manage servers, handles high-availability, OS maintenance, capacity provisioning, and logging.

- True
- False

**Answer:** True — core serverless definition.

### Question 6

True or False: Amazon Simple Storage Service (Amazon S3) is better than Amazon Elastic Block Store (Amazon EBS) because it is designed to provide a higher level of data durability.

- True
- False

**Answer:** True — S3 = 11 nines; EBS = replicated within 1 AZ.

### Question 7

A solutions architect is designing a serverless solution that can do SQL queries over multiple JSON objects stored in Amazon S3. Which service would make it easier to query the data and provide serverless capabilities?

- Amazon Athena
- AWS Database Migration Service (AWS DMS)
- Amazon S3 Select
- AWS Data Exchange

**Answer:** Amazon Athena — serverless SQL across prefixes.

### Question 8

True or False: When creating data lakes for analytics on AWS, Amazon S3 would be a preferred service. Users can use data in an S3 bucket with an independent processing or visualization layer like QuickSight, Athena, or EMR.

- True
- False

**Answer:** True — decoupled data lake model.

### Question 9

Which statements about Amazon VPC and the scope of AWS services are correct? (Choose THREE.)

- Amazon VPC gives the user full control over their virtual networking environment (firewall rules at the network level).
- Because S3 buckets do not reside inside a VPC, security is automatically the responsibility of AWS and the user doesn't need to configure policies.
- VPC-based services in a private subnet require specific configurations to enable internet access (NAT gateway and route tables).
- When possible, customers should avoid VPCs because misconfiguration can leave infrastructure unsafe.
- Using resources like S3 is less secure because they are public by default.
- AWS VPN solutions establish secure connections between on-premises and the AWS global network.

**Answer:** 1, 3, and 6:
- Full network and firewall control with VPC.
- NAT Gateway and Route Tables for private subnets.
- VPN for secure hybrid connectivity.

### Question 10

What are some benefits of using multiple AWS accounts with AWS Organizations? (Choose THREE.)

- Grouping workloads based on business purpose and ownership.
- Using different payment methods per account.
- Limiting the scope of impact from adverse events.
- Distributing AWS service quotas and API request rate limits.
- Having multiple account root users with unrestricted access on each account.

**Answer:** 1, 3, and 4:
- Grouping by ownership.
- Limiting blast radius.
- Distributing quotas and limits.

### Question 11

True or False: A service control policy (SCP) statement with an explicit deny prevents even the account root user from performing API calls.

- True
- False

**Answer:** True — SCPs override even Root permissions.

### Question 12

Which AWS service can be used to implement identity federation with existing identity providers, such as Microsoft Active Directory, for single sign-on into AWS accounts?

- AWS IAM users
- Amazon CloudWatch
- AWS IAM Identity Center (successor to AWS Single Sign-On)
- AWS CloudTrail

**Answer:** AWS IAM Identity Center — native SSO and federation service.

### Question 13

Which statements are best practices for multi-account environments? (Choose THREE.)

- Enable Amazon CloudWatch billing alarms per account and configure tagging policies in AWS Organizations.
- Give AdministratorAccess policies to developers in their development AWS accounts.
- Prevent CloudTrail configuration from being disabled in the shared services account.
- Use multi-factor authentication (MFA) for users in centralized credentialing (IAM Identity Center).
- Reuse passwords for simplicity and ease of access.
- Provide powerful users and broad roles for CCoE members.

**Answer:** 1, 3, and 4:
- Per-account billing alarms and tagging policies.
- Protecting CloudTrail config via SCP.
- Centralized MFA for SSO.

### Question 14

A company needs centralized infrastructure logging for all AWS accounts and a "circuit breaker" to stop EC2 API activities if billing alarms indicate suspicious activity. Which architectural scenario is most effective?

- Enable AWS CloudTrail for all accounts in AWS Organizations. Centralize logs into one S3 bucket. Use SCPs with an explicit deny for EC2 API activity applied to the root OU as needed.
- Enable AWS CloudTrail for all accounts. Centralize to S3. Use MFA for every user in IAM Identity Center.
- Enable CloudTrail for only production accounts. Centralize to S3. Use IAM Identity Center for SSO.
- Enable CloudTrail for all accounts. Centralize to S3. Use IAM policies on each account with an explicit deny for EC2 activity.

**Answer:** Option 1 — Organizations CloudTrail + Centralized S3 + SCP as a coarse-grained circuit breaker.
