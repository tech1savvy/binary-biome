### 1. Advanced Service Control Policies (SCPs)

---

SCPs enforce rules across all accounts.

Common guardrails:

Restrict Root User

- deny all actions for root in member accounts
- forces use of IAM roles or Identity Center.

Protect Logging

- deny:
  - cloudtrail:StopLogging
  - cloudtrail:DeleteTrail
  - changes to logging S3 buckets.

IP Restrictions

- allow console access only from
  - corporate IP
  - VPN networks.

OU Movement Protection

- prevent unauthorized moving of accounts between OUs.
