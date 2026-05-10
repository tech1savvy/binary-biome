### 1. Auditing & Change Tracking

---

## AWS CloudTrail

Track _API activity_ in AWS. (`kisne kya kiya`)
<!--SR:!2026-03-09,3,250-->

Answers:

- who did it
- what API call happened
- when it occurred.

Example events:

- EC2 instance stopped
- S3 bucket created
- IAM role modified.

Organization Trail

- created in management account
- logs activity from **all accounts**.

Storage

- logs stored in S3.

Typical delay:
~15 minutes.
