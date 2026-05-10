### Week 3 Quiz: Hybrid Container Workloads

---

### Question 1

Which of the following options includes true statements for both Amazon Simple Storage Service (Amazon S3) cross-Region replication and AWS Key Management Service (AWS KMS)?

- To configure Amazon S3 cross-Region replication, both the source and destination buckets must belong to the same AWS account. Server-side encryption (SSE) is possible for replicated objects.
- To configure Amazon S3 cross-Region replication, both the source and destination buckets must belong to the same AWS account. Server-side encryption (SSE) is not possible for replicated objects.
- To configure Amazon S3 cross-Region replication, the source and destination buckets can belong to different AWS accounts. Server-side encryption (SSE) is possible for replicated objects.
- To configure Amazon S3 cross-Region replication, the source and destination buckets can belong to different AWS accounts. Server-side encryption (SSE) is not possible for replicated objects.

**Answer:** To configure S3 cross-Region replication, the source and destination buckets can belong to different AWS accounts. Server-side encryption (SSE) is possible for replicated objects. — CRR supports cross-account and encrypted objects.

### Question 2

A solutions architect is designing a hybrid solution using VPC resources (RDS, EC2) and non-VPC resources (S3, Systems Manager). Which statements about Amazon VPC and the scope of AWS services are correct? (Choose THREE.)

- Amazon VPC gives the user full control over their virtual networking environment. Therefore, the solutions architect can define firewall rules on the networking level for VPC-based resources.
- Because S3 buckets do not reside inside a VPC, the customer can rely on AWS to configure security mechanisms, such as permissions and bucket policies. Thus, security is automatically applied on the data level because this level of security is the responsibility of AWS.
- VPC-based services that reside in a private subnet require specific configurations to enable internet access, such as a NAT gateway and route tables.
- When possible, customers should avoid having services reside in VPCs because a networking misconfiguration can accidentally leave the infrastructure in an unsafe state.
- Using AWS resources like Amazon S3 is less secure because they are public resources by default.
- AWS VPN solutions can be configured to establish secure connections between on-premises networks, remote offices, client devices, and the AWS global network.

**Answer:** Options 1, 3, and 6:
- VPC gives full control over networking and firewall rules.
- Private subnets require NAT Gateways and Route Tables for outbound internet access.
- AWS VPN establishes secure connections across the hybrid boundary.

### Question 3

Which statements about AWS Storage Gateway are correct? (Choose THREE.)

- AWS Storage Gateway is a set of hybrid cloud storage services that provide on-premises access to virtually unlimited cloud storage.
- AWS Storage Gateway offers virtually unlimited cloud storage to users and applications, at the cost of new storage hardware.
- AWS Storage Gateway delivers data access to on-premises applications while taking advantage of the agility, economics, and security capabilities of the AWS Cloud.
- AWS Storage Gateway is limited to only on-premises applications, which means that it cannot be used from cloud to cloud.
- AWS Storage Gateway helps support compliance requirements through integration with AWS Backup to manage the backup and recovery of Volume Gateway volumes, which simplifies backup management.
- AWS Storage Gateway can only work as an Amazon S3 File Gateway.

**Answer:** Options 1, 3, and 5:
- Provides on-premises access to cloud storage.
- Delivers agility and security of the cloud to on-prem apps.
- Integrates with AWS Backup for simplified management.

### Question 4

Which set of AWS services is the BEST fit for the "Object, file, and block storage" category (meaning the services are dedicated to storing data in a durable way)?

- AWS DataSync, AWS Snow Family
- Amazon Simple Storage Service (Amazon S3), Amazon Elastic File System (Amazon EFS), Amazon Elastic Block Store (Amazon EBS), Amazon FSx
- AWS Storage Gateway, AWS Snow Family
- AWS Elastic Disaster Recovery, AWS Backup

**Answer:** Amazon S3, Amazon EFS, Amazon EBS, Amazon FSx — this is the core storage portfolio.

### Question 5

True or False: Amazon Simple Storage Service (Amazon S3) is better than Amazon Elastic Block Store (Amazon EBS) because it is designed to provide a higher level of data durability.

- True
- False

**Answer:** True — S3 is designed for 11 nines of durability across multiple facilities; EBS is replicated within a single AZ.
