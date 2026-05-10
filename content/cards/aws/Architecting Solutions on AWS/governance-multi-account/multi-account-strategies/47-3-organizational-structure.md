### Organizational Structure

---

**Root**

- top level of the organization.

**Organizational Units (OU)**:: logical containers that group accounts.
<!--SR:!2026-03-09,3,250-->

**Accounts**

- individual AWS accounts running workloads.

Example hierarchy:

Root
├ Customer A OU
│ ├ Dev OU
│ │ └ Developer Sandbox Accounts
│ ├ Testing OU
│ │ └ Staging Accounts
│ └ Production OU
│ └ Production Accounts
└ Customer B OU

OUs can be nested.
