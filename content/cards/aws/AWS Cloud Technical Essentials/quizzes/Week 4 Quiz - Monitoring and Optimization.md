# Week 4 Quiz: Monitoring and Optimization (Study Questions)

### Question 1
What are the three components of Amazon EC2 Auto Scaling?
*   Scaling policies, security group, EC2 Auto Scaling group
*   Launch template, scaling policies, EC2 Auto Scaling group
*   Security group, instance type, key pair
*   Amazon Machine Image (AMI) ID, instance type, storage

### Question 2
Which of the following features are included in Elastic Load Balancing (ELB)?
*   Automatic scaling
*   Integration with Amazon Relational Database Service RDS
*   Integration with Amazon EC2 Auto Scaling
*   A and B
*   A and C

### Question 3
True or False: When a user uses Elastic Load Balancing (ELB) with an Auto Scaling group, it is not necessary to manually register individual Amazon Elastic Compute Cloud (Amazon EC2) instances with the load balancer.
*   True
*   False

### Question 4
An application must choose target groups by using a rule that is based on the path of a URL. Which Elastic Load Balancing (ELB) type should be used for this use case?
*   Classic Load Balancer
*   Application Load Balancer
*   Network Load Balancer
*   Target Load Balancer

### Question 5
What are the two ways that an application can be scaled?
*   Vertically and horizontally
*   Diagonally and vertically
*   Horizontally and diagonally
*   Independently and vertically

### Question 6
Which elements in Amazon CloudWatch dashboards can be used to view and analyze metrics?
*   Widgets
*   Metrics
*   Icons
*   Components

### Question 7
What are the possible states of a metric alarm in Amazon CloudWatch?
*   OK, ALARM, NOT_AVAILABLE
*   OK, ALERT, INSUFFICIENT_DATA
*   OK, ALARM, INSUFFICIENT_DATA
*   OK, ALERT, NOT_AVAILABLE

### Question 8
What kind of data can a company collect with VPC Flow Logs?
*   Data about network traffic that comes into and out of a virtual private cloud (VPC)
*   Malicious activity and unauthorized behavior
*   Configurations of AWS resources
*   Compliance-related information

### Question 9
What is a benefit of monitoring on AWS?
*   Monitoring creates operation overhead.
*   Monitoring recognizes security threats and events.
*   Monitoring decreases the performance and reliability of resources.
*   Monitoring increases speed and agility

### Question 10
True or False: When a company redesigns an application by using a serverless service on AWS, they might not need to configure networking components, such as a virtual private cloud (VPC), subnets, and security groups.
*   True
*   False

---

## Answer Key

1.  **Launch template, scaling policies, EC2 Auto Scaling group** (The "What", "When", and "Where/How Many").
2.  **A and C** (ELB automatically scales itself to meet demand, and it integrates natively with EC2 Auto Scaling to register/deregister instances).
3.  **True** (The Auto Scaling group automatically registers new instances with the load balancer's Target Group).
4.  **Application Load Balancer** (ALB operates at Layer 7 and supports path-based routing).
5.  **Vertically and horizontally** (Scaling up/down instance size vs. scaling out/in the number of instances).
6.  **Widgets** (Visual elements like line graphs or text blocks on a dashboard).
7.  **OK, ALARM, INSUFFICIENT_DATA** (The three states a CloudWatch alarm transitions between).
8.  **Data about network traffic that comes into and out of a virtual private cloud (VPC)**.
9.  **Monitoring recognizes security threats and events** (By establishing a baseline, you can spot anomalies).
10. **True** (Serverless services like AWS Lambda or S3 static hosting manage the underlying networking infrastructure for you, though you *can* optionally connect them to a VPC if needed).
