### AWS Config

---

Purpose:
Track _resource configuration changes_ over time.
<!--SR:!2026-03-09,3,250-->

Answers:

- what resources exist
- how they are configured
- how configurations changed.

Capabilities:

- resource inventory
- configuration history
- relationship mapping.

Example:
Which security group is attached to which EC2 instance.

Compliance Rules

- evaluate configuration against policies.

Example rule:
S3 bucket must not be public.

Resources violating rules → marked **Noncompliant**.
