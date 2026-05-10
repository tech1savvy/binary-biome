### Key SCP Characteristics

---

Explicit Deny

- if an SCP denies an action,
  nobody can perform it
  (even root user).

Permission Boundary

- defines what IAM permissions are allowed.

Guardrails

- prevents unsafe or expensive actions.

Example:
SCP allowing only small instances:

Allow:
t2.micro

Deny:
all other EC2 instance types.
