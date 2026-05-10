### Required Policies

---

Two policies must allow access.

**Trust Policy**

- attached to the role in Account A
- defines _who can assume the role_
- specifies the principal (user/account).
<!--SR:!2026-03-09,3,250-->

**Permissions Policy**

- defines **what actions the role can perform**.

Also required:
User must have permission for:

sts:AssumeRole
