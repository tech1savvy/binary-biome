# Week 3 Quiz: Storage & Databases (Study Questions)

### Question 1
What is a typical use case for Amazon Simple Storage Service (Amazon S3)?
*   Object storage for media hosting
*   Object storage for a boot drive
*   Block storage for an Amazon Elastic Compute Cloud (Amazon EC2) instance
*   File storage for multiple Amazon Elastic Compute Cloud (Amazon EC2) instances

### Question 2
A company needs a storage layer for a high-transaction relational database on an Amazon Elastic Compute Cloud (Amazon EC2) instance. Which service should the company use?
*   Amazon EC2 Instance Store
*   Amazon Elastic Block Store (Amazon EBS)
*   Amazon Simple Storage Service (Amazon S3)
*   Amazon Elastic File System (Amazon EFS)

### Question 3
True or False: Amazon Elastic Block Store (Amazon EBS) volumes are considered ephemeral storage.
*   True
*   False

### Question 4
A solutions architect is working for a healthcare facility, and they are tasked with storing 7 years of patient information that is rarely accessed. Which storage tier should the solutions architect suggest?
*   Amazon S3 Standard
*   Amazon S3 Glacier Deep Archive
*   Amazon S3 Standard-Infrequent Access
*   Amazon S3 Intelligent-Tiering

### Question 5
True or False: Object storage is the best storage solution for applications that need to frequently update specific small sections of a file.
*   True
*   False

### Question 6
True or False: A Multi-AZ deployment is beneficial when users want to increase the availability of their database.
*   True
*   False

### Question 7
Which task of running and operating the database are users responsible for when they use Amazon Relational Database Service (Amazon RDS)?
*   Optimizing the database
*   Provisioning and managing the underlying infrastructure
*   Installing the relational database management system on the database instance
*   Installing patches to the operating system for the database instance

### Question 8
Which of the following are common use cases for file storage? (Choose TWO.)
*   User home directories
*   Backup files that are stored in Amazon Simple Storage Service (Amazon S3)
*   Relational or non-relational databases
*   Large content repositories
*   Big data analytics

### Question 9
True or False: The IT department in a company can attach Amazon Elastic Block Store (Amazon EBS) volumes to Amazon Simple Storage Service (Amazon S3) to store data in a bucket.
*   True
*   False

### Question 10
Which of the following instance families does Amazon Relational Database Service (Amazon RDS) support? (Choose TWO.)
*   Storage optimized
*   General purpose
*   Compute optimized
*   Memory optimized
*   Accelerated computing

### Question 11
The business is looking for a storage service that temporarily stores frequently changing and non-persistent data. Which service should the solutions architect recommend?
*   Amazon Elastic Block Store (Amazon EBS)
*   Amazon Simple Storage Service (Amazon S3)
*   Amazon Elastic Compute Cloud (Amazon EC2) Instance Store
*   Amazon Elastic File System (Amazon EFS)

### Question 12
Which database is a non-relational database that stores data in key-value pairs, and is a good fit for hosting simple lookup tables?
*   Amazon DynamoDB
*   Amazon DocumentDB
*   Amazon Neptune
*   Amazon Relational Database Service (Amazon RDS)

### Question 13
Which core component of Amazon DynamoDB corresponds to a column in a relational database table?
*   Table
*   Item
*   Attribute
*   Database

### Question 14
Which AWS database service is best suited for use cases such as social networking or recommendation engines?
*   Amazon DynamoDB
*   Amazon Aurora
*   Amazon Redshift
*   Amazon Neptune

---

## Answer Key

1.  **Object storage for media hosting** (S3 is optimized for static assets/media).
2.  **Amazon Elastic Block Store (Amazon EBS)** (Best for low-latency transactional DBs).
3.  **False** (EBS is persistent; Instance Store is ephemeral).
4.  **Amazon S3 Glacier Deep Archive** (Lowest cost for rare access/long-term retention).
5.  **False** (Block storage is better for partial updates; Object storage requires a full overwrite).
6.  **True** (Multi-AZ provides synchronous replication and automatic failover).
7.  **Optimizing the database** (AWS handles infrastructure, installation, and patching).
8.  **User home directories** AND **Large content repositories** (Shared access use cases).
9.  **False** (EBS volumes attach to EC2 instances, not S3 buckets).
10. **General purpose** AND **Memory optimized** (Standard and memory-intensive families).
11. **Amazon Elastic Compute Cloud (Amazon EC2) Instance Store** (Directly attached ephemeral storage).
12. **Amazon DynamoDB** (Managed NoSQL key-value store).
13. **Attribute** (Fundamental data element).
14. **Amazon Neptune** (Managed Graph database).
