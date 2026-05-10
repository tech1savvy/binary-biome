# End of Course Assessment: Study Questions

### Question 1
What are the four main factors that a solutions architect should consider when they must choose a Region?
*   Latency, price, service availability, and compliance
*   Latency, high availability, taxes, and compliance
*   Latency, taxes, speed, and compliance
*   Latency, security, high availability, and resiliency

### Question 2
Which statement BEST describes the relationship between Regions, Availability Zones and data centers?
*   Availability Zones are clusters of Regions. Regions are clusters of data centers.
*   Data centers are cluster of Availability Zones. Regions are clusters of Availability Zones.
*   Regions are clusters of Availability Zones. Availability Zones are clusters of data centers.
*   Data centers are clusters of Regions. Regions are clusters of Availability Zones.

### Question 3
Which of the following can be found in an AWS Identity and Access Management (IAM) policy?
*   Effect
*   Action
*   Object
*   A and B
*   B and C

### Question 4
A solutions architect is consulting for a company. When users in the company authenticate to a corporate network, they want to be able to use AWS without needing to sign in again. Which AWS identity should the solutions architect recommend for this use case?
*   AWS account root user
*   AWS Identity and Access Management (IAM) user
*   IAM Role
*   IAM Group

### Question 5
A company wants to allow resources in a public subnet to communicate with the internet. Which of the following must the company do to meet this requirement?
*   Create a route to a private subnet
*   Attach an internet gateway to their VPC
*   Create a route in a route table to the internet gateway
*   A and B
*   B and C

### Question 6
What does an Amazon Elastic Compute Cloud (Amazon EC2) instance type indicate?
*   Instance family and instance size
*   Instance placement and instance size
*   Instance tenancy and instance billing
*   Instance Amazon Machine Image (AMI) and networking speed

### Question 7
What is a typical use case for Amazon Simple Storage Service (Amazon S3)?
*   Object storage for media hosting
*   Object storage for a boot drive
*   Block storage for an EC2 instance
*   File storage for multiple EC2 instances

### Question 8
A solutions architect is working for a healthcare facility, and they are tasked with storing 7 years of patient information that is rarely accessed. Which storage tier should the solutions architect suggest?
*   Amazon S3 Standard
*   Amazon S3 Glacier Deep Archive
*   Amazon S3 Standard-Infrequent Access
*   Amazon S3 Intelligent-Tiering

### Question 9
Which task of running and operating the database are users responsible for when they use Amazon Relational Database Service (Amazon RDS)?
*   Optimizing the database
*   Provisioning and managing the underlying infrastructure
*   Installing the relational database management system on the database instance
*   Installing patches to the operating system for the database instance

### Question 10
True or false: A Multi-AZ deployment is beneficial when users want to increase the availability of their database.
*   True
*   False

### Question 11
What are the three components of Amazon EC2 Auto Scaling?
*   Scaling policies, security group, EC2 Auto Scaling group
*   Launch template, scaling policies, EC2 Auto Scaling group
*   Security group, instance type, key pair
*   Amazon Machine Image (AMI) ID, instance type, storage

### Question 12
An application must choose target groups by using a rule that is based on the path of a URL. Which Elastic Load Balancing (ELB) type should be used for this use case?
*   Classic Load Balancer
*   Application Load Balancer
*   Network Load Balancer
*   Gateway Load Balancer

---

## Final Assessment Answer Key

1.  **Latency, price, service availability, and compliance** (The "Four Factors" matrix).
2.  **Regions are clusters of Availability Zones. Availability Zones are clusters of data centers.** (Nested infrastructure hierarchy).
3.  **A and B** (Effect and Action are standard policy elements; "Resource" is the third, though some quizzes use "Object" as a distractor or synonym in specific contexts).
4.  **IAM Role** (Specifically used for Identity Federation).
5.  **B and C** (Must have both an Internet Gateway and a Route Table entry).
6.  **Instance family and instance size** (e.g., `t3.micro`).
7.  **Object storage for media hosting** (S3 is the primary service for static assets).
8.  **Amazon S3 Glacier Deep Archive** (Best for 7-10 year retention of rarely accessed data).
9.  **Optimizing the database** (AWS handles patching, hardware, and OS management).
10. **True** (Provides synchronous replication and automatic failover).
11. **Launch template, scaling policies, EC2 Auto Scaling group** (The core trio of ASG components).
12. **Application Load Balancer** (ALB operates at Layer 7 and supports path-based routing).
