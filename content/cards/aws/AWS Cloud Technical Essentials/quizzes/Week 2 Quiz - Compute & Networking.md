# Week 2 Quiz: Compute & Networking (Study Questions)

### Question 1
Which information is needed to create a virtual private cloud (VPC)?
*   The Availability Zone that the VPC will reside in.
*   The subnet that the VPC will reside in.
*   The AWS Region that the VPC will reside in.
*   The group of subnets that the VPC will reside in.

### Question 2
Which of the following can a route table be attached to?
*   AWS Accounts
*   Availability Zone
*   Subnets
*   Regions

### Question 3
A company wants to allow resources in a public subnet to communicate with the internet. Which of the following must the company do to meet this requirement?
*   Create a route to a private subnet
*   Attach an internet gateway to their VPC
*   Create a route in a route table to the internet gateway
*   A and B
*   B and C

### Question 4
What is the compute as a service (CaaS) model?
*   The CaaS model requires that users purchase virtual machines and manually provision servers to run a workload.
*   The CaaS model offers computing resources (such as virtual machines that run on servers in data centers) on demand, by using virtual services.
*   The CaaS model offers large discounts for computing resources. However, users must run the workload from the server that is stored on-premises.
*   The CaaS model delivers cloud-based applications to users across the globe, over the internet.

### Question 5
Which statement about the default settings of a security group is TRUE?
*   Allows all inbound traffic and blocks all outbound traffic by default.
*   Blocks all inbound traffic and allows all outbound traffic by default.
*   Allows all inbound and outbound traffic by default.
*   Blocks all inbound and outbound traffic by default.

### Question 6
What does an Amazon Elastic Compute Cloud (Amazon EC2) instance type indicate?
*   Instance family and instance size
*   Instance placement and instance size
*   Instance tenancy and instance billing
*   Instance Amazon Machine Image (AMI) and networking speed

### Question 7
What is the difference between using AWS Fargate or Amazon Elastic Compute Cloud (Amazon EC2) as the compute platform for Amazon Elastic Container Service (Amazon ECS)?
*   With AWS Fargate, AWS manages and provisions the underlying infrastructure for hosting containers.
*   With Amazon ECS on Amazon EC2, AWS manages and provisions the underlying EC2 instance for containers.
*   With AWS Fargate, users need to manage cluster capacity and scaling.
*   With Amazon ECS on Amazon EC2, users need to upload only the source code. Amazon ECS takes care of the rest.

### Question 8
Which statement about serverless is TRUE?
*   Users must provision and manage servers.
*   Users must manually scale serverless resources.
*   Users do not pay for idle resources.
*   Users must manage availability and fault tolerance.

### Question 9
True or False: AWS Lambda is always the best solution when running applications on AWS.
*   True
*   False

### Question 10
Which compute service does Amazon Elastic Compute Cloud (Amazon EC2) provide?
*   Container services
*   Serverless
*   Virtual machines (VMs)
*   Analytics

### Question 11
Which stage of the instance lifecycle is an instance in when the account starts to accumulate charges?
*   When an instance is in a pending stage
*   When an instance is in a running stage
*   When an instance is stopped
*   When an instance is terminated

### Question 12
Which component of the c5.4xlarge instance determines the instance family and generation number?
*   4x
*   Large
*   4xlarge
*   c5

### Question 13
Which container runtime can be used to host a container on an Amazon Elastic Compute Cloud (Amazon EC2) instance?
*   Docker
*   Container
*   Amazon Simple Storage Service (Amazon S3)
*   Amazon EC2

### Question 14
What is an example of an event that invokes an AWS Lambda function?
*   An AWS API call that is made by an AWS Identity and Access Management (IAM) role
*   An upload of a file to the Amazon Simple Storage Service (Amazon S3) source bucket
*   An incoming HTTP request to a website that is hosted on Amazon Elastic Compute Cloud (Amazon EC2)
*   A simple WordPress website that has no API integration

### Question 15
True or False: With serverless, users do not need to provision and manage servers.
*   True
*   False

### Question 16
True or False: All AWS services require users to configure a virtual private cloud (VPC).
*   True
*   False

### Question 17
An engineer is working with networks in the AWS Cloud. What should the engineer use to configure the size of their network?
*   Classless Inter-Domain Routing (CIDR) notation
*   IPv6 notation
*   IPv4 notation
*   IP addresses

### Question 18
What is the difference between network access control lists (ACLs) and security groups?
*   By default, network ACLs allow incoming traffic and block outgoing traffic from a subnet. Users can change these settings to provide an additional layer of security. However, the default configurations of security groups block all traffic.
*   By default, network ACLs block all traffic from a subnet. However, the default configurations of security groups allow all inbound and outbound traffic. Users can change these settings to provide an additional layer of security.
*   By default, network ACLs block incoming traffic and allow outgoing traffic. The default configurations of security groups block all traffic. Users can change these settings when they configure networking for their instance.
*   By default, network ACLs allow incoming and outgoing traffic from a subnet. Users can change these settings to provide an additional layer of security. However, the default configurations of security groups block all inbound traffic and allow all outbound traffic.

---

## Answers

1.  **The AWS Region that the VPC will reside in.**
2.  **Subnets**
3.  **B and C** (Attach an internet gateway to their VPC and create a route in a route table to the internet gateway.)
4.  **The CaaS model offers computing resources (such as virtual machines that run on servers in data centers) on demand, by using virtual services.**
5.  **Blocks all inbound traffic and allows all outbound traffic by default.**
6.  **Instance family and instance size**
7.  **With AWS Fargate, AWS manages and provisions the underlying infrastructure for hosting containers.**
8.  **Users do not pay for idle resources.**
9.  **False**
10. **Virtual machines (VMs)**
11. **When an instance is in a running stage**
12. **c5**
13. **Docker**
14. **An upload of a file to the Amazon Simple Storage Service (Amazon S3) source bucket**
15. **True**
16. **False**
17. **Classless Inter-Domain Routing (CIDR) notation**
18. **By default, network ACLs allow incoming and outgoing traffic from a subnet. Users can change these settings to provide an additional layer of security. However, the default configurations of security groups block all inbound traffic and allow all outbound traffic.**
