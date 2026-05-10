# Week 1 Quiz: Getting Started with AWS Cloud (Answer Key)

### Question 1
What are the four main factors that a solutions architect should consider when they must choose a Region?
*   **Answer:** **Latency, price, service availability, and compliance**
*   *Reference:* [03-aws-global-infrastructure.md](./03-aws-global-infrastructure.md) (The "Four Factors" section).

### Question 2
True or False: Every action a user takes in AWS is an API call.
*   **Answer:** **True**
*   *Reference:* [04-interacting-with-aws.md](./04-interacting-with-aws.md) ("Every action you take... is an API call").

### Question 3
Which statement BEST describes the relationship between Regions, Availability Zones and data centers?
*   **Answer:** **Regions are clusters of Availability Zones. Availability Zones are clusters of data centers.**
*   *Reference:* [03-aws-global-infrastructure.md](./03-aws-global-infrastructure.md) (The "Infrastructure Hierarchy" section).

### Question 4
Which of the following is a benefit of cloud computing?
*   **Answer:** **Go global in minutes.**
*   *Reference:* [02-what-is-cloud-and-aws.md](./02-what-is-cloud-and-aws.md) (The "Six Benefits" section).

### Question 5
A company wants to manage AWS services by using the command line and automating them with scripts. What should the company use to accomplish this goal?
*   **Answer:** **AWS Command Line Interface (AWS CLI)**
*   *Reference:* [04-interacting-with-aws.md](./04-interacting-with-aws.md) (The "AWS CLI" section).

### Question 6
What is a best practice when securing the AWS account root user?
*   **Answer:** **Enable multi-factor authentication**
*   *Reference:* [06-aws-root-user-best-practices.md](./06-aws-root-user-best-practices.md) ("Enable Multi-Factor Authentication (MFA)").

### Question 7
A solutions architect is consulting for a company. When users in the company authenticate to a corporate network, they want to be able to use AWS without needing to sign in again. Which AWS identity should the solutions architect recommend for this use case?
*   **Answer:** **IAM Role** (Federation)
*   *Reference:* [07-aws-iam.md](./07-aws-iam.md) (The "Federation" use case for IAM Roles).

### Question 8
Which of the following can be found in an AWS Identity and Access Management (IAM) policy?
*   **Answer:** **A and B** (Effect and Action)
*   *Reference:* [07-aws-iam.md](./07-aws-iam.md) (The "JSON Policy Elements" table).

### Question 9
True or False: AWS Identity and Access Management (IAM) policies can restrict the actions of the AWS account root user.
*   **Answer:** **False**
*   *Reference:* [07-aws-iam.md](./07-aws-iam.md) ("Root user can perform all actions... you cannot apply a policy to the root user").

### Question 10
According to the AWS shared responsibility model, which of the following is the responsibility of AWS?
*   **Answer:** **Managing the hardware, software, and networking components that run AWS services, such as the physical servers, host operating systems, virtualization layers, and AWS networking components.**
*   *Reference:* [05-aws-shared-responsibility-model.md](./05-aws-shared-responsibility-model.md) ("Security OF the Cloud").

### Question 11
Which of the following is recommended if a company has a single AWS account, and multiple people who work with AWS services in that account?
*   **Answer:** **The company should create an AWS Identity and Access Management (IAM) group, grant the group permissions to perform specific job functions, and assign users to a group, or use IAM roles.**
*   *Reference:* [07-aws-iam.md](./07-aws-iam.md) ("IAM Groups" and "IAM Best Practices").

### Question 12
True or False: According to the AWS shared responsibility model, a customer is responsible for security in the cloud.
*   **Answer:** **True**
*   *Reference:* [05-aws-shared-responsibility-model.md](./05-aws-shared-responsibility-model.md) ("Security IN the Cloud").

### Question 13
Which of the following provides temporary credentials (that expire after a defined period of time) to AWS services?
*   **Answer:** **IAM role**
*   *Reference:* [07-aws-iam.md](./07-aws-iam.md) ("IAM Roles" section).

### Question 14
A user is hosting a solution on Amazon Elastic Compute Cloud (Amazon EC2). Which networking component is needed to create a private network for their AWS resources?
*   **Answer:** **Virtual private cloud (VPC)**
*   *Reference:* [01-foundations-and-sample-app.md](./01-foundations-and-sample-app.md) (The "Architectural Building Blocks" table).
