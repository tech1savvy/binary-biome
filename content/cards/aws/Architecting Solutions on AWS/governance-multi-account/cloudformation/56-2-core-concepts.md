### Core Concepts

---

Template:: _1:JSON_ or _1:YAML_ file
<!--SR:!2026-03-09,3,250-->

- defines the desired infrastructure.

Example resources:

- EC2
- VPC
- S3
- RDS.

Stack

- a deployed collection of resources created from a template.

Important behavior:
Deleting a stack → deletes all resources in the stack.
