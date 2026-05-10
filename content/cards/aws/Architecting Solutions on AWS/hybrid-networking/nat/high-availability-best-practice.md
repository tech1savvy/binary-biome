### High Availability Best Practice

---

Deploy **one NAT Gateway per Availability Zone**.

Reason:

- avoids cross-AZ traffic
- prevents single-AZ failure from breaking outbound access.
