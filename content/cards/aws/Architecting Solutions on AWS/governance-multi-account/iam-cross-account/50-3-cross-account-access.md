### Cross-Account Access

---

Allows users from one AWS account to access resources in another.

Accounts involved:

Trusting Account

- contains the role.

Trusted Account

- contains the user assuming the role.

Example:

Account B (User)
↓ AssumeRole
Account A (Role with permissions)
